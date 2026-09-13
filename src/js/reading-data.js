// Middle school recommended books & 3 PDF templates (Quote cards, Reading log, Quiz maker)

export const MIDDLE_SCHOOL_BOOKS = [
  {
    id: 'b1',
    title: '아몬드',
    author: '손원평',
    publisher: '창비',
    coverIcon: '📖',
    category: '청소년 문학',
    desc: '감정을 느끼지 못하는 소년 윤재의 특별한 성장과 공감 이야기',
    quotes: [
      '구할 수 없는 인간이란 없다. 구하려는 손길을 멈추지만 않는다면.',
      '두려움도 분노도 내겐 없었다. 하지만 내게 없는 그것을 남들은 상처라 불렀다.',
      '세상을 이해하고 싶었다. 가슴으로 이해하지 못한다면 머리로라도 배우고 싶었다.'
    ]
  },
  {
    id: 'b2',
    title: '시간을 파는 상점',
    author: '김선영',
    publisher: '자음과모음',
    coverIcon: '⏳',
    category: '청소년 문학',
    desc: '시간을 의뢰받는 특별한 인터넷 카페를 통해 돌아보는 삶과 시간의 의미',
    quotes: [
      '시간은 붙잡아 둘 수도 없고 미리 가불할 수도 없다. 오직 지금 이 순간에만 존재한다.',
      '우리가 보내는 오늘은 어제 죽어간 이들이 그토록 바라던 내일이다.',
      '마음이 머무는 자리에 비로소 시간도 온기를 품고 흐른다.'
    ]
  },
  {
    id: 'b3',
    title: '체리새우: 비밀글입니다',
    author: '황영미',
    publisher: '문학동네',
    coverIcon: '🦐',
    category: '학교생활·관계',
    desc: '친구 관계에 눈치 보지 않고 당당하게 나 자신으로 서는 중학교 교실의 이야기',
    quotes: [
      '나를 싫어하는 사람에게 신경 쓰느라, 정작 나를 좋아하는 사람들에게 소홀하지 말자.',
      '은따가 될까 봐 두려워 친구들의 눈치를 보던 날들은 이제 끝났다. 나는 나대로 빛난다.',
      '누군가와 꼭 닮지 않아도 괜찮다. 서로 다른 빛깔이 모여 교실이 된다.'
    ]
  },
  {
    id: 'b4',
    title: '페인트',
    author: '이희영',
    publisher: '창비',
    coverIcon: '🎨',
    category: '가족·성장',
    desc: '국가가 키운 아이들이 직접 부모를 면접 보고 선택하는 미래 사회 이야기',
    quotes: [
      '완벽한 부모도, 완벽한 자녀도 없다. 우리는 서로를 마주하며 함께 배우고 자란다.',
      '마주 앉아 따뜻한 밥 한 끼를 나눌 수 있다면 그것으로 가족의 온도는 충분하다.',
      '선택보다 중요한 것은 선택 이후에 함께 만들어가는 시간이다.'
    ]
  },
  {
    id: 'b5',
    title: '원더 (Wonder)',
    author: 'R.J. 팔라시오',
    publisher: '책과콩나무',
    coverIcon: '🌟',
    category: '공감·우정',
    desc: '남들과 다른 외모로 태어난 어거스트가 중학교에 입학하여 겪는 따뜻한 기적',
    quotes: [
      '옳음과 친절함 중 하나를 선택해야 한다면, 항상 친절함을 선택하라.',
      '우리가 어떤 사람인지는 우리의 행동이 보여준다.',
      '모든 사람은 일생에 적어도 한 번은 기립박수를 받을 자격이 있다.'
    ]
  },
  {
    id: 'b6',
    title: '자전거 도둑',
    author: '박완서',
    publisher: '다림',
    coverIcon: '🚲',
    category: '도덕·양심',
    desc: '도시의 유혹 속에서 자신의 양심과 도덕성을 지켜내려는 소년 수남이의 이야기',
    quotes: [
      '바람이 불어 넘어뜨린 자전거를 세워 두고 돌아설 때의 부끄러움, 그것이 내 양심이었다.',
      '편리함보다 소중한 것은 내 마음에 한 점 부끄러움이 없는 떳떳함이다.'
    ]
  },
  {
    id: 'b7',
    title: '어린 왕자',
    author: '생텍쥐페리',
    publisher: '열린책들',
    coverIcon: '👑',
    category: '세계고전',
    desc: '사막에서 만난 어린 왕자를 통해 바라본 마음의 눈과 진정한 관계의 의미',
    quotes: [
      '가장 중요한 것은 눈에 보이지 않아. 마음으로 보아야만 분명하게 볼 수 있어.',
      '네 장미가 그토록 소중한 것은, 그 장미를 위해 네가 쏟은 시간 때문이야.'
    ]
  },
  {
    id: 'b8',
    title: '유진과 유진',
    author: '이금이',
    publisher: '푸른책들',
    coverIcon: '🕊️',
    category: '청소년 성장',
    desc: '이름은 같지만 서로 다른 상처와 삶을 안고 살아가는 두 소녀의 진솔한 우정',
    quotes: [
      '상처는 숨길수록 곪아가지만, 햇볕 아래 꺼내놓으면 비로소 아물기 시작한다.',
      '진정한 친구는 내 아픔을 동정하는 사람이 아니라 묵묵히 곁을 지켜주는 사람이다.'
    ]
  }
];

// Initial realistic reading feed entries based on the 3 PDF templates
export const INITIAL_READING_LOGS = [
  {
    id: 'r1',
    templateType: 'quote_cards', // 기억하고 싶은 구절 (PDF p.1)
    studentNumber: 1,
    bookTitle: '아몬드',
    author: '손원평',
    quote1: '구할 수 없는 인간이란 없다. 구하려는 손길을 멈추지만 않는다면.',
    page1: '78',
    quote2: '세상을 이해하고 싶었다. 가슴으로 이해하지 못한다면 머리로라도 배우고 싶었다.',
    page2: '142',
    date: '2026-09-13',
    likes: 14
  },
  {
    id: 'r2',
    templateType: 'summary_reflection', // 독서기록장 (PDF p.7)
    studentNumber: 2,
    bookTitle: '시간을 파는 상점',
    author: '김선영',
    summary: '주인공 온조가 인터넷 카페에서 시간을 의뢰받아 수행하면서 다양한 사람들의 사연과 시간의 가치를 깨달아가는 이야기입니다.',
    reflectionTags: ['느낀점', '다짐'],
    reflection: '짬나는 5분 독서 시간을 단순히 흘려보내지 않고 나를 채우는 시간으로 채워야겠다고 굳게 다짐했습니다.',
    memorablePart: '시간은 붙잡아 둘 수도 없고 가불할 수도 없다. 오직 지금뿐이다.',
    date: '2026-09-13',
    likes: 19
  },
  {
    id: 'r3',
    templateType: 'make_quiz', // 퀴즈 만들기 (PDF p.3)
    studentNumber: 4,
    bookTitle: '체리새우: 비밀글입니다',
    author: '황영미',
    q1: '은따가 될까 봐 두려워 친구들 눈치를 보던 다현이가 자신의 블로그에 쓰는 비밀 글의 이름은?',
    p1: '45',
    a1: '체리새우',
    q2: '다현이가 깨달은 진정한 친구 관계의 비결은 무엇일까요?',
    p2: '120',
    a2: '나를 싫어하는 사람에게 신경 쓰기보다 나를 아껴주는 사람에게 진심을 다하는 것',
    date: '2026-09-13',
    likes: 16
  }
];
