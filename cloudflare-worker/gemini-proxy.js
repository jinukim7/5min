// 바름5분 챗봇용 Gemini 중계 서버 (Cloudflare Worker)
//
// 목적: Gemini API 키를 사이트 코드(공개 GitHub 저장소)에 두지 않기 위해,
//      사이트는 이 Worker만 호출하고, 실제 키는 Cloudflare의 비밀 변수로만 보관합니다.
//
// ── 배포 방법 (5분, 신용카드 불필요) ─────────────────────────────
// 1. https://dash.cloudflare.com 가입/로그인 → 좌측 메뉴 "Workers & Pages"
// 2. "Create" → "Create Worker" → 이름은 자유(예: barum5-gemini-proxy) → Deploy
// 3. 방금 만든 Worker → "Edit code" 클릭 → 아래 내용을 전부 붙여넣고 "Deploy"
// 4. Worker 설정 → Settings → Variables and Secrets → "Add" 로 다음 값 추가
//      - GEMINI_API_KEY : Google AI Studio에서 발급받은 실제 키 (Secret 으로 추가)
//      - ALLOWED_ORIGIN : https://jinukim7.github.io  (오타 주의, 마지막 슬래시 없이)
// 5. 배포된 Worker 주소(예: https://barum5-gemini-proxy.본인계정.workers.dev)를
//    src/js/chatbot.js 의 PROXY_URL 에 붙여넣기
//
// ── 보안 포인트 ──────────────────────────────────────────────
// - 키는 여기(Cloudflare 서버)에만 있고, 브라우저·GitHub 어디에도 내려가지 않습니다.
// - ALLOWED_ORIGIN 으로 우리 사이트에서 온 요청만 허용합니다.
// - 요청 문구를 서버에서 한 번 더 감싸서, 순화어 안내 용도로만 쓰이도록 제한합니다.

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const allowedOrigin = env.ALLOWED_ORIGIN || '';

    const corsHeaders = {
      'Access-Control-Allow-Origin': allowedOrigin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Vary': 'Origin'
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405, headers: corsHeaders });
    }

    // 우리 사이트가 아닌 곳에서 온 요청은 거절 (referrer 제한 대신 서버에서 확인)
    if (!allowedOrigin || origin !== allowedOrigin) {
      return new Response(JSON.stringify({ error: 'origin not allowed' }), {
        status: 403,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    if (!env.GEMINI_API_KEY) {
      return new Response(JSON.stringify({ error: 'server not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    let word = '';
    try {
      const body = await request.json();
      word = String(body.word || '').slice(0, 60); // 과도한 입력 방지
    } catch {
      return new Response(JSON.stringify({ error: 'invalid body' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
    if (!word.trim()) {
      return new Response(JSON.stringify({ error: 'empty word' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const models = ['gemini-3.6-flash', 'gemini-flash-latest', 'gemini-3.5-flash'];
    const requestBody = JSON.stringify({
      systemInstruction: {
        parts: [{ text: '당신은 중학생에게 바른 우리말을 알려주는 친절하고 따뜻한 선생님입니다. 답변은 3문장 이내로 짧게 합니다.' }]
      },
      contents: [{
        parts: [{
          text: `학생이 다음 단어의 뜻과 올바른 순화어를 물어봤습니다: "${word}". 이 단어가 비속어나 은어, 신조어라면 그 뜻을 간단히 설명하고, 학생이 일상에서 쓸 수 있는 긍정적이고 바른말(순화어)로 바꾸어 안내해주세요.`
        }]
      }]
    });

    let lastStatus = 502;
    for (const model of models) {
      try {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`,
          { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: requestBody }
        );
        if (!res.ok) { lastStatus = res.status; continue; }
        const data = await res.json();
        const parts = data?.candidates?.[0]?.content?.parts || [];
        const reply = parts.filter(p => p.text && !p.thought).map(p => p.text).join('').trim();
        if (!reply) continue;
        return new Response(JSON.stringify({ reply }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      } catch {
        continue;
      }
    }

    return new Response(JSON.stringify({ error: 'gemini unavailable' }), {
      status: lastStatus,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
};
