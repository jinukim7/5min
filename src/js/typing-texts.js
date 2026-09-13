// =========================================================
// Better School Life - Typing Practice Curriculum
// =========================================================

// ---------------------------------------------------------
// 1. 키보드 자리 연습 (Key Placement Stages)
// ---------------------------------------------------------
export const KR_KEY_STAGES = [
  {
    id: 'kr_stage_home',
    name: '1단계: 기본자리 (Home Row)',
    desc: '왼손(ㅁ ㄴ ㅇ ㄹ)과 오른손(ㅓ ㅏ ㅣ ;) 연습',
    keys: ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅓ', 'ㅏ', 'ㅣ', ';'],
    keyCodes: ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon']
  },
  {
    id: 'kr_stage_top',
    name: '2단계: 윗자리 (Top Row)',
    desc: '왼손 윗글쇠(ㅂ ㅈ ㄷ ㄱ ㅅ)와 오른손 윗글쇠(ㅛ ㅕ ㅑ ㅐ ㅔ)',
    keys: ['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ'],
    keyCodes: ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP']
  },
  {
    id: 'kr_stage_bottom',
    name: '3단계: 아랫자리 (Bottom Row)',
    desc: '왼손 아랫글쇠(ㅋ ㅌ ㅊ ㅍ)와 오른손 아랫글쇠(ㅠ ㅜ ㅡ)',
    keys: ['ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ'],
    keyCodes: ['KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM']
  },
  {
    id: 'kr_stage_symbols',
    name: '4단계: 숫자 및 기호',
    desc: '상단 숫자 및 문장부호(! . , ?)',
    keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '.', ',', '?'],
    keyCodes: ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Digit1', 'Period', 'Comma', 'Slash']
  }
];

export const EN_KEY_STAGES = [
  {
    id: 'en_stage_home',
    name: '1단계: 기본자리 (Home Row)',
    desc: '왼손(A S D F)과 오른손(J K L ;) 연습',
    keys: ['A', 'S', 'D', 'F', 'J', 'K', 'L', ';', 'a', 's', 'd', 'f', 'j', 'k', 'l'],
    keyCodes: ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon']
  },
  {
    id: 'en_stage_top',
    name: '2단계: 윗자리 (Top Row)',
    desc: '왼손(Q W E R T)과 오른손(Y U I O P)',
    keys: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    keyCodes: ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP']
  },
  {
    id: 'en_stage_bottom',
    name: '3단계: 아랫자리 (Bottom Row)',
    desc: '왼손(Z X C V B)과 오른손(N M , . /)',
    keys: ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    keyCodes: ['KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash']
  }
];

// ---------------------------------------------------------
// 2. 단어 연습 (Words)
// ---------------------------------------------------------
export const KR_WORDS = [
  '배려', '약속', '시간', '인사', '존중', '우정', '등교', '교실', '급식', '책임',
  '정직', '성장', '양심', '독서', '노력', '미소', '희망', '감사', '배움', '공감',
  '친절', '마음', '수업', '청결', '안전', '친구', '용기', '실천', '지혜', '협동'
];

export const EN_WORDS = [
  'apple', 'friend', 'school', 'smile', 'dream', 'happy', 'world', 'peace', 'love', 'hope',
  'water', 'music', 'study', 'class', 'teacher', 'student', 'book', 'paper', 'pencil', 'color',
  'green', 'blue', 'morning', 'night', 'sun', 'moon', 'star', 'space', 'earth', 'nature'
];

// ---------------------------------------------------------
// 3. 짧은 글 연습 (Short Sentences)
// ---------------------------------------------------------
export const KR_SHORT_SENTENCES = {
  1: [
    { text: '인사는 우리의 마음을 엽니다.', source: '학교 매너' },
    { text: '오늘 하루도 활기차게 시작해요.', source: '학교 매너' },
    { text: '작은 친절이 세상을 바꿉니다.', source: '도덕' },
    { text: '친구의 말을 끝까지 들어주세요.', source: '대화 매너' },
    { text: '우리는 매일 조금씩 성장합니다.', source: '성장' },
    { text: '책 속에 수많은 길이 있습니다.', source: '독서' },
    { text: '용기 내어 먼저 다가가 보세요.', source: '우정' },
    { text: '실수는 배움의 또 다른 이름입니다.', source: '성장' },
    { text: '고마운 마음은 표현할수록 커져요.', source: '감사' },
    { text: '나를 사랑해야 남도 사랑할 수 있습니다.', source: '자존감' },
    { text: '밝은 미소는 가장 좋은 인사입니다.', source: '학교 매너' },
    { text: '거짓말은 언젠가 드러나게 마련입니다.', source: '정직' },
    { text: '배려하는 마음이 아름다운 교실을 만듭니다.', source: '학교 매너' },
    { text: '함께 땀 흘리는 시간은 귀중합니다.', source: '협동' },
    { text: '노력은 결코 우리를 배신하지 않습니다.', source: '노력' },
    { text: '꿈을 향해 한 걸음씩 나아가세요.', source: '희망' },
    { text: '바른 말 고운 말을 생활화합시다.', source: '언어 매너' },
    { text: '양보하는 당신이 진정한 챔피언입니다.', source: '배려' },
    { text: '시간은 돌아오지 않으니 소중히 쓰세요.', source: '시간 관리' },
    { text: '마음을 열면 새로운 세상이 보입니다.', source: '공감' }
  ],
  2: [
    { text: '아는 것을 안다고 하고 모르는 것을 모른다고 하는 것, 그것이 곧 앎이다.', source: '공자' },
    { text: '구할 수 없는 인간이란 없다. 구하려는 손길을 멈추지만 않는다면.', source: '손원평, 아몬드' },
    { text: '옳음과 친절함 중 하나를 선택해야 한다면, 항상 친절함을 선택하라.', source: 'R.J. 팔라시오, 원더' },
    { text: '가장 중요한 것은 눈에 보이지 않아. 마음으로 보아야만 해.', source: '어린 왕자' },
    { text: '나를 싫어하는 사람에게 신경 쓰느라, 좋아하는 사람들에게 소홀하지 말자.', source: '체리새우: 비밀글입니다' },
    { text: '바람이 불어 넘어뜨린 자전거를 세워 두고 돌아설 때의 부끄러움.', source: '박완서, 자전거 도둑' },
    { text: '상처는 숨길수록 곪아가지만, 햇볕 아래 꺼내놓으면 아물기 시작한다.', source: '이금이, 유진과 유진' },
    { text: '시간은 붙잡아 둘 수도 없고 미리 가불할 수도 없다.', source: '시간을 파는 상점' },
    { text: '완벽한 부모도, 자녀도 없다. 우리는 서로 마주하며 자란다.', source: '이희영, 페인트' },
    { text: '시작이 반이다. 두려움을 떨치고 일단 도전해 보는 것이 중요하다.', source: '격언' },
    { text: '우리가 무심코 흘려보내는 오늘은 어제 죽은 이가 그토록 바라던 내일이다.', source: '격언' },
    { text: '교문 앞 선생님과 배움터 지킴이 선생님께 멈추어 서서 공손히 인사합니다.', source: '바름 5분 지침' },
    { text: '급식실에서는 새치기 없이 한 줄로 서서 배식받고 감사 인사를 전합니다.', source: '바름 5분 지침' },
    { text: '수업 종이 울리기 전에 자리에 앉아 교과서와 필기도구를 준비합니다.', source: '바름 5분 지침' },
    { text: '복도와 계단에서는 우측통행을 하며 뛰지 않고 사뿐사뿐 걷습니다.', source: '바름 5분 지침' },
    { text: '화장실을 깨끗하게 사용하고, 나갈 때는 불이 꺼져 있는지 확인합니다.', source: '바름 5분 지침' },
    { text: '친구의 의견이 나와 다르더라도 중간에 끊지 않고 끝까지 경청합니다.', source: '바름 5분 지침' },
    { text: '체육 시간에는 규칙을 준수하고, 승패보다 정정당당한 과정을 즐깁니다.', source: '바름 5분 지침' },
    { text: '하교할 때는 의자를 책상 밑에 넣고, 내 자리 주변의 쓰레기를 줍습니다.', source: '바름 5분 지침' },
    { text: '스마트폰은 수업 시간 전에 반드시 전원을 끄거나 무음으로 설정합니다.', source: '바름 5분 지침' }
  ],
  3: [
    { text: '모든 사람에게 친절해라. 네가 만나는 모든 사람은 지금 힘든 싸움을 하고 있으니까.', source: '플라톤' },
    { text: '우리가 실패에서 배우지 못한다면, 그 실패는 영원한 흉터로 남을 뿐이다.', source: '명언' },
    { text: '비록 내일 세계의 종말이 온다 할지라도, 나는 오늘 한 그루의 사과나무를 심겠다.', source: '스피노자' },
    { text: '진정한 용기란 두려움이 없는 것이 아니라, 두려움에도 불구하고 행동하는 것이다.', source: '넬슨 만델라' },
    { text: '다른 사람을 깎아내린다고 해서 당신의 가치가 올라가는 것은 결코 아니다.', source: '인성 명언' },
    { text: '인생은 흘러가는 것이 아니라, 내가 직접 노를 저어 나아가는 항해와 같다.', source: '명언' },
    { text: '말은 입을 떠나면 주워 담을 수 없으니, 세 번 생각하고 한 번 말하는 습관을 들이자.', source: '언어 매너' },
    { text: '스스로를 존중하는 마음이 있어야 비로소 타인도 진심으로 존중할 수 있는 법이다.', source: '자존감' },
    { text: '아름다운 결과는 훌륭한 과정을 통해서만 얻어진다. 요행을 바라지 마라.', source: '명언' },
    { text: '우리가 읽는 책이 우리 머리를 주먹으로 한 대 쳐서 잠에서 깨우지 않는다면, 도대체 왜 책을 읽는가?', source: '카프카' },
    { text: '배우기만 하고 생각하지 않으면 얻음이 없고, 생각하기만 하고 배우지 않으면 위태롭다.', source: '공자' },
    { text: '천 리 길도 한 걸음부터라는 말처럼, 원대한 목표도 오늘의 작은 실천에서 시작된다.', source: '명언' },
    { text: '거센 폭풍우가 지나간 뒤에 나타나는 무지개가 더욱 선명하고 아름답게 빛난다.', source: '명언' },
    { text: '어둠을 탓하기보다는 스스로 작은 촛불 하나를 켜는 사람이 되어 세상을 밝혀라.', source: '명언' },
    { text: '아무것도 하지 않으면 아무 일도 일어나지 않는다. 실패를 두려워 말고 도전하라.', source: '명언' },
    { text: '친구의 단점을 덮어주고 장점을 칭찬해 주는 여유로운 마음가짐이 필요하다.', source: '인성 명언' },
    { text: '자신의 잘못을 솔직하게 인정하고 사과하는 것은 부끄러운 일이 아니라 훌륭한 용기다.', source: '인성 명언' },
    { text: '다른 사람의 입장에서 먼저 생각해 보는 역지사지의 태도가 갈등을 예방한다.', source: '인성 명언' },
    { text: '오늘 흘린 땀방울은 내일의 웃음꽃을 피우는 소중한 밑거름이 될 것이다.', source: '명언' },
    { text: '다양성을 인정하고 차이를 존중할 때, 우리의 교실은 더욱 풍요로워질 수 있다.', source: '다양성' }
  ]
};

export const EN_SHORT_SENTENCES = {
  1: [
    { text: 'Hello, world!', source: 'Basic' },
    { text: 'Have a good day.', source: 'Greeting' },
    { text: 'Be kind to others.', source: 'Etiquette' },
    { text: 'Time is gold.', source: 'Proverb' },
    { text: 'Never give up.', source: 'Hope' },
    { text: 'Knowledge is power.', source: 'Proverb' },
    { text: 'Love yourself first.', source: 'Self-esteem' },
    { text: 'Read a book today.', source: 'Reading' },
    { text: 'Smile changes everything.', source: 'Happiness' },
    { text: 'You are so special.', source: 'Encouragement' },
    { text: 'Practice makes perfect.', source: 'Proverb' },
    { text: 'Honesty is the best policy.', source: 'Proverb' },
    { text: 'Keep your promise.', source: 'Etiquette' },
    { text: 'Make a new friend.', source: 'Friendship' },
    { text: 'Action speaks louder.', source: 'Proverb' },
    { text: 'Dream big dreams.', source: 'Hope' },
    { text: 'Do your best today.', source: 'Effort' },
    { text: 'Listen to your heart.', source: 'Wisdom' },
    { text: 'Respect your teachers.', source: 'Etiquette' },
    { text: 'School is fun.', source: 'School Life' }
  ],
  2: [
    { text: 'A friend in need is a friend indeed.', source: 'Proverb' },
    { text: 'Don\'t judge a book by its cover.', source: 'Proverb' },
    { text: 'Where there is a will, there is a way.', source: 'Proverb' },
    { text: 'Rome was not built in a day.', source: 'Proverb' },
    { text: 'Two heads are better than one.', source: 'Proverb' },
    { text: 'The early bird catches the worm.', source: 'Proverb' },
    { text: 'Every cloud has a silver lining.', source: 'Proverb' },
    { text: 'No pain, no gain. Keep pushing forward.', source: 'Proverb' },
    { text: 'The pen is mightier than the sword.', source: 'Proverb' },
    { text: 'Actions speak louder than words.', source: 'Proverb' },
    { text: 'It is never too late to learn something new.', source: 'Wisdom' },
    { text: 'To teach is to learn twice over.', source: 'Education' },
    { text: 'Education is the key to unlocking the world.', source: 'Education' },
    { text: 'A journey of a thousand miles begins with a single step.', source: 'Lao Tzu' },
    { text: 'What you do today can improve all your tomorrows.', source: 'Ralph Marston' },
    { text: 'Believe you can and you\'re halfway there.', source: 'Theodore Roosevelt' },
    { text: 'Change your thoughts and you change your world.', source: 'Norman Vincent Peale' },
    { text: 'It always seems impossible until it is done.', source: 'Nelson Mandela' },
    { text: 'Success is not final, failure is not fatal.', source: 'Winston Churchill' },
    { text: 'Keep your face always toward the sunshine.', source: 'Walt Whitman' }
  ],
  3: [
    { text: 'In the middle of every difficulty lies opportunity. Do not give up easily.', source: 'Albert Einstein' },
    { text: 'The only limit to our realization of tomorrow will be our doubts of today.', source: 'Franklin D. Roosevelt' },
    { text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.', source: 'Ralph Waldo Emerson' },
    { text: 'Happiness is not something ready made. It comes from your own actions.', source: 'Dalai Lama' },
    { text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.', source: 'Nelson Mandela' },
    { text: 'The future belongs to those who believe in the beauty of their dreams.', source: 'Eleanor Roosevelt' },
    { text: 'You must be the change you wish to see in the world. Start with yourself today.', source: 'Mahatma Gandhi' },
    { text: 'Education is the most powerful weapon which you can use to change the world.', source: 'Nelson Mandela' },
    { text: 'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.', source: 'Buddha' },
    { text: 'Life is like riding a bicycle. To keep your balance, you must keep moving.', source: 'Albert Einstein' },
    { text: 'Success usually comes to those who are too busy to be looking for it.', source: 'Henry David Thoreau' },
    { text: 'If you want to live a happy life, tie it to a goal, not to people or things.', source: 'Albert Einstein' },
    { text: 'Never let the fear of striking out keep you from playing the game.', source: 'Babe Ruth' },
    { text: 'Money and success don’t change people; they merely amplify what is already there.', source: 'Will Smith' },
    { text: 'Your time is limited, so don\'t waste it living someone else\'s life. Stay hungry, stay foolish.', source: 'Steve Jobs' },
    { text: 'If life were predictable it would cease to be life, and be without flavor.', source: 'Eleanor Roosevelt' },
    { text: 'The whole secret of a successful life is to find out what is one\'s destiny to do, and then do it.', source: 'Henry Ford' },
    { text: 'Not how long, but how well you have lived is the main thing. Live a purposeful life.', source: 'Seneca' },
    { text: 'Life is short, and it is up to you to make it sweet. Enjoy the little things.', source: 'Sarah Louise Delany' },
    { text: 'The best way to predict your future is to create it. Take charge of your destiny today.', source: 'Abraham Lincoln' }
  ]
};

// ---------------------------------------------------------
// 4. 긴 글 연습 (Long Passages)
// ---------------------------------------------------------
export const KR_LONG_PASSAGES = {
  1: [
    { title: '가을 하늘', text: '가을 하늘은 유난히 높고 푸릅니다. 시원한 바람이 불어오면 나뭇잎들이 춤을 춥니다. 친구들과 밖으로 나가 마음껏 뛰어놀기 참 좋은 계절입니다. 자연이 주는 선물을 마음껏 즐겨봅시다.' },
    { title: '나의 꿈', text: '누구에게나 가슴 뛰는 꿈이 있습니다. 당장 이루어지지 않아도 괜찮습니다. 매일 조금씩 노력하다 보면 언젠가 그 꿈에 닿아 있을 것입니다. 중요한 것은 포기하지 않는 끈기입니다.' },
    { title: '작은 친절', text: '복도에서 마주친 친구에게 건네는 따뜻한 인사 한마디, 무거운 짐을 드는 선생님을 도와드리는 작은 행동. 이런 사소한 친절들이 모여 우리 학교를 더 아름다운 곳으로 만듭니다.' },
    { title: '독서의 즐거움', text: '책을 펼치면 새로운 세계가 눈앞에 나타납니다. 내가 경험하지 못한 시대를 여행할 수도 있고, 다른 사람의 마음속을 들여다볼 수도 있습니다. 하루 십 분, 독서의 바다에 빠져보세요.' },
    { title: '가족의 사랑', text: '세상에서 가장 편안한 안식처는 가족입니다. 밖에서 아무리 힘들고 지쳐도 집에 돌아가면 따뜻한 위로를 받을 수 있습니다. 오늘 저녁에는 부모님께 사랑한다고 말해보는 건 어떨까요.' }
  ],
  2: [
    { title: '시간을 파는 상점 (발췌)', text: '우리가 무심코 흘려보내는 오늘은 어제 생을 마감한 이들이 그토록 간절히 바라던 내일이다. 과거에 얽매여 자책하거나 오지 않은 미래를 미리 불안해할 필요는 없다. 지금 숨 쉬고 대화하며 책을 읽는 이 찬란한 순간에 온 마음을 다해 집중하는 것, 그것이 시간의 상점이 우리에게 가르쳐 준 삶의 비밀이다.' },
    { title: '체리새우: 비밀글입니다', text: '친구들의 눈치를 보며 무리에서 소외될까 전전긍긍하던 날들이 있었다. 하지만 모든 사람이 나를 좋아할 수는 없다. 내 진정한 가치는 남의 시선이 아니라 내가 스스로를 얼마나 아끼고 존중하는가에 달려 있다. 서로 다른 우리가 모여 비로소 아름다운 우리 반 교실을 이룬다.' },
    { title: '아몬드 (발췌)', text: '두려움도 분노도 내겐 없었다. 하지만 내게 없는 그것을 남들은 결함이라 불렀다. 세상 사람들은 쉽게 판단하고 쉽게 단정 짓는다. 그러나 세상을 이해하는 가장 확실한 길은 상대방의 입장에서 한 걸음 멈추어 서서 바라보는 일이다. 마음의 문은 언제나 작은 손길에서 열린다.' },
    { title: '우정의 의미', text: '진정한 친구란 내가 실수하고 넘어졌을 때 비웃지 않고 손을 내밀어 주는 사람이다. 기쁠 때 함께 웃어주고, 슬플 때 말없이 곁을 지켜주는 존재가 있다는 것은 인생에서 가장 큰 축복이다. 좋은 친구를 얻으려면 내가 먼저 좋은 친구가 되어야 한다.' },
    { title: '도전과 실패', text: '실패를 두려워하여 아무것도 시도하지 않는 것이 가장 큰 실패다. 자전거를 처음 배울 때 수없이 넘어지면서 균형 잡는 법을 터득하듯, 우리는 실패를 통해 무엇이 잘못되었는지 배우고 더 나은 방법을 찾아낸다. 넘어지는 것을 두려워하지 말자.' }
  ],
  3: [
    { title: '민주주의와 책임', text: '민주 사회의 시민으로서 우리는 자유와 권리를 누리는 동시에 그에 따르는 막중한 책임을 다해야 합니다. 교실 안에서도 마찬가지입니다. 학급 회의에서 자신의 의견을 당당하게 말하되, 다른 친구들의 의견도 경청하고 다수결의 원칙에 승복하는 태도를 가져야 합니다. 소수 의견을 존중하는 배려심이야말로 성숙한 민주 시민의 기본 요건입니다.' },
    { title: '환경 보호의 중요성', text: '지구는 인류가 대대손손 살아갈 유일한 터전입니다. 일회용품 사용을 줄이고 재활용을 실천하는 작은 행동들이 모일 때, 심각한 기후 위기를 극복할 수 있습니다. 우리가 무심코 버린 플라스틱이 바다 생태계를 파괴하고 결국 인간에게 돌아온다는 사실을 명심해야 합니다. 하나뿐인 지구를 지키는 일은 바로 나부터 시작해야 합니다.' },
    { title: '역사를 잊은 민족에게 미래는 없다', text: '과거를 잊은 민족은 결코 밝은 미래를 맞이할 수 없습니다. 수많은 선열들이 피와 땀으로 지켜낸 우리의 아픈 역사를 올바로 기억하고 교훈을 삼을 때, 같은 실수를 반복하지 않을 수 있습니다. 역사 공부는 단순한 암기가 아니라 현재를 이해하고 미래를 설계하는 가장 중요한 나침반입니다.' },
    { title: '인공지능 시대의 인성', text: '첨단 기술과 인공지능이 눈부시게 발전하는 시대일수록 인간만이 가질 수 있는 따뜻한 감성과 공감 능력이 더욱 빛을 발합니다. 기계가 대체할 수 없는 창의력과 도덕적 판단력, 그리고 타인과 협력하는 소통 능력은 앞으로 다가올 미래 사회에서 가장 핵심적인 경쟁력이 될 것입니다. 기술을 올바르게 다루는 지혜를 길러야 합니다.' },
    { title: '다양성 존중과 세계 시민', text: '세계화 시대에 발맞추어 우리는 서로 다른 문화와 가치관을 편견 없이 받아들이는 열린 마음을 가져야 합니다. 나와 피부색이 다르고 언어가 다르다고 해서 배척하는 것은 어리석은 일입니다. 서로의 차이를 인정하고 존중하며 어우러질 때, 인류는 비로소 갈등을 넘어 평화로운 공존의 시대로 나아갈 수 있을 것입니다.' }
  ]
};

export const EN_LONG_PASSAGES = {
  1: [
    { title: 'My Daily Routine', text: 'I wake up at seven o\'clock in the morning. I wash my face and brush my teeth. Then I eat a delicious breakfast with my family. I usually have bread and milk. After breakfast, I pack my bag and walk to school with my friends. It is a good start to the day.' },
    { title: 'My Best Friend', text: 'My best friend is kind and smart. We always play together after school. We like to ride our bicycles in the park. Sometimes we study math together in the library. I am very happy to have such a wonderful friend. I hope our friendship lasts forever.' },
    { title: 'A Rainy Day', text: 'It is raining outside today. I look out the window and see the raindrops falling. The sound of the rain is very peaceful. I read a book in my room while drinking hot chocolate. Rainy days are perfect for relaxing and enjoying a quiet time at home.' },
    { title: 'Spring Is Here', text: 'Spring has finally arrived. The weather is getting warmer, and the flowers are starting to bloom. Beautiful butterflies are flying around the garden. I can hear the birds singing sweet songs. Spring is my favorite season because everything looks so alive and fresh.' },
    { title: 'My Pet Dog', text: 'I have a cute little dog named Max. He has soft brown fur and big shiny eyes. When I come home from school, Max wags his tail and jumps around happily. I take him for a walk every evening. Max is not just a pet; he is an important member of my family.' }
  ],
  2: [
    { title: 'The Importance of Reading', text: 'Reading books is one of the best ways to learn about the world. When you read a good book, you can travel to amazing places without leaving your room. Books help improve your vocabulary and imagination. They also teach valuable life lessons. If you make reading a daily habit, you will discover a whole new universe waiting for you.' },
    { title: 'Protecting Our Earth', text: 'Our planet Earth is facing many serious environmental problems like pollution and climate change. We must take action immediately to protect our home. Simple things like turning off lights when leaving a room, recycling plastic bottles, and planting trees can make a huge difference. If everyone works together, we can save the Earth for future generations.' },
    { title: 'The Value of Friendship', text: 'True friendship is a treasure that is hard to find. A real friend accepts you for who you are and stands by you during difficult times. Friendship is built on trust, honesty, and mutual respect. To have a good friend, you must first learn how to be a good friend yourself. Small acts of kindness strengthen the bond between friends.' },
    { title: 'Overcoming Fear', text: 'Everyone experiences fear at some point in their lives. It is a natural human emotion. However, letting fear stop you from trying new things will limit your potential. Courage is not the absence of fear, but the ability to take action despite being afraid. When you face your fears directly, you will grow stronger and more confident.' },
    { title: 'Healthy Habits', text: 'Maintaining a healthy lifestyle is essential for both your physical and mental well-being. Eating a balanced diet with plenty of fruits and vegetables gives you the energy you need. Exercising regularly keeps your body strong and reduces stress. Also, getting enough sleep is crucial for your brain to function properly and learn new things at school.' }
  ],
  3: [
    { title: 'The Impact of Artificial Intelligence', text: 'Artificial intelligence is rapidly transforming the way we live and work. From self-driving cars to advanced medical diagnostics, AI technologies are bringing unprecedented changes to human society. However, with these advancements come significant ethical challenges. We must carefully consider issues such as data privacy, algorithmic bias, and job displacement. As AI becomes more integrated into our daily lives, it is crucial that we establish strong moral frameworks and regulations to ensure that these powerful technologies are developed and utilized for the benefit of all humanity.' },
    { title: 'Global Citizenship in the 21st Century', text: 'In today\'s highly interconnected world, being a responsible citizen extends beyond national borders. Global citizenship requires an understanding that our actions can impact people across the globe. Issues like climate change, poverty, and human rights violations cannot be solved by a single nation alone. They demand international cooperation and a shared sense of responsibility. By embracing cultural diversity, advocating for equality, and actively participating in global problem-solving, we can build a more peaceful and sustainable future for everyone on this planet.' },
    { title: 'The Power of Critical Thinking', text: 'In an era overflowing with information, the ability to think critically is more important than ever. We are constantly bombarded with news, opinions, and advertisements from various media sources. Critical thinking involves questioning the validity of information, analyzing evidence objectively, and identifying logical fallacies. It prevents us from blindly accepting fake news or being easily manipulated. By developing strong critical thinking skills, students can make informed decisions, solve complex problems creatively, and become active participants in a democratic society.' },
    { title: 'The Pursuit of Happiness', text: 'Throughout history, philosophers and scientists have debated the true meaning of happiness. While many people associate happiness with wealth or material possessions, psychological studies consistently show that true fulfillment comes from deeper sources. Meaningful relationships, a sense of purpose, and contributing to the well-being of others are the primary drivers of lasting joy. Furthermore, practicing gratitude and mindfulness can significantly increase our daily life satisfaction. Ultimately, happiness is not a destination to be reached, but a continuous journey of personal growth and self-discovery.' },
    { title: 'Space Exploration and Human Destiny', text: 'Since the dawn of civilization, humans have looked up at the stars with a sense of wonder and curiosity. Space exploration is the ultimate expression of our desire to understand the universe and our place within it. Venturing into the cosmos pushes the boundaries of human knowledge and technological capability. The innovations derived from space research have practically improved life on Earth in countless ways. As we look forward to future missions to Mars and beyond, space exploration continues to inspire the next generation of scientists, engineers, and dreamers to reach for the impossible.' }
  ]
};
