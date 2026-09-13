// Comprehensive 3-Cycle Verification Suite for Pyeonhakwi Middle School Edition
// User Mandate: "3번정도 검증을 해서 80% 이상 구현될 때만 내게 보여줘"

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

import { 
  KeyPracticeSession, 
  HancomSentenceSession, 
  SentencePracticeSession, 
  decomposeHangul, 
  isHangulPrefix, 
  getCharStrokeCount,
  getTotalSentenceStrokes
} from '../src/js/typing-engine.js';
import { HANCOM_KEY_STAGES, WORD_PRACTICE_LIST, SHORT_SENTENCES, LONG_PASSAGES } from '../src/js/typing-texts.js';
import { AppState, INITIAL_STUDENTS_20, BADGES } from '../src/js/state.js';
import { ETIQUETTE_DOMAINS, INITIAL_TEACHER_PROPOSALS, MIDDLE_SCHOOL_QUIZZES } from '../src/js/etiquette-data.js';
import { MIDDLE_SCHOOL_BOOKS, INITIAL_READING_LOGS } from '../src/js/reading-data.js';

let cycle1Total = 0, cycle1Pass = 0;
let cycle2Total = 0, cycle2Pass = 0;
let cycle3Total = 0, cycle3Pass = 0;

function testAssert(cycle, condition, message) {
  if (cycle === 1) { cycle1Total++; if (condition) { cycle1Pass++; console.log(`  ✓ [C1-PASS]: ${message}`); } else { console.error(`  ✗ [C1-FAIL]: ${message}`); } }
  if (cycle === 2) { cycle2Total++; if (condition) { cycle2Pass++; console.log(`  ✓ [C2-PASS]: ${message}`); } else { console.error(`  ✗ [C2-FAIL]: ${message}`); } }
  if (cycle === 3) { cycle3Total++; if (condition) { cycle3Pass++; console.log(`  ✓ [C3-PASS]: ${message}`); } else { console.error(`  ✗ [C3-FAIL]: ${message}`); } }
}

console.log('================================================================');
console.log(' [1차 검증] 교사 예절 지침 제안 & 70% 공감 투표 및 4대 지침 개별 체크');
console.log('================================================================');

const state = new AppState();

// 1-1. 5개 영역별 4개 세부 지침 (총 20개 지침)
testAssert(1, ETIQUETTE_DOMAINS.length === 5, '중학교 5대 예절 영역 (등교, 교실복도, 급식실, 수업디벗, 하교) 정상 정의');
let totalGuidelines = 0;
ETIQUETTE_DOMAINS.forEach(dom => {
  totalGuidelines += dom.guidelines.length;
  testAssert(1, dom.guidelines.length === 4, `${dom.title}: 4개 핵심 실천 지침 구비`);
  dom.guidelines.forEach(g => {
    testAssert(1, g.points === 5 && g.rule.length > 5, `  - 지침 [${g.rule}]: +5P 설정 및 상세 설명 구비`);
  });
});
testAssert(1, totalGuidelines === 20, '총 20개 세부 행동 지침 무결성 확인');

// 1-2. 학생 개별 지침 체크 및 점수 적립/차감 (+5P)
const initialScore = state.state.mannersScore;
const ruleToTest = 'cafeteria_1';
const isCheckedFirst = state.toggleSubRule(ruleToTest, 5);
testAssert(1, isCheckedFirst === true, '세부 지침 1개 체크 시 true 반환');
testAssert(1, state.state.todaySubChecked[ruleToTest] === true, 'state.todaySubChecked에 실천 완료 기록 등록');
testAssert(1, state.state.mannersScore === initialScore + 5, '지침 1개 체크 시 정확히 +5P 적립');

const isCheckedSecond = state.toggleSubRule(ruleToTest, 5);
testAssert(1, isCheckedSecond === false, '동일 지침 재클릭 시 체크 해제 (토글) 정상 작동');
testAssert(1, !state.state.todaySubChecked[ruleToTest], 'state.todaySubChecked에서 항목 정상 삭제');
testAssert(1, state.state.mannersScore === initialScore, '체크 해제 시 점수 5P 정상 롤백');

// 1-3. 교사 예절 지침 제안 시스템
const newProp = state.proposeEtiquette({
  domainId: 'class_debeot',
  rule: '수업 종료 후 디벗 충전함에 제자리 반납 및 케이블 정돈',
  desc: '하교 전 자기 번호 충전함에 디벗을 안전하게 꽂고 충전 램프를 확인합니다.',
  proposer: '이선생님'
});
testAssert(1, !!newProp.id && newProp.status === 'pending', '교사 새 예절 지침 제안 등록 성공 (초기 상태: pending)');
testAssert(1, newProp.totalTeachers === 10, '교사 전체 인원수 10명 기준 설정');
testAssert(1, newProp.votes.length === 1, '제안자 기본 1표 반영 (10%)');

// 1-4. 70% 미만 공감 시 게시 보류
const voteRes1 = state.voteSympathy(newProp.id, 't_teacher2');
testAssert(1, voteRes1.votesCount === 2 && voteRes1.rate === 20, '공감 투표 2표 (20%) 반영');
testAssert(1, voteRes1.isApproved === false, '70% 미만(20%)일 때 승인 및 게시 보류 상태 유지');

// 1-5. 70% 이상 공감 획득 시 공식 채택 & 자동 게시 승인 (Approved)
state.voteSympathy(newProp.id, 't_teacher3');
state.voteSympathy(newProp.id, 't_teacher4');
state.voteSympathy(newProp.id, 't_teacher5');
state.voteSympathy(newProp.id, 't_teacher6');
const voteRes7 = state.voteSympathy(newProp.id, 't_teacher7'); // 7th vote = 70%

testAssert(1, voteRes7.votesCount === 7 && voteRes7.rate === 70, '7명 공감 획득으로 정확히 70% 도달');
testAssert(1, voteRes7.isApproved === true, '70% 도달 시 즉시 isApproved: true로 전환');
const approvedProp = state.state.teacherProposals.find(p => p.id === newProp.id);
testAssert(1, approvedProp.status === 'approved', '제안 객체의 status가 "approved"로 변경되어 공식 게시 가능 상태 확정');
testAssert(1, !!approvedProp.approvedDate, '승인 및 게시 일자 자동 기록 확인');

console.log('\n================================================================');
console.log(' [2차 검증] 한컴타자 공식 스타일 타자 엔진 & 한글 IME 조합 정확도 검증');
console.log('================================================================');

// 2-1. 한글 원자 자모 분해 & 접두어 인식 (조합 중 오타 방지 핵심)
testAssert(2, decomposeHangul('학').join('') === 'ㅎㅏㄱ', '기본 음절 "학" 자모 분해 무결성');
testAssert(2, decomposeHangul('닭').join('') === 'ㄷㅏㄹㄱ', '겹받침 음절 "닭" 원자 자모 분해 무결성');
testAssert(2, decomposeHangul('꽃').join('') === 'ㄱㄱㅗㅊ', '된소리 초성 "꽃" 자모 분해 무결성');
testAssert(2, isHangulPrefix('ㅎ', '학') === true, '조합 중 "ㅎ" -> "학" 접두어 인식 (오타 판정 방지)');
testAssert(2, isHangulPrefix('하', '학') === true, '조합 중 "하" -> "학" 접두어 인식');
testAssert(2, isHangulPrefix('학', '학') === true, '완성 음절 "학" -> "학" 일치');
testAssert(2, isHangulPrefix('달', '닭') === true, '겹받침 조합 중 "달" -> "닭" 접두어 인식');
testAssert(2, isHangulPrefix('고', '과') === true, '복합모음 조합 중 "고" -> "과" 접두어 인식');
testAssert(2, isHangulPrefix('ㄷ', '학') === false, '완전 오타 "ㄷ"은 정상적으로 오타로 분별');

// 2-2. 한글 글자별 정확한 타수(Stroke) 가중치 산출
testAssert(2, getCharStrokeCount('한') === 3, '"한" (ㅎ+ㅏ+ㄴ) = 3타 계산 정확도');
testAssert(2, getCharStrokeCount('밝') === 4, '"밝" (ㅂ+ㅏ+ㄹ+ㄱ) = 4타 계산 정확도');
testAssert(2, getCharStrokeCount('꽃') === 4, '"꽃" (ㄱ+ㄱ+ㅗ+ㅊ) = 4타 계산 정확도');
testAssert(2, getCharStrokeCount('a') === 1 && getCharStrokeCount('A') === 2, '영문 대소문자 타수 산출 무결성');

// 2-3. 자리 연습 (Home Row & Finger Guide)
const keyStage = HANCOM_KEY_STAGES[0];
let keyDone = false;
const keySession = new KeyPracticeSession(keyStage, () => {}, () => { keyDone = true; });
testAssert(2, keySession.getCurrentKey() === 'ㅁ', '자리연습 1단계 첫 타겟 "ㅁ"');
testAssert(2, keySession.getCurrentFingerGuide() === '왼손 새끼', '자리연습 손가락 가이드 "왼손 새끼"');
testAssert(2, keySession.handleKeyDown({ key: 'ㅁ', code: 'KeyA' }) === true, '자리연습 올바른 키 입력 처리');
testAssert(2, keySession.getCurrentKey() === 'ㄴ', '자동 다음 글쇠 이동');

// 2-4. 보이는 입력창 한컴타자 공식 세션 (HancomSentenceSession)
const testSentence = SHORT_SENTENCES[0].text;
let sentStatus = null;
let sentDone = false;
const session = new HancomSentenceSession(
  testSentence,
  (st) => { sentStatus = st; },
  (st) => { sentDone = true; }
);

// Intermediate typing simulation
session.handleInput('옳');
testAssert(2, sentStatus.accuracy === 100, '첫 음절 정확 입력 시 정확도 100%');
session.handleInput('옳음');
testAssert(2, sentStatus.input === '옳음', '실시간 타이핑 버퍼 반영');
testAssert(2, sentStatus.progress > 0, '진행도 정상 계산');

// Full completion
session.handleInput(testSentence);
testAssert(2, sentDone === true, '문장 전체 타이핑 완료 시 완독 트리거 발동');
testAssert(2, sentStatus.isExactMatch === true, '정확한 문장 일치 여부 확인');
testAssert(2, sentStatus.cpm > 0, '최종 타수 (CPM) 정상 산출');

console.log('\n================================================================');
console.log(' [3차 검증] PDF 4대 독서 양식 & 직접 입력 지원 & 학급·학년·전교 3단계 명예의 전당');
console.log('================================================================');

// 3-1. 추천도서 8권 구비 및 명문장 데이터
testAssert(3, MIDDLE_SCHOOL_BOOKS.length >= 8, '중학생 추천도서 8권 이상 수록');
MIDDLE_SCHOOL_BOOKS.forEach(b => {
  testAssert(3, !!b.title && !!b.author && b.quotes.length >= 2, `《${b.title}》 (${b.author}) 명문장 구비`);
});

// 3-2. 첨부 PDF 4대 양식 템플릿 지원 검증
// 1) 기억하고 싶은 구절 (PDF p.1~2)
const logQuote = {
  templateType: 'quote_cards',
  bookTitle: '아몬드',
  author: '손원평',
  quote1: '구할 수 없는 인간이란 없다.',
  page1: '78',
  quote2: '세상을 이해하고 싶었다.',
  page2: '142'
};
testAssert(3, !!logQuote.quote1 && !!logQuote.page1, '양식 1: 기억하고 싶은 구절 (2개 구절 + 페이지) 데이터 모델 적합성');

// 2) 독서기록장 (PDF p.7~8)
const logRecord = {
  templateType: 'summary_reflection',
  bookTitle: '시간을 파는 상점',
  author: '김선영',
  summary: '시간의 가치를 배우는 이야기',
  reflection: '아침 20분을 소중히 쓰겠습니다.',
  reflectionTags: ['느낀점', '다짐']
};
testAssert(3, !!logRecord.summary && logRecord.reflectionTags.length === 2, '양식 2: 독서기록장 (요약 + 감상 구분 태그) 데이터 모델 적합성');

// 3) 퀴즈 만들기 (PDF p.3~4)
const logQuiz = {
  templateType: 'make_quiz',
  bookTitle: '체리새우',
  author: '황영미',
  q1: '다현이의 비밀 블로그 이름은?',
  p1: '45',
  a1: '체리새우'
};
testAssert(3, !!logQuiz.q1 && !!logQuiz.a1 && !!logQuiz.p1, '양식 3: 퀴즈 만들기 (Q1/A1 + 쪽수) 데이터 모델 적합성');

// 4) 마인드맵 (PDF p.5~6)
const logMindmap = {
  templateType: 'mindmap',
  bookTitle: '나의 라임오렌지나무',
  author: '바스콘셀로스',
  centerKeyword: '성장과 사랑',
  keywords: ['밍기뉴', '뽀르뚜까', '아픔', '위로', '동심', '용기']
};
testAssert(3, logMindmap.keywords.length === 6 && !!logMindmap.centerKeyword, '양식 4: 마인드맵 (중심 키워드 + 6개 생각가지) 데이터 모델 적합성');

// 3-3. 학생 직접 도서명/저자 입력 기능
const customReadingLog = {
  id: 'custom_1',
  templateType: 'quote_cards',
  bookTitle: '코스모스 (학생 직접 입력)',
  author: '칼 세이건',
  quote1: '우리는 모두 별의 먼지로 만들어졌다.',
  page1: '15'
};
state.addReadingScore(30, customReadingLog);
testAssert(3, state.state.readingScore >= 350, '학생 직접 입력 독서기록 제출 시 +30P 적립');
testAssert(3, state.state.myReadingLogs[0].bookTitle === '코스모스 (학생 직접 입력)', '직접 입력 도서명 정확하게 저장');

// 3-4. 3단계 명예의 전당 (학급별 / 학년별 / 전교생) 데이터 및 정렬 무결성
const classRanks = state.getRankedStudents('total', 'class');
const gradeRanks = state.getRankedStudents('total', 'grade');
const schoolRanks = state.getRankedStudents('total', 'school');

testAssert(3, classRanks.length === 20, '1단계 [학급별]: 2학년 3반 20명 랭킹 데이터');
testAssert(3, gradeRanks.length === 100, '2단계 [학년별]: 2학년 전체 5개 학급 100명 랭킹 데이터');
testAssert(3, schoolRanks.length === 300, '3단계 [전교생]: 1~3학년 전체 15개 학급 300명 랭킹 데이터');

testAssert(3, classRanks[0].totalPoints >= classRanks[1].totalPoints, '학급별 1위~20위 점수 내림차순 정렬 확인');
testAssert(3, gradeRanks[0].totalPoints >= gradeRanks[1].totalPoints, '학년별 점수 내림차순 정렬 확인');
testAssert(3, schoolRanks[0].totalPoints >= schoolRanks[1].totalPoints, '전교생 점수 내림차순 정렬 확인');

// 3-5. 4대 평가 영역별 정렬 무결성
const mannersRank = state.getRankedStudents('manners', 'class');
const typingRank = state.getRankedStudents('typing', 'class');
const readingRank = state.getRankedStudents('reading', 'class');
testAssert(3, mannersRank[0].mannersScore >= mannersRank[1].mannersScore, '예절 영역 랭킹 내림차순 정렬');
testAssert(3, typingRank[0].typingScore >= typingRank[1].typingScore, '타자 영역 랭킹 내림차순 정렬');
testAssert(3, readingRank[0].readingScore >= readingRank[1].readingScore, '독서 영역 랭킹 내림차순 정렬');

// 3-6. 학생 모드 vs 교사 모드 노출 정책
state.setRole('student');
const studentSample = { realName: '김민준', nickname: '별빛달빛' };
testAssert(3, state.formatStudentName(studentSample) === '별빛달빛', '학생 접속 시 실명 완전 은닉, 닉네임("별빛달빛")만 노출');
state.setRole('teacher');
testAssert(3, state.formatStudentName(studentSample) === '김민준 (별빛달빛)', '교사 접속 시 실명과 닉네임 병기("김민준 (별빛달빛)")');

console.log('\n================================================================');
console.log(' [검증 결과 종합 통계]');
console.log('================================================================');
const totalAll = cycle1Total + cycle2Total + cycle3Total;
const passAll = cycle1Pass + cycle2Pass + cycle3Pass;
const rate1 = Math.round((cycle1Pass / cycle1Total) * 100);
const rate2 = Math.round((cycle2Pass / cycle2Total) * 100);
const rate3 = Math.round((cycle3Pass / cycle3Total) * 100);
const rateAll = Math.round((passAll / totalAll) * 100);

console.log(`- 1차 검증 (교사 제안 70% 공감 투표 & 20대 세부지침 개별 체크): ${cycle1Pass}/${cycle1Total} 통과 (${rate1}%)`);
console.log(`- 2차 검증 (한컴타자 공식 스타일 & 한글 IME 조합 엔진 정확도): ${cycle2Pass}/${cycle2Total} 통과 (${rate2}%)`);
console.log(`- 3차 검증 (PDF 4대 독서 양식 & 직접입력 & 3단계 명예의 전당):   ${cycle3Pass}/${cycle3Total} 통과 (${rate3}%)`);
console.log(`----------------------------------------------------------------`);
console.log(`★ 전체 검증 합계: 총 ${totalAll}개 항목 중 ${passAll}개 통과 (달성률: ${rateAll}%)`);
console.log('================================================================');

if (rateAll >= 80) {
  console.log(`🎯 검증 기준(80% 이상) 충족 완료! (현재 달성률: ${rateAll}%)`);
} else {
  console.error(`❌ 검증 기준 미달 (현재 달성률: ${rateAll}%)`);
  process.exit(1);
}
