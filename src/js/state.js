// Application state management with 21 Classes (7 per grade), 28 students capacity, and Teacher Book Addition
import { INITIAL_TEACHER_PROPOSALS } from './etiquette-data.js';
import { MIDDLE_SCHOOL_BOOKS } from './reading-data.js';

const STORAGE_KEY = 'pyeonhakwi_ms_state_v4';

// 28 realistic Middle School students (2학년 3반 - 최대 28명 정원)
export const INITIAL_STUDENTS_28 = [
  {
    number: 1,
    grade: 2,
    classNum: 3,
    realName: '김민준',
    nickname: '별빛달빛',
    mannersScore: 480,
    typingScore: 540,
    readingScore: 320,
    totalPoints: 1340,
    typingBestCPM: 365,
    typingAcc: 98,
    streak: 8,
    checked: true,
    quizDone: true,
    comment: '아침 인사를 먼저 밝게 건네니 하루가 상쾌합니다!',
    hasSticker: true
  },
  {
    number: 2,
    grade: 2,
    classNum: 3,
    realName: '이서연',
    nickname: '책읽는사자',
    mannersScore: 520,
    typingScore: 610,
    readingScore: 490,
    totalPoints: 1620,
    typingBestCPM: 425,
    typingAcc: 99,
    streak: 11,
    checked: true,
    quizDone: true,
    comment: '《시간을 파는 상점》을 읽고 매일 5분의 소중함을 실감했어요.',
    hasSticker: true
  },
  {
    number: 3,
    grade: 2,
    classNum: 3,
    realName: '박도윤',
    nickname: '새벽구름',
    mannersScore: 390,
    typingScore: 410,
    readingScore: 280,
    totalPoints: 1080,
    typingBestCPM: 295,
    typingAcc: 94,
    streak: 5,
    checked: true,
    quizDone: false,
    comment: '책상 위 교과서 정돈과 복도 우측통행을 지키고 있어요.',
    hasSticker: false
  },
  {
    number: 4,
    grade: 2,
    classNum: 3,
    realName: '정예은',
    nickname: '꿈꾸는고래',
    mannersScore: 510,
    typingScore: 480,
    readingScore: 460,
    totalPoints: 1450,
    typingBestCPM: 380,
    typingAcc: 97,
    streak: 9,
    checked: true,
    quizDone: true,
    comment: '친구들에게 고운 말 쓰기를 온·오프라인에서 모두 실천 중입니다.',
    hasSticker: true
  },
  {
    number: 5,
    grade: 2,
    classNum: 3,
    realName: '최시우',
    nickname: '푸른하늘',
    mannersScore: 310,
    typingScore: 330,
    readingScore: 210,
    totalPoints: 850,
    typingBestCPM: 240,
    typingAcc: 91,
    streak: 3,
    checked: false,
    quizDone: false,
    comment: '한컴 자리연습으로 기본기부터 탄탄히 채우고 있습니다.',
    hasSticker: false
  },
  {
    number: 6,
    grade: 2,
    classNum: 3,
    realName: '강지아',
    nickname: '바람소리',
    mannersScore: 560,
    typingScore: 640,
    readingScore: 520,
    totalPoints: 1720,
    typingBestCPM: 460,
    typingAcc: 100,
    streak: 14,
    checked: true,
    quizDone: true,
    comment: '《원더》의 친절 명언처럼 친구의 실수를 따뜻하게 안아줄게요.',
    hasSticker: true
  },
  {
    number: 7,
    grade: 2,
    classNum: 3,
    realName: '윤하준',
    nickname: '달콤초코',
    mannersScore: 420,
    typingScore: 390,
    readingScore: 310,
    totalPoints: 1120,
    typingBestCPM: 315,
    typingAcc: 95,
    streak: 6,
    checked: true,
    quizDone: false,
    comment: '급식실에서 새치기 안 하고 실무사님께 감사 인사하기 성공!',
    hasSticker: false
  },
  {
    number: 8,
    grade: 2,
    classNum: 3,
    realName: '한소율',
    nickname: '은하수별',
    mannersScore: 460,
    typingScore: 490,
    readingScore: 390,
    totalPoints: 1340,
    typingBestCPM: 350,
    typingAcc: 96,
    streak: 7,
    checked: true,
    quizDone: true,
    comment: '아침 독서 후 짧은 글 타자 연습을 하니 집중력이 훨씬 높아져요.',
    hasSticker: false
  },
  {
    number: 9,
    grade: 2,
    classNum: 3,
    realName: '송지호',
    nickname: '날아라우주',
    mannersScore: 280,
    typingScore: 290,
    readingScore: 180,
    totalPoints: 750,
    typingBestCPM: 210,
    typingAcc: 89,
    streak: 2,
    checked: false,
    quizDone: false,
    comment: '독수리 타법 벗어나기 1단계 기본자리 마스터 도전!',
    hasSticker: false
  },
  {
    number: 10,
    grade: 2,
    classNum: 3,
    realName: '배채원',
    nickname: '초록풀잎',
    mannersScore: 490,
    typingScore: 520,
    readingScore: 410,
    totalPoints: 1420,
    typingBestCPM: 390,
    typingAcc: 98,
    streak: 8,
    checked: true,
    quizDone: true,
    comment: '선생님 설명하실 때 디벗 화면 덮기 규칙을 확실하게 지킵니다.',
    hasSticker: true
  },
  {
    number: 11,
    grade: 2,
    classNum: 3,
    realName: '오은우',
    nickname: '미소천사',
    mannersScore: 440,
    typingScore: 460,
    readingScore: 350,
    totalPoints: 1250,
    typingBestCPM: 330,
    typingAcc: 95,
    streak: 6,
    checked: true,
    quizDone: true,
    comment: '등굣길 스마트폰 대신 주변 친구들에게 밝은 아침 인사를 건넸어요.',
    hasSticker: false
  },
  {
    number: 12,
    grade: 2,
    classNum: 3,
    realName: '임수아',
    nickname: '용감한호랑이',
    mannersScore: 380,
    typingScore: 370,
    readingScore: 290,
    totalPoints: 1040,
    typingBestCPM: 285,
    typingAcc: 93,
    streak: 4,
    checked: true,
    quizDone: false,
    comment: '《아몬드》를 읽고 진정한 공감의 의미를 배우고 있습니다.',
    hasSticker: false
  },
  {
    number: 13,
    grade: 2,
    classNum: 3,
    realName: '권현우',
    nickname: '햇살가득',
    mannersScore: 320,
    typingScore: 310,
    readingScore: 220,
    totalPoints: 850,
    typingBestCPM: 250,
    typingAcc: 90,
    streak: 3,
    checked: false,
    quizDone: false,
    comment: '내일부터는 10분 일찍 등교하여 아침 독서에 빠져보겠습니다.',
    hasSticker: false
  },
  {
    number: 14,
    grade: 2,
    classNum: 3,
    realName: '신유나',
    nickname: '지혜올빼미',
    mannersScore: 530,
    typingScore: 560,
    readingScore: 480,
    totalPoints: 1570,
    typingBestCPM: 410,
    typingAcc: 98,
    streak: 10,
    checked: true,
    quizDone: true,
    comment: '친구 칭찬 한마디와 디벗 안전 충전으로 하루를 보람차게 마무리합니다.',
    hasSticker: true
  },
  {
    number: 15,
    grade: 2,
    classNum: 3,
    realName: '유재원',
    nickname: '무지개빛',
    mannersScore: 510,
    typingScore: 590,
    readingScore: 440,
    totalPoints: 1540,
    typingBestCPM: 435,
    typingAcc: 99,
    streak: 11,
    checked: true,
    quizDone: true,
    comment: '영문 타자와 한글 타자 모두 400타 돌파 목표!',
    hasSticker: true
  },
  {
    number: 16,
    grade: 2,
    classNum: 3,
    realName: '조하은',
    nickname: '맑은샘물',
    mannersScore: 470,
    typingScore: 450,
    readingScore: 370,
    totalPoints: 1290,
    typingBestCPM: 340,
    typingAcc: 96,
    streak: 7,
    checked: true,
    quizDone: true,
    comment: '이동 수업 시 다른 반 교실 복도에서 정숙하게 걷기 실천 중!',
    hasSticker: false
  },
  {
    number: 17,
    grade: 2,
    classNum: 3,
    realName: '서진우',
    nickname: '봄날의햇살',
    mannersScore: 360,
    typingScore: 350,
    readingScore: 270,
    totalPoints: 980,
    typingBestCPM: 275,
    typingAcc: 92,
    streak: 4,
    checked: true,
    quizDone: false,
    comment: '식판 반납할 때 수저 분리와 잔반 처리를 깨끗이 했습니다.',
    hasSticker: false
  },
  {
    number: 18,
    grade: 2,
    classNum: 3,
    realName: '문채은',
    nickname: '푸른바다',
    mannersScore: 450,
    typingScore: 480,
    readingScore: 400,
    totalPoints: 1330,
    typingBestCPM: 360,
    typingAcc: 97,
    streak: 8,
    checked: true,
    quizDone: true,
    comment: '《체리새우》를 읽고 내 소신을 다정하게 말하는 법을 배웠어요.',
    hasSticker: false
  },
  {
    number: 19,
    grade: 2,
    classNum: 3,
    realName: '황도현',
    nickname: '은빛날개',
    mannersScore: 290,
    typingScore: 320,
    readingScore: 190,
    totalPoints: 800,
    typingBestCPM: 230,
    typingAcc: 89,
    streak: 2,
    checked: false,
    quizDone: false,
    comment: '타자 속도를 조금씩 올리는 성취감이 쏠쏠합니다.',
    hasSticker: false
  },
  {
    number: 20,
    grade: 2,
    classNum: 3,
    realName: '안서진',
    nickname: '숲속요정',
    mannersScore: 490,
    typingScore: 510,
    readingScore: 430,
    totalPoints: 1430,
    typingBestCPM: 375,
    typingAcc: 97,
    streak: 9,
    checked: true,
    quizDone: true,
    comment: '배움터 지킴이 선생님께 드린 아침 인사에 하루가 환해졌습니다.',
    hasSticker: true
  },
  {
    number: 21,
    grade: 2,
    classNum: 3,
    realName: '장민서',
    nickname: '은빛바람',
    mannersScore: 430,
    typingScore: 470,
    readingScore: 360,
    totalPoints: 1260,
    typingBestCPM: 345,
    typingAcc: 96,
    streak: 6,
    checked: true,
    quizDone: true,
    comment: '친구들과 서로 존중하며 하루를 시작합니다.',
    hasSticker: false
  },
  {
    number: 22,
    grade: 2,
    classNum: 3,
    realName: '송태양',
    nickname: '해오름',
    mannersScore: 370,
    typingScore: 420,
    readingScore: 290,
    totalPoints: 1080,
    typingBestCPM: 290,
    typingAcc: 93,
    streak: 5,
    checked: true,
    quizDone: false,
    comment: '아침 독서로 마음을 가다듬고 수업에 집중해요.',
    hasSticker: false
  },
  {
    number: 23,
    grade: 2,
    classNum: 3,
    realName: '전지우',
    nickname: '푸른숲',
    mannersScore: 500,
    typingScore: 530,
    readingScore: 450,
    totalPoints: 1480,
    typingBestCPM: 400,
    typingAcc: 98,
    streak: 9,
    checked: true,
    quizDone: true,
    comment: '디벗 안전 수칙을 잘 지켜 모범이 되겠습니다.',
    hasSticker: true
  },
  {
    number: 24,
    grade: 2,
    classNum: 3,
    realName: '황보민',
    nickname: '새솔',
    mannersScore: 340,
    typingScore: 360,
    readingScore: 240,
    totalPoints: 940,
    typingBestCPM: 260,
    typingAcc: 91,
    streak: 3,
    checked: true,
    quizDone: false,
    comment: '자리연습부터 차근차근 타수를 늘려가고 있어요.',
    hasSticker: false
  },
  {
    number: 25,
    grade: 2,
    classNum: 3,
    realName: '고도현',
    nickname: '샛별',
    mannersScore: 460,
    typingScore: 490,
    readingScore: 380,
    totalPoints: 1330,
    typingBestCPM: 355,
    typingAcc: 96,
    streak: 7,
    checked: true,
    quizDone: true,
    comment: '급식실 질서와 잔반 줄이기를 앞장서서 실천합니다.',
    hasSticker: false
  },
  {
    number: 26,
    grade: 2,
    classNum: 3,
    realName: '남궁은',
    nickname: '달빛소나타',
    mannersScore: 520,
    typingScore: 580,
    readingScore: 470,
    totalPoints: 1570,
    typingBestCPM: 415,
    typingAcc: 99,
    streak: 11,
    checked: true,
    quizDone: true,
    comment: '《페인트》를 읽고 진정한 가족과 성장의 의미를 깨달았어요.',
    hasSticker: true
  },
  {
    number: 27,
    grade: 2,
    classNum: 3,
    realName: '조시윤',
    nickname: '물보라',
    mannersScore: 390,
    typingScore: 380,
    readingScore: 300,
    totalPoints: 1070,
    typingBestCPM: 280,
    typingAcc: 92,
    streak: 4,
    checked: true,
    quizDone: false,
    comment: '복도에서 뛰지 않고 우측보행을 철저히 지킵니다.',
    hasSticker: false
  },
  {
    number: 28,
    grade: 2,
    classNum: 3,
    realName: '유서진',
    nickname: '초록별',
    mannersScore: 480,
    typingScore: 510,
    readingScore: 410,
    totalPoints: 1400,
    typingBestCPM: 370,
    typingAcc: 97,
    streak: 8,
    checked: true,
    quizDone: true,
    comment: '아침 인사를 밝게 나누니 하루의 시작이 활기차요!',
    hasSticker: true
  }
];

// Ensure each initial student has an id property
INITIAL_STUDENTS_28.forEach((s, idx) => {
  if (!s.id) s.id = `s_2_3_${s.number || idx + 1}`;
});

// Alias for backwards compatibility
export const INITIAL_STUDENTS_20 = INITIAL_STUDENTS_28;

// Generate 21 Classes (3 Grades × 7 Classes) with up to 28 students each (Total 588 students)
function generateExpandedStudents() {
  const gradeStudents = [];
  const schoolStudents = [];

  for (let g = 1; g <= 3; g++) {
    for (let c = 1; c <= 7; c++) {
      for (let n = 1; n <= 28; n++) {
        const isOurClass = (g === 2 && c === 3);
        if (isOurClass) {
          const student = INITIAL_STUDENTS_28[n - 1];
          if (g === 2) gradeStudents.push(student);
          schoolStudents.push(student);
        } else {
          const factor = 0.72 + (Math.sin(g * 17 + c * 9 + n) + 1) * 0.28;
          const st = {
            id: `s_${g}_${c}_${n}`,
            number: n,
            grade: g,
            classNum: c,
            realName: `학생${g}-${c}-${n}`,
            nickname: `${g}학년${c}반_${n}번러너`,
            mannersScore: Math.round(410 * factor),
            typingScore: Math.round(460 * factor),
            readingScore: Math.round(330 * factor),
            totalPoints: Math.round(1200 * factor),
            typingBestCPM: Math.round(315 * factor),
            typingAcc: 94,
            streak: Math.max(1, Math.round(6 * factor)),
            checked: (n % 4 !== 0),
            quizDone: (n % 3 !== 0),
            comment: `${g}학년 ${c}반 아침 루틴에 성실히 참여하고 있습니다.`
          };
          if (g === 2) gradeStudents.push(st);
          schoolStudents.push(st);
        }
      }
    }
  }

  return { gradeStudents, schoolStudents };
}

const { gradeStudents: GRADE_STUDENTS_ALL, schoolStudents: SCHOOL_STUDENTS_ALL } = generateExpandedStudents();

export const BADGES = [
  { id: 'first_step', name: '첫 발자국', desc: '바름5분 첫 활동 완료', icon: '🌱', req: (s) => s.totalPoints >= 20 },
  { id: 'streak_3', name: '3일의 결심', desc: '3일 연속 아침 루틴 달성', icon: '🔥', req: (s) => s.streak >= 3 },
  { id: 'streak_7', name: '아침의 지배자', desc: '7일 연속 아침 루틴 달성', icon: '👑', req: (s) => s.streak >= 7 },
  { id: 'typer_250', name: '타자 루키', desc: '타자 연습 250타 달성', icon: '⌨️', req: (s) => s.typingBestCPM >= 250 },
  { id: 'typer_400', name: '타자 마스터', desc: '타자 연습 400타 달성', icon: '⚡', req: (s) => s.typingBestCPM >= 400 },
  { id: 'accuracy_98', name: '명사수', desc: '타자 정확도 98% 이상 달성', icon: '🎯', req: (s) => s.typingAcc >= 98 },
  { id: 'reading_worm', name: '아침 다독왕', desc: '독서기록 300점 이상 달성', icon: '📚', req: (s) => s.readingScore >= 300 },
  { id: 'manners_master', name: '예절 박사', desc: '예절 실천 400점 이상 달성', icon: '🎓', req: (s) => s.mannersScore >= 400 }
];

export class AppState {
  constructor() {
    this.listeners = [];
    this.state = this.loadState();
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
          }
          if (!parsed.recommendedBooks || parsed.recommendedBooks.length === 0) {
            parsed.recommendedBooks = [...MIDDLE_SCHOOL_BOOKS];
          }
          if (!parsed.selectedClassKey) {
            parsed.selectedClassKey = '2-3';
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
        isLoggedIn: true,
        provider: 'google',
        email: 'minjun.kim@seoul-ms.kr',
        avatarUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=minjun'
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
      students: INITIAL_STUDENTS_28,
      gradeStudents: GRADE_STUDENTS_ALL,
      schoolStudents: SCHOOL_STUDENTS_ALL,
      teacherProposals: INITIAL_TEACHER_PROPOSALS,
      recommendedBooks: [...MIDDLE_SCHOOL_BOOKS],
      classGoalPoints: 35000,
      myReadingLogs: []
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

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this.state));
  }

  setRole(role) {
    this.state.userProfile.role = role;
    this.save();
  }

  updateProfile(profileData) {
    this.state.userProfile = {
      ...this.state.userProfile,
      ...profileData
    };
    this.syncCurrentStudentToClassList();
    this.save();
  }

  // Formatting student name according to role visibility rule
  formatStudentName(student) {
    const isTeacher = this.state.userProfile.role === 'teacher';
    if (isTeacher) {
      return `${student.realName} (${student.nickname})`;
    }
    return student.nickname;
  }

  // Toggle individual sub-rule (each awards +5P)
  toggleSubRule(ruleId, points = 5) {
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
    if (g === 2 && c === 3) return this.state.students;
    return this.state.schoolStudents.filter(s => s.grade === g && s.classNum === c);
  }

  // Scoring methods
  addMannersScore(points) {
    this.state.mannersScore += points;
    this.state.totalPoints += points;
    this.syncCurrentStudentToClassList();
    this.save();
  }

  addTypingScore(points, cpm, acc) {
    this.state.typingScore += points;
    this.state.totalPoints += points;
    if (cpm > this.state.typingBestCPM) {
      this.state.typingBestCPM = cpm;
    }
    if (acc > this.state.typingAcc) {
      this.state.typingAcc = acc;
    }
    this.syncCurrentStudentToClassList();
    this.save();
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
  }

  completeQuiz(points = 20) {
    if (this.state.todayQuizDone) return false;
    this.state.todayQuizDone = true;
    this.state.mannersScore += points;
    this.state.totalPoints += points;
    this.syncCurrentStudentToClassList();
    this.save();
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
    const num = this.state.userProfile.number;
    const idx = this.state.students.findIndex(s => s.number === num);
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
}

export const appState = new AppState();
