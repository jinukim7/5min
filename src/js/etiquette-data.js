// Middle School 5 key etiquette guidelines with 4 individual sub-rules & Teacher proposal system

export const ETIQUETTE_DOMAINS = [
  {
    id: 'arrival',
    title: '등교 매너',
    icon: '🏫',
    badge: 'Morning Routine',
    color: '#3B82F6',
    guidelines: [
      {
        id: 'arrival_1',
        rule: '선생님과 배움터 지킴이 선생님께 공손한 인사',
        desc: '교문과 현관에서 멈추어 서서 눈을 마주치며 "선생님, 좋은 아침입니다!" 하고 허리를 숙여 바르게 인사합니다.',
        points: 5
      },
      {
        id: 'arrival_2',
        rule: '보행 안전을 위해 스마트폰과 이어폰 보관',
        desc: '등굣길 횡단보도나 골목길을 걸을 때는 스마트폰 영상을 보거나 음악을 듣지 않고, 폰은 가방에 넣고 이어폰은 뺍니다.',
        points: 5
      },
      {
        id: 'arrival_3',
        rule: '등굣길 친구를 만나면 반갑게 인사',
        desc: '마주치는 학급 친구들과 선후배들에게 밝은 미소와 목소리로 먼저 안부를 건넵니다.',
        points: 5
      },
      {
        id: 'arrival_4',
        rule: '자전거·전동킥보드 등하교 안전 수칙 준수',
        desc: '보호장구(헬멧)를 반드시 착용하며, 교문 진입 전에는 자전거에서 내려 끌고 안전하게 보행합니다.',
        points: 5
      }
    ]
  },
  {
    id: 'hallway',
    title: '교실과 복도 매너',
    icon: '🚶',
    badge: 'Class & Hallway',
    color: '#10B981',
    guidelines: [
      {
        id: 'hallway_1',
        rule: '비속어 대신 친구를 존중하는 언어 사용',
        desc: '욕설, 혐오 표현, 남을 깎아내리는 줄임말 대신 상대방의 기분을 배려하는 따뜻하고 고운 말을 씁니다.',
        points: 5
      },
      {
        id: 'hallway_2',
        rule: '부딪치거나 부주의했을 때 즉시 진심 어린 사과',
        desc: '복도에서 친구와 부딪치거나 발을 밟았을 때는 당황하거나 짜증내지 않고 "미안해, 다치지 않았어?" 하고 먼저 살핍니다.',
        points: 5
      },
      {
        id: 'hallway_3',
        rule: '복도와 계단에서 우측보행 및 안전 이동',
        desc: '쉬는 시간이나 이동 수업 시 절대 뛰지 않고 오른쪽으로 천천히 걸으며 모퉁이에서는 속도를 줄입니다.',
        points: 5
      },
      {
        id: 'hallway_4',
        rule: '다른 반 교실 수업 방해 금지',
        desc: '이동 수업을 위해 다른 반 앞을 지나갈 때는 창문으로 안을 들여다보거나 큰 소리로 떠들지 않습니다.',
        points: 5
      }
    ]
  },
  {
    id: 'cafeteria',
    title: '급식실 매너',
    icon: '🍱',
    badge: 'Cafeteria',
    color: '#F59E0B',
    guidelines: [
      {
        id: 'cafeteria_1',
        rule: '새치기 및 자리 맡기 절대 금지',
        desc: '배식구 앞에서 친구를 끼워주거나 자리 맡기를 하지 않고 온 순서대로 바르게 한 줄 서기를 지킵니다.',
        points: 5
      },
      {
        id: 'cafeteria_2',
        rule: '영양사 선생님과 조리실무사님께 감사 인사',
        desc: '음식을 배식받을 때는 "감사합니다! 맛있게 잘 먹겠습니다"라고 눈을 맞추며 공손하게 감사를 표현합니다.',
        points: 5
      },
      {
        id: 'cafeteria_3',
        rule: '단정하고 청결한 식사 태도',
        desc: '식사 중 큰 소리로 떠들거나 음식물을 튀기지 않고, 흘린 음식은 휴지로 스스로 깨끗이 닦습니다.',
        points: 5
      },
      {
        id: 'cafeteria_4',
        rule: '잔반 줄이기 및 올바른 식판·수저 반납',
        desc: '먹을 만큼만 받고, 다 먹은 식판은 잔반을 깔끔히 비운 뒤 수저통과 식판대에 정돈하여 차례로 반납합니다.',
        points: 5
      }
    ]
  },
  {
    id: 'class_debeot',
    title: '수업시 & 디벗 매너',
    icon: '💻',
    badge: 'Class & Digital',
    color: '#8B5CF6',
    guidelines: [
      {
        id: 'class_debeot_1',
        rule: '예비종 울리면 자리 착석 및 수업 준비',
        desc: '종이 울리기 전 교과서, 필기구, 필요한 학습지를 책상 위에 단정히 두고 바른 자세로 착석합니다.',
        points: 5
      },
      {
        id: 'class_debeot_2',
        rule: '선생님 설명 중 디벗 화면 덮기(화면 엎어두기)',
        desc: '디벗(태블릿)은 선생님의 지시가 있을 때만 켜고, 설명 중에는 화면을 덮어두어 시선을 선생님께 집중합니다.',
        points: 5
      },
      {
        id: 'class_debeot_3',
        rule: '수업 중 비학습 목적 기기 사용 절대 금지',
        desc: '수업 시간에 게임, 유튜브 시청, SNS, 친구와의 실시간 채팅 등 딴짓을 하지 않습니다.',
        points: 5
      },
      {
        id: 'class_debeot_4',
        rule: '손을 들고 지목받은 후 발언 & 친구 발표 경청',
        desc: '질문이나 의견이 있을 때는 자리에 앉아 조용히 손을 들고 지목받은 뒤 발언하며, 친구의 발표를 비웃지 않고 경청합니다.',
        points: 5
      }
    ]
  },
  {
    id: 'dismissal',
    title: '하교 매너',
    icon: '🎒',
    badge: 'Dismissal',
    color: '#EF4444',
    guidelines: [
      {
        id: 'dismissal_1',
        rule: '선생님과 친구들에게 정중한 하교 인사',
        desc: '종례 후 담임선생님께 "선생님 안녕히 계세요, 감사합니다!" 인사하고 친구들에게도 내일 만날 것을 다정히 인사합니다.',
        points: 5
      },
      {
        id: 'dismissal_2',
        rule: '디벗 충전함 보관 및 책상·사물함 정리',
        desc: '오늘 사용한 디벗을 학급 충전함 본인 번호 자리에 꽂아 충전을 확인하고 책상 위 쓰레기를 비웁니다.',
        points: 5
      },
      {
        id: 'dismissal_3',
        rule: '교문 밖 교통안전 수칙 철저 준수',
        desc: '신호등을 지키고 무단횡단을 절대 하지 않으며, 하교길 횡단보도를 건널 때는 스마트폰을 보지 않습니다.',
        points: 5
      },
      {
        id: 'dismissal_4',
        rule: '하교 후 소란 및 통행 방해 금지',
        desc: '교문 앞이나 상가 주변에서 무리지어 길을 막거나 소란을 피우지 않고 안전하게 귀가합니다.',
        points: 5
      }
    ]
  }
];

// Initial Teacher Proposed Etiquette Guidelines with 70% Sympathy Approval System
export const INITIAL_TEACHER_PROPOSALS = [
  {
    id: 'prop_1',
    proposer: '이상혁 선생님 (2-3 담임)',
    date: '2026-09-12',
    domainId: 'class_debeot',
    rule: '디벗 배터리 50% 이상 충전 상태로 등교하기',
    desc: '수업 중 충전기 연결로 인한 이동 불편과 안전사고를 방지하기 위해 집에서 50% 이상 충전해 옵니다.',
    votes: ['t1', 't2', 't3', 't4', 't5', 't6', 't7'], // 7 votes out of 10 = 70%
    totalTeachers: 10,
    status: 'approved', // 70% reached -> approved
    approvedDate: '2026-09-13'
  },
  {
    id: 'prop_2',
    proposer: '박진영 선생님 (학생안전부)',
    date: '2026-09-13',
    domainId: 'arrival',
    rule: '비 오는 날 우산 교실 반입 전 물기 털고 우산 비닐 또는 꽂이 보관',
    desc: '복도 바닥 미끄럼 사고 방지를 위해 현관에서 우산 털기 후 교실 우산꽂이에 단정히 넣습니다.',
    votes: ['t1', 't2', 't3', 't4', 't5', 't6'], // 6 votes out of 10 = 60%
    totalTeachers: 10,
    status: 'pending' // need 7 votes (70%)
  },
  {
    id: 'prop_3',
    proposer: '정은지 선생님 (2학년 국어과)',
    date: '2026-09-13',
    domainId: 'hallway',
    rule: '교무실 및 특별실 출입 시 "실례합니다" 인사 후 노크하기',
    desc: '선생님들의 업무 공간과 특별실 출입 시 예의 바르게 3회 가볍게 노크하고 소속을 밝힙니다.',
    votes: ['t1', 't2', 't3', 't4'], // 4 votes = 40%
    totalTeachers: 10,
    status: 'pending'
  }
];

export const MIDDLE_SCHOOL_QUIZZES = [
  {
    id: 'mq1',
    category: '등교 매너',
    domainId: 'arrival',
    question: '아침 등굣길 횡단보도를 건널 때 가장 올바른 태도는 무엇일까요?',
    options: [
      '스마트폰으로 인기 유튜브 쇼츠를 보며 천천히 걷는다.',
      '음악 볼륨을 최대로 키운 이어폰을 끼고 차가 오는지 살피지 않는다.',
      '스마트폰은 가방에 넣고 이어폰을 뺀 뒤, 좌우를 확인하고 안전하게 건넌다.',
      '초록불이 깜빡일 때 전속력으로 뛰어든다.'
    ],
    answer: 2,
    explanation: '보행 중 스마트폰과 이어폰 사용은 주변의 경적이나 위험을 인지하지 못하게 만듭니다. 스마트폰은 가방에 넣고 주위를 살피는 것이 생명을 지키는 기본 매너입니다.',
    points: 30
  },
  {
    id: 'mq2',
    category: '교실·복도 매너',
    domainId: 'hallway',
    question: '쉬는 시간에 복도 모퉁이를 돌다가 다른 반 친구와 강하게 부딪쳤을 때 나의 행동은?',
    options: [
      '"앞 좀 똑바로 보고 다녀!"라고 화를 내고 지나간다.',
      '친구의 상태를 먼저 살피며 "미안해! 어디 다친 곳은 없어?" 하고 진심으로 사과한다.',
      '부끄러우니 못 본 척하고 도망치듯 우리 반으로 들어간다.',
      '친구의 멱살을 잡고 누구 잘못인지 따진다.'
    ],
    answer: 1,
    explanation: '의도치 않은 신체 접촉이나 사고에서는 감정을 앞세우기보다 즉시 친구의 부상 여부를 살피고 정중하게 사과하는 것이 성숙한 중학생의 태도입니다.',
    points: 30
  },
  {
    id: 'mq3',
    category: '급식실 매너',
    domainId: 'cafeteria',
    question: '급식실에서 긴 줄을 서 있을 때 친한 친구가 "나 여기 좀 끼워줘"라고 부탁한다면?',
    options: [
      '친한 친구니까 아무 말 없이 내 앞에 세워준다.',
      '"뒤에 줄 선 다른 친구들에게 피해가 가니까, 미안하지만 맨 뒤로 가서 서자"라고 정중히 거절한다.',
      '친구를 끼워주고 다른 학생이 쳐다보면 째려본다.',
      '선생님이 안 계시는지 확인하고 살짝 끼워준다.'
    ],
    answer: 1,
    explanation: '급식실 줄서기는 공공 규칙입니다. 친분을 이유로 새치기를 허용하는 것은 뒤에 선 모든 친구의 시간을 빼앗는 배려 없는 행동입니다.',
    points: 30
  },
  {
    id: 'mq4',
    category: '수업 & 디벗 매너',
    domainId: 'class_debeot',
    question: '선생님께서 칠판에 개념을 판서하며 설명하고 계실 때, 디벗(태블릿)은 어떻게 다루어야 할까요?',
    options: [
      '선생님 몰래 친구와 화면 분할로 웹툰을 본다.',
      '화면 덮개를 닫거나 화면을 엎어두고 시선을 선생님과 칠판으로 향한다.',
      '소리를 끄고 게임 자동사냥을 돌려둔다.',
      '선생님의 모습을 카메라로 몰래 촬영하여 단톡방에 올린다.'
    ],
    answer: 1,
    explanation: '수업 중 선생님의 강의와 설명 시간에는 화면을 덮거나 엎어두어 주의를 집중하는 것이 선생님과 학급 구성원에 대한 기본적인 수업 매너입니다.',
    points: 30
  },
  {
    id: 'mq5',
    category: '하교 매너',
    domainId: 'dismissal',
    question: '방과 후 하교할 때 교실에 남겨두는 디벗(태블릿)을 관리하는 올바른 방법은?',
    options: [
      '내일 또 쓸 거니까 내 책상 위에 그냥 두고 간다.',
      '바닥에 떨어진 채로 두고 불만 끄고 나간다.',
      '학급 충전함의 내 번호 슬롯에 바르게 꽂고 충전 케이블이 잘 연결되었는지 확인한다.',
      '옆 반 친구에게 장난으로 숨겨두고 간다.'
    ],
    answer: 2,
    explanation: '디벗은 서울시교육청에서 지원하는 소중한 공공 학습 기기입니다. 다음 날 수업에 차질이 없도록 반드시 학급 충전함 본인 번호 자리에 꽂아두어야 합니다.',
    points: 30
  },
  {
    id: 'mq6',
    category: '급식실 매너',
    domainId: 'cafeteria',
    question: '음식을 다 먹고 식판을 퇴식구에 반납할 때 가장 올바른 순서는?',
    options: [
      '국그릇에 쓰레기와 수저를 모두 쓸어 넣고 대충 던져둔다.',
      '잔반을 잔반통에 털어 넣고, 수저와 젓가락을 분리하여 통에 넣은 뒤 식판을 가지런히 쌓는다.',
      '배부르니 식판을 식탁 위에 그대로 두고 나간다.',
      '잔반통 옆 바닥에 흘려도 모른 척한다.'
    ],
    answer: 1,
    explanation: '식판과 수저를 분리하고 잔반을 바르게 비우는 것은 뒤처리해주시는 급식실 실무사님들을 위한 최소한의 존중이자 위생 수칙입니다.',
    points: 30
  }
];
