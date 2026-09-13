// Rock-Solid Korean & English Typing Engine with Hangul Jamo Decomposition, Visible Input & Line-by-Line Progression

const CHOSUNG = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const JUNGSUNG = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
const JONGSUNG = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

const COMPOSITE_CONSONANTS = {
  'ㄲ': ['ㄱ', 'ㄱ'], 'ㄳ': ['ㄱ', 'ㅅ'], 'ㄵ': ['ㄴ', 'ㅈ'], 'ㄶ': ['ㄴ', 'ㅎ'],
  'ㄸ': ['ㄷ', 'ㄷ'], 'ㄺ': ['ㄹ', 'ㄱ'], 'ㄻ': ['ㄹ', 'ㅁ'], 'ㄼ': ['ㄹ', 'ㅂ'],
  'ㄽ': ['ㄹ', 'ㅅ'], 'ㄾ': ['ㄹ', 'ㅌ'], 'ㄿ': ['ㄹ', 'ㅍ'], 'ㅀ': ['ㄹ', 'ㅎ'],
  'ㅃ': ['ㅂ', 'ㅂ'], 'ㅄ': ['ㅂ', 'ㅅ'], 'ㅆ': ['ㅅ', 'ㅅ'], 'ㅉ': ['ㅈ', 'ㅈ']
};

const COMPOSITE_VOWELS = {
  'ㅐ': ['ㅏ', 'ㅣ'], 'ㅒ': ['ㅑ', 'ㅣ'], 'ㅔ': ['ㅓ', 'ㅣ'], 'ㅖ': ['ㅕ', 'ㅣ'],
  'ㅘ': ['ㅗ', 'ㅏ'], 'ㅙ': ['ㅗ', 'ㅏ', 'ㅣ'], 'ㅚ': ['ㅗ', 'ㅣ'],
  'ㅝ': ['ㅜ', 'ㅓ'], 'ㅞ': ['ㅜ', 'ㅓ', 'ㅣ'], 'ㅟ': ['ㅜ', 'ㅣ'],
  'ㅢ': ['ㅡ', 'ㅣ']
};

export function atomizeJamo(j) {
  if (COMPOSITE_CONSONANTS[j]) return COMPOSITE_CONSONANTS[j];
  if (COMPOSITE_VOWELS[j]) return COMPOSITE_VOWELS[j];
  return [j];
}

// Full Hangul Jamo Decomposition down to atomic strokes
export function decomposeHangul(char) {
  if (!char) return [];
  const code = char.charCodeAt(0);
  if (code >= 0x3131 && code <= 0x314E) {
    // Pure consonant
    return atomizeJamo(char);
  }
  if (code >= 0x314F && code <= 0x3163) {
    // Pure vowel
    return atomizeJamo(char);
  }
  if (code >= 0xAC00 && code <= 0xD7A3) {
    const s = code - 0xAC00;
    const l = Math.floor(s / 588);
    const v = Math.floor((s % 588) / 28);
    const t = s % 28;

    const res = [];
    atomizeJamo(CHOSUNG[l]).forEach(j => res.push(j));
    atomizeJamo(JUNGSUNG[v]).forEach(j => res.push(j));
    if (t > 0) {
      atomizeJamo(JONGSUNG[t]).forEach(j => res.push(j));
    }
    return res;
  }
  return [char];
}

// Determines if partialChar is a valid in-progress composition of fullChar
export function isHangulPrefix(partialChar, fullChar) {
  if (!partialChar || !fullChar) return false;
  if (partialChar === fullChar) return true;

  const pJamos = decomposeHangul(partialChar);
  const fJamos = decomposeHangul(fullChar);

  if (pJamos.length > fJamos.length) return false;
  for (let i = 0; i < pJamos.length; i++) {
    if (pJamos[i] !== fJamos[i]) return false;
  }
  return true;
}

export const KEYCODE_TO_KOREAN = {
  'KeyQ': 'ㅂ', 'KeyW': 'ㅈ', 'KeyE': 'ㄷ', 'KeyR': 'ㄱ', 'KeyT': 'ㅅ',
  'KeyY': 'ㅛ', 'KeyU': 'ㅕ', 'KeyI': 'ㅑ', 'KeyO': 'ㅐ', 'KeyP': 'ㅔ',
  'KeyA': 'ㅁ', 'KeyS': 'ㄴ', 'KeyD': 'ㅇ', 'KeyF': 'ㄹ', 'KeyG': 'ㅎ',
  'KeyH': 'ㅗ', 'KeyJ': 'ㅓ', 'KeyK': 'ㅏ', 'KeyL': 'ㅣ', 'Semicolon': ';',
  'KeyZ': 'ㅋ', 'KeyX': 'ㅌ', 'KeyC': 'ㅊ', 'KeyV': 'ㅍ', 'KeyB': 'ㅠ',
  'KeyN': 'ㅜ', 'KeyM': 'ㅡ',
  'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4', 'Digit5': '5',
  'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9', 'Digit0': '0',
  'Period': '.', 'Comma': ',', 'Slash': '?'
};

export const KEY_FINGER_GUIDE = {
  'ㅂ': '왼손 새끼', 'ㅁ': '왼손 새끼', 'ㅋ': '왼손 새끼', '1': '왼손 새끼',
  'ㅈ': '왼손 약지', 'ㄴ': '왼손 약지', 'ㅌ': '왼손 약지', '2': '왼손 약지',
  'ㄷ': '왼손 중지', 'ㅇ': '왼손 중지', 'ㅊ': '왼손 중지', '3': '왼손 중지',
  'ㄱ': '왼손 검지', 'ㄹ': '왼손 검지', 'ㅍ': '왼손 검지', '4': '왼손 검지', '5': '왼손 검지', 'ㅅ': '왼손 검지', 'ㅎ': '왼손 검지',
  'ㅛ': '오른손 검지', 'ㅓ': '오른손 검지', 'ㅜ': '오른손 검지', '6': '오른손 검지', '7': '오른손 검지', 'ㅗ': '오른손 검지', 'ㅠ': '오른손 검지',
  'ㅕ': '오른손 중지', 'ㅏ': '오른손 중지', 'ㅡ': '오른손 중지', '8': '오른손 중지',
  'ㅑ': '오른손 약지', 'ㅣ': '오른손 약지', '9': '오른손 약지',
  'ㅐ': '오른손 새끼', 'ㅔ': '오른손 새끼', ';': '오른손 새끼', '0': '오른손 새끼'
};

// Calculate exact keystroke count for Korean & English
export function getCharStrokeCount(char) {
  if (!char) return 0;
  const code = char.charCodeAt(0);
  if (code >= 0xAC00 && code <= 0xD7A3) {
    const sIndex = code - 0xAC00;
    const lIndex = Math.floor(sIndex / 588);
    const vIndex = Math.floor((sIndex % 588) / 28);
    const tIndex = sIndex % 28;

    let count = 2; // 기본 초성+중성
    const jung = JUNGSUNG[vIndex];
    if (['ㅘ','ㅙ','ㅚ','ㅝ','ㅞ','ㅟ','ㅢ','ㅒ','ㅖ'].includes(jung)) count += 1;
    if (['ㄲ','ㄸ','ㅃ','ㅆ','ㅉ'].includes(CHOSUNG[lIndex])) count += 1;

    if (tIndex > 0) {
      count += 1; // 종성
      const jong = JONGSUNG[tIndex];
      if (['ㄳ','ㄵ','ㄶ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅄ','ㅆ','ㄲ'].includes(jong)) {
        count += 1;
      }
    }
    return count;
  }
  if (/[A-Z]/.test(char)) return 2;
  return 1;
}

export function getTotalSentenceStrokes(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += getCharStrokeCount(str[i]);
  }
  return sum;
}

// 1. Key Placement Practice Engine
export class KeyPracticeSession {
  constructor(stage, onUpdate = () => {}, onComplete = () => {}) {
    this.stage = stage;
    this.keys = [...stage.keys];
    this.onUpdate = onUpdate;
    this.onComplete = onComplete;

    this.currentIndex = 0;
    this.correctCount = 0;
    this.totalAttempts = 0;
    this.startTime = null;
    this.isFinished = false;
  }

  getCurrentKey() {
    return this.keys[this.currentIndex];
  }

  getCurrentFingerGuide() {
    const key = this.getCurrentKey();
    return KEY_FINGER_GUIDE[key] || '자연스러운 손가락';
  }

  handleKeyDown(event) {
    if (this.isFinished) return;
    if (!this.startTime) this.startTime = Date.now();

    const targetKey = this.getCurrentKey();
    let pressedKey = event.key;
    const koreanFromCode = KEYCODE_TO_KOREAN[event.code];
    const isMatch = (pressedKey === targetKey) || (koreanFromCode === targetKey);

    this.totalAttempts++;

    if (isMatch) {
      this.correctCount++;
      this.currentIndex++;

      if (this.currentIndex >= this.keys.length) {
        this.finish();
      } else {
        this.onUpdate(this.getStatus(true));
      }
      return true;
    } else {
      this.onUpdate(this.getStatus(false));
      return false;
    }
  }

  getStatus(lastMatch = true) {
    const elapsedMinutes = this.startTime ? Math.max((Date.now() - this.startTime) / 60000, 0.005) : 0;
    const cpm = elapsedMinutes > 0 ? Math.round(this.correctCount / elapsedMinutes) : 0;
    const accuracy = this.totalAttempts > 0 ? Math.round((this.correctCount / this.totalAttempts) * 100) : 100;
    const progress = Math.round((this.currentIndex / this.keys.length) * 100);

    return {
      currentKey: this.getCurrentKey(),
      fingerGuide: this.getCurrentFingerGuide(),
      currentIndex: this.currentIndex,
      totalKeys: this.keys.length,
      progress,
      cpm,
      accuracy,
      lastMatch,
      isFinished: this.isFinished
    };
  }

  finish() {
    this.isFinished = true;
    const finalStatus = this.getStatus(true);
    this.onUpdate(finalStatus);
    this.onComplete(finalStatus);
  }

  reset() {
    this.currentIndex = 0;
    this.correctCount = 0;
    this.totalAttempts = 0;
    this.startTime = null;
    this.isFinished = false;
    this.onUpdate(this.getStatus(true));
  }
}

// 2. Visible-Input Sentence & Long Passage Typing Engine (한컴타자 공식 웹 스타일)
export class HancomSentenceSession {
  constructor(targetText, onUpdate = () => {}, onComplete = () => {}) {
    this.targetText = targetText.trim();
    this.onUpdate = onUpdate;
    this.onComplete = onComplete;

    this.input = '';
    this.startTime = null;
    this.endTime = null;
    this.timerInterval = null;
    this.isFinished = false;
  }

  start() {
    if (this.startTime) return;
    this.startTime = Date.now();
    this.timerInterval = setInterval(() => {
      this.onUpdate(this.getStatus());
    }, 100);
  }

  handleInput(val) {
    if (this.isFinished) return;
    if (!this.startTime && val.length > 0) {
      this.start();
    }

    this.input = val;

    // Check completion condition
    if (this.input.length >= this.targetText.length && this.input.trim() === this.targetText) {
      this.finish();
    } else {
      this.onUpdate(this.getStatus());
    }
  }

  submitLine() {
    if (this.isFinished) return;
    if (!this.startTime && this.input.length > 0) {
      this.start();
    }
    this.finish();
  }

  getStatus() {
    const elapsedMinutes = this.startTime 
      ? Math.max(((this.endTime || Date.now()) - this.startTime) / 60000, 0.005) 
      : 0;

    let correctChars = 0;
    let typedStrokes = 0;
    const len = Math.min(this.input.length, this.targetText.length);

    for (let i = 0; i < len; i++) {
      const tc = this.targetText[i];
      const ic = this.input[i];
      if (ic === tc) {
        correctChars++;
        typedStrokes += getCharStrokeCount(ic);
      } else if (i === this.input.length - 1 && isHangulPrefix(ic, tc)) {
        // In-progress composition is partially credited for stroke calculation
        const pJamos = decomposeHangul(ic);
        typedStrokes += pJamos.length;
        correctChars += 0.8;
      }
    }

    const accuracy = this.input.length > 0 
      ? Math.min(100, Math.max(0, Math.round((correctChars / this.input.length) * 100))) 
      : 100;

    const cpm = elapsedMinutes > 0 ? Math.round(typedStrokes / elapsedMinutes) : 0;
    const progress = Math.min(100, Math.round((this.input.length / this.targetText.length) * 100));
    const elapsedSeconds = this.startTime ? Math.floor(((this.endTime || Date.now()) - this.startTime) / 1000) : 0;

    return {
      targetText: this.targetText,
      input: this.input,
      cpm,
      accuracy,
      progress,
      elapsedSeconds,
      isFinished: this.isFinished,
      isExactMatch: this.input.trim() === this.targetText
    };
  }

  finish() {
    if (this.isFinished) return;
    this.isFinished = true;
    this.endTime = Date.now();
    clearInterval(this.timerInterval);

    const finalStatus = this.getStatus();
    this.onUpdate(finalStatus);
    this.onComplete(finalStatus);
  }

  reset(newText = this.targetText) {
    clearInterval(this.timerInterval);
    this.targetText = newText.trim();
    this.input = '';
    this.startTime = null;
    this.endTime = null;
    this.isFinished = false;
    this.onUpdate(this.getStatus());
  }
}

// Alias for compatibility
export const SentencePracticeSession = HancomSentenceSession;
