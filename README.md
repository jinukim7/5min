# 🏫 편학위 (Better School Life) — 중학교 아침 20분 자율 루틴

> **중학교 등교 후 아침 20분을 의미 있게 만드는 학교생활 적응 지원 웹 애플리케이션**  
> 5대 생활 예절 실천 · 한컴타자 스타일 타자 연습 · 중학생 독서기록장 · 실시간 3단계 명예의 전당

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Vanilla JS](https://img.shields.io/badge/Vanilla-JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/ko/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Modern_Glassmorphism-1572B6?logo=css3)](https://developer.mozilla.org/ko/docs/Web/CSS)

---

## 🌟 핵심 기능 소개

### 1. 🌸 5대 학교생활 예절 실천 (20대 세부 행동 지침)
- **5대 실천 영역**: 등굣길, 교실·복도, 급식실, 수업·디벗(태블릿), 하교길
- **개별 세부지침 체크**: 영역별 4개씩 총 20개의 핵심 실천 지침을 학생이 개별 체크 (+5P씩 적립)
- **교사 지침 제안 & 70% 공감 투표 시스템**:
  - 교사가 학교 현장에 맞춤형 예절 지침을 제안
  - 전체 교사 중 70% 이상 공감 획득 시 공식 채택 배지 부여 및 학생 화면에 자동 공식 게시

### 2. ⌨️ 한컴타자 공식 스타일 타자 연습 (완전한 한글 조합 지원)
- **4단계 체계적 훈련**:
  1. **자리 연습**: 기본 글쇠 자리 및 손가락 안내 가이드
  2. **낱말 연습**: 단계별 어휘 훈련
  3. **짧은 글 연습**: 속담 및 명언 타이핑
  4. **긴 글 연습**: 중학교 교과 수록 문학 작품 연습
- **정밀한 한글 IME 조합 엔진**:
  - 한글 음소 완전 분해 (`decomposeHangul`) 및 접두어 인식 (`isHangulPrefix`)
  - 글자 조합 도중 붉은색 오타 오판정 원천 차단
  - 한글 자모 글쇠별 타수(Stroke) 가중치 기반 실시간 CPM 및 정확도 산출

### 3. 📚 첨부 PDF 4대 양식 독서기록장 & 교사 추천도서
- **PDF 10페이지 학습지 완벽 대응 4대 템플릿**:
  1. `기억하고 싶은 구절`: 인상 깊은 구절 2개와 페이지 번호 기록
  2. `독서기록장`: 내용 요약 + 감상 구분 태그 (느낀점/다짐/배울점/새로 알게 된 점)
  3. `퀴즈 만들기`: 친구들과 나눌 독서 퀴즈 Q1/A1, Q2/A2 출제
  4. `마인드맵`: 중심 키워드 + 6개 방사형 생각가지 브레인스토밍
- **도서 선택 및 관리**:
  - 교사가 직접 추천도서를 등록할 수 있는 `[추천도서 추가]` 시스템 (`🌟 선생님 추천` 배지 부여)
  - 학생이 읽고 있는 책을 직접 입력하는 `✍️ 내가 읽은 도서 직접 입력` 모드 지원

### 4. 🏆 3단계 실시간 명예의 전당 & 21개 학급 지원
- **21개 학급 규모**:
  - 1학년~3학년 학년별 7개 반 (총 21개 학급)
  - 학급당 최대 28명 (총 588명 학생 정원 풀 프로필)
- **3단계 순위 확인**:
  - `🏫 우리 반 (28명)`: 학급 내 선의의 격려와 성장
  - `🎓 우리 학년 (196명)`: 7개 반 통합 순위
  - `🌐 전교생 (588명)`: 21개 반 전교생 실시간 랭킹
- **4대 영역 랭킹**: 통합 성장, 예절 실천, 타자 점수, 독서기록 순위
- **개인정보 보호 정책**: 학생 로그인 시 실명 완전 은닉(닉네임만 노출), 교사 모드에서만 실명 병기

---

## 💻 빠른 시작 (Getting Started)

### 로컬 실행
별도의 무거운 빌드 과정 없이 Node.js 내장 모듈 기반 초경량 HTTP 서버로 즉시 구동됩니다:

```bash
# 저장소 복제
git clone https://github.com/jinukim7/5min.git
cd 5min

# 로컬 서버 실행
node server.js
```

브라우저에서 접속:
👉 **http://localhost:5180/**

---

## 🛠️ 기술 스택 (Tech Stack)

- **Frontend**: Vanilla JavaScript (ES Modules), HTML5 Semantic Elements
- **Styling**: Vanilla CSS3 (Custom Design System, CSS Variables, Glassmorphism, CSS Keyframe Animations)
- **Typing Engine**: Hangul Jamo Decomposition & Composition-Aware Prefix Matcher
- **Server**: Node.js Native HTTP / Static Asset Server
- **Data Persistence**: LocalStorage API (`pyeonhakwi_ms_state_v4`)

---

## 📜 라이선스

This project is licensed under the MIT License.
