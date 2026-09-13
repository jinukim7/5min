// src/js/chatbot.js
import { SLANG_DICTIONARY } from "./chatbot-dictionary.js";
//
const API_KEY = "";
// Gemini API 키는 이 파일(공개 GitHub 저장소)에 절대 넣지 않습니다.
// 대신 Cloudflare Worker 중계 서버를 통해 호출합니다. 키는 Worker의 비밀 변수로만 존재합니다.
// 배포 방법: cloudflare-worker/gemini-proxy.js 상단 주석 참고.
//
// PROXY_URL 이 비어 있으면(아직 배포 전) 아래 SLANG_DICTIONARY 로만 동작합니다.
const PROXY_URL = ""; // 예: "https://barum5-gemini-proxy.내계정.workers.dev"


let chatbotEnabled = false;

// 로그인 상태에 따라 챗봇 표시 (로그인 전에는 숨김)
export function setChatbotEnabled(enabled) {
  chatbotEnabled = enabled;
  const container = document.querySelector('.chatbot-container');
  if (container) container.style.display = enabled ? '' : 'none';
}

const escapeHtml = (text) => String(text)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

// 응답의 **굵게** 표시와 줄바꿈만 HTML로 변환
const formatReply = (text) => escapeHtml(text)
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/\n/g, '<br>');

async function askGemini(word) {
  if (!PROXY_URL) throw new Error('중계 서버가 아직 설정되지 않았습니다.');

  const res = await fetch(PROXY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ word })
  });
  if (!res.ok) throw new Error(`중계 서버 오류 (${res.status})`);
  const data = await res.json();
  if (!data.reply) throw new Error('빈 응답');
  return data.reply;
}

export function initChatbot() {
  // Create UI
  const container = document.createElement('div');
  container.className = 'chatbot-container';
  container.style.display = chatbotEnabled ? '' : 'none';
  container.innerHTML = `
    <div class="chatbot-bubble" id="chatbot-bubble">
      <div class="chatbot-header">
        <span>🌱 바른말 챗봇</span>
        <button id="chatbot-close-btn">&times;</button>
      </div>
      <div class="chatbot-messages" id="chatbot-messages">
        <div class="chat-msg bot-msg">안녕하세요! 평소에 궁금했던 비속어나 은어, 신조어를 입력해보세요. 올바른 우리말을 알려드릴게요!</div>
      </div>
      <div class="chatbot-input-area">
        <input type="text" id="chatbot-input" placeholder="여기에 단어를 입력하세요..." autocomplete="off">
        <button id="chatbot-send-btn">전송</button>
      </div>
    </div>
    <button class="chatbot-fab" id="chatbot-fab">🌱</button>
  `;
  document.body.appendChild(container);

  // Styling injected directly or via css
  const style = document.createElement('style');
  style.textContent = `
    .chatbot-container { position: fixed; bottom: 2rem; right: 2rem; z-index: 1000; font-family: var(--font-sans); }
    .chatbot-fab { width: 56px; height: 56px; border-radius: 50%; background: var(--gradient-emerald); color: white; border: none; font-size: 1.5rem; box-shadow: var(--shadow-lg); cursor: pointer; display: flex; align-items: center; justify-content: center; transition: var(--transition-bounce); }
    .chatbot-fab:hover { transform: scale(1.1); }
    .chatbot-bubble { display: none; width: 320px; height: 420px; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(12px); border-radius: var(--radius-xl); box-shadow: var(--shadow-dark); border: 1px solid var(--border-light); flex-direction: column; overflow: hidden; position: absolute; bottom: 70px; right: 0; transform-origin: bottom right; animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
    .chatbot-bubble.active { display: flex; }
    .chatbot-header { background: var(--gradient-emerald); color: white; padding: 1rem; font-weight: 800; display: flex; justify-content: space-between; align-items: center; }
    .chatbot-header button { background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; }
    .chatbot-messages { flex: 1; padding: 1rem; overflow-y: auto; display: flex; flex-direction: column; gap: 0.75rem; }
    .chat-msg { padding: 0.75rem 1rem; border-radius: var(--radius-lg); max-width: 85%; font-size: 0.85rem; line-height: 1.4; word-break: break-word; }
    .bot-msg { background: var(--bg-subtle); color: var(--text-primary); align-self: flex-start; border-bottom-left-radius: 4px; }
    .user-msg { background: var(--color-emerald); color: white; align-self: flex-end; border-bottom-right-radius: 4px; }
    .chatbot-input-area { display: flex; padding: 0.75rem; border-top: 1px solid var(--border-light); background: white; }
    .chatbot-input-area input { flex: 1; border: 1px solid var(--border-light); padding: 0.5rem 0.75rem; border-radius: var(--radius-full); outline: none; font-family: inherit; font-size: 0.85rem; }
    .chatbot-input-area input:focus { border-color: var(--color-emerald); }
    .chatbot-input-area button { background: var(--color-emerald); color: white; border: none; border-radius: var(--radius-full); padding: 0 1rem; margin-left: 0.5rem; font-weight: 700; cursor: pointer; transition: 0.2s; }
    .chatbot-input-area button:hover { background: #059669; }
    .typing-indicator { display: flex; gap: 4px; padding: 0.5rem 1rem; }
    .typing-indicator span { width: 6px; height: 6px; background: var(--text-muted); border-radius: 50%; animation: typing 1s infinite; }
    .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
    .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes typing { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
    @keyframes scaleIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
  `;
  document.head.appendChild(style);

  const fab = document.getElementById('chatbot-fab');
  const bubble = document.getElementById('chatbot-bubble');
  const closeBtn = document.getElementById('chatbot-close-btn');
  const sendBtn = document.getElementById('chatbot-send-btn');
  const input = document.getElementById('chatbot-input');
  const messages = document.getElementById('chatbot-messages');

  fab.onclick = () => { bubble.classList.add('active'); fab.style.display = 'none'; };
  closeBtn.onclick = () => { bubble.classList.remove('active'); fab.style.display = 'flex'; };

  const addMessage = (text, isUser = false) => {
    const el = document.createElement('div');
    el.className = 'chat-msg ' + (isUser ? 'user-msg' : 'bot-msg');
    el.innerHTML = text; // allow basic HTML like strong
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
  };

  const showTyping = () => {
    const el = document.createElement('div');
    el.className = 'chat-msg bot-msg typing-indicator';
    el.id = 'typing-ind';
    el.innerHTML = '<span></span><span></span><span></span>';
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
  };

  const removeTyping = () => {
    const el = document.getElementById('typing-ind');
    if (el) el.remove();
  };

  const handleSend = async () => {
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    addMessage(escapeHtml(text), true);
    showTyping();
    sendBtn.disabled = true;

    try {
      const reply = await askGemini(text);
      removeTyping();
      addMessage(formatReply(reply));
    } catch (err) {
      removeTyping();
      // Fallback
      let fallback = null;
      for (const [slang, info] of Object.entries(SLANG_DICTIONARY)) {
        if (text.includes(slang)) fallback = info;
      }

      if (fallback) {
        let reply = `💡 '<strong>${escapeHtml(text)}</strong>'는 본래 ${fallback.etymology}<br><br>`;
        reply += `현재는 ${fallback.meaning}<br><br>`;
        reply += `👉 우리 학교에서는 '<strong>${fallback.correct}</strong>' (이)라고 표현해 보는 건 어떨까요? 😊`;
        addMessage(reply);
      } else {
        addMessage("입력해주신 단어에 대해 지금은 답변하기 어려워요. 다른 단어를 물어보시겠어요? 🥲");
      }
    } finally {
      sendBtn.disabled = false;
    }
  };

  sendBtn.onclick = handleSend;
  // 한글 조합 중 Enter 가 두 번 전송되지 않도록 isComposing 확인
  input.onkeydown = (e) => { if (e.key === 'Enter' && !e.isComposing && !sendBtn.disabled) handleSend(); };
}
