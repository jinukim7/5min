// Mock localStorage for Node.js test environment
if (typeof globalThis.localStorage === 'undefined') {
  const store = {};
  globalThis.localStorage = {
    getItem: (k) => store[k] || null,
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; },
    clear: () => { for (const k in store) delete store[k]; }
  };
}

// 3-Step Verification Test Suite for Pyeonhakwi Middle School Edition
import { KeyPracticeSession, SentencePracticeSession, decomposeHangul, isHangulPrefix, getCharStrokeCount } from '../src/js/typing-engine.js';
import { HANCOM_KEY_STAGES, SHORT_SENTENCES } from '../src/js/typing-texts.js';
import { AppState, INITIAL_STUDENTS_20 } from '../src/js/state.js';
import { ETIQUETTE_DOMAINS, MIDDLE_SCHOOL_QUIZZES } from '../src/js/etiquette-data.js';
import { MIDDLE_SCHOOL_BOOKS } from '../src/js/reading-data.js';

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`  ✓ PASS: ${message}`);
    passedTests++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log('====================================================');
console.log(' [1차 검증] 타자 엔진 정확도 & 한글 IME 처리 검증');
console.log('====================================================');

// 1-1: Hangul decomposition
const jamosHak = decomposeHangul('학');
assert(jamosHak.length === 3 && jamosHak[0] === 'ㄱ' || jamosHak[0] === 'ㅎ', '한글 자모 분해 정상 작동 ("학")');
assert(isHangulPrefix('ㅎ', '학') === true, '조합 중 자음("ㅎ")이 목표 글자("학")의 유효한 전개 과정으로 인식됨 (오타 오판정 방지)');
assert(isHangulPrefix('하', '학') === true, '조합 중 음절("하")이 목표 글자("학")의 유효한 접두어로 인식됨');
assert(isHangulPrefix('ㄷ', '학') === false, '틀린 자음("ㄷ")은 정확하게 오타로 판정됨');

// 1-2: Key Placement Practice Session (자리 연습)
const homeStage = HANCOM_KEY_STAGES[0];
let keyStatus = null;
let keyCompleted = false;

const keySession = new KeyPracticeSession(
  homeStage,
  (st) => { keyStatus = st; },
  () => { keyCompleted = true; }
);

assert(keySession.getCurrentKey() === 'ㅁ', '자리연습 1단계 첫 목표키는 "ㅁ"');
assert(keySession.getCurrentFingerGuide() === '왼손 새끼', '자리연습 첫 목표키 손가락 가이드 "왼손 새끼" 안내 정상');

// Simulate KeyA press
const keyMatch1 = keySession.handleKeyDown({ key: 'ㅁ', code: 'KeyA' });
assert(keyMatch1 === true, '올바른 키("ㅁ"/KeyA) 입력 시 매칭 성공');
assert(keySession.getCurrentKey() === 'ㄴ', '매칭 후 즉시 다음 키("ㄴ")로 자동 전개');

// Simulate wrong key press
const keyMatchWrong = keySession.handleKeyDown({ key: 'ㅂ', code: 'KeyQ' });
assert(keyMatchWrong === false, '잘못된 키("ㅂ") 입력 시 오타 판정');

// 1-3: Sentence Practice Engine
const targetQuote = SHORT_SENTENCES[0].text; // "옳음과 친절함 중 하나를 선택해야 한다면, 항상 친절함을 선택하라."
let sentStatus = null;
let sentCompleted = false;

const sentSession = new SentencePracticeSession(
  targetQuote,
  (st) => { sentStatus = st; },
  () => { sentCompleted = true; }
);

sentSession.handleInput('옳음과 ');
assert(sentStatus.cpm >= 0, '실시간 CPM 타수 산출 작동');
assert(sentStatus.accuracy === 100, '정확한 입력 시 정확도 100% 유지');

// Complete sentence
sentSession.handleInput(targetQuote);
assert(sentCompleted === true, '문장 전체 타이핑 완료 시 정상 완독 트리거');
assert(sentStatus.progress === 100, '진행도 100% 달성');

console.log('\n====================================================');
console.log(' [2차 검증] 역할 분리 & 닉네임/실명 노출 & 3대 영역 랭킹');
console.log('====================================================');

const testState = new AppState();
const mockStudent = { number: 1, realName: '김민준', nickname: '별빛달빛' };

// Student view test
testState.setRole('student');
const studentDisplayName = testState.formatStudentName(mockStudent);
assert(studentDisplayName === '별빛달빛', '학생 모드 접속 시 실명 은닉 및 "별빛달빛"(닉네임)만 노출됨');
assert(!studentDisplayName.includes('김민준'), '학생 모드에서 실명 노출 절대 방지 확인');

// Teacher view test
testState.setRole('teacher');
const teacherDisplayName = testState.formatStudentName(mockStudent);
assert(teacherDisplayName === '김민준 (별빛달빛)', '교사 모드 접속 시 "김민준 (별빛달빛)"(실명+닉네임) 병기 노출됨');

// Ranking check
const topManners = testState.getRankedStudents('manners');
assert(topManners.length === 20, '20명 학생 전원 랭킹 리스트에 포함');
assert(topManners[0].mannersScore >= topManners[1].mannersScore, '예절 점수 내림차순 정렬 무결성 확인');

const topTyping = testState.getRankedStudents('typing');
assert(topTyping[0].typingScore >= topTyping[1].typingScore, '타자 점수 내림차순 정렬 무결성 확인');

const topReading = testState.getRankedStudents('reading');
assert(topReading[0].readingScore >= topReading[1].readingScore, '독서기록 점수 내림차순 정렬 무결성 확인');

console.log('\n====================================================');
console.log(' [3차 검증] 5대 예절 교육 콘텐츠 & 추천도서 독서기록 무결성');
console.log('====================================================');

assert(ETIQUETTE_DOMAINS.length === 5, '중학교 5대 예절 영역(등교, 교실복도, 급식실, 수업디벗, 하교) 정의 완료');
ETIQUETTE_DOMAINS.forEach(d => {
  assert(d.guidelines.length === 4, `${d.title} 영역별 4개 올바른 행동 지침 구비`);
  assert(!!d.checkItem && d.checkItem.points === 20, `${d.title} 일일 점검표 항목 및 20P 보상 설정`);
});

assert(MIDDLE_SCHOOL_QUIZZES.length >= 6, '중학생 상황별 예절 퀴즈 데이터셋 구비');
MIDDLE_SCHOOL_QUIZZES.forEach((q, i) => {
  assert(q.options.length === 4 && q.answer >= 0 && q.answer < 4, `퀴즈 #${i+1} 4지선다 및 유효한 정답 확인`);
  assert(q.explanation.length > 10, `퀴즈 #${i+1} 상세 교육적 해설 구비`);
});

assert(MIDDLE_SCHOOL_BOOKS.length >= 8, '중학생 추천도서 8권 이상 수록');
MIDDLE_SCHOOL_BOOKS.forEach(b => {
  assert(b.quotes.length >= 2, `《${b.title}》 인상 깊은 명문장 2구절 이상 구비`);
});

console.log('\n====================================================');
console.log(`검증 결과 요약: 총 ${totalTests}개 검사 중 ${passedTests}개 통과 (달성률: ${Math.round((passedTests / totalTests) * 100)}%)`);
console.log('====================================================');

if (passedTests === totalTests) {
  console.log('🎉 3단계 모든 테스트 통과 완료 (100% 구현 달성)!');
} else {
  process.exit(1);
}
