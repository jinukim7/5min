// src/js/chatbot.js
//
const API_KEY = "";
// Gemini API 키는 이 파일(공개 GitHub 저장소)에 절대 넣지 않습니다.
// 대신 Cloudflare Worker 중계 서버를 통해 호출합니다. 키는 Worker의 비밀 변수로만 존재합니다.
// 배포 방법: cloudflare-worker/gemini-proxy.js 상단 주석 참고.
//
// PROXY_URL 이 비어 있으면(아직 배포 전) 아래 SLANG_DICTIONARY 로만 동작합니다.
const PROXY_URL = ""; // 예: "https://barum5-gemini-proxy.내계정.workers.dev"

// Fallback dictionary for slang
const SLANG_DICTIONARY = {
  // 신조어 및 줄임말
  "존버": { meaning: "'끝까지 버틴다'는 뜻의 비속어가 섞인 줄임말", correct: "끝까지 인내하기, 참고 견디기" },
  "킹받네": { meaning: "열받는다(화가 난다)에 '킹(King)'을 붙여 매우 화가 나거나 어이없음을 강조하는 말", correct: "정말 화난다, 어이없다" },
  "억텐": { meaning: "'억지 텐션'의 줄임말로 억지로 신난 척하는 행동", correct: "억지로 기운 내기" },
  "개이득": { meaning: "아주 큰 이득을 보았다는 뜻의 은어 ('개'를 강조의 의미로 남용함)", correct: "큰 이익, 아주 좋은 일" },
  "노잼": { meaning: "영어 'No'와 '재미'의 합성어로 재미가 없다는 뜻", correct: "지루함, 재미없음" },
  "꿀잼": { meaning: "꿀처럼 달콤하고 재미있다는 뜻", correct: "아주 재미있음" },
  "어그로": { meaning: "게임에서 괴물의 주의를 끄는 'aggravation(도발)'에서 유래되어, 관심을 끌기 위해 자극적인 행동을 하는 것", correct: "관심 끌기, 시선 집중" },
  "에바": { meaning: "정도를 벗어났다는 뜻의 '오버(over)'가 변형된 말", correct: "과장이다, 지나치다" },
  "관종": { meaning: "'관심 종자'의 줄임말로 관심을 받고 싶어 하는 사람을 비하하는 말", correct: "관심을 받고 싶어 하는 사람" },
  "뇌피셜": { meaning: "뇌(Brain)와 오피셜(Official)의 합성어로, 객관적인 근거 없이 자신의 생각만을 사실인 것처럼 말하는 것", correct: "개인적인 생각, 추측" },
  "TMI": { meaning: "Too Much Information의 약자로, 너무 과한 정보나 굳이 알고 싶지 않은 정보", correct: "과한 정보, 불필요한 정보" },
  "현타": { meaning: "'현실 자각 타임'의 줄임말로, 헛된 꿈이나 환상에서 깨어나 현실을 깨닫고 허탈해지는 시간", correct: "허탈함, 무력감" },
  "급식충": { meaning: "학교에서 급식을 먹는 10대 학생들을 깎아내려 부르는 혐오 표현", correct: "학생, 청소년" },
  "잼민이": { meaning: "주로 초등학생이나 어린아이들을 낮잡아 부르는 말", correct: "어린이, 초등학생" },
  "핑프": { meaning: "'핑거 프린세스(프린스)'의 줄임말로, 스스로 검색해보지 않고 남에게 다 물어보는 사람", correct: "질문하기 전 찾아보는 습관이 필요한 사람" },
  "인싸": { meaning: "'인사이더(Insider)'의 줄임말로 무리에 잘 섞여 노는 사람", correct: "사교적인 사람, 활발한 사람" },
  "아싸": { meaning: "'아웃사이더(Outsider)'의 줄임말로 무리에 섞이지 못하는 사람", correct: "내성적인 사람, 혼자 있는 것을 좋아하는 사람" },
  "엄친아": { meaning: "'엄마 친구 아들'의 줄임말로 모든 면에서 뛰어난 완벽한 사람", correct: "뛰어난 사람, 모범이 되는 사람" },
  "갑분싸": { meaning: "'갑자기 분위기가 싸해짐'의 줄임말", correct: "분위기가 어색해짐" },
  "TMT": { meaning: "Too Much Talker의 약자로, 말이 너무 많은 사람", correct: "말이 많은 사람, 수다스러운 사람" },
  "내로남불": { meaning: "'내가 하면 로맨스, 남이 하면 불륜'의 줄임말로, 자신에게는 관대하고 남에게는 엄격한 이중잣대", correct: "이중잣대, 자기합리화" },
  "팩폭": { meaning: "'팩트 폭력'의 줄임말로, 사실(Fact)을 말해 상대방에게 상처를 주는 것", correct: "정곡을 찌르는 사실, 아픈 진실" },
  "찐텐": { meaning: "'진짜 텐션'의 줄임말로, 가식이 아닌 진심으로 신난 상태", correct: "진심으로 즐거운 상태" },
  "쌉가능": { meaning: "강조의 비속어 '쌉'과 '가능'이 합쳐진 말로, 충분히 할 수 있다는 뜻", correct: "충분히 가능함, 할 수 있음" },
  
  // 비속어 및 욕설 (교육적 교정용)
  "빡친다": { meaning: "머리(이마)를 뜻하는 '빡'을 친다는 의미에서 유래된 거친 표현으로 매우 화가 남을 뜻함", correct: "화가 난다, 속상하다" },
  "빡세다": { meaning: "매우 힘들거나 어렵다는 뜻의 속어", correct: "힘들다, 고되다, 어렵다" },
  "존나": { meaning: "매우, 엄청나게 라는 뜻으로 쓰이나, 성기를 빗댄 심한 욕설에서 유래된 말", correct: "매우, 정말, 엄청나게" },
  "ㅈㄴ": { meaning: "매우, 엄청나게 라는 뜻으로 쓰이나, 성기를 빗댄 심한 욕설(존나)의 초성", correct: "매우, 정말, 엄청나게" },
  "시발": { meaning: "상대방을 모욕할 때 쓰는 매우 거친 욕설 (성적인 비하 의미 포함)", correct: "(사용하지 않는 것이 좋습니다) 화가 날 때는 '정말 속상하다'라고 표현해 보세요" },
  "씨발": { meaning: "상대방을 모욕할 때 쓰는 매우 거친 욕설 (성적인 비하 의미 포함)", correct: "(사용하지 않는 것이 좋습니다) 화가 날 때는 '정말 속상하다'라고 표현해 보세요" },
  "ㅅㅂ": { meaning: "거친 욕설(시발)의 초성", correct: "(사용하지 않는 것이 좋습니다) 화가 날 때는 '너무 속상해'라고 말해 보는 건 어떨까요?" },
  "병신": { meaning: "질병이 있거나 신체에 장애가 있는 사람을 낮잡아 부르는 말 (차별적이고 모욕적인 욕설)", correct: "(사용하지 않는 것이 좋습니다) 상대를 존중하는 말을 사용해요" },
  "ㅂㅅ": { meaning: "장애를 비하하는 욕설(병신)의 초성", correct: "(사용하지 않는 것이 좋습니다) 다른 사람을 존중해 주세요" },
  "개새끼": { meaning: "상대방을 짐승(개)에 비유하여 모욕하는 심한 욕설", correct: "(사용하지 않는 것이 좋습니다) 화가 났다면 감정을 차분히 말해 보세요" },
  "새끼": { meaning: "본래 짐승의 어린 것을 뜻하나, 사람에게 쓰면 모욕적인 표현", correct: "친구, 사람, 아이" },
  "미친": { meaning: "정신에 이상이 생겼다는 뜻을 남용하여 감정을 과격하게 표현하는 말", correct: "놀라운, 어이없는, 대단한" },
  "ㅁㅊ": { meaning: "과격한 감정 표현인 '미친'의 초성", correct: "놀라운, 어이없는, 대단한" },
  "뒤져": { meaning: "'죽어라'는 뜻의 매우 과격하고 폭력적인 표현", correct: "(절대 사용해서는 안 될 말입니다) 생명은 소중합니다" },
  "지랄": { meaning: "간질(뇌전증)이라는 질병의 발작 증세를 비하하여, 행동이 마음에 들지 않을 때 쓰는 욕설", correct: "소란을 피우다, 이상한 행동을 하다 (비하 표현이므로 사용을 자제해요)" },
  "ㅈㄹ": { meaning: "질병을 비하하는 욕설(지랄)의 초성", correct: "(사용하지 않는 것이 좋습니다)" },
  "호구": { meaning: "어수룩하여 이용하기 좋은 사람을 비하하는 말", correct: "순진한 사람, 착한 사람" },
  "찌질": { meaning: "행동이나 성격이 변변치 못한 것을 비하하는 속어", correct: "소심한, 미숙한" },
  "관종": { meaning: "관심을 받고 싶어 하는 사람(관심종자)을 깎아내리는 말", correct: "관심받고 싶어 하는 친구" },
  "틀딱": { meaning: "'틀니 딱딱'의 줄임말로 노인을 심하게 비하하는 혐오 표현", correct: "(절대 사용해서는 안 됩니다) 어르신, 노인" }
};

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
        addMessage(`'<strong>${escapeHtml(text)}</strong>'는 ${fallback.meaning}를 의미할 수 있어요. 학교에서는 '<strong>${fallback.correct}</strong>'(이)라고 표현해보는 건 어떨까요? 😊`);
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
