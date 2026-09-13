// Application state management with 21 Classes (7 per grade), 28 students capacity, and Teacher Book Addition
import { INITIAL_TEACHER_PROPOSALS } from './etiquette-data.js';
import { MIDDLE_SCHOOL_BOOKS } from './reading-data.js';
import { db } from './firebase-config.js';

const STORAGE_KEY = 'pyeonhakwi_ms_state_v4';

// 데이터베이스 입력 전 화면 확인용 예시 학생 (21개 학급 × 학급당 10명)
// Firestore 에 실제 학생 데이터가 한 명이라도 생기면 자동으로 실제 데이터만 표시됩니다.
const SAMPLE_FAMILY_NAMES = ['김', '이', '박', '최', '정', '강', '조', '윤', '장', '임', '한', '오', '서', '신', '권', '황', '안', '송', '류', '홍'];
const SAMPLE_GIVEN_NAMES = ['민준', '서연', '도윤', '하은', '시우', '지아', '하준', '서윤', '주원', '지유', '예준', '채원', '지호', '수아', '건우', '다은', '우진', '예린', '선우', '소율', '연우', '윤서', '유찬', '지민', '은우', '하린', '태윤', '아인', '민재', '서아'];
const SAMPLE_NICKNAMES = ['별빛달빛', '책읽는사자', '새벽구름', '꿈꾸는고래', '푸른하늘', '바람소리', '달콤초코', '은하수별', '날아라우주', '초록풀잎', '미소천사', '용감한호랑이', '햇살가득', '지혜올빼미', '무지개빛', '맑은샘물', '봄날의햇살', '푸른바다', '은빛날개', '숲속요정', '해오름', '샛별', '달빛소나타', '물보라', '초록별', '구름빵', '반짝반딧불', '노을빛', '종이비행기', '행복한펭귄'];
const SAMPLE_COMMENTS = [
  '아침 인사를 먼저 밝게 건네니 하루가 상쾌합니다!',
  '《시간을 파는 상점》을 읽고 매일 5분의 소중함을 실감했어요.',
  '책상 위 교과서 정돈과 복도 우측통행을 지키고 있어요.',
  '친구들에게 고운 말 쓰기를 온·오프라인에서 모두 실천 중입니다.',
  '자리연습부터 차근차근 타수를 늘려가고 있어요.',
  '《원더》의 친절 명언처럼 친구의 실수를 따뜻하게 안아줄게요.',
  '급식실에서 새치기 안 하고 감사 인사하기 성공!',
  '아침 독서 후 짧은 글 타자 연습을 하니 집중력이 높아져요.',
  '선생님 설명하실 때 디벗 화면 덮기 규칙을 지킵니다.',
  '복도에서 뛰지 않고 우측보행을 철저히 지킵니다.'
];

function generateSampleStudents() {
  const students = [];
  let seq = 0;
  for (let g = 1; g <= 3; g++) {
    for (let c = 1; c <= 7; c++) {
      for (let n = 1; n <= 10; n++) {
        seq++;
        // 학급마다 점수 분포가 달라 보이도록 결정적(매번 같은) 값 사용
        const factor = 0.55 + (Math.sin(g * 17 + c * 9 + n * 3) + 1) * 0.3;
        const mannersScore = Math.round(420 * factor / 10) * 10;
        const typingScore = Math.round(460 * factor / 10) * 10;
        const readingScore = Math.round(340 * factor / 10) * 10;
        students.push({
          id: `sample_${g}_${c}_${n}`,
          isSample: true,
          role: 'student',
          number: n,
          grade: g,
          classNum: c,
          realName: SAMPLE_FAMILY_NAMES[(seq * 7) % SAMPLE_FAMILY_NAMES.length] + SAMPLE_GIVEN_NAMES[(seq * 11) % SAMPLE_GIVEN_NAMES.length],
          nickname: SAMPLE_NICKNAMES[(seq * 13) % SAMPLE_NICKNAMES.length],
          mannersScore,
          typingScore,
          readingScore,
          totalPoints: mannersScore + typingScore + readingScore,
          typingBestCPM: Math.round(330 * factor),
          typingAcc: Math.min(100, Math.round(88 + factor * 10)),
          streak: Math.max(1, Math.round(10 * factor)),
          checked: n % 4 !== 0,
          quizDone: n % 3 !== 0,
          comment: SAMPLE_COMMENTS[(seq * 3) % SAMPLE_COMMENTS.length],
          hasSticker: n % 5 === 1
        });
      }
    }
  }
  return students;
}

export const SAMPLE_STUDENTS = generateSampleStudents();

export const BADGES = [
  { id: 'first_step', name: '첫 발자국', desc: '바름 5분 첫 활동 완료', icon: '🌱', req: (s) => s.totalPoints >= 20 },
  { id: 'streak_3', name: '3일의 결심', desc: '3일 연속 아침 루틴 달성', icon: '🔥', req: (s) => s.streak >= 3 },
  { id: 'streak_7', name: '아침의 지배자', desc: '7일 연속 아침 루틴 달성', icon: '👑', req: (s) => s.streak >= 7 },
  { id: 'typer_250', name: '타자 루키', desc: '타자 연습 250타 달성', icon: '⌨️', req: (s) => s.typingBestCPM >= 250 },
  { id: 'typer_400', name: '타자 마스터', desc: '타자 연습 400타 달성', icon: '⚡', req: (s) => s.typingBestCPM >= 400 },
  { id: 'accuracy_98', name: '명사수', desc: '타자 정확도 98% 이상 달성', icon: '🎯', req: (s) => s.typingAcc >= 98 },
  { id: 'reading_worm', name: '아침 다독왕', desc: '독서기록 300점 이상 달성', icon: '📚', req: (s) => s.readingScore >= 300 },
  { id: 'manners_master', name: '매너 박사', desc: '매너 실천 400점 이상 달성', icon: '🎓', req: (s) => s.mannersScore >= 400 }
];

export class AppState {
  constructor() {
    this.listeners = [];
    this.state = this.loadState();
    // 실제 학생 데이터를 받기 전에는 예시 학생으로 화면 채우기
    this.setStudentList(SAMPLE_STUDENTS);
    this.listenToAllUsers();
    this.listenToCustomDictionary();
    this.unknownWordsUnsub = null;
  }

  getTodayString() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  loadState() {
    const today = this.getTodayString();
    try {
      if (typeof localStorage !== 'undefined') {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed.lastActiveDate !== today) {
            parsed.lastActiveDate = today;
            parsed.todaySubChecked = {};
            parsed.todayQuizDone = false;
            parsed.todayTypingRecords = [];
          }
          if (!parsed.todayTypingRecords) parsed.todayTypingRecords = [];
          if (!parsed.unknownWords) parsed.unknownWords = [];
          if (!parsed.customDictionary) parsed.customDictionary = {};
          if (!parsed.recommendedBooks || parsed.recommendedBooks.length === 0) {
            parsed.recommendedBooks = [...MIDDLE_SCHOOL_BOOKS];
          } else {
            // 새로 추가된 기본 추천도서를 기존 저장 목록에도 반영
            const savedIds = new Set(parsed.recommendedBooks.map(b => b.id));
            parsed.recommendedBooks.push(...MIDDLE_SCHOOL_BOOKS.filter(b => !savedIds.has(b.id)));
          }
          if (!parsed.selectedClassKey) {
            parsed.selectedClassKey = '2-3';
          }
          // 로그인 세션(uid)이 없으면 로그아웃 상태로 취급
          if (!parsed.auth || !parsed.auth.uid) {
            parsed.auth = { isLoggedIn: false, provider: 'google', uid: null, email: '', accountRole: 'student', roleSource: 'default' };
          }
          // 인증된 교사 계정이 아니면 교사 화면 모드를 해제
          if (parsed.auth.accountRole !== 'teacher') {
            parsed.userProfile.role = 'student';
          }
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to load state from localStorage', e);
    }

    // Default current profile (Student: 2학년 3반 1번 김민준 / 별빛달빛)
    return {
      auth: {
        isLoggedIn: false,
        provider: 'google',
        uid: null,
        email: '',
        accountRole: 'student',
        roleSource: 'default'
      },
      userProfile: {
        role: 'student', // 'student' | 'teacher'
        school: '경희중학교',
        grade: 2,
        classNum: 3,
        number: 1,
        realName: '김민준',
        nickname: '별빛달빛'
      },
      selectedClassKey: '2-3',
      lastActiveDate: today,
      mannersScore: 480,
      typingScore: 540,
      readingScore: 320,
      totalPoints: 1340,
      streak: 8,
      typingBestCPM: 365,
      typingAcc: 98,
      todaySubChecked: {
        'arrival_1': true,
        'arrival_2': true,
        'hallway_1': true
      },
      todayQuizDone: true,
      myComment: '아침 인사를 먼저 밝게 건네니 하루가 상쾌합니다!',
      students: [],
      gradeStudents: [],
      schoolStudents: [],
      teacherProposals: INITIAL_TEACHER_PROPOSALS,
      recommendedBooks: [...MIDDLE_SCHOOL_BOOKS],
      classGoalPoints: 35000,
      myReadingLogs: [],
      todayTypingRecords: [], // 오늘 통과한 타자 연습 기록 [{ cpm, acc, mode, time }]
      unknownWords: [],       // 챗봇이 답하지 못한 단어 (테스트 계정/오프라인용 로컬 사본)
      customDictionary: {}    // 관리자가 추가한 챗봇 사전 단어
    };
  }

  save() {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
      }
    } catch (e) {
      console.error('Failed to save state', e);
    }
    this.notify();
  }

  async saveToFirebase() {
    if (!this.isLoggedIn() || this.isTestAccount()) return;
    const uid = this.state.auth.uid;
    if (!uid) return;
    
    try {
      const dataToSave = {
        grade: this.state.userProfile.grade,
        classNum: this.state.userProfile.classNum,
        number: this.state.userProfile.number,
        realName: this.state.userProfile.realName,
        nickname: this.state.userProfile.nickname,
        mannersScore: this.state.mannersScore,
        typingScore: this.state.typingScore,
        readingScore: this.state.readingScore,
        totalPoints: this.state.totalPoints,
        typingBestCPM: this.state.typingBestCPM,
        typingAcc: this.state.typingAcc,
        typingAvgCPM: this.getTypingRecordSummary().avgCPM,
        streak: this.state.streak,
        updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
      };
      await db.collection('users').doc(uid).set(dataToSave, { merge: true });
    } catch (err) {
      console.error('Firebase DB Save Error:', err);
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this.state));
  }

  // 구글 로그인 또는 테스트 로그인 세션이 있는지
  isLoggedIn() {
    const { auth } = this.state;
    return !!(auth && auth.isLoggedIn && auth.uid);
  }

  isTestAccount() {
    return this.isLoggedIn() && !!this.state.auth.isTestAccount;
  }

  // 로그인된 계정이 교사 권한(자동 구분 또는 코드 승격)을 가졌는지
  isVerifiedTeacher() {
    return this.isLoggedIn() && this.state.auth.accountRole === 'teacher';
  }

  // 개발용 테스트 로그인 (Firebase 없이 학생/교사 상황 체험)
  loginAsTestAccount(role) {
    const isTeacher = role === 'teacher';
    this.state.auth = {
      isLoggedIn: true,
      provider: 'test',
      isTestAccount: true,
      uid: isTeacher ? 'test-teacher' : 'test-student',
      email: isTeacher ? 'test.teacher@kyunghee.sen.ms.kr' : '262301@kyunghee.sen.ms.kr',
      accountRole: isTeacher ? 'teacher' : 'student',
      roleSource: 'test'
    };
    this.state.userProfile = {
      ...this.state.userProfile,
      role: isTeacher ? 'teacher' : 'student',
      grade: 2,
      classNum: 3,
      number: 1,
      realName: isTeacher ? '테스트 선생님' : '김민준',
      nickname: isTeacher ? '담임선생님' : '별빛달빛'
    };
    if (!isTeacher) this.syncCurrentStudentToClassList();
    this.save();
  }

  // 화면 모드 전환 (교사 화면은 인증된 교사만 가능)
  setRole(role) {
    if (role === 'teacher' && !this.isVerifiedTeacher()) return false;
    this.state.userProfile.role = role;
    this.save();
    return true;
  }

  // 로그인 세션의 계정 정보와 권한을 반영
  applyAccount({ uid, email, accountRole, roleSource }) {
    this.state.auth = {
      ...this.state.auth,
      isLoggedIn: true,
      provider: this.state.auth && this.state.auth.isTestAccount ? 'test' : 'google',
      uid,
      email,
      accountRole,
      roleSource
    };
    this.state.userProfile.role = accountRole;
    this.save();
  }

  clearAccount() {
    this.state.auth = { isLoggedIn: false, provider: 'google', uid: null, email: '', accountRole: 'student', roleSource: 'default' };
    this.state.userProfile.role = 'student';
    this.save();
  }

  updateProfile(profileData) {
    this.state.userProfile = {
      ...this.state.userProfile,
      ...profileData
    };
    this.syncCurrentStudentToClassList();
    this.save();
    this.saveToFirebase();
  }

  // Formatting student name according to role visibility rule
  formatStudentName(student) {
    const isTeacher = this.state.userProfile.role === 'teacher';
    if (isTeacher) {
      return `${student.realName} (${student.nickname})`;
    }
    return student.nickname;
  }

  // Toggle individual sub-rule (each awards +10P)
  toggleSubRule(ruleId, points = 10) {
    const isChecked = !!this.state.todaySubChecked[ruleId];
    if (!isChecked) {
      this.state.todaySubChecked[ruleId] = true;
      this.addMannersScore(points);
    } else {
      delete this.state.todaySubChecked[ruleId];
      this.state.mannersScore = Math.max(0, this.state.mannersScore - points);
      this.state.totalPoints = Math.max(0, this.state.totalPoints - points);
      this.syncCurrentStudentToClassList();
      this.save();
    }
    return !isChecked;
  }

  // Teacher Proposal System with 70% Sympathy Approval
  proposeEtiquette({ domainId, rule, desc, proposer }) {
    const newProp = {
      id: `prop_${Date.now()}`,
      proposer: proposer || this.state.userProfile.realName + ' 선생님',
      date: this.getTodayString(),
      domainId,
      rule,
      desc,
      votes: ['t_creator'],
      totalTeachers: 10,
      status: 'pending'
    };
    this.state.teacherProposals.unshift(newProp);
    this.save();
    return newProp;
  }

  voteProposalSympathy(proposalId, teacherId = 't_curr') {
    return this.voteSympathy(proposalId, teacherId);
  }

  voteSympathy(proposalId, teacherId = 't_curr') {
    const prop = this.state.teacherProposals.find(p => p.id === proposalId);
    if (!prop) return false;

    if (!prop.votes.includes(teacherId)) {
      prop.votes.push(teacherId);
    }

    const rate = prop.votes.length / prop.totalTeachers;
    if (rate >= 0.70 && prop.status !== 'approved') {
      prop.status = 'approved';
      prop.approvedDate = this.getTodayString();
    }
    this.save();
    return {
      votesCount: prop.votes.length,
      totalTeachers: prop.totalTeachers,
      rate: Math.round(rate * 100),
      isApproved: prop.status === 'approved'
    };
  }

  // Teacher Recommended Books System
  addRecommendedBook({ title, author, publisher = '', coverIcon = '📘', category = '선생님 추천', desc = '', quotes = [], addedBy = '' }) {
    const newBook = {
      id: `b_teacher_${Date.now()}`,
      title: title.trim(),
      author: author.trim(),
      publisher: publisher.trim() || '추천도서',
      coverIcon: coverIcon || '🌟',
      category: category || '교사 추천도서',
      desc: desc.trim() || '선생님께서 학생들의 인성과 성장을 위해 추천하신 도서입니다.',
      quotes: quotes.length > 0 ? quotes : ['마음에 남는 인상 깊은 구절을 찾아 기록해 보세요.'],
      isTeacherAdded: true,
      addedBy: addedBy || `${this.state.userProfile.realName} 선생님`,
      date: this.getTodayString()
    };
    if (!this.state.recommendedBooks) {
      this.state.recommendedBooks = [...MIDDLE_SCHOOL_BOOKS];
    }
    this.state.recommendedBooks.unshift(newBook);
    this.save();
    return newBook;
  }

  getRecommendedBooks() {
    return [...(this.state.recommendedBooks || MIDDLE_SCHOOL_BOOKS)];
  }

  // Select class for teacher dashboard view
  setSelectedClassKey(key) {
    this.state.selectedClassKey = key;
    this.save();
  }

  getStudentsByClass(grade = 2, classNum = 3) {
    const g = Number(grade);
    const c = Number(classNum);
    return this.state.schoolStudents.filter(s => Number(s.grade) === g && Number(s.classNum) === c);
  }

  // Scoring methods
  addMannersScore(points) {
    this.state.mannersScore += points;
    this.state.totalPoints += points;
    this.syncCurrentStudentToClassList();
    this.save();
    this.logActivity('manner', points);
    this.saveToFirebase();
  }

  addTypingScore(points, cpm, acc) {
    const MAX_TYPING_POINTS = 200;
    const todayEarned = this.state.todayTypingPoints || 0;
    const actualEarned = Math.min(points, MAX_TYPING_POINTS - todayEarned);
    
    if (actualEarned > 0) {
      this.state.todayTypingPoints = todayEarned + actualEarned;
      this.state.typingScore += actualEarned;
      this.state.totalPoints += actualEarned;
      this.logActivity('typing', actualEarned);
    }

    if (cpm > this.state.typingBestCPM) {
      this.state.typingBestCPM = cpm;
    }
    if (acc > this.state.typingAcc) {
      this.state.typingAcc = acc;
    }
    this.syncCurrentStudentToClassList();
    this.save();
    this.saveToFirebase();
  }

  // 통과한 타자 연습 결과를 오늘 기록에 추가
  recordTypingResult(cpm, acc, mode) {
    if (!this.state.todayTypingRecords) this.state.todayTypingRecords = [];
    this.state.todayTypingRecords.push({ cpm, acc, mode, time: Date.now() });
    if (this.state.todayTypingRecords.length > 200) this.state.todayTypingRecords.shift();
    this.save();
  }

  // 이전 타수(직전 통과 기록)와 오늘 연습 평균 타수
  getTypingRecordSummary() {
    const records = this.state.todayTypingRecords || [];
    const count = records.length;
    const prevCPM = count > 0 ? records[count - 1].cpm : 0;
    const avgCPM = count > 0 ? Math.round(records.reduce((sum, r) => sum + r.cpm, 0) / count) : 0;
    return { count, prevCPM, avgCPM };
  }

  // ===== 챗봇 미등록 단어 / 관리자 사전 =====
  normalizeWordId(word) {
    return String(word).trim().slice(0, 50).replace(/\//g, '_') || '_';
  }

  // 챗봇이 답하지 못한 단어를 기록 (같은 단어는 요청 횟수만 증가)
  async recordUnknownWord(word) {
    const text = String(word).trim().slice(0, 50);
    if (!text) return;
    const id = this.normalizeWordId(text);

    const local = this.state.unknownWords.find(w => w.id === id);
    if (local) {
      local.count += 1;
      local.lastAskedAt = Date.now();
    } else {
      this.state.unknownWords.unshift({ id, word: text, count: 1, lastAskedAt: Date.now() });
    }
    this.save();

    if (!this.isLoggedIn() || this.isTestAccount()) return;
    try {
      const FieldValue = window.firebase.firestore.FieldValue;
      await db.collection('unknownWords').doc(id).set({
        word: text,
        count: FieldValue.increment(1),
        lastAskedAt: FieldValue.serverTimestamp(),
        lastAskedBy: this.state.auth.uid
      }, { merge: true });
    } catch (e) {
      console.error('Unknown word save error:', e);
    }
  }

  // 교사 대시보드에서 미등록 단어 실시간 조회 (교사만 읽기 권한)
  listenToUnknownWords(onChange = () => {}) {
    this.onUnknownWordsChange = onChange;
    if (this.unknownWordsUnsub || !this.isVerifiedTeacher() || this.isTestAccount()) return;
    try {
      this.unknownWordsUnsub = db.collection('unknownWords').onSnapshot(snapshot => {
        const words = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          words.push({
            id: doc.id,
            word: data.word || doc.id,
            count: data.count || 1,
            lastAskedAt: data.lastAskedAt ? data.lastAskedAt.toMillis() : 0
          });
        });
        const changed = JSON.stringify(words.map(w => [w.id, w.count])) !==
          JSON.stringify(this.state.unknownWords.map(w => [w.id, w.count]));
        this.state.unknownWords = words;
        this.save();
        if (changed) this.onUnknownWordsChange();
      }, err => {
        console.warn('unknownWords listen error:', err);
        this.unknownWordsUnsub = null;
      });
    } catch (e) {
      console.warn('unknownWords listen error:', e);
    }
  }

  getUnknownWords() {
    return [...(this.state.unknownWords || [])].sort((a, b) => b.count - a.count || b.lastAskedAt - a.lastAskedAt);
  }

  listenToCustomDictionary() {
    if (typeof window.firebase === 'undefined') return;
    try {
      db.collection('slangDictionary').onSnapshot(snapshot => {
        const dict = {};
        snapshot.forEach(doc => {
          const { word, etymology, meaning, correct } = doc.data();
          dict[word || doc.id] = { etymology, meaning, correct };
        });
        this.state.customDictionary = dict;
        this.save();
      }, err => console.warn('slangDictionary listen error:', err));
    } catch (e) {
      console.warn('slangDictionary listen error:', e);
    }
  }

  getCustomDictionary() {
    return this.state.customDictionary || {};
  }

  // 관리자(교사)가 단어 뜻을 사전에 추가하고 미등록 목록에서 제거
  async addDictionaryWord({ word, etymology, meaning, correct }) {
    const text = String(word).trim().slice(0, 50);
    const id = this.normalizeWordId(text);
    const entry = { etymology: etymology.trim(), meaning: meaning.trim(), correct: correct.trim() };

    this.state.customDictionary = { ...this.getCustomDictionary(), [text]: entry };
    this.state.unknownWords = this.state.unknownWords.filter(w => w.id !== id);
    this.save();

    if (!this.isLoggedIn() || this.isTestAccount()) return true;
    try {
      await db.collection('slangDictionary').doc(id).set({
        word: text,
        ...entry,
        addedBy: this.state.auth.uid,
        updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
      });
      await db.collection('unknownWords').doc(id).delete();
      return true;
    } catch (e) {
      console.error('Dictionary save error:', e);
      return false;
    }
  }

  async deleteUnknownWord(id) {
    this.state.unknownWords = this.state.unknownWords.filter(w => w.id !== id);
    this.save();
    if (!this.isLoggedIn() || this.isTestAccount()) return;
    try {
      await db.collection('unknownWords').doc(id).delete();
    } catch (e) {
      console.error('Unknown word delete error:', e);
    }
  }

  addReadingScore(points, readingEntry) {
    this.state.readingScore += points;
    this.state.totalPoints += points;
    if (readingEntry) {
      if (!this.state.myReadingLogs) this.state.myReadingLogs = [];
      this.state.myReadingLogs.unshift({
        ...readingEntry,
        date: this.getTodayString(),
        pointsEarned: points
      });
    }
    this.syncCurrentStudentToClassList();
    this.save();
    this.logActivity('reading', points);
    this.saveToFirebase();
  }

  completeQuiz(points = 20) {
    if (this.state.todayQuizDone) return false;
    this.state.todayQuizDone = true;
    this.state.mannersScore += points;
    this.state.totalPoints += points;
    this.syncCurrentStudentToClassList();
    this.save();
    this.logActivity('quiz', points);
    this.saveToFirebase();
    return true;
  }

  updateComment(newComment) {
    this.state.myComment = newComment.trim();
    this.syncCurrentStudentToClassList();
    this.save();
  }

  giveTeacherPraise(studentNumber, bonusPoints = 50, classNum = 3, grade = 2) {
    const list = this.getStudentsByClass(grade, classNum);
    const s = list.find(item => item.number === studentNumber);
    if (s) {
      s.mannersScore += bonusPoints;
      s.totalPoints += bonusPoints;
      s.hasSticker = true;
      if (s.number === this.state.userProfile.number && s.classNum === this.state.userProfile.classNum) {
        this.state.mannersScore += bonusPoints;
        this.state.totalPoints += bonusPoints;
      }
      this.save();
      return true;
    }
    return false;
  }

  syncCurrentStudentToClassList() {
    const { number: num, grade, classNum } = this.state.userProfile;
    // 예시 학생 데이터는 내 기록으로 덮어쓰지 않음
    const idx = this.state.students.findIndex(s => !s.isSample && s.number === num
      && Number(s.grade) === Number(grade) && Number(s.classNum) === Number(classNum));
    if (idx >= 0) {
      this.state.students[idx] = {
        ...this.state.students[idx],
        realName: this.state.userProfile.realName,
        nickname: this.state.userProfile.nickname,
        mannersScore: this.state.mannersScore,
        typingScore: this.state.typingScore,
        readingScore: this.state.readingScore,
        totalPoints: this.state.totalPoints,
        streak: this.state.streak,
        typingBestCPM: this.state.typingBestCPM,
        typingAcc: this.state.typingAcc,
        checked: Object.keys(this.state.todaySubChecked).length > 0,
        quizDone: this.state.todayQuizDone,
        comment: this.state.myComment
      };
    }
  }

  // Get Top 20 sorted by category ('total' | 'manners' | 'typing' | 'reading') & scope ('class' | 'grade' | 'school')
  getRankedStudents(category = 'total', scope = 'class', classKey = this.state.selectedClassKey || '2-3') {
    let sourceList = this.state.students;
    if (scope === 'class') {
      const [g, c] = classKey.split('-').map(Number);
      sourceList = this.getStudentsByClass(g, c);
    } else if (scope === 'grade') {
      sourceList = this.state.gradeStudents; // Grade 2 (196 students)
    } else if (scope === 'school') {
      sourceList = this.state.schoolStudents; // School (588 students)
    }

    const copy = [...sourceList];
    if (category === 'manners') {
      return copy.sort((a, b) => b.mannersScore - a.mannersScore);
    } else if (category === 'typing') {
      return copy.sort((a, b) => b.typingScore - a.typingScore);
    } else if (category === 'reading') {
      return copy.sort((a, b) => b.readingScore - a.readingScore);
    }
    return copy.sort((a, b) => b.totalPoints - a.totalPoints);
  }

  getClassStats(classKey = this.state.selectedClassKey || '2-3') {
    const [g, c] = classKey.split('-').map(Number);
    const students = this.getStudentsByClass(g, c);
    const total = students.length;
    const completedCount = students.filter(s => s.checked && s.quizDone).length;
    const activeCount = students.filter(s => s.checked || s.quizDone).length;
    const avgCPM = total > 0 ? Math.round(students.reduce((acc, cur) => acc + (cur.typingBestCPM || 0), 0) / total) : 0;
    const totalClassPoints = students.reduce((acc, cur) => acc + (cur.totalPoints || 0), 0);
    const avgPoints = total > 0 ? Math.round(totalClassPoints / total) : 0;
    const mannersAvg = total > 0 ? Math.round(students.reduce((acc, cur) => acc + (cur.mannersScore || 0), 0) / total) : 0;
    const typingAvg = total > 0 ? Math.round(students.reduce((acc, cur) => acc + (cur.typingScore || 0), 0) / total) : 0;
    const readingAvg = total > 0 ? Math.round(students.reduce((acc, cur) => acc + (cur.readingScore || 0), 0) / total) : 0;
    const participationRate = total > 0 ? Math.round((activeCount / total) * 100) : 0;

    return {
      total,
      studentCount: total,
      completedCount,
      activeCount,
      avgCPM,
      totalClassPoints,
      avgPoints,
      totalAvg: avgPoints,
      mannersAvg,
      typingAvg,
      readingAvg,
      participationRate
    };
  }

  checkBadges() {
    return BADGES.filter(b => b.req(this.state));
  }

  setStudentList(list) {
    this.state.students = list.map(s => ({ ...s }));
    this.state.schoolStudents = this.state.students;
    this.state.gradeStudents = this.state.students.filter(s => s.grade === this.state.userProfile.grade);
  }

  // 아직 실제 학생 데이터가 없어 예시 학생을 보여주는 중인지
  isShowingSampleStudents() {
    return this.state.students.length > 0 && this.state.students.every(s => s.isSample);
  }

  listenToAllUsers() {
    if (typeof window.firebase === 'undefined') return;
    try {
      const db = window.firebase.firestore();
      db.collection('users').onSnapshot(snapshot => {
        const realStudents = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          if (data.role === 'student') {
            realStudents.push({ ...data, uid: doc.id });
          }
        });
        this.setStudentList(realStudents.length ? realStudents : SAMPLE_STUDENTS);
        this.notify();
      }, err => {
        // 권한이 없으면 예시 학생 데이터를 그대로 유지
        console.warn('Firestore listenToAllUsers error:', err.code || err);
      });
    } catch (e) {
      console.warn("Firestore listenToAllUsers error:", e);
    }
  }

  async logActivity(type, points, details = '') {
    if (!this.isLoggedIn() || this.isTestAccount()) return;
    const uid = this.state.auth.uid;
    if (!uid) return;
    try {
      const db = window.firebase.firestore();
      await db.collection('activities').add({
        uid,
        userName: this.state.userProfile.realName || this.state.userProfile.nickname || '학생',
        userGrade: this.state.userProfile.grade || 2,
        userClass: this.state.userProfile.classNum || 3,
        userNumber: this.state.userProfile.number || 1,
        type, // 'manner', 'typing', 'reading', 'quiz'
        points,
        details,
        timestamp: window.firebase.firestore.FieldValue.serverTimestamp()
      });
    } catch (e) {
      console.error('Activity Log Error:', e);
    }
  }
}


export const appState = new AppState();
