import { spawn } from 'node:child_process';
import http from 'node:http';

async function testUrl(targetUrl) {
  console.log(`\n========================================`);
  console.log(`Testing URL: ${targetUrl}`);
  console.log(`========================================`);

  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--no-sandbox',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));

  try {
    const listRes = await new Promise((resolve, reject) => {
      http.get('http://127.0.0.1:9222/json', (res) => {
        let d = '';
        res.on('data', c => d += c);
        res.on('end', () => resolve(JSON.parse(d)));
      }).on('error', reject);
    });

    const page = listRes.find(p => p.type === 'page');
    if (!page) throw new Error('No page found');

    const ws = new WebSocket(page.webSocketDebuggerUrl);

    await new Promise((resolve, reject) => {
      ws.addEventListener('open', resolve);
      ws.addEventListener('error', reject);
    });

    let id = 1;
    function send(method, params = {}) {
      return new Promise((resolve) => {
        const msgId = id++;
        const handler = (event) => {
          const res = JSON.parse(event.data);
          if (res.id === msgId) {
            ws.removeEventListener('message', handler);
            resolve(res.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    ws.addEventListener('message', (event) => {
      const msg = JSON.parse(event.data);
      if (msg.method === 'Runtime.consoleAPICalled') {
        console.log(`[Browser Console ${msg.params.type}]:`, ...msg.params.args.map(a => a.value || a.description));
      }
      if (msg.method === 'Runtime.exceptionThrown') {
        const d = msg.params.exceptionDetails;
        console.error(`[Browser Exception]:`, d.text, d.url, `line: ${d.lineNumber + 1}`, `col: ${d.columnNumber}`, d.exception?.description);
      }
      if (msg.method === 'Log.entryAdded') {
        console.log(`[Browser Log]:`, msg.params.entry.text);
      }
      if (msg.method === 'Network.responseReceived') {
        const { url, status } = msg.params.response;
        if (status >= 400) {
          console.error(`[Network Error ${status}]: ${url}`);
        }
      }
    });

    await send('Page.enable');
    await send('Runtime.enable');
    await send('Log.enable');
    await send('Network.enable');

    console.log('Navigating to', targetUrl);
    await send('Page.navigate', { url: targetUrl });
    await new Promise(r => setTimeout(r, 3000));

    const evalRes = await send('Runtime.evaluate', {
      expression: 'document.getElementById("main-content") ? document.getElementById("main-content").innerHTML.length : -1'
    });
    console.log('#main-content innerHTML length:', evalRes.result?.value);

    const appObjRes = await send('Runtime.evaluate', {
      expression: 'typeof window.__app'
    });
    console.log('window.__app type:', appObjRes.result?.value);

    const docReadyRes = await send('Runtime.evaluate', {
      expression: 'document.readyState'
    });
    console.log('document.readyState:', docReadyRes.result?.value);

    ws.close();
  } catch (err) {
    console.error('Test error:', err);
  } finally {
    chrome.kill();
  }
}

async function run() {
  await testUrl('http://localhost:5180/');
}

run();
