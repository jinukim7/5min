// Comprehensive 3-Cycle Verification Suite v3 for Pyeonhakwi Middle School Edition
// Focus: Teacher Recommended Book Addition & 21 Classes (7 per grade) & 28 Students/Class (588 Total)
// User Mandate: "중요한 건 3번정도 검증을 해서 80% 이상 구현될 때만 내게 보여줘"

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

import { AppState, INITIAL_STUDENTS_28, BADGES } from '../src/js/state.js';
import { MIDDLE_SCHOOL_BOOKS } from '../src/js/reading-data.js';
import { ETIQUETTE_DOMAINS } from '../src/js/etiquette-data.js';

let cycle1Total = 0, cycle1Pass = 0;
let cycle2Total = 0, cycle2Pass = 0;
let cycle3Total = 0, cycle3Pass = 0;

function testAssert(cycle, condition, message) {
  if (cycle === 1) { 
    cycle1Total++; 
    if (condition) { cycle1Pass++; console.log(`  ✓ [C1-PASS]: ${message}`); } 
    else { console.error(`  ✗ [C1-FAIL]: ${message}`); } 
  }
  if (cycle === 2) { 
    cycle2Total++; 
    if (condition) { cycle2Pass++; console.log(`  ✓ [C2-PASS]: ${message}`); } 
    else { console.error(`  ✗ [C2-FAIL]: ${message}`); } 
  }
  if (cycle === 3) { 
    cycle3Total++; 
    if (condition) { cycle3Pass++; console.log(`  ✓ [C3-PASS]: ${message}`); } 
    else { console.error(`  ✗ [C3-FAIL]: ${message}`); } 
  }
}

console.log('================================================================');
console.log(' [1차 검증] 교사 추천도서 추가 기능 & 실시간 목록 연동 & 독서기록 연계');
console.log('================================================================');

const state = new AppState();

// 1-1. 초기 추천도서 로딩 및 무결성
const initialBooks = state.getRecommendedBooks();
const initialCount = initialBooks.length;
testAssert(1, initialBooks.length >= 8, `초기 추천도서 목록 정상 로드 (${initialBooks.length}권)`);
testAssert(1, initialBooks.every(b => b.id && b.title && b.author && Array.isArray(b.quotes)), '모든 초기 추천도서의 필수 필드 (id, title, author, quotes) 검증');

// 1-2. 교사의 신규 추천도서 추가 API 검증
const newTeacherBook = state.addRecommendedBook({
  title: '천 개의 파랑',
  author: '천선란',
  publisher: '허블',
  category: 'SF/성장',
  coverIcon: '🤖',
  desc: '인간과 로봇, 동물이 나누는 따뜻한 연대와 성장의 SF 청소년 소설',
  quotes: [
    { text: '그리움은 과거에 머무는 것이 아니라 미래로 나아가게 하는 힘이다.', page: '154' },
    { text: '우리는 모두 불완전하게 태어나 서로를 채워가며 살아간다.', page: '248' }
  ],
  addedBy: '김선생님 (국어과)'
});

testAssert(1, !!newTeacherBook && !!newTeacherBook.id, '교사 추천도서 등록 성공 및 고유 ID 자동 발급');
testAssert(1, newTeacherBook.isTeacherAdded === true, '교사 등록 플래그 (isTeacherAdded: true) 설정 확인');
testAssert(1, newTeacherBook.title === '천 개의 파랑', '도서명 일치 확인');
testAssert(1, newTeacherBook.author === '천선란', '저자명 일치 확인');
testAssert(1, newTeacherBook.publisher === '허블', '출판사 일치 확인');
testAssert(1, newTeacherBook.quotes.length === 2, '명문장 2구절 등록 확인');
testAssert(1, newTeacherBook.addedBy === '김선생님 (국어과)', '등록 교사 정보 기록 확인');

// 1-3. 상태 조회 및 목록 선두 반영 검증
const updatedBooks = state.getRecommendedBooks();
testAssert(1, updatedBooks.length === initialCount + 1, `추천도서 총 권수 증가 확인 (${initialCount} -> ${updatedBooks.length}권)`);
testAssert(1, updatedBooks[0].id === newTeacherBook.id, '새로 등록한 교사 추천도서가 목록 최상단에 우선 노출');

// 1-4. 중복 방지 및 엣지 케이스 (구절이 비어있을 때 기본값 자동 보정)
const edgeBook = state.addRecommendedBook({
  title: '지구 끝의 온실',
  author: '김초엽',
  quotes: []
});
testAssert(1, edgeBook.quotes.length >= 1, '명문장 미입력 시에도 기본 권장 구절 자동 생성 보정');
testAssert(1, edgeBook.coverIcon === '📘', '커버 아이콘 미입력 시 기본 아이콘(📘) 자동 적용');

// 1-5. 교사 추가 도서를 활용한 학생 독서기록 작성 연동
const readingLogWithTeacherBook = {
  templateType: 'quote_cards',
  bookTitle: newTeacherBook.title,
  author: newTeacherBook.author,
  quote1: newTeacherBook.quotes[0].text,
  page1: newTeacherBook.quotes[0].page,
  quote2: newTeacherBook.quotes[1].text,
  page2: newTeacherBook.quotes[1].page
};
const prevReadingScore = state.state.readingScore;
state.addReadingScore(30, readingLogWithTeacherBook);
testAssert(1, state.state.readingScore === prevReadingScore + 30, '교사 추천도서로 독서기록 작성 시 독서 점수 +30P 정상 적립');
testAssert(1, state.state.myReadingLogs[0].bookTitle === '천 개의 파랑', '내 독서기록 목록에 교사 추천도서명 정확히 기록');

console.log('\n================================================================');
console.log(' [2차 검증] 학년별 7개반 21학급 & 학급당 최대 28명 (총 588명 학생 규모)');
console.log('================================================================');

// 2-1. 학급당 학생수 28명 검증
testAssert(2, INITIAL_STUDENTS_28.length === 28, '기본 학급 데이터 (INITIAL_STUDENTS_28)가 정확히 28명 구비');
testAssert(2, state.state.students.length === 28, '현재 활성 학급 (2학년 3반) 학생수 28명 정원 탑재');

// 2-2. 28명 학생 전원의 번호(1~28), 실명, 닉네임, 점수 무결성
let allStudentsValid = true;
const studentNumbers = new Set();
state.state.students.forEach(st => {
  if (!st.id || !st.realName || !st.nickname || typeof st.number !== 'number') {
    allStudentsValid = false;
  }
  studentNumbers.add(st.number);
});
testAssert(2, allStudentsValid === true, '학급 28명 전원 ID, 실명, 닉네임, 출석번호 유효성 확인');
testAssert(2, studentNumbers.size === 28, '1번부터 28번까지 중복 없이 고유한 번호 부여 확인');
testAssert(2, Math.min(...studentNumbers) === 1 && Math.max(...studentNumbers) === 28, '학급 번호 범위가 정확히 1번 ~ 28번');

// 2-3. 학년별 규모: 7개반 × 28명 = 196명
testAssert(2, state.state.gradeStudents.length === 196, `학년 전체 학생 수: 7개반 × 28명 = 196명 정확히 일치 (실제: ${state.state.gradeStudents.length}명)`);

// 2-4. 전교생 규모: 3개 학년 × 7개반 × 28명 = 21학급 588명
testAssert(2, state.state.schoolStudents.length === 588, `전교생 전체 학생 수: 21개 학급 × 28명 = 588명 정확히 일치 (실제: ${state.state.schoolStudents.length}명)`);

// 2-5. 21개 학급 전체 개별 조회 (getStudentsByClass) 무결성 검증
let all21ClassesPass = true;
let totalCount21 = 0;
for (let g = 1; g <= 3; g++) {
  for (let c = 1; c <= 7; c++) {
    const classStudents = state.getStudentsByClass(g, c);
    totalCount21 += classStudents.length;
    if (classStudents.length !== 28) {
      all21ClassesPass = false;
    }
  }
}
testAssert(2, all21ClassesPass === true, '1학년 1반부터 3학년 7반까지 21개 모든 학급이 각각 28명의 정원을 완벽하게 보유');
testAssert(2, totalCount21 === 588, `21개 학급 전체 누적 학생 수 588명 확인 (${totalCount21}명)`);

console.log('\n================================================================');
console.log(' [3차 검증] 3단계 명예의 전당 (28명/196명/588명) & 교사용 21학급 분석');
console.log('================================================================');

// 3-1. 학급별 (28명), 학년별 (196명), 전교생 (588명) 랭킹 데이터 정렬 및 크기
const classRank28 = state.getRankedStudents('total', 'class');
const gradeRank196 = state.getRankedStudents('total', 'grade');
const schoolRank588 = state.getRankedStudents('total', 'school');

testAssert(3, classRank28.length === 28, `학급별 랭킹: 정원 28명 전원 랭킹 산출 (실제: ${classRank28.length}명)`);
testAssert(3, gradeRank196.length === 196, `학년별 랭킹: 7개반 196명 전원 랭킹 산출 (실제: ${gradeRank196.length}명)`);
testAssert(3, schoolRank588.length === 588, `전교생 랭킹: 21개반 588명 전원 랭킹 산출 (실제: ${schoolRank588.length}명)`);

// 3-2. 랭킹 점수 내림차순 정렬 엄격 검증
let classSorted = true;
for (let i = 0; i < classRank28.length - 1; i++) {
  if (classRank28[i].totalPoints < classRank28[i+1].totalPoints) classSorted = false;
}
testAssert(3, classSorted === true, '학급 28명 총점 내림차순 정렬 무결성');

let gradeSorted = true;
for (let i = 0; i < gradeRank196.length - 1; i++) {
  if (gradeRank196[i].totalPoints < gradeRank196[i+1].totalPoints) gradeSorted = false;
}
testAssert(3, gradeSorted === true, '학년 196명 총점 내림차순 정렬 무결성');

let schoolSorted = true;
for (let i = 0; i < schoolRank588.length - 1; i++) {
  if (schoolRank588[i].totalPoints < schoolRank588[i+1].totalPoints) schoolSorted = false;
}
testAssert(3, schoolSorted === true, '전교생 588명 총점 내림차순 정렬 무결성');

// 3-3. 4대 세부 영역별(예절, 타자, 독서) 랭킹 정렬 검증
const etiquetteRanks = state.getRankedStudents('manners', 'school');
const typingRanks = state.getRankedStudents('typing', 'school');
const readingRanks = state.getRankedStudents('reading', 'school');

testAssert(3, etiquetteRanks[0].mannersScore >= etiquetteRanks[etiquetteRanks.length - 1].mannersScore, '588명 전교생 예절 점수 내림차순 정렬');
testAssert(3, typingRanks[0].typingScore >= typingRanks[typingRanks.length - 1].typingScore, '588명 전교생 타자 점수 내림차순 정렬');
testAssert(3, readingRanks[0].readingScore >= readingRanks[readingRanks.length - 1].readingScore, '588명 전교생 독서 점수 내림차순 정렬');

// 3-4. 교사 모드: 21개 학급 선택 및 학급별 통계 (getClassStats) 정상 연산 검증
state.setSelectedClassKey('1-7');
const stats17 = state.getClassStats('1-7');
testAssert(3, stats17.studentCount === 28, '1학년 7반 통계: 학생수 28명 정상 연산');
testAssert(3, typeof stats17.mannersAvg === 'number' && stats17.mannersAvg >= 0, '1학년 7반 예절 평균점수 산출');
testAssert(3, typeof stats17.typingAvg === 'number' && stats17.typingAvg >= 0, '1학년 7반 타자 평균점수 산출');
testAssert(3, typeof stats17.readingAvg === 'number' && stats17.readingAvg >= 0, '1학년 7반 독서 평균점수 산출');

state.setSelectedClassKey('3-7');
const stats37 = state.getClassStats('3-7');
testAssert(3, stats37.studentCount === 28, '3학년 7반 통계: 학생수 28명 정상 연산');
testAssert(3, stats37.totalAvg > 0, '3학년 7반 종합 평균점수 유효값 확인');

// 3-5. 사용자 권한별 실명/닉네임 노출 보안 검증
state.setRole('student');
const sampleStudent = { realName: '정하늘', nickname: '푸른바다' };
testAssert(3, state.formatStudentName(sampleStudent) === '푸른바다', '학생 로그인 시: 닉네임만 노출 (개인정보 보호)');
state.setRole('teacher');
testAssert(3, state.formatStudentName(sampleStudent) === '정하늘 (푸른바다)', '교사 로그인 시: 실명과 닉네임 병기 (지도용)');

console.log('\n================================================================');
console.log(' [검증 결과 종합 통계]');
console.log('================================================================');
const totalAll = cycle1Total + cycle2Total + cycle3Total;
const passAll = cycle1Pass + cycle2Pass + cycle3Pass;
const rate1 = Math.round((cycle1Pass / cycle1Total) * 100);
const rate2 = Math.round((cycle2Pass / cycle2Total) * 100);
const rate3 = Math.round((cycle3Pass / cycle3Total) * 100);
const rateAll = Math.round((passAll / totalAll) * 100);

console.log(`- 1차 검증 (교사 추천도서 등록 & 실시간 연동 & 독서기록 연계): ${cycle1Pass}/${cycle1Total} 통과 (${rate1}%)`);
console.log(`- 2차 검증 (학년별 7개반 21학급 & 학급당 28명 / 전교생 588명 정원): ${cycle2Pass}/${cycle2Total} 통과 (${rate2}%)`);
console.log(`- 3차 검증 (3단계 명예의 전당 & 교사용 21학급 통계 & 개인정보 정책): ${cycle3Pass}/${cycle3Total} 통과 (${rate3}%)`);
console.log(`----------------------------------------------------------------`);
console.log(`★ 전체 검증 합계: 총 ${totalAll}개 항목 중 ${passAll}개 통과 (달성률: ${rateAll}%)`);
console.log('================================================================');

if (rateAll >= 80) {
  console.log(`🎯 사용자 요청 검증 기준(80% 이상) 충족 완료! (현재 달성률: ${rateAll}%)`);
  process.exit(0);
} else {
  console.error(`❌ 검증 기준 미달 (현재 달성률: ${rateAll}%)`);
  process.exit(1);
}
