import { appState, BADGES } from './state.js';
import { ETIQUETTE_DOMAINS, MIDDLE_SCHOOL_QUIZZES } from './etiquette-data.js';
import { MIDDLE_SCHOOL_BOOKS, INITIAL_READING_LOGS } from './reading-data.js';
import { HANCOM_KEY_STAGES, WORD_PRACTICE_LIST, SHORT_SENTENCES, LONG_PASSAGES } from './typing-texts.js';
import { KeyPracticeSession, HancomSentenceSession, isHangulPrefix } from './typing-engine.js';
import { sounds } from './sound.js';
import { triggerConfetti } from './confetti.js';
import { openGoogleLoginModal, openProfileOnboardingModal, openTeacherUpgradeModal, initAuthSession, signOutUser } from './auth.js';
import { initChatbot } from './chatbot.js';

export function showToast(message, icon = '✨') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

class App {
  constructor() {
    this.currentView = 'home';
    this.leaderboardCategory = 'total'; // 'total' | 'manners' | 'typing' | 'reading'
    this.leaderboardScope = 'class'; // 'class' | 'grade' | 'school'
    this.showAllRanks = false;

    // Etiquette state
    this.currentDomainIndex = 0;
    this.currentQuizIndex = 0;

    // Typing state
    this.typingMode = 'short'; // 'key' | 'word' | 'short' | 'long'
    this.keyStageIndex = 0;
    this.keySession = null;
    this.sentenceIndex = 0;
    this.sentenceSession = null;
    this.passageIndex = 0;

    // Reading state (PDF 3 templates)
    this.readingTemplate = 'quote_cards'; // 'quote_cards' | 'summary_reflection' | 'make_quiz'
    this.bookSourceType = 'recommended'; // 'recommended' | 'custom'
    this.selectedBookId = 'b1';
    this.readingLogs = [...INITIAL_READING_LOGS];

    // Teacher state
    this.tableFilter = 'all';
    this.tableSearch = '';
    this.exhibitionIndex = 0;
    this.exhibitionTimer = null;

    this.init();
  }

  init() {
    this.bindHeader();
    appState.subscribe(() => this.updateHeaderStats());
    initChatbot();
    this.navigate('home');
    initAuthSession(() => {
      this.updateHeaderStats();
      this.navigate(this.currentView);
    });
  }

  bindHeader() {
    document.querySelectorAll('[data-view]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        sounds.playClick();
        const view = e.currentTarget.dataset.view;
        this.navigate(view);
      });
    });

    const soundBtn = document.getElementById('btn-sound-toggle');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        const enabled = sounds.toggle();
        soundBtn.textContent = enabled ? '🔊' : '🔇';
        showToast(enabled ? '효과음이 켜졌습니다.' : '효과음이 꺼졌습니다.');
      });
    }

    const googleBtn = document.getElementById('btn-google-auth');
    if (googleBtn) {
      googleBtn.addEventListener('click', () => {
        sounds.playClick();
        if (appState.state.auth && appState.state.auth.uid) {
          if (!confirm('로그아웃 하시겠습니까?')) return;
          signOutUser(() => {
            this.updateHeaderStats();
            this.navigate('home');
            showToast('로그아웃되었습니다.', '👋');
          });
          return;
        }
        showToast('학교 워크스페이스(@kyunghee.sen.ms.kr)로 로그인하세요.', '🏫');
        openGoogleLoginModal(() => {
          this.updateHeaderStats();
          this.navigate(this.currentView);
          const roleText = appState.isVerifiedTeacher() ? '교사' : '학생';
          showToast(`${roleText} 계정으로 로그인되었습니다.`, '👤');
        });
      });
    }

    const userChip = document.getElementById('user-profile-chip');
    if (userChip) {
      userChip.addEventListener('click', () => {
        sounds.playClick();
        openProfileOnboardingModal(() => {
          this.updateHeaderStats();
          this.navigate(this.currentView);
          showToast('프로필 정보가 저장되었습니다.', '✨');
        });
      });
    }

    const modeBtn = document.getElementById('btn-mode-toggle');
    if (modeBtn) {
      modeBtn.addEventListener('click', () => {
        sounds.playClick();
        const newRole = appState.state.userProfile.role === 'student' ? 'teacher' : 'student';
        if (!appState.setRole(newRole)) {
          this.promptTeacherAccess();
          return;
        }
        this.updateHeaderStats();
        if (newRole === 'teacher') {
          showToast('교사 모드로 전환되었습니다. 학생들의 실명과 닉네임이 함께 표시됩니다.', '👩‍🏫');
          this.navigate('teacher');
        } else {
          showToast('학생 모드로 전환되었습니다. 학생 닉네임만 표시됩니다.', '🎒');
          this.navigate('home');
        }
      });
    }

    this.updateHeaderStats();
  }

  // 교사 권한이 없을 때: 로그인 전이면 로그인 안내, 로그인 후면 [교사 권한 신청] 모달
  promptTeacherAccess() {
    if (!appState.state.auth || !appState.state.auth.uid) {
      showToast('교사 화면은 교사 계정으로 로그인해야 이용할 수 있습니다.', '🔒');
      return;
    }
    openTeacherUpgradeModal(() => {
      this.updateHeaderStats();
      showToast('교사 권한으로 전환되었습니다.', '👩‍🏫');
      this.navigate('teacher');
    });
  }

  updateHeaderStats() {
    const { totalPoints, streak, userProfile } = appState.state;
    const ptsEl = document.getElementById('header-points');
    const streakEl = document.getElementById('header-streak');
    const nameEl = document.getElementById('header-student-name');
    const roleIconEl = document.getElementById('header-role-icon');
    const classEl = document.getElementById('header-school-class');
    const modeBtn = document.getElementById('btn-mode-toggle');

    if (ptsEl) ptsEl.textContent = `🌟 ${totalPoints.toLocaleString()}P`;
    if (streakEl) streakEl.textContent = `🔥 ${streak}일 연속`;
    if (classEl) classEl.textContent = `경희중학교 올바른 루틴`;

    const authLabelEl = document.querySelector('#btn-google-auth span');
    if (authLabelEl) authLabelEl.textContent = appState.state.auth && appState.state.auth.uid ? '로그아웃' : '로그인';

    if (userProfile.role === 'teacher') {
      if (roleIconEl) roleIconEl.textContent = '👩‍🏫';
      if (nameEl) nameEl.textContent = `${userProfile.realName} (선생님)`;
      if (modeBtn) {
        modeBtn.textContent = '학생 모드로 전환';
        modeBtn.classList.add('teacher-active');
      }
    } else {
      if (roleIconEl) roleIconEl.textContent = '🎒';
      if (nameEl) nameEl.textContent = userProfile.nickname;
      if (modeBtn) {
        modeBtn.textContent = '교사 모드';
        modeBtn.classList.remove('teacher-active');
      }
    }
  }

  navigate(view) {
    this.currentView = view;

    document.querySelectorAll('[data-view]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === view);
    });

    const mainContainer = document.getElementById('main-content');
    if (!mainContainer) return;

    window.scrollTo({ top: 0, behavior: 'smooth' });

    switch (view) {
      case 'home':
        this.renderHome(mainContainer);
        break;
      case 'etiquette':
        this.renderEtiquette(mainContainer);
        break;
      case 'typing':
        this.renderTyping(mainContainer);
        break;
      case 'reading':
        this.renderReading(mainContainer);
        break;
      case 'badges':
        this.renderBadges(mainContainer);
        break;
      case 'teacher':
        if (appState.isVerifiedTeacher()) {
          this.renderTeacher(mainContainer);
        } else {
          this.renderTeacherLocked(mainContainer);
        }
        break;
    }
  }

  // ================= HOME VIEW =================
  renderHome(container) {
    const stats = appState.getClassStats();
    const rankedStudents = appState.getRankedStudents(this.leaderboardCategory, this.leaderboardScope);
    const top3 = rankedStudents.slice(0, 3);
    const others4to20 = rankedStudents.slice(3, 20);

    const getScoreDisplay = (student) => {
      if (this.leaderboardCategory === 'manners') return `${student.mannersScore}P`;
      if (this.leaderboardCategory === 'typing') return `${student.typingBestCPM}타 (${student.typingScore}P)`;
      if (this.leaderboardCategory === 'reading') return `${student.readingScore}P`;
      return `${student.totalPoints.toLocaleString()}P`;
    };

    const scopeLabel = this.leaderboardScope === 'class' ? '2학년 3반' : (this.leaderboardScope === 'grade' ? '2학년 전체' : '전교생');

    container.innerHTML = `
      <section class="hero-section">
        <div class="hero-pill-tag">
          <span>✨</span> 경희중학교 · 매일 5분 올바른 루틴
        </div>
        <h1 class="hero-title">
          바른 예절, 한컴타자, 독서기록으로<br>
          <span class="highlight-gradient">편안하고 품격 있는 중학 생활</span>
        </h1>
        <p class="hero-desc">
          디벗으로 시작하는 매일 5분! 아침 시간뿐만 아니라 쉬는 시간·점심시간 등 <strong>짬날 때마다</strong> 들어와서 활동해 보세요. 5대 학교생활 핵심 예절 개별 실천, 한컴타자 4단계, 중학생 추천도서 독서기록으로 성장 포인트를 모아보세요.
        </p>

        <!-- Hero Quick Check Card -->
        <div class="hero-visual-wrapper">
          <div class="hero-floating-card">
            <div class="floating-card-header">
              <div class="floating-card-title">
                <span>📋</span> 오늘 아침 나의 예절 실천 현황
              </div>
              <span class="badge badge-green">지침당 +5P</span>
            </div>
            <div class="quick-task-list">
              ${ETIQUETTE_DOMAINS.map(d => {
                const checkedCount = d.guidelines.filter(g => !!appState.state.todaySubChecked[g.id]).length;
                const isAllDone = checkedCount === 4;
                return `
                  <div class="quick-task-item ${isAllDone ? 'done' : ''}" data-nav-domain="${d.id}">
                    <div class="quick-task-left">
                      <span class="quick-task-icon">${d.icon}</span>
                      <span>${d.title}</span>
                    </div>
                    <span class="badge ${isAllDone ? 'badge-green' : 'badge-orange'}">
                      ${checkedCount}/4 완료 (${checkedCount * 5}P)
                    </span>
                  </div>
                `;
              }).join('')}
            </div>

            <div style="margin-top: 1.25rem; display: flex; gap: 0.75rem;">
              <button class="btn btn-primary" style="flex: 1;" id="btn-quick-typing">
                ⌨️ 한컴타자 시작
              </button>
              <button class="btn btn-secondary" style="flex: 1;" id="btn-quick-reading">
                📚 독서기록 작성
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- 3-Tier Multi-Scope & 3-Category Leaderboard (Top 20) -->
      <section class="leaderboard-section">
        <div class="leaderboard-header">
          <span class="hero-pill-tag">Live Motion Hall of Fame</span>
          <h2 style="font-size: 2.2rem; font-weight: 800; letter-spacing: -0.025em;">
            🏆 실시간 명예의 전당 (1위~20위)
          </h2>
          <p style="color: var(--text-secondary); font-size: 0.95rem; margin-top: 0.5rem;">
            현재 범위: <strong>${scopeLabel}</strong> | ${appState.state.userProfile.role === 'teacher' ? '교사 화면 (실명+닉네임 병기)' : '학생 화면 (닉네임만 표시)'}
          </p>

          <!-- Scope Selector (학급 / 학년 / 전교생) -->
          <div style="display: flex; justify-content: center; gap: 0.5rem; margin-top: 1.25rem;">
            <button class="btn ${this.leaderboardScope === 'class' ? 'btn-primary' : 'btn-secondary'} btn-scope" data-scope="class" style="font-size: 0.85rem; padding: 0.4rem 1.1rem;">
              🏫 학급별
            </button>
            <button class="btn ${this.leaderboardScope === 'grade' ? 'btn-primary' : 'btn-secondary'} btn-scope" data-scope="grade" style="font-size: 0.85rem; padding: 0.4rem 1.1rem;">
              🎓 학년별
            </button>
            <button class="btn ${this.leaderboardScope === 'school' ? 'btn-primary' : 'btn-secondary'} btn-scope" data-scope="school" style="font-size: 0.85rem; padding: 0.4rem 1.1rem;">
              🌐 전교생
            </button>
          </div>

          <!-- Category Selector -->
          <div class="category-nav-pills">
            <button class="category-pill-btn ${this.leaderboardCategory === 'total' ? 'active' : ''}" data-cat="total">
              🌟 통합 성장 순위
            </button>
            <button class="category-pill-btn ${this.leaderboardCategory === 'manners' ? 'active' : ''}" data-cat="manners">
              🌸 예절 점수 순위
            </button>
            <button class="category-pill-btn ${this.leaderboardCategory === 'typing' ? 'active' : ''}" data-cat="typing">
              ⌨️ 타자 점수 순위
            </button>
            <button class="category-pill-btn ${this.leaderboardCategory === 'reading' ? 'active' : ''}" data-cat="reading">
              📚 독서기록 순위
            </button>
          </div>
        </div>

        <!-- 1st, 2nd, 3rd Podium Graphic -->
        <div class="podium-container">
          <!-- 2nd Place Silver -->
          <div class="podium-card podium-2nd">
            <div class="podium-rank-badge">🥈</div>
            <div class="podium-student-name">${appState.formatStudentName(top3[1])}</div>
            <div class="podium-student-sub">${top3[1].grade || 2}학년 ${top3[1].classNum || 3}반 ${top3[1].number}번</div>
            <div class="podium-score-pill" style="background: #F1F5F9; color: #475569;">
              ${getScoreDisplay(top3[1])}
            </div>
            <div class="podium-quote">"${top3[1].comment || '함께 성장해요!'}"</div>
          </div>

          <!-- 1st Place Gold -->
          <div class="podium-card podium-1st">
            <div class="podium-rank-badge">👑</div>
            <div style="font-size: 0.8rem; font-weight: 800; color: #D97706; text-transform: uppercase; margin-bottom: 0.2rem;">
              🥇 1st Place Champion
            </div>
            <div class="podium-student-name" style="font-size: 1.45rem;">
              ${appState.formatStudentName(top3[0])}
            </div>
            <div class="podium-student-sub">${top3[0].grade || 2}학년 ${top3[0].classNum || 3}반 ${top3[0].number}번</div>
            <div class="podium-score-pill" style="background: #FEF3C7; color: #B45309;">
              🌟 ${getScoreDisplay(top3[0])}
            </div>
            <div class="podium-quote">"${top3[0].comment || '아침을 성실히 채웁니다.'}"</div>
          </div>

          <!-- 3rd Place Bronze -->
          <div class="podium-card podium-3rd">
            <div class="podium-rank-badge">🥉</div>
            <div class="podium-student-name">${appState.formatStudentName(top3[2])}</div>
            <div class="podium-student-sub">${top3[2].grade || 2}학년 ${top3[2].classNum || 3}반 ${top3[2].number}번</div>
            <div class="podium-score-pill" style="background: #FFEDD5; color: #C2410C;">
              ${getScoreDisplay(top3[2])}
            </div>
            <div class="podium-quote">"${top3[2].comment || '오늘도 파이팅!'}"</div>
          </div>
        </div>

        <!-- 4th ~ 20th Moving Graphic Ticker -->
        <div class="ticker-card-container">
          <div class="ticker-header">
            <div style="font-weight: 800; font-size: 1.05rem; display: flex; align-items: center; gap: 0.5rem;">
              <span>🏃</span> 4위 ~ 20위 실시간 성장 러너스 (${scopeLabel})
            </div>
            <button class="btn btn-secondary" id="btn-toggle-rank-view" style="font-size: 0.8rem; padding: 0.35rem 0.85rem;">
              ${this.showAllRanks ? '◀ 티커 모드로 보기' : '격자 전체 목록 보기 ▶'}
            </button>
          </div>

          ${!this.showAllRanks ? `
            <div class="ticker-track-wrapper">
              <div class="ticker-scroll-row">
                ${[...others4to20, ...others4to20].map((s, idx) => `
                  <div class="ticker-student-chip">
                    <div class="ticker-rank-pill">${(idx % others4to20.length) + 4}위</div>
                    <div>
                      <div class="ticker-name">${appState.formatStudentName(s)}</div>
                      <div style="font-size: 0.75rem; color: var(--text-muted);">${s.grade || 2}-${s.classNum || 3} ${s.number}번</div>
                    </div>
                    <div class="ticker-score">${getScoreDisplay(s)}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : `
            <div class="rank-grid-4to20">
              ${others4to20.map((s, idx) => `
                <div class="rank-row-item">
                  <div style="display: flex; align-items: center; gap: 0.65rem;">
                    <span class="ticker-rank-pill" style="width:24px; height:24px; font-size:0.7rem;">${idx + 4}</span>
                    <span style="font-weight: 700; font-size: 0.875rem;">${appState.formatStudentName(s)}</span>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">(${s.grade || 2}-${s.classNum || 3})</span>
                  </div>
                  <span style="font-weight: 800; font-size: 0.85rem; color: var(--color-amber);">${getScoreDisplay(s)}</span>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      </section>
    `;

    // Bind Scope
    container.querySelectorAll('.btn-scope').forEach(btn => {
      btn.addEventListener('click', (e) => {
        sounds.playClick();
        this.leaderboardScope = e.currentTarget.dataset.scope;
        this.renderHome(container);
      });
    });

    // Bind Category
    container.querySelectorAll('.category-pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        sounds.playClick();
        this.leaderboardCategory = e.currentTarget.dataset.cat;
        this.renderHome(container);
      });
    });

    // Toggle 4-20
    const btnToggle = container.querySelector('#btn-toggle-rank-view');
    if (btnToggle) {
      btnToggle.addEventListener('click', () => {
        sounds.playClick();
        this.showAllRanks = !this.showAllRanks;
        this.renderHome(container);
      });
    }

    container.querySelectorAll('[data-nav-domain]').forEach(el => {
      el.addEventListener('click', () => {
        sounds.playClick();
        this.navigate('etiquette');
      });
    });

    const btnQuickTyping = container.querySelector('#btn-quick-typing');
    if (btnQuickTyping) {
      btnQuickTyping.addEventListener('click', () => {
        sounds.playClick();
        this.navigate('typing');
      });
    }
    const btnQuickReading = container.querySelector('#btn-quick-reading');
    if (btnQuickReading) {
      btnQuickReading.addEventListener('click', () => {
        sounds.playClick();
        this.navigate('reading');
      });
    }
  }

  // ================= ETIQUETTE & QUIZ VIEW (4 INDIVIDUAL CHECKBOXES) =================
  renderEtiquette(container) {
    const activeDomain = ETIQUETTE_DOMAINS[this.currentDomainIndex % ETIQUETTE_DOMAINS.length];
    const quiz = MIDDLE_SCHOOL_QUIZZES[this.currentQuizIndex % MIDDLE_SCHOOL_QUIZZES.length];

    container.innerHTML = `
      <div class="etiquette-hub-container">
        <div style="text-align: center; max-width: 680px; margin: 0 auto 2.5rem;">
          <span class="hero-pill-tag">Middle School Etiquette Guidelines</span>
          <h2 style="font-size: 2.2rem; font-weight: 800; letter-spacing: -0.025em; margin-bottom: 0.5rem;">
            중학교 5대 학교생활 예절 교육 & 개별 실천
          </h2>
          <p style="color: var(--text-secondary); font-size: 0.95rem;">
            지침을 꼼꼼히 읽고 <strong>4개 세부 지침 각각을 직접 체크</strong>하여 실천해 보세요 (+5P씩 총 +20P).
          </p>
        </div>

        <!-- 5 Domain Navigation Pills -->
        <div class="etiquette-domain-nav">
          ${ETIQUETTE_DOMAINS.map((dom, idx) => `
            <button class="domain-pill-btn ${idx === this.currentDomainIndex ? 'active' : ''}" data-domain-index="${idx}">
              <span>${dom.icon}</span>
              <span>${dom.title}</span>
            </button>
          `).join('')}
        </div>

        <!-- Active Domain Educational Card with 4 Individual Checkboxes -->
        <div class="domain-guide-card">
          <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-light); padding-bottom: 1.25rem;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="font-size: 2.2rem;">${activeDomain.icon}</span>
              <div>
                <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--text-primary);">${activeDomain.title} 4대 핵심 지침</h3>
                <span style="font-size: 0.8rem; color: var(--text-muted);">${activeDomain.badge} Guidelines</span>
              </div>
            </div>
            <span class="badge badge-purple" style="font-size: 0.85rem;">각 항목당 +5P</span>
          </div>

          <!-- 4 Detailed Rules with Individual Checkboxes -->
          <div class="domain-rules-grid">
            ${activeDomain.guidelines.map((g, idx) => {
              const isChecked = !!appState.state.todaySubChecked[g.id];
              return `
                <div class="rule-box ${isChecked ? 'rule-box-done' : ''}" style="border-left-color: ${activeDomain.color}; background: ${isChecked ? '#F0FDF4' : 'var(--bg-subtle)'}; cursor: pointer;" data-sub-rule-id="${g.id}">
                  <div style="display: flex; align-items: flex-start; gap: 0.85rem;">
                    <input type="checkbox" ${isChecked ? 'checked' : ''} style="width: 20px; height: 20px; margin-top: 2px; accent-color: #059669; pointer-events: none;">
                    <div style="flex: 1;">
                      <div class="rule-title" style="${isChecked ? 'color: #065F46; text-decoration: line-through;' : ''}">
                        <span>${idx + 1}.</span> ${g.rule}
                      </div>
                      <div class="rule-desc" style="${isChecked ? 'color: #047857;' : ''}">${g.desc}</div>
                      <div style="margin-top: 0.5rem;">
                        <span class="badge ${isChecked ? 'badge-green' : 'badge-gray'}">
                          ${isChecked ? '✓ 실천 완료 (+5P)' : '클릭하여 실천 체크 (+5P)'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
          ${(() => {
            const approvedProps = (appState.state.teacherProposals || []).filter(p => (p.domainId === activeDomain.id) && (p.status === 'approved' || (p.votes.length / p.totalTeachers) >= 0.7));
            if (approvedProps.length === 0) return '';
            return `
              <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 2px dashed #CBD5E1;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.85rem;">
                  <div style="font-weight: 800; font-size: 1.05rem; color: #1E293B; display: flex; align-items: center; gap: 0.5rem;">
                    <span>🏛️</span> 선생님 70% 공감 공식 채택 지침 (게시됨)
                  </div>
                  <span class="badge badge-green">교사 70% 이상 공감 통과</span>
                </div>
                <div class="domain-rules-grid">
                  ${approvedProps.map((ap, idx) => {
                    const isChecked = !!appState.state.todaySubChecked[ap.id];
                    return `
                      <div class="rule-box ${isChecked ? 'rule-box-done' : ''}" style="border-left-color: #10B981; background: ${isChecked ? '#F0FDF4' : '#F8FAFC'}; cursor: pointer;" data-sub-rule-id="${ap.id}">
                        <div style="display: flex; align-items: flex-start; gap: 0.85rem;">
                          <input type="checkbox" ${isChecked ? 'checked' : ''} style="width: 20px; height: 20px; margin-top: 2px; accent-color: #059669; pointer-events: none;">
                          <div style="flex: 1;">
                            <div class="rule-title" style="${isChecked ? 'color: #065F46; text-decoration: line-through;' : ''}">
                              <span>[공식채택]</span> ${ap.rule}
                            </div>
                            <div class="rule-desc" style="${isChecked ? 'color: #047857;' : ''}">${ap.desc} <span style="font-size: 0.75rem; color: var(--text-muted);">(제안: ${ap.proposer})</span></div>
                            <div style="margin-top: 0.5rem;">
                              <span class="badge ${isChecked ? 'badge-green' : 'badge-gray'}">
                                ${isChecked ? '✓ 실천 완료 (+5P)' : '클릭하여 실천 체크 (+5P)'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          })()}
        </div>

        <!-- Middle School Situation Quiz -->
        <div class="card" style="margin-top: 2rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <span style="font-size: 1.5rem;">💡</span>
              <div>
                <h3 style="font-size: 1.25rem; font-weight: 800;">중학 예절 상황별 실전 퀴즈</h3>
                <span class="badge badge-purple">${quiz.category}</span>
              </div>
            </div>
            <span style="font-weight: 700; font-size: 0.9rem; color: var(--color-amber);">
              정답 맞출 시 +${quiz.points}P 적립
            </span>
          </div>

          <div style="background: var(--bg-subtle); border-radius: var(--radius-lg); padding: 1.5rem; margin-bottom: 1.5rem; border: 1px solid var(--border-light);">
            <div style="font-size: 1.15rem; font-weight: 700; line-height: 1.6; color: var(--text-primary);">
              Q. ${quiz.question}
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            ${quiz.options.map((opt, idx) => `
              <button class="btn btn-secondary quiz-opt-btn" data-opt-idx="${idx}" style="width: 100%; text-align: left; justify-content: flex-start; padding: 0.85rem 1.2rem; font-size: 0.925rem; border-radius: var(--radius-md);">
                <span style="display: inline-block; width: 26px; height: 26px; border-radius: 50%; background: var(--bg-subtle); text-align: center; line-height: 26px; font-weight: 700; margin-right: 0.75rem; font-size: 0.8rem;">
                  ${idx + 1}
                </span>
                ${opt}
              </button>
            `).join('')}
          </div>

          <div id="quiz-result-feedback" style="display: none; margin-top: 1.25rem; padding: 1.25rem; border-radius: var(--radius-md);"></div>

          <div style="display: flex; justify-content: flex-end; margin-top: 1.5rem; border-top: 1px solid var(--border-light); padding-top: 1rem;">
            <button class="btn btn-secondary" id="btn-next-situation-quiz">
              다음 퀴즈 풀기 ➡️
            </button>
          </div>
        </div>
      </div>
    `;

    // Domain pill tabs
    container.querySelectorAll('.domain-pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        sounds.playClick();
        this.currentDomainIndex = parseInt(e.currentTarget.dataset.domainIndex, 10);
        this.renderEtiquette(container);
      });
    });

    // Bind individual sub-rule checkboxes
    container.querySelectorAll('[data-sub-rule-id]').forEach(box => {
      box.addEventListener('click', () => {
        const id = box.dataset.subRuleId;
        sounds.playClick();
        const checked = appState.toggleSubRule(id, 5);
        if (checked) {
          sounds.playSuccess();
          triggerConfetti();
          showToast('세부 지침 실천 완료! +5P 적립', '🌸');
        }
        this.renderEtiquette(container);
      });
    });

    // Quiz options click
    const feedbackEl = container.querySelector('#quiz-result-feedback');
    container.querySelectorAll('.quiz-opt-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const selIdx = parseInt(e.currentTarget.dataset.optIdx, 10);
        const isCorrect = selIdx === quiz.answer;

        container.querySelectorAll('.quiz-opt-btn').forEach((b, idx) => {
          b.disabled = true;
          if (idx === quiz.answer) {
            b.style.background = '#ECFDF5';
            b.style.borderColor = '#10B981';
            b.style.color = '#065F46';
          } else if (idx === selIdx) {
            b.style.background = '#FEF2F2';
            b.style.borderColor = '#EF4444';
            b.style.color = '#991B1B';
          }
        });

        if (isCorrect) {
          sounds.playCelebration();
          triggerConfetti();
          appState.completeQuiz(quiz.points);
          feedbackEl.style.display = 'block';
          feedbackEl.style.background = '#ECFDF5';
          feedbackEl.style.border = '1px solid #A7F3D0';
          feedbackEl.innerHTML = `
            <div style="font-weight: 800; color: #065F46; margin-bottom: 0.35rem;">🎉 정답입니다! (+${quiz.points}P 예절 점수 적립)</div>
            <div style="font-size: 0.875rem; color: #047857; line-height: 1.55;">${quiz.explanation}</div>
          `;
          showToast(`정답! +${quiz.points}P 획득`, '🌟');
        } else {
          sounds.playError();
          feedbackEl.style.display = 'block';
          feedbackEl.style.background = '#FEF2F2';
          feedbackEl.style.border = '1px solid #FECACA';
          feedbackEl.innerHTML = `
            <div style="font-weight: 800; color: #991B1B; margin-bottom: 0.35rem;">아쉽게도 오답입니다. 해설을 확인해 보세요!</div>
            <div style="font-size: 0.875rem; color: #7F1D1D; line-height: 1.55;">${quiz.explanation}</div>
          `;
        }
      });
    });

    const btnNext = container.querySelector('#btn-next-situation-quiz');
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        sounds.playClick();
        this.currentQuizIndex = (this.currentQuizIndex + 1) % MIDDLE_SCHOOL_QUIZZES.length;
        this.renderEtiquette(container);
      });
    }
  }

  // ================= TYPING PRACTICE VIEW (VISIBLE INPUT ENGINE) =================
  renderTyping(container) {
    container.innerHTML = `
      <div class="typing-container">
        <!-- 4-Stage Tab Bar -->
        <div class="typing-stage-tabs">
          <button class="stage-tab-btn ${this.typingMode === 'key' ? 'active' : ''}" data-mode="key">
            <span>🎯</span> 1단계: 자리 연습
          </button>
          <button class="stage-tab-btn ${this.typingMode === 'word' ? 'active' : ''}" data-mode="word">
            <span>📝</span> 2단계: 낱말 연습
          </button>
          <button class="stage-tab-btn ${this.typingMode === 'short' ? 'active' : ''}" data-mode="short">
            <span>✨</span> 3단계: 짧은 글 연습
          </button>
          <button class="stage-tab-btn ${this.typingMode === 'long' ? 'active' : ''}" data-mode="long">
            <span>📖</span> 4단계: 긴 글 연습
          </button>
        </div>

        <div id="typing-stage-content"></div>
      </div>
    `;

    container.querySelectorAll('.stage-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        sounds.playClick();
        this.typingMode = e.currentTarget.dataset.mode;
        this.renderTyping(container);
      });
    });

    const stageContent = container.querySelector('#typing-stage-content');
    if (this.typingMode === 'key') {
      this.renderKeyPracticeMode(stageContent);
    } else if (this.typingMode === 'word') {
      this.renderWordPracticeMode(stageContent);
    } else if (this.typingMode === 'short') {
      this.renderShortPracticeMode(stageContent);
    } else if (this.typingMode === 'long') {
      this.renderLongPracticeMode(stageContent);
    }
  }

  // --- 1. 자리 연습 ---
  renderKeyPracticeMode(container) {
    const stage = HANCOM_KEY_STAGES[this.keyStageIndex % HANCOM_KEY_STAGES.length];

    container.innerHTML = `
      <div class="substage-pills">
        ${HANCOM_KEY_STAGES.map((s, idx) => `
          <button class="substage-pill ${idx === this.keyStageIndex ? 'active' : ''}" data-stage-idx="${idx}">
            ${s.name}
          </button>
        `).join('')}
      </div>

      <div class="typing-arena-card">
        <div class="typing-hud">
          <div class="hud-stat-box">
            <div class="hud-label">현재 타수</div>
            <div class="hud-value" id="key-hud-cpm">0<span class="hud-unit">CPM</span></div>
          </div>
          <div class="hud-stat-box">
            <div class="hud-label">정확도</div>
            <div class="hud-value" id="key-hud-acc">100<span class="hud-unit">%</span></div>
          </div>
          <div class="hud-stat-box">
            <div class="hud-label">진행도</div>
            <div class="hud-value" id="key-hud-prog">0<span class="hud-unit">%</span></div>
          </div>
          <div class="hud-stat-box">
            <div class="hud-label">손가락 안내</div>
            <div class="hud-value" id="key-hud-finger" style="font-size: 1.15rem; color: #3B82F6;">
              ${stage.keys[0]}
            </div>
          </div>
        </div>

        <div class="key-practice-arena">
          <div class="key-spotlight-display">
            <div class="key-big-bubble" id="key-big-bubble">${stage.keys[0]}</div>
            <div class="key-finger-guide-badge" id="key-finger-badge">
              <span>👉</span> 추천 손가락: <strong>왼손 새끼</strong>
            </div>
          </div>
          <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;">
            ⌨️ 키보드의 해당 글쇠를 누르면 즉시 다음 자리로 넘어갑니다.
          </div>
          <button class="btn btn-secondary" id="btn-restart-key">🔄 처음부터 다시 연습</button>
        </div>
      </div>

      <div class="keyboard-guide-card">
        <div class="keyboard-guide-header">
          <div style="font-weight: 700; font-size: 0.95rem; display: flex; align-items: center; gap: 0.4rem;">
            <span>⌨️</span> 가상 키보드 가이드 (자리 확인)
          </div>
          <span style="font-size: 0.75rem; color: var(--text-muted);">녹색으로 빛나는 키를 누르세요.</span>
        </div>
        <div class="keyboard-layout" id="key-visual-layout">
          ${this.renderVisualKeyboardHtml()}
        </div>
      </div>
    `;

    const bubble = container.querySelector('#key-big-bubble');
    const badge = container.querySelector('#key-finger-badge');
    const hudCpm = container.querySelector('#key-hud-cpm');
    const hudAcc = container.querySelector('#key-hud-acc');
    const hudProg = container.querySelector('#key-hud-prog');
    const hudFinger = container.querySelector('#key-hud-finger');

    this.keySession = new KeyPracticeSession(
      stage,
      (status) => {
        bubble.textContent = status.currentKey || '✓';
        badge.innerHTML = `<span>👉</span> 추천 손가락: <strong>${status.fingerGuide}</strong>`;
        hudCpm.innerHTML = `${status.cpm}<span class="hud-unit">CPM</span>`;
        hudAcc.innerHTML = `${status.accuracy}<span class="hud-unit">%</span>`;
        hudProg.innerHTML = `${status.progress}<span class="hud-unit">%</span>`;
        hudFinger.textContent = status.fingerGuide;

        bubble.classList.remove('flash-green', 'flash-red');
        void bubble.offsetWidth;
        bubble.classList.add(status.lastMatch ? 'flash-green' : 'flash-red');
        this.highlightKeyboardKey(status.currentKey);
      },
      (finalStatus) => {
        sounds.playCelebration();
        triggerConfetti();
        const earned = Math.round(finalStatus.cpm / 10 + 20);
        appState.addTypingScore(earned, finalStatus.cpm, finalStatus.accuracy);
        showToast(`자리 연습 완료! +${earned}P 적립 (타수: ${finalStatus.cpm} CPM)`, '🎯');
      }
    );

    this.highlightKeyboardKey(stage.keys[0]);

    const keyHandler = (e) => {
      if (this.typingMode !== 'key') return;
      if (['Shift', 'Control', 'Alt', 'Meta', 'Tab'].includes(e.key)) return;
      e.preventDefault();
      sounds.playKeyTick();
      const matched = this.keySession.handleKeyDown(e);
      if (!matched) sounds.playError();
    };

    window.removeEventListener('keydown', this._keyHandler);
    this._keyHandler = keyHandler;
    window.addEventListener('keydown', this._keyHandler);

    container.querySelectorAll('.substage-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        sounds.playClick();
        this.keyStageIndex = parseInt(e.currentTarget.dataset.stageIdx, 10);
        this.renderKeyPracticeMode(container);
      });
    });

    const btnRestart = container.querySelector('#btn-restart-key');
    if (btnRestart) {
      btnRestart.addEventListener('click', () => {
        sounds.playClick();
        this.keySession.reset();
      });
    }
  }

  highlightKeyboardKey(targetKey) {
    document.querySelectorAll('#key-visual-layout .kb-key').forEach(k => {
      k.classList.toggle('target-glow', k.dataset.keyChar === targetKey);
    });
  }

  renderVisualKeyboardHtml() {
    return `
      <div class="kb-row">
        <div class="kb-key" data-key-char="1">1</div>
        <div class="kb-key" data-key-char="2">2</div>
        <div class="kb-key" data-key-char="3">3</div>
        <div class="kb-key" data-key-char="4">4</div>
        <div class="kb-key" data-key-char="5">5</div>
        <div class="kb-key" data-key-char="6">6</div>
        <div class="kb-key" data-key-char="7">7</div>
        <div class="kb-key" data-key-char="8">8</div>
        <div class="kb-key" data-key-char="9">9</div>
        <div class="kb-key" data-key-char="0">0</div>
      </div>
      <div class="kb-row">
        <div class="kb-key" data-key-char="ㅂ">ㅂ<span class="kb-sub">Q</span></div>
        <div class="kb-key" data-key-char="ㅈ">ㅈ<span class="kb-sub">W</span></div>
        <div class="kb-key" data-key-char="ㄷ">ㄷ<span class="kb-sub">E</span></div>
        <div class="kb-key" data-key-char="ㄱ">ㄱ<span class="kb-sub">R</span></div>
        <div class="kb-key" data-key-char="ㅅ">ㅅ<span class="kb-sub">T</span></div>
        <div class="kb-key" data-key-char="ㅛ">ㅛ<span class="kb-sub">Y</span></div>
        <div class="kb-key" data-key-char="ㅕ">ㅕ<span class="kb-sub">U</span></div>
        <div class="kb-key" data-key-char="ㅑ">ㅑ<span class="kb-sub">I</span></div>
        <div class="kb-key" data-key-char="ㅐ">ㅐ<span class="kb-sub">O</span></div>
        <div class="kb-key" data-key-char="ㅔ">ㅔ<span class="kb-sub">P</span></div>
      </div>
      <div class="kb-row">
        <div class="kb-key home-row" data-key-char="ㅁ">ㅁ<span class="kb-sub">A</span></div>
        <div class="kb-key home-row" data-key-char="ㄴ">ㄴ<span class="kb-sub">S</span></div>
        <div class="kb-key home-row" data-key-char="ㅇ">ㅇ<span class="kb-sub">D</span></div>
        <div class="kb-key home-row" data-key-char="ㄹ">ㄹ<span class="kb-sub">F</span></div>
        <div class="kb-key home-row" data-key-char="ㅎ">ㅎ<span class="kb-sub">G</span></div>
        <div class="kb-key home-row" data-key-char="ㅗ">ㅗ<span class="kb-sub">H</span></div>
        <div class="kb-key home-row" data-key-char="ㅓ">ㅓ<span class="kb-sub">J</span></div>
        <div class="kb-key home-row" data-key-char="ㅏ">ㅏ<span class="kb-sub">K</span></div>
        <div class="kb-key home-row" data-key-char="ㅣ">ㅣ<span class="kb-sub">L</span></div>
        <div class="kb-key home-row" data-key-char=";">;<span class="kb-sub">:</span></div>
      </div>
      <div class="kb-row">
        <div class="kb-key" data-key-char="ㅋ">ㅋ<span class="kb-sub">Z</span></div>
        <div class="kb-key" data-key-char="ㅌ">ㅌ<span class="kb-sub">X</span></div>
        <div class="kb-key" data-key-char="ㅊ">ㅊ<span class="kb-sub">C</span></div>
        <div class="kb-key" data-key-char="ㅍ">ㅍ<span class="kb-sub">V</span></div>
        <div class="kb-key" data-key-char="ㅠ">ㅠ<span class="kb-sub">B</span></div>
        <div class="kb-key" data-key-char="ㅜ">ㅜ<span class="kb-sub">N</span></div>
        <div class="kb-key" data-key-char="ㅡ">ㅡ<span class="kb-sub">M</span></div>
      </div>
      <div class="kb-row">
        <div class="kb-key space" data-key-char=" ">스페이스바 (Space)</div>
      </div>
    `;
  }

  // --- 2. 낱말 연습 ---
  renderWordPracticeMode(container) {
    let wordIdx = 0;
    const words = WORD_PRACTICE_LIST;
    let score = 0;

    container.innerHTML = `
      <div class="typing-arena-card">
        <div class="typing-hud">
          <div class="hud-stat-box">
            <div class="hud-label">완료 낱말 수</div>
            <div class="hud-value" id="word-hud-count">0<span class="hud-unit">개</span></div>
          </div>
          <div class="hud-stat-box">
            <div class="hud-label">현재 목표 낱말</div>
            <div class="hud-value" id="word-target-bubble" style="font-size: 2rem; color: #4F46E5;">
              ${words[0]}
            </div>
          </div>
          <div class="hud-stat-box">
            <div class="hud-label">획득 포인트</div>
            <div class="hud-value" id="word-hud-points">0<span class="hud-unit">P</span></div>
          </div>
        </div>

        <div style="max-width: 460px; margin: 2rem auto; text-align: center;">
          <input type="text" id="word-input" class="hancom-real-input" placeholder="낱말 입력 후 Space 또는 Enter" style="text-align: center;" autofocus>
          <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.75rem;">
            💡 스페이스바(Space)나 엔터(Enter)를 누르면 다음 낱말로 넘어갑니다.
          </div>
        </div>
      </div>
    `;

    const wordInput = container.querySelector('#word-input');
    const wordBubble = container.querySelector('#word-target-bubble');
    const countEl = container.querySelector('#word-hud-count');
    const ptsEl = container.querySelector('#word-hud-points');

    wordInput.addEventListener('keydown', (e) => {
      sounds.playKeyTick();
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        const typed = wordInput.value.trim();
        const currentTarget = words[wordIdx];

        if (typed === currentTarget) {
          sounds.playSuccess();
          score += 5;
          wordIdx = (wordIdx + 1) % words.length;
          wordInput.value = '';
          wordBubble.textContent = words[wordIdx];
          countEl.innerHTML = `${wordIdx}<span class="hud-unit">개</span>`;
          ptsEl.innerHTML = `${score}<span class="hud-unit">P</span>`;

          appState.addTypingScore(5, 300, 100);
          showToast(`낱말 완성! +5P 적립`, '✨');
        } else {
          sounds.playError();
          wordInput.style.borderColor = '#EF4444';
          setTimeout(() => { wordInput.style.borderColor = '#3B82F6'; }, 400);
        }
      }
    });
  }

  // --- 3. 짧은 글 연습 (보이는 입력창 한컴타자 공식 스타일) ---
  renderShortPracticeMode(container) {
    const list = SHORT_SENTENCES;
    const current = list[this.sentenceIndex % list.length];

    container.innerHTML = `
      <div class="substage-pills">
        ${list.map((item, idx) => `
          <button class="substage-pill ${idx === this.sentenceIndex ? 'active' : ''}" data-sentence-idx="${idx}">
            ${idx + 1}. 《${item.book}》
          </button>
        `).join('')}
      </div>

      <div class="typing-arena-card">
        <div class="typing-hud">
          <div class="hud-stat-box">
            <div class="hud-label">현재 타수</div>
            <div class="hud-value" id="st-hud-cpm">0<span class="hud-unit">CPM</span></div>
          </div>
          <div class="hud-stat-box">
            <div class="hud-label">정확도</div>
            <div class="hud-value" id="st-hud-acc">100<span class="hud-unit">%</span></div>
          </div>
          <div class="hud-stat-box">
            <div class="hud-label">경과 시간</div>
            <div class="hud-value" id="st-hud-time">00:00</div>
          </div>
          <div class="hud-stat-box">
            <div class="hud-label">진행도</div>
            <div class="hud-value" id="st-hud-prog">0<span class="hud-unit">%</span></div>
          </div>
        </div>

        <div style="font-size: 0.9rem; font-weight: 700; color: #4F46E5; margin-bottom: 0.75rem;">
          출처: 《${current.book}》 — ${current.author}
        </div>

        <!-- Hancom Taja Official Web Layout -->
        <div class="hancom-typing-layout">
          <!-- Target Sentence Box (Highlighted above) -->
          <div class="hancom-target-box" id="st-target-display">
            ${this.renderTargetCharHighlights(current.text, '')}
          </div>

          <!-- Real Visible Input Box Below -->
          <input type="text" class="hancom-real-input" id="st-visible-input" 
                 placeholder="위 문장을 보고 여기에 입력하세요 (완료 시 Enter를 누르면 다음 문장으로 이동합니다)" 
                 autocomplete="off" spellcheck="false" autofocus>

          <div class="typing-progress-bar">
            <div class="typing-progress-fill" id="st-progress-fill"></div>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem;">
          <button class="btn btn-secondary" id="btn-restart-short">🔄 다시 치기</button>
          <div style="font-size: 0.85rem; color: var(--text-muted);">
            ⌨️ 직접 보이는 입력창에 타이핑하세요. [Enter] 키로 문장을 제출할 수 있습니다.
          </div>
        </div>
      </div>
    `;

    const targetDisplay = container.querySelector('#st-target-display');
    const visibleInput = container.querySelector('#st-visible-input');
    const progFill = container.querySelector('#st-progress-fill');
    const hudCpm = container.querySelector('#st-hud-cpm');
    const hudAcc = container.querySelector('#st-hud-acc');
    const hudTime = container.querySelector('#st-hud-time');
    const hudProg = container.querySelector('#st-hud-prog');

    this.sentenceSession = new HancomSentenceSession(
      current.text,
      (status) => {
        targetDisplay.innerHTML = this.renderTargetCharHighlights(status.targetText, status.input);
        progFill.style.width = `${status.progress}%`;
        hudCpm.innerHTML = `${status.cpm}<span class="hud-unit">CPM</span>`;
        hudAcc.innerHTML = `${status.accuracy}<span class="hud-unit">%</span>`;
        hudProg.innerHTML = `${status.progress}<span class="hud-unit">%</span>`;

        const min = String(Math.floor(status.elapsedSeconds / 60)).padStart(2, '0');
        const sec = String(status.elapsedSeconds % 60).padStart(2, '0');
        hudTime.textContent = `${min}:${sec}`;
      },
      (status) => {
        sounds.playCelebration();
        triggerConfetti();
        const earned = Math.round(status.cpm / 10 + 25);
        appState.addTypingScore(earned, status.cpm, status.accuracy);
        showToast(`짧은 글 타자 완성! +${earned}P 적립 (${status.cpm} CPM, 정확도 ${status.accuracy}%)`, '🎉');

        setTimeout(() => {
          this.sentenceIndex = (this.sentenceIndex + 1) % list.length;
          this.renderShortPracticeMode(container);
        }, 1500);
      }
    );

    visibleInput.addEventListener('input', (e) => {
      sounds.playKeyTick();
      this.sentenceSession.handleInput(e.target.value);
    });

    visibleInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (e.isComposing) return;
        e.preventDefault();
        const currentVal = visibleInput.value.trim();
        if (currentVal === current.text || this.sentenceSession.isFinished || currentVal.length >= current.text.length * 0.8) {
          this.sentenceSession.submitLine();
        } else {
          showToast('문장을 끝까지 입력해 주세요.', '⌨️');
        }
      }
    });

    container.querySelectorAll('.substage-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        sounds.playClick();
        this.sentenceIndex = parseInt(e.currentTarget.dataset.sentenceIdx, 10);
        this.renderShortPracticeMode(container);
      });
    });

    const btnRestart = container.querySelector('#btn-restart-short');
    if (btnRestart) {
      btnRestart.addEventListener('click', () => {
        sounds.playClick();
        visibleInput.value = '';
        this.sentenceSession.reset();
        visibleInput.focus();
      });
    }
  }

  // --- 4. 긴 글 연습 (보이는 입력창 한컴타자 공식 스타일) ---
  renderLongPracticeMode(container) {
    const list = LONG_PASSAGES;
    const current = list[this.passageIndex % list.length];

    container.innerHTML = `
      <div class="substage-pills">
        ${list.map((item, idx) => `
          <button class="substage-pill ${idx === this.passageIndex ? 'active' : ''}" data-passage-idx="${idx}">
            ${idx + 1}. 《${item.book}》 ${item.title}
          </button>
        `).join('')}
      </div>

      <div class="typing-arena-card">
        <div class="typing-hud">
          <div class="hud-stat-box">
            <div class="hud-label">현재 타수</div>
            <div class="hud-value" id="lg-hud-cpm">0<span class="hud-unit">CPM</span></div>
          </div>
          <div class="hud-stat-box">
            <div class="hud-label">정확도</div>
            <div class="hud-value" id="lg-hud-acc">100<span class="hud-unit">%</span></div>
          </div>
          <div class="hud-stat-box">
            <div class="hud-label">진행도</div>
            <div class="hud-value" id="lg-hud-prog">0<span class="hud-unit">%</span></div>
          </div>
          <div class="hud-stat-box">
            <div class="hud-label">문학 작품</div>
            <div class="hud-value" style="font-size: 1.15rem; color: #4F46E5;">
              《${current.book}》
            </div>
          </div>
        </div>

        <div class="hancom-typing-layout">
          <div class="hancom-target-box" id="lg-target-display" style="min-height: 120px; font-size: 1.35rem;">
            ${this.renderTargetCharHighlights(current.text, '')}
          </div>

          <textarea class="hancom-real-input" id="lg-visible-input" rows="3"
                    placeholder="위 문학 작품을 보고 편안하게 타이핑하세요. (완성 후 Enter)" 
                    autocomplete="off" spellcheck="false" autofocus></textarea>

          <div class="typing-progress-bar">
            <div class="typing-progress-fill" id="lg-progress-fill"></div>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem;">
          <button class="btn btn-secondary" id="btn-restart-long">🔄 다시 치기</button>
          <div style="font-size: 0.85rem; color: var(--text-muted);">
            긴 글 완독 타이핑 시 대량의 성장 포인트(+60P)가 적립됩니다.
          </div>
        </div>
      </div>
    `;

    const targetDisplay = container.querySelector('#lg-target-display');
    const visibleInput = container.querySelector('#lg-visible-input');
    const progFill = container.querySelector('#lg-progress-fill');
    const hudCpm = container.querySelector('#lg-hud-cpm');
    const hudAcc = container.querySelector('#lg-hud-acc');
    const hudProg = container.querySelector('#lg-hud-prog');

    this.sentenceSession = new HancomSentenceSession(
      current.text,
      (status) => {
        targetDisplay.innerHTML = this.renderTargetCharHighlights(status.targetText, status.input);
        progFill.style.width = `${status.progress}%`;
        hudCpm.innerHTML = `${status.cpm}<span class="hud-unit">CPM</span>`;
        hudAcc.innerHTML = `${status.accuracy}<span class="hud-unit">%</span>`;
        hudProg.innerHTML = `${status.progress}<span class="hud-unit">%</span>`;
      },
      (status) => {
        sounds.playCelebration();
        triggerConfetti();
        const earned = Math.round(status.cpm / 10 + 60);
        appState.addTypingScore(earned, status.cpm, status.accuracy);
        showToast(`긴 글 문학 완독 타이핑 완료! +${earned}P 적립!`, '🏆');
      }
    );

    visibleInput.addEventListener('input', (e) => {
      sounds.playKeyTick();
      this.sentenceSession.handleInput(e.target.value);
    });

    visibleInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        if (e.isComposing) return;
        e.preventDefault();
        const currentVal = visibleInput.value.trim();
        if (currentVal === current.text || this.sentenceSession.isFinished || currentVal.length >= current.text.length * 0.7) {
          this.sentenceSession.submitLine();
        } else {
          showToast('작품 단락을 조금 더 입력해 주세요.', '📖');
        }
      }
    });

    container.querySelectorAll('.substage-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        sounds.playClick();
        this.passageIndex = parseInt(e.currentTarget.dataset.passageIdx, 10);
        this.renderLongPracticeMode(container);
      });
    });

    const btnRestart = container.querySelector('#btn-restart-long');
    if (btnRestart) {
      btnRestart.addEventListener('click', () => {
        sounds.playClick();
        visibleInput.value = '';
        this.sentenceSession.reset();
        visibleInput.focus();
      });
    }
  }

  // Live Highlight Renderer with Hangul IME Prefix Support
  renderTargetCharHighlights(target, typed) {
    let html = '';
    const targetChars = Array.from(target);
    const typedChars = Array.from(typed);

    for (let i = 0; i < targetChars.length; i++) {
      const tc = targetChars[i];
      const typedChar = typedChars[i];

      let state = 'pending';
      const isCursor = (i === typedChars.length);

      if (typedChar !== undefined) {
        if (typedChar === tc) {
          state = 'correct';
        } else if (i === typedChars.length - 1 && isHangulPrefix(typedChar, tc)) {
          // Current in-progress Korean syllable is a valid prefix (not an error!)
          state = 'composing';
        } else {
          state = 'incorrect';
        }
      }

      html += `<span class="char ${state} ${isCursor ? 'active-cursor' : ''}">${tc === ' ' ? '&nbsp;' : tc}</span>`;
    }
    return html;
  }

  // ================= READING LOG VIEW (PDF WORKSHEET TEMPLATES) =================
  renderReading(container) {
    const isCustom = this.bookSourceType === 'custom';
    const books = appState.getRecommendedBooks();
    const selectedBook = books.find(b => b.id === this.selectedBookId) || books[0];

    container.innerHTML = `
      <div class="reading-container">
        <div class="reading-header">
          <span class="hero-pill-tag">Middle School Reading Worksheet</span>
          <h2 style="font-size: 2.2rem; font-weight: 800; letter-spacing: -0.025em; margin-bottom: 0.5rem;">
            매일 5분 독서기록장 <나의 책 나의 기록>
          </h2>
          <p style="color: var(--text-secondary); font-size: 0.95rem;">
            첨부 학습지 양식에 맞추어 마음에 남는 구절, 내용 요약 및 감상, 책 퀴즈를 직접 기록해 보세요.
          </p>
        </div>

        <!-- 4 Template Switcher Tabs (PDF Formats) -->
        <div class="reading-template-tabs">
          <button class="template-tab-btn ${this.readingTemplate === 'quote_cards' ? 'active' : ''}" data-tpl="quote_cards">
            📑 1. 기억하고 싶은 구절 (PDF p.1~2)
          </button>
          <button class="template-tab-btn ${this.readingTemplate === 'summary_reflection' ? 'active' : ''}" data-tpl="summary_reflection">
            📝 2. 독서기록장 (요약&감상) (PDF p.7~8)
          </button>
          <button class="template-tab-btn ${this.readingTemplate === 'make_quiz' ? 'active' : ''}" data-tpl="make_quiz">
            ❓ 3. 퀴즈 만들기 (PDF p.3~4)
          </button>
          <button class="template-tab-btn ${this.readingTemplate === 'mindmap' ? 'active' : ''}" data-tpl="mindmap">
            🌐 4. 마인드맵 (PDF p.5~6)
          </button>
        </div>

        <!-- Book Selection (추천도서 선택 vs 직접 입력) -->
        <div style="background: #FFFFFF; border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 1.25rem 1.5rem; margin-bottom: 2rem; box-shadow: var(--shadow-xs);">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
            <div style="font-weight: 800; font-size: 0.95rem;">
              📖 읽은 책 선택 방식
            </div>
            <div class="book-source-toggle" style="margin: 0;">
              <button class="book-source-btn ${!isCustom ? 'active' : ''}" id="btn-src-rec">
                추천도서 ${books.length}권에서 선택
              </button>
              <button class="book-source-btn ${isCustom ? 'active' : ''}" id="btn-src-custom">
                ✍️ 내가 읽은 도서 직접 입력
              </button>
            </div>
          </div>

          <div style="margin-top: 1rem;">
            ${!isCustom ? `
              <select id="ws-rec-book" style="width: 100%; padding: 0.65rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
                ${books.map(b => `
                  <option value="${b.id}" ${b.id === this.selectedBookId ? 'selected' : ''}>
                    ${b.isTeacherAdded ? '🌟 [선생님 추천] ' : ''}${b.title} (${b.author} 저 · ${b.publisher || '추천도서'})
                  </option>
                `).join('')}
              </select>
            ` : `
              <div style="display: grid; grid-template-columns: 2fr 1.5fr; gap: 1rem;">
                <input type="text" id="ws-custom-title" placeholder="책 제목을 입력하세요" style="padding: 0.65rem; border: 1px solid #4F46E5; border-radius: var(--radius-md); font-weight: 700;">
                <input type="text" id="ws-custom-author" placeholder="저자를 입력하세요" style="padding: 0.65rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
              </div>
            `}
          </div>
        </div>

        <!-- Render Selected PDF Worksheet Template -->
        <div class="worksheet-card">
          ${this.renderWorksheetTemplateHtml(selectedBook, isCustom)}
        </div>

        <!-- Class Reading Feed -->
        <div style="margin-top: 3.5rem;">
          <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>💬</span> 2학년 3반 친구들의 아침 독서 피드
          </h3>
          <div class="reading-feed-list">
            ${this.readingLogs.map(log => {
              const student = appState.state.students.find(s => s.number === log.studentNumber) || { nickname: '익명' };
              return `
                <div class="reading-feed-card">
                  <div class="feed-header">
                    <div class="feed-student-badge">
                      <span class="ticker-rank-pill" style="width:26px; height:26px;">${log.studentNumber}</span>
                      <span>${appState.formatStudentName(student)}</span>
                      <span class="badge badge-purple">《${log.bookTitle}》</span>
                      <span class="badge badge-blue">${log.templateType === 'quote_cards' ? '기억하고 싶은 구절' : (log.templateType === 'make_quiz' ? '퀴즈 만들기' : '독서기록장')}</span>
                    </div>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">${log.date}</span>
                  </div>

                  ${log.templateType === 'quote_cards' ? `
                    <div class="feed-quote-box">"${log.quote1}" (p.${log.page1})</div>
                    ${log.quote2 ? `<div class="feed-quote-box">"${log.quote2}" (p.${log.page2})</div>` : ''}
                  ` : (log.templateType === 'make_quiz' ? `
                    <div style="background: #F8FAFC; padding: 0.85rem; border-radius: 8px; font-size: 0.9rem;">
                      <div><strong>Q1.</strong> ${log.q1} (p.${log.p1})</div>
                      <div style="color: #059669; margin-top: 0.3rem;"><strong>A.</strong> ${log.a1}</div>
                    </div>
                  ` : `
                    <div style="font-size: 0.9rem; color: #334155; margin: 0.5rem 0;"><strong>내용 요약:</strong> ${log.summary}</div>
                    <div class="feed-quote-box"><strong>감상:</strong> ${log.reflection}</div>
                  `)}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

    // Template switcher
    container.querySelectorAll('.template-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        sounds.playClick();
        this.readingTemplate = e.currentTarget.dataset.tpl;
        this.renderReading(container);
      });
    });

    // Book Source switcher
    const btnSrcRec = container.querySelector('#btn-src-rec');
    const btnSrcCustom = container.querySelector('#btn-src-custom');
    if (btnSrcRec) {
      btnSrcRec.addEventListener('click', () => {
        sounds.playClick();
        this.bookSourceType = 'recommended';
        this.renderReading(container);
      });
    }
    if (btnSrcCustom) {
      btnSrcCustom.addEventListener('click', () => {
        sounds.playClick();
        this.bookSourceType = 'custom';
        this.renderReading(container);
      });
    }

    const recSelect = container.querySelector('#ws-rec-book');
    if (recSelect) {
      recSelect.addEventListener('change', (e) => {
        this.selectedBookId = e.target.value;
        this.renderReading(container);
      });
    }

    // Submit Worksheet
    const btnSubmitWs = container.querySelector('#btn-submit-worksheet');
    if (btnSubmitWs) {
      btnSubmitWs.addEventListener('click', () => {
        sounds.playCelebration();
        triggerConfetti();

        let title = selectedBook.title;
        let author = selectedBook.author;

        if (this.bookSourceType === 'custom') {
          title = container.querySelector('#ws-custom-title').value.trim() || '내가 읽은 책';
          author = container.querySelector('#ws-custom-author').value.trim() || '미상';
        }

        let newLog = {
          id: `r_${Date.now()}`,
          studentNumber: appState.state.userProfile.number,
          bookTitle: title,
          author,
          templateType: this.readingTemplate,
          date: appState.getTodayString()
        };

        if (this.readingTemplate === 'quote_cards') {
          newLog.quote1 = container.querySelector('#ws-q1-text').value.trim() || '인상 깊은 구절을 기록했습니다.';
          newLog.page1 = container.querySelector('#ws-q1-page').value.trim() || '1';
          newLog.quote2 = container.querySelector('#ws-q2-text').value.trim();
          newLog.page2 = container.querySelector('#ws-q2-page').value.trim();
        } else if (this.readingTemplate === 'summary_reflection') {
          newLog.summary = container.querySelector('#ws-summary-text').value.trim() || '책 내용 요약';
          newLog.reflection = container.querySelector('#ws-reflection-text').value.trim() || '나의 다짐과 생각';
        } else if (this.readingTemplate === 'make_quiz') {
          newLog.q1 = container.querySelector('#ws-quiz-q1').value.trim() || '책에 대한 퀴즈';
          newLog.p1 = container.querySelector('#ws-quiz-p1').value.trim() || '1';
          newLog.a1 = container.querySelector('#ws-quiz-a1').value.trim() || '정답';
        } else if (this.readingTemplate === 'mindmap') {
          newLog.centerKeyword = container.querySelector('#ws-mm-center')?.value.trim() || '핵심 주제';
          newLog.keywords = [1, 2, 3, 4, 5, 6].map(k => container.querySelector(`#ws-mm-${k}`)?.value.trim()).filter(Boolean);
        }

        this.readingLogs.unshift(newLog);
        appState.addReadingScore(30, newLog);
        showToast('독서기록 학습지 제출 완료! +30P 적립', '📚');
        this.renderReading(container);
      });
    }
  }

  // Render PDF Worksheet Form
  renderWorksheetTemplateHtml(book, isCustom) {
    const { userProfile } = appState.state;
    const titleVal = isCustom ? '' : book.title;
    const authorVal = isCustom ? '' : book.author;

    // 1. 기억하고 싶은 구절 (PDF p.1~2)
    if (this.readingTemplate === 'quote_cards') {
      return `
        <div class="worksheet-title-area">
          <h2 class="worksheet-main-title">기억하고 싶은 구절</h2>
          <div class="worksheet-sub-title">&lt;나의 책 나의 기록&gt;</div>
        </div>

        <!-- 2 Torn Grid Note Paper Blocks -->
        <div class="torn-paper-box">
          <textarea class="worksheet-textarea" id="ws-q1-text" placeholder="기억하고 싶은 첫 번째 구절을 기록해 보세요.">${!isCustom && book.quotes[0] ? book.quotes[0] : ''}</textarea>
          <div class="torn-page-tag">
            ( <input type="text" class="page-num-input" id="ws-q1-page" placeholder="  "> 페이지 )
          </div>
        </div>

        <div class="torn-paper-box">
          <textarea class="worksheet-textarea" id="ws-q2-text" placeholder="기억하고 싶은 두 번째 구절을 기록해 보세요.">${!isCustom && book.quotes[1] ? book.quotes[1] : ''}</textarea>
          <div class="torn-page-tag">
            ( <input type="text" class="page-num-input" id="ws-q2-page" placeholder="  "> 페이지 )
          </div>
        </div>

        <div class="worksheet-meta-bar">
          <div><strong>책제목:</strong> <input type="text" class="worksheet-input-inline" value="${titleVal}" readonly></div>
          <div><strong>저자:</strong> <input type="text" class="worksheet-input-inline" value="${authorVal}" readonly></div>
          <div><strong>학번:</strong> <input type="text" class="worksheet-input-inline" value="${userProfile.grade}0${userProfile.classNum}${String(userProfile.number).padStart(2,'0')}" readonly></div>
          <div><strong>이름:</strong> <input type="text" class="worksheet-input-inline" value="${userProfile.role === 'teacher' ? userProfile.realName : userProfile.nickname}" readonly></div>
        </div>

        <div style="margin-top: 2rem; text-align: center;">
          <button class="btn btn-primary" id="btn-submit-worksheet" style="padding: 0.85rem 2.5rem; font-size: 1rem;">
            📑 기억하고 싶은 구절 등록 (+30P)
          </button>
        </div>
      `;
    }

    // 2. 독서기록장 (PDF p.7~8)
    if (this.readingTemplate === 'summary_reflection') {
      return `
        <div class="worksheet-title-area">
          <h2 class="worksheet-main-title">독서기록장</h2>
          <div class="worksheet-sub-title">&lt;나의 책 나의 기록&gt;</div>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <div style="font-weight: 800; font-size: 1.05rem; margin-bottom: 0.5rem; color: #1E293B;">
            어떤 내용인가요? <span style="font-size: 0.85rem; font-weight: 500; color: #64748B;">책의 내용에 대해 정리해 보아요.</span>
          </div>
          <textarea class="worksheet-textarea" id="ws-summary-text" style="background: #F8FAFC; border: 1px solid #CBD5E1; border-radius: 8px; padding: 1rem;" placeholder="읽은 책의 주요 줄거리나 핵심 내용을 요약해 보세요."></textarea>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <div style="font-weight: 800; font-size: 1.05rem; margin-bottom: 0.5rem; color: #1E293B;">
            감상을 적어요!
          </div>
          <div class="reflection-checkboxes">
            <label class="rf-check-label"><input type="checkbox" checked> 느낀점</label>
            <label class="rf-check-label"><input type="checkbox"> 다짐</label>
            <label class="rf-check-label"><input type="checkbox"> 배울 점</label>
            <label class="rf-check-label"><input type="checkbox"> 새로 알게 된 사실</label>
          </div>
          <textarea class="worksheet-textarea" id="ws-reflection-text" style="background: #F8FAFC; border: 1px solid #CBD5E1; border-radius: 8px; padding: 1rem;" placeholder="체크한 감상 구분에 맞추어 나의 생각을 자유롭게 적어보세요."></textarea>
        </div>

        <div class="torn-paper-box">
          <div style="font-weight: 800; font-size: 0.95rem; margin-bottom: 0.5rem;">기억에 담고 싶은 부분</div>
          <textarea class="worksheet-textarea" id="ws-memorable-text" placeholder="오래도록 기억하고 싶은 구절이나 인상적인 장면"></textarea>
        </div>

        <div class="worksheet-meta-bar">
          <div><strong>책제목:</strong> <input type="text" class="worksheet-input-inline" value="${titleVal}" readonly></div>
          <div><strong>저자:</strong> <input type="text" class="worksheet-input-inline" value="${authorVal}" readonly></div>
          <div><strong>학번:</strong> <input type="text" class="worksheet-input-inline" value="${userProfile.grade}0${userProfile.classNum}${String(userProfile.number).padStart(2,'0')}" readonly></div>
          <div><strong>이름:</strong> <input type="text" class="worksheet-input-inline" value="${userProfile.role === 'teacher' ? userProfile.realName : userProfile.nickname}" readonly></div>
        </div>

        <div style="margin-top: 2rem; text-align: center;">
          <button class="btn btn-primary" id="btn-submit-worksheet" style="padding: 0.85rem 2.5rem; font-size: 1rem;">
            📝 독서기록장 등록 (+30P)
          </button>
        </div>
      `;
    }

    // 3. 퀴즈 만들기 (PDF p.3~4)
    if (this.readingTemplate === 'make_quiz') {
      return `
        <div class="worksheet-title-area">
          <h2 class="worksheet-main-title">퀴즈 만들기</h2>
          <div class="worksheet-sub-title">&lt;나의 책 나의 기록&gt;</div>
        </div>

        <div class="torn-paper-box" style="margin-bottom: 1.5rem;">
          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem;">
            <div>
              <div style="font-weight: 800; font-size: 1.1rem; color: #1E293B; margin-bottom: 0.4rem;">
                Q1. ( <input type="text" id="ws-quiz-p1" style="width: 40px; border:none; border-bottom:1px solid #64748B; background:transparent; font-weight:700; text-align:center;"> p)
              </div>
              <textarea class="worksheet-textarea" id="ws-quiz-q1" placeholder="친구들이 책을 읽고 맞출 수 있는 첫 번째 퀴즈 질문을 만들어보세요."></textarea>
            </div>
            <div style="border-left: 2px dashed #CBD5E1; padding-left: 1.5rem;">
              <div style="font-weight: 800; font-size: 1.1rem; color: #059669; margin-bottom: 0.4rem;">A. 정답</div>
              <textarea class="worksheet-textarea" id="ws-quiz-a1" placeholder="Q1의 정답을 적어주세요."></textarea>
            </div>
          </div>
        </div>

        <div class="torn-paper-box">
          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem;">
            <div>
              <div style="font-weight: 800; font-size: 1.1rem; color: #1E293B; margin-bottom: 0.4rem;">
                Q2. ( <input type="text" id="ws-quiz-p2" style="width: 40px; border:none; border-bottom:1px solid #64748B; background:transparent; font-weight:700; text-align:center;"> p)
              </div>
              <textarea class="worksheet-textarea" id="ws-quiz-q2" placeholder="두 번째 퀴즈 질문을 만들어보세요."></textarea>
            </div>
            <div style="border-left: 2px dashed #CBD5E1; padding-left: 1.5rem;">
              <div style="font-weight: 800; font-size: 1.1rem; color: #059669; margin-bottom: 0.4rem;">A. 정답</div>
              <textarea class="worksheet-textarea" id="ws-quiz-a2" placeholder="Q2의 정답을 적어주세요."></textarea>
            </div>
          </div>
        </div>

        <div class="worksheet-meta-bar">
          <div><strong>책제목:</strong> <input type="text" class="worksheet-input-inline" value="${titleVal}" readonly></div>
          <div><strong>저자:</strong> <input type="text" class="worksheet-input-inline" value="${authorVal}" readonly></div>
          <div><strong>학번:</strong> <input type="text" class="worksheet-input-inline" value="${userProfile.grade}0${userProfile.classNum}${String(userProfile.number).padStart(2,'0')}" readonly></div>
          <div><strong>이름:</strong> <input type="text" class="worksheet-input-inline" value="${userProfile.role === 'teacher' ? userProfile.realName : userProfile.nickname}" readonly></div>
        </div>

        <div style="margin-top: 2rem; text-align: center;">
          <button class="btn btn-primary" id="btn-submit-worksheet" style="padding: 0.85rem 2.5rem; font-size: 1rem;">
            ❓ 내가 만든 퀴즈 등록 (+30P)
          </button>
        </div>
      `;
    }

    // 4. 마인드맵 (PDF p.5~6)
    if (this.readingTemplate === 'mindmap') {
      return `
        <div class="worksheet-title-area">
          <h2 class="worksheet-main-title">마인드맵</h2>
          <div class="worksheet-sub-title">&lt;나의 책 나의 기록&gt;</div>
        </div>

        <div style="background: radial-gradient(#CBD5E1 1.2px, transparent 1.2px); background-size: 18px 18px; border: 1px solid #CBD5E1; border-radius: var(--radius-lg); padding: 2.5rem 1.5rem; margin-bottom: 2rem; text-align: center; background-color: #FFFFFF;">
          <div style="font-size: 0.875rem; color: #64748B; margin-bottom: 1.5rem; font-weight: 600;">
            중심 키워드를 적고, 책을 읽으며 떠오른 생각과 핵심 단어를 6개의 가지에 자유롭게 적어보세요.
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 1.5rem; max-width: 580px; margin: 0 auto;">
            <!-- Top 2 branches -->
            <div style="display: flex; justify-content: space-between; width: 100%;">
              <input type="text" id="ws-mm-1" placeholder="↖ 생각가지 1" style="padding: 0.5rem 0.75rem; border: 2px dashed #6366F1; border-radius: 20px; text-align: center; font-weight: 700; width: 140px; background: #EEF2FF;">
              <input type="text" id="ws-mm-2" placeholder="↗ 생각가지 2" style="padding: 0.5rem 0.75rem; border: 2px dashed #6366F1; border-radius: 20px; text-align: center; font-weight: 700; width: 140px; background: #EEF2FF;">
            </div>

            <!-- Middle Row with Center Circle -->
            <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
              <input type="text" id="ws-mm-3" placeholder="← 생각가지 3" style="padding: 0.5rem 0.75rem; border: 2px dashed #6366F1; border-radius: 20px; text-align: center; font-weight: 700; width: 140px; background: #EEF2FF;">
              
              <div style="width: 140px; height: 90px; border: 3px solid #1E293B; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #FFFFFF; box-shadow: 0 4px 12px rgba(0,0,0,0.06); padding: 0.5rem;">
                <span style="font-size: 0.7rem; color: #64748B; font-weight: 800;">중심 키워드</span>
                <input type="text" id="ws-mm-center" placeholder="키워드 적기" style="border: none; border-bottom: 2px solid #3B82F6; text-align: center; font-weight: 800; font-size: 1rem; width: 90%; outline: none;">
              </div>

              <input type="text" id="ws-mm-4" placeholder="생각가지 4 →" style="padding: 0.5rem 0.75rem; border: 2px dashed #6366F1; border-radius: 20px; text-align: center; font-weight: 700; width: 140px; background: #EEF2FF;">
            </div>

            <!-- Bottom 2 branches -->
            <div style="display: flex; justify-content: space-between; width: 100%;">
              <input type="text" id="ws-mm-5" placeholder="↙ 생각가지 5" style="padding: 0.5rem 0.75rem; border: 2px dashed #6366F1; border-radius: 20px; text-align: center; font-weight: 700; width: 140px; background: #EEF2FF;">
              <input type="text" id="ws-mm-6" placeholder="↘ 생각가지 6" style="padding: 0.5rem 0.75rem; border: 2px dashed #6366F1; border-radius: 20px; text-align: center; font-weight: 700; width: 140px; background: #EEF2FF;">
            </div>
          </div>
        </div>

        <div class="worksheet-meta-bar">
          <div><strong>책제목:</strong> <input type="text" class="worksheet-input-inline" value="${titleVal}" readonly></div>
          <div><strong>저자:</strong> <input type="text" class="worksheet-input-inline" value="${authorVal}" readonly></div>
          <div><strong>학번:</strong> <input type="text" class="worksheet-input-inline" value="${userProfile.grade}0${userProfile.classNum}${String(userProfile.number).padStart(2,'0')}" readonly></div>
          <div><strong>이름:</strong> <input type="text" class="worksheet-input-inline" value="${userProfile.role === 'teacher' ? userProfile.realName : userProfile.nickname}" readonly></div>
        </div>

        <div style="margin-top: 2rem; text-align: center;">
          <button class="btn btn-primary" id="btn-submit-worksheet" style="padding: 0.85rem 2.5rem; font-size: 1rem; background: #4F46E5;">
            🌐 마인드맵 등록 (+30P)
          </button>
        </div>
      `;
    }

    return '';
  }

  // ================= BADGES & HALL OF FAME VIEW =================
  renderBadges(container) {
    const unlocked = appState.checkBadges();
    const unlockedIds = new Set(unlocked.map(b => b.id));
    const ranked = appState.getRankedStudents(this.leaderboardCategory, this.leaderboardScope);

    container.innerHTML = `
      <div class="app-container" style="padding-top: 2rem;">
        <div style="text-align: center; max-width: 680px; margin: 0 auto 2.5rem;">
          <span class="hero-pill-tag">Achievement & Multi-tier Hall of Fame</span>
          <h2 style="font-size: 2.2rem; font-weight: 800; letter-spacing: -0.025em; margin-bottom: 0.5rem;">
            나의 성장 배지 & 명예의 전당
          </h2>
          <p style="color: var(--text-secondary); font-size: 0.95rem;">
            학급별, 학년별, 전교생 단위로 선의의 성장을 확인해 보세요.
          </p>

          <div style="display: flex; justify-content: center; gap: 0.5rem; margin-top: 1.25rem;">
            <button class="btn ${this.leaderboardScope === 'class' ? 'btn-primary' : 'btn-secondary'} sub-scope" data-sub-scope="class">
              🏫 학급별
            </button>
            <button class="btn ${this.leaderboardScope === 'grade' ? 'btn-primary' : 'btn-secondary'} sub-scope" data-sub-scope="grade">
              🎓 학년별
            </button>
            <button class="btn ${this.leaderboardScope === 'school' ? 'btn-primary' : 'btn-secondary'} sub-scope" data-sub-scope="school">
              🌐 전교생
            </button>
          </div>
        </div>

        <!-- Badges Grid -->
        <div style="margin-bottom: 3.5rem;">
          <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>🎖️</span> 획득 가능한 중학 성장 배지 (${unlocked.length}/${BADGES.length})
          </h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.25rem;">
            ${BADGES.map(badge => {
              const isUnlocked = unlockedIds.has(badge.id);
              return `
                <div class="card" style="padding: 1.5rem; text-align: center; ${isUnlocked ? 'border-color: #FBBF24; background: #FFFDF7;' : 'opacity: 0.6; filter: grayscale(0.8);'}">
                  <div style="font-size: 2.8rem; margin-bottom: 0.75rem;">${badge.icon}</div>
                  <div style="font-size: 1.05rem; font-weight: 800; margin-bottom: 0.35rem; color: var(--text-primary);">
                    ${badge.name}
                  </div>
                  <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
                    ${badge.desc}
                  </div>
                  <span class="badge ${isUnlocked ? 'badge-green' : 'badge-gray'}">
                    ${isUnlocked ? '획득 완료' : '도전 진행 중'}
                  </span>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Leaderboard -->
        <div class="card">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
            <div>
              <h3 style="font-size: 1.25rem; font-weight: 800;">
                🌟 1위 ~ 20위 랭킹 (${this.leaderboardScope === 'class' ? '2-3반' : (this.leaderboardScope === 'grade' ? '2학년 전체' : '전교생')})
              </h3>
            </div>
            <div class="category-nav-pills" style="margin: 0;">
              <button class="category-pill-btn ${this.leaderboardCategory === 'total' ? 'active' : ''}" data-subcat="total">통합</button>
              <button class="category-pill-btn ${this.leaderboardCategory === 'manners' ? 'active' : ''}" data-subcat="manners">예절</button>
              <button class="category-pill-btn ${this.leaderboardCategory === 'typing' ? 'active' : ''}" data-subcat="typing">타자</button>
              <button class="category-pill-btn ${this.leaderboardCategory === 'reading' ? 'active' : ''}" data-subcat="reading">독서</button>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            ${ranked.slice(0, 20).map((s, idx) => {
              const rankIcon = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `${idx + 1}위`;
              const isMe = (s.number === appState.state.userProfile.number && (s.classNum === appState.state.userProfile.classNum));
              return `
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; border-radius: var(--radius-lg); background: ${isMe ? 'var(--color-blue-light)' : 'var(--bg-subtle)'}; border: 1px solid ${isMe ? 'var(--color-blue)' : 'var(--border-light)'};">
                  <div style="display: flex; align-items: center; gap: 1rem;">
                    <span style="font-size: 1.2rem; font-weight: 800; width: 36px; text-align: center;">${rankIcon}</span>
                    <div>
                      <div style="font-weight: 800; font-size: 0.95rem; display: flex; align-items: center; gap: 0.4rem;">
                        ${appState.formatStudentName(s)}
                        <span style="font-size: 0.75rem; color: var(--text-muted);">(${s.grade || 2}-${s.classNum || 3})</span>
                        ${isMe ? '<span class="badge badge-blue" style="font-size: 0.65rem;">내 기록</span>' : ''}
                      </div>
                      <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.2rem;">
                        "${s.comment || '아침 루틴을 성실히 실천 중입니다.'}"
                      </div>
                    </div>
                  </div>
                  <div style="text-align: right;">
                    <span class="point-pill" style="font-size: 0.95rem;">
                      🌟 ${s.totalPoints.toLocaleString()}P
                    </span>
                    <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.2rem;">
                      예절: ${s.mannersScore}P | 타자: ${s.typingBestCPM}타 | 독서: ${s.readingScore}P
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

    container.querySelectorAll('.sub-scope').forEach(btn => {
      btn.addEventListener('click', (e) => {
        sounds.playClick();
        this.leaderboardScope = e.currentTarget.dataset.subScope;
        this.renderBadges(container);
      });
    });

    container.querySelectorAll('[data-subcat]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        sounds.playClick();
        this.leaderboardCategory = e.currentTarget.dataset.subcat;
        this.renderBadges(container);
      });
    });
  }

  // 교사 권한이 없는 사용자에게 보여줄 잠금 화면
  renderTeacherLocked(container) {
    const isLoggedIn = !!(appState.state.auth && appState.state.auth.uid);
    container.innerHTML = `
      <div class="app-container" style="padding-top: 3rem;">
        <div class="card" style="max-width: 520px; margin: 0 auto; padding: 2.5rem 2rem; text-align: center;">
          <div style="font-size: 3rem; margin-bottom: 0.75rem;">🔒</div>
          <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem;">교사 전용 화면입니다</h2>
          <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.5rem;">
            ${isLoggedIn
              ? `현재 계정(<strong>${appState.state.auth.email}</strong>)은 학생 권한입니다.<br>선생님이시라면 교사 인증 코드로 권한을 신청해 주세요.`
              : '교사 계정으로 로그인하면 학급 경영 대시보드를 이용할 수 있습니다.<br>학교 워크스페이스(@kyunghee.sen.ms.kr)로 로그인하세요.'}
          </p>
          <button class="btn btn-primary" id="btn-locked-action" style="background: #4F46E5;">
            ${isLoggedIn ? '🔑 교사 권한 신청' : '로그인하기'}
          </button>
        </div>
      </div>
    `;

    container.querySelector('#btn-locked-action').addEventListener('click', () => {
      sounds.playClick();
      if (isLoggedIn) {
        this.promptTeacherAccess();
      } else {
        document.getElementById('btn-google-auth').click();
      }
    });
  }

  // ================= TEACHER DASHBOARD VIEW (WITH 70% PROPOSAL SYSTEM & BOOK ADDITION) =================
  renderTeacher(container) {
    const activeClassKey = appState.state.selectedClassKey || '2-3';
    const [selGrade, selClass] = activeClassKey.split('-').map(Number);
    const classStudents = appState.getStudentsByClass(selGrade, selClass);
    const stats = appState.getClassStats(activeClassKey);
    let filtered = [...classStudents];

    if (this.tableFilter === 'completed') {
      filtered = filtered.filter(s => s.checked && s.quizDone);
    } else if (this.tableFilter === 'ongoing') {
      filtered = filtered.filter(s => (s.checked || s.quizDone) && !(s.checked && s.quizDone));
    } else if (this.tableFilter === 'uncompleted') {
      filtered = filtered.filter(s => !s.checked && !s.quizDone);
    }

    if (this.tableSearch) {
      filtered = filtered.filter(s => 
        s.realName.includes(this.tableSearch) ||
        s.nickname.includes(this.tableSearch) ||
        String(s.number).includes(this.tableSearch)
      );
    }

    const proposals = appState.state.teacherProposals || [];
    const recommendedBooks = appState.getRecommendedBooks();

    container.innerHTML = `
      <div class="teacher-dashboard">
        <div class="teacher-header">
          <div class="teacher-title-area">
            <h2>
              <span>👩‍🏫</span> 담임교사 학급 경영 대시보드
            </h2>
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-top: 0.4rem; flex-wrap: wrap;">
              <select class="teacher-class-select" id="tc-class-select" style="font-weight: 700; padding: 0.45rem 0.85rem; border-radius: 8px; border: 1px solid var(--border-light); background: #FFFFFF; font-size: 0.85rem;">
                ${[1, 2, 3].map(g => `
                  <optgroup label="${g}학년 (7개반)">
                    ${[1, 2, 3, 4, 5, 6, 7].map(c => {
                      const key = `${g}-${c}`;
                      const isSel = key === activeClassKey;
                      return `<option value="${key}" ${isSel ? 'selected' : ''}>경희중학교 ${g}학년 ${c}반 (${g === 2 && c === 3 ? '내 학급 ⭐' : '학급 조회'})</option>`;
                    }).join('')}
                  </optgroup>
                `).join('')}
              </select>
              <span style="font-size: 0.85rem; color: var(--text-muted);">
                오늘 일자: ${appState.getTodayString()}
              </span>
            </div>
          </div>

          <div style="display: flex; gap: 0.75rem;">
            <button class="btn btn-secondary" id="btn-export-records">
              📥 학급 기록 엑셀 저장
            </button>
            <button class="btn btn-primary" id="btn-open-exhibition" style="background: #4F46E5;">
              📺 TV 전시 모드 실행
            </button>
          </div>
        </div>

        <!-- Metric Cards -->
        <div class="teacher-stats-grid">
          <div class="stat-card blue">
            <div class="stat-card-title">오늘 참여율</div>
            <div class="stat-card-number">${stats.participationRate}%</div>
            <div class="stat-card-sub">오늘 ${stats.activeCount}명 참여</div>
          </div>
          <div class="stat-card emerald">
            <div class="stat-card-title">루틴 완료자</div>
            <div class="stat-card-number">${stats.completedCount}명</div>
            <div class="stat-card-sub">미완료 학생: ${stats.total - stats.completedCount}명</div>
          </div>
          <div class="stat-card amber">
            <div class="stat-card-title">학급 평균 타수</div>
            <div class="stat-card-number">${stats.avgCPM}타</div>
            <div class="stat-card-sub">디벗 타자 소양 양호</div>
          </div>
          <div class="stat-card purple">
            <div class="stat-card-title">학급 누적 총합</div>
            <div class="stat-card-number">${stats.totalClassPoints.toLocaleString()}P</div>
            <div class="stat-card-sub">목표 25,000P까지 순항 중</div>
          </div>
        </div>

        <!-- Teacher Etiquette Proposal & 70% Approval Panel -->
        <div class="teacher-proposal-panel">
          <div class="proposal-panel-header">
            <div>
              <h3 style="font-size: 1.25rem; font-weight: 800; display: flex; align-items: center; gap: 0.5rem;">
                <span>🗳️</span> 핵심 예절 지침 교사 제안 & 70% 공감 투표
              </h3>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">
                선생님 전체 인원(10명) 중 <strong>70% (7명 이상)</strong> 공감을 받으면 학생 공식 실천 지침으로 자동 게시됩니다.
              </p>
            </div>
            <button class="btn btn-primary" id="btn-open-prop-modal" style="font-size: 0.85rem;">
              ➕ 새 예절 지침 제안하기
            </button>
          </div>

          <div class="proposal-grid">
            ${proposals.map(p => {
              const voteCount = p.votes.length;
              const rate = Math.round((voteCount / p.totalTeachers) * 100);
              const isApproved = p.status === 'approved' || rate >= 70;
              return `
                <div class="proposal-card">
                  <div>
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                      <span class="badge ${isApproved ? 'badge-green' : 'badge-orange'}">
                        ${isApproved ? '🎉 공식 채택 완료 (게시됨)' : `심사 중 (${rate}%)`}
                      </span>
                      <span style="font-size: 0.75rem; color: var(--text-muted);">${p.date}</span>
                    </div>
                    <h4 style="font-weight: 800; font-size: 1.05rem; margin-bottom: 0.35rem; color: #1E293B;">
                      ${p.rule}
                    </h4>
                    <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 0.75rem;">
                      ${p.desc}
                    </p>
                    <div style="font-size: 0.75rem; color: var(--text-muted);">
                      제안자: ${p.proposer}
                    </div>
                  </div>

                  <div style="margin-top: 1rem; border-top: 1px solid var(--border-light); padding-top: 0.75rem;">
                    <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 700;">
                      <span>공감 득표율</span>
                      <span style="color: ${isApproved ? '#059669' : '#D97706'};">${voteCount}/${p.totalTeachers}명 (${rate}%)</span>
                    </div>
                    <div class="proposal-vote-bar">
                      <div class="proposal-vote-fill" style="width: ${rate}%; background: ${isApproved ? '#10B981' : '#F59E0B'};"></div>
                    </div>
                    ${!isApproved ? `
                      <button class="btn btn-secondary btn-vote-sympathy" data-prop-id="${p.id}" style="width: 100%; margin-top: 0.5rem; font-size: 0.8rem; padding: 0.4rem;">
                        👍 공감 투표하기 (+1표)
                      </button>
                    ` : `
                      <div style="font-size: 0.75rem; color: #059669; font-weight: 700; text-align: center; margin-top: 0.5rem;">
                        ✓ 학생 예절 실천 항목에 등록되었습니다.
                      </div>
                    `}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Teacher Recommended Books Management Panel -->
        <div class="teacher-proposal-panel" style="margin-top: 2rem;">
          <div class="proposal-panel-header">
            <div>
              <h3 style="font-size: 1.25rem; font-weight: 800; display: flex; align-items: center; gap: 0.5rem;">
                <span>📚</span> 중학 추천도서 등록 및 학생 배포 관리 (${recommendedBooks.length}권)
              </h3>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">
                선생님께서 학생들에게 권하고 싶은 양서를 등록하면, 학생들의 [독서 기록] 추천도서 선택 목록에 즉시 배포됩니다.
              </p>
            </div>
            <button class="btn btn-primary" id="btn-open-book-modal" style="font-size: 0.85rem; background: #059669;">
              ➕ 새 추천도서 등록하기
            </button>
          </div>

          <div class="teacher-book-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; margin-top: 1.25rem;">
            ${recommendedBooks.map(b => `
              <div class="card" style="padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between; border-color: ${b.isTeacherAdded ? '#10B981' : 'var(--border-light)'}; background: ${b.isTeacherAdded ? '#F0FDF4' : '#FFFFFF'};">
                <div>
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span style="font-size: 1.5rem;">${b.coverIcon || '📖'}</span>
                    <span class="badge ${b.isTeacherAdded ? 'badge-green' : 'badge-purple'}">
                      ${b.isTeacherAdded ? '교사 등록 ⭐' : '청소년 베스트'}
                    </span>
                  </div>
                  <h4 style="font-weight: 800; font-size: 1.05rem; color: #1E293B; margin-bottom: 0.25rem;">
                    ${b.title}
                  </h4>
                  <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">
                    ${b.author} 저 · ${b.publisher || '출판사 미상'}
                  </div>
                  <p style="font-size: 0.825rem; color: var(--text-secondary); line-height: 1.5;">
                    ${b.desc}
                  </p>
                </div>
                <div style="margin-top: 0.85rem; border-top: 1px solid var(--border-light); padding-top: 0.5rem; font-size: 0.75rem; color: var(--text-muted); display: flex; justify-content: space-between;">
                  <span>${b.isTeacherAdded ? `등록자: ${b.addedBy || '선생님'}` : '기본 권장도서'}</span>
                  <span style="color: #4F46E5;">구절 ${b.quotes?.length || 0}개</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Student Management Table (RealName + Nickname) -->
        <div class="table-container-card">
          <div class="table-toolbar">
            <div class="table-filter-pills">
              <button class="table-filter-btn ${this.tableFilter === 'all' ? 'active' : ''}" data-filter="all">전체 (${stats.total})</button>
              <button class="table-filter-btn ${this.tableFilter === 'completed' ? 'active' : ''}" data-filter="completed">완료 (${stats.completedCount})</button>
              <button class="table-filter-btn ${this.tableFilter === 'ongoing' ? 'active' : ''}" data-filter="ongoing">진행 중 (${stats.activeCount - stats.completedCount})</button>
              <button class="table-filter-btn ${this.tableFilter === 'uncompleted' ? 'active' : ''}" data-filter="uncompleted">미참여 (${stats.total - stats.activeCount})</button>
            </div>

            <input type="text" class="table-search-input" id="tc-search-input" placeholder="이름 또는 닉네임 검색..." value="${this.tableSearch}">
          </div>

          <div style="overflow-x: auto;">
            <table class="student-data-table">
              <thead>
                <tr>
                  <th style="width: 60px;">번호</th>
                  <th style="width: 180px;">학생 (실명 + 닉네임)</th>
                  <th style="width: 100px;">예절 점수</th>
                  <th style="width: 100px;">타자 점수</th>
                  <th style="width: 100px;">독서 점수</th>
                  <th style="width: 110px;">총합 포인트</th>
                  <th style="width: 100px;">최고 타수</th>
                  <th>오늘의 아침 다짐</th>
                  <th style="width: 140px; text-align: center;">칭찬 스티커</th>
                </tr>
              </thead>
              <tbody>
                ${filtered.map(student => `
                  <tr>
                    <td><span class="student-num-badge">${student.number}</span></td>
                    <td>
                      <div class="student-name-col">
                        <strong>${student.realName}</strong>
                        <span style="color: #4F46E5; font-size: 0.8rem;">(${student.nickname})</span>
                        ${student.hasSticker ? '<span>⭐</span>' : ''}
                      </div>
                    </td>
                    <td><span class="badge badge-green">${student.mannersScore}P</span></td>
                    <td><span class="badge badge-blue">${student.typingScore}P</span></td>
                    <td><span class="badge badge-purple">${student.readingScore}P</span></td>
                    <td><span class="point-pill">🌟 ${student.totalPoints}P</span></td>
                    <td><span style="font-weight: 700; font-family: var(--font-mono);">${student.typingBestCPM} CPM</span></td>
                    <td style="color: var(--text-secondary); font-size: 0.85rem;">${student.comment || '작성 대기 중'}</td>
                    <td style="text-align: center;">
                      <button class="btn btn-secondary btn-praise-sticker" data-student-num="${student.number}" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;">
                        ⭐ 칭찬 (+50P)
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- TV Exhibition Modal -->
      <div class="exhibition-overlay" id="exhibition-view">
        <div class="exhibition-top-bar">
          <div class="exhibition-brand">
            <div class="logo-badge" style="background: #3B82F6;">Q</div>
            <div style="font-size: 1.3rem; font-weight: 800;">바름5분 전시 모드 — 2학년 3반</div>
            <span class="exhibition-badge">LIVE MORNING SHOWCASE</span>
          </div>
          <button class="exhibition-btn-close" id="btn-close-exhibition">✕ 닫기 (ESC)</button>
        </div>
        <div class="exhibition-stage" id="exhibition-stage-content"></div>
        <div class="exhibition-bottom-bar">
          <div style="display: flex; gap: 1rem; align-items: center;">
            <span>⏱️ 5초마다 자동 슬라이드</span>
            <button class="btn btn-secondary" id="btn-ex-prev" style="background: rgba(255,255,255,0.1); color:#fff; border:none; padding:0.25rem 0.6rem;">◀ 이전</button>
            <button class="btn btn-secondary" id="btn-ex-next" style="background: rgba(255,255,255,0.1); color:#fff; border:none; padding:0.25rem 0.6rem;">다음 ▶</button>
          </div>
          <div class="exhibition-dots" id="exhibition-dots"></div>
        </div>
      </div>
    `;

    // Sympathy Vote
    container.querySelectorAll('.btn-vote-sympathy').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const propId = e.currentTarget.dataset.propId;
        sounds.playSuccess();
        const res = appState.voteProposalSympathy(propId, `t_${Date.now()}`);
        if (res.isApproved) {
          sounds.playCelebration();
          triggerConfetti();
          showToast(`공감 70% 달성! 공식 예절 지침으로 채택되었습니다! 🎉`, '🗳️');
        } else {
          showToast(`공감 투표 완료! (현재 ${res.rate}%)`, '👍');
        }
        this.renderTeacher(container);
      });
    });

    // Open Proposal Modal
    const btnOpenProp = container.querySelector('#btn-open-prop-modal');
    if (btnOpenProp) {
      btnOpenProp.addEventListener('click', () => {
        sounds.playClick();
        this.openEtiquetteProposalModal(container);
      });
    }

    // Class Selector across all 21 classes
    const classSelect = container.querySelector('#tc-class-select');
    if (classSelect) {
      classSelect.addEventListener('change', (e) => {
        sounds.playClick();
        appState.setSelectedClassKey(e.target.value);
        this.renderTeacher(container);
      });
    }

    // Open Book Modal
    const btnOpenBook = container.querySelector('#btn-open-book-modal');
    if (btnOpenBook) {
      btnOpenBook.addEventListener('click', () => {
        sounds.playClick();
        this.openTeacherBookModal(container);
      });
    }

    // Filter
    container.querySelectorAll('.table-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        sounds.playClick();
        this.tableFilter = e.currentTarget.dataset.filter;
        this.renderTeacher(container);
      });
    });

    // Search
    const searchInput = container.querySelector('#tc-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.tableSearch = e.target.value.trim();
        this.renderTeacher(container);
        const inputNow = container.querySelector('#tc-search-input');
        if (inputNow) {
          inputNow.focus();
          inputNow.setSelectionRange(inputNow.value.length, inputNow.value.length);
        }
      });
    }

    // Praise sticker
    container.querySelectorAll('.btn-praise-sticker').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const studentNum = parseInt(e.currentTarget.dataset.studentNum, 10);
        sounds.playCelebration();
        triggerConfetti();
        appState.giveTeacherPraise(studentNum, 50);
        showToast(`${studentNum}번 학생에게 칭찬 스티커와 +50P 전달 완료!`, '⭐');
        this.renderTeacher(container);
      });
    });

    // CSV
    const btnExport = container.querySelector('#btn-export-records');
    if (btnExport) {
      btnExport.addEventListener('click', () => {
        sounds.playSuccess();
        const header = '번호,실명,닉네임,예절점수,타자점수,독서점수,총합포인트,최고타수,다짐\n';
        const rows = appState.state.students.map(s => 
          `${s.number},${s.realName},${s.nickname},${s.mannersScore},${s.typingScore},${s.readingScore},${s.totalPoints},${s.typingBestCPM},"${s.comment || ''}"`
        ).join('\n');
        const blob = new Blob(["\uFEFF" + header + rows], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `바름5분_2학년3반_기록_${appState.getTodayString()}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        showToast('학급 활동 기록 CSV 파일 다운로드 완료', '📥');
      });
    }

    const btnExhibition = container.querySelector('#btn-open-exhibition');
    if (btnExhibition) {
      btnExhibition.addEventListener('click', () => {
        sounds.playClick();
        this.openExhibition();
      });
    }
  }

  // Teacher Proposal Modal
  openEtiquetteProposalModal(parentContainer) {
    let modal = document.getElementById('prop-create-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'modal-overlay';
      modal.id = 'prop-create-modal';
      modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px; text-align: left;">
          <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.5rem;">새 핵심 예절 지침 제안</h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
            제안 후 전체 선생님(10명) 중 70% 이상 공감을 받으면 공식 게시됩니다.
          </p>

          <div style="margin-bottom: 1rem;">
            <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">해당 영역</label>
            <select id="prop-domain-sel" style="width: 100%; padding: 0.6rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
              ${ETIQUETTE_DOMAINS.map(d => `<option value="${d.id}">${d.icon} ${d.title}</option>`).join('')}
            </select>
          </div>

          <div style="margin-bottom: 1rem;">
            <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">지침 제목 (핵심 수칙)</label>
            <input type="text" id="prop-rule-input" placeholder="예: 체육관 이동 시 정숙 보행하기" style="width: 100%; padding: 0.6rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
          </div>

          <div style="margin-bottom: 1.5rem;">
            <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">세부 실천 지침 및 교육 취지</label>
            <textarea id="prop-desc-input" rows="3" placeholder="학생들이 실천할 구체적인 행동 요령을 작성해주세요." style="width: 100%; padding: 0.65rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-family: inherit; font-size: 0.9rem;"></textarea>
          </div>

          <div style="display: flex; gap: 0.75rem;">
            <button class="btn btn-secondary" id="btn-close-prop" style="flex: 1;">취소</button>
            <button class="btn btn-primary" id="btn-save-prop" style="flex: 1; background: #4F46E5;">제안 등록하기 🗳️</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }

    modal.classList.add('active');

    modal.querySelector('#btn-close-prop').onclick = () => modal.classList.remove('active');
    modal.querySelector('#btn-save-prop').onclick = () => {
      const domainId = modal.querySelector('#prop-domain-sel').value;
      const rule = modal.querySelector('#prop-rule-input').value.trim();
      const desc = modal.querySelector('#prop-desc-input').value.trim();

      if (!rule || !desc) {
        showToast('제목과 세부 설명을 모두 입력해주세요.', '⚠️');
        return;
      }

      appState.proposeEtiquette({
        domainId,
        rule,
        desc,
        proposer: `${appState.state.userProfile.realName} 선생님`
      });

      sounds.playSuccess();
      modal.classList.remove('active');
      showToast('새 예절 지침이 제안되었습니다. (동료 교사 투표 시작)', '🗳️');
      this.renderTeacher(parentContainer);
    };
  }

  // Teacher Recommended Book Modal
  openTeacherBookModal(parentContainer) {
    let modal = document.getElementById('teacher-book-create-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'modal-overlay';
      modal.id = 'teacher-book-create-modal';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="modal-content" style="max-width: 540px; text-align: left;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
          <h3 style="font-size: 1.35rem; font-weight: 800; display: flex; align-items: center; gap: 0.5rem;">
            <span>📚</span> 새 추천도서 등록 및 학생 배포
          </h3>
          <span class="badge badge-green">교사 권한</span>
        </div>

        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.5;">
          선생님께서 등록하신 도서는 학생들의 <strong>[독서 기록] 추천도서 선택 드롭다운</strong>에 즉시 배포되어 학생들이 읽고 구절 메모나 퀴즈를 작성할 수 있습니다.
        </p>

        <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
          <div style="display: grid; grid-template-columns: 2fr 1.2fr; gap: 0.75rem;">
            <div>
              <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">도서 제목</label>
              <input type="text" id="tb-title-input" placeholder="예: 불편한 편의점" style="width: 100%; padding: 0.6rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
            </div>
            <div>
              <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">저자</label>
              <input type="text" id="tb-author-input" placeholder="예: 김호연" style="width: 100%; padding: 0.6rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 0.75rem;">
            <div>
              <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">출판사</label>
              <input type="text" id="tb-pub-input" placeholder="예: 나무옆의자" style="width: 100%; padding: 0.6rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
            </div>
            <div>
              <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">분류 카테고리</label>
              <select id="tb-cat-input" style="width: 100%; padding: 0.6rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
                <option value="청소년 문학·성장">청소년 문학·성장</option>
                <option value="공감·우정·관계">공감·우정·관계</option>
                <option value="인문·교양">인문·교양</option>
                <option value="과학·환경">과학·환경</option>
                <option value="진로·자기계발">진로·자기계발</option>
              </select>
            </div>
          </div>

          <div>
            <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">추천 이유 및 도서 소개</label>
            <textarea id="tb-desc-input" rows="2" placeholder="학생들에게 이 책을 권하는 이유를 다정하게 남겨주세요." style="width: 100%; padding: 0.65rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-family: inherit; font-size: 0.875rem;"></textarea>
          </div>

          <div>
            <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">대표 인상 깊은 구절 (선택)</label>
            <input type="text" id="tb-q1-input" placeholder="학생들이 기억하면 좋은 명문장 1구절" style="width: 100%; padding: 0.55rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-size: 0.85rem; margin-bottom: 0.4rem;">
            <input type="text" id="tb-q2-input" placeholder="학생들이 기억하면 좋은 명문장 2구절 (선택)" style="width: 100%; padding: 0.55rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-size: 0.85rem;">
          </div>
        </div>

        <div style="display: flex; gap: 0.75rem;">
          <button class="btn btn-secondary" id="btn-close-tb-modal" style="flex: 1;">취소</button>
          <button class="btn btn-primary" id="btn-save-tb-modal" style="flex: 1; background: #059669;">추천도서 등록 및 배포 📚</button>
        </div>
      </div>
    `;

    modal.classList.add('active');
    modal.querySelector('#btn-close-tb-modal').onclick = () => modal.classList.remove('active');
    modal.querySelector('#btn-save-tb-modal').onclick = () => {
      const title = modal.querySelector('#tb-title-input').value.trim();
      const author = modal.querySelector('#tb-author-input').value.trim();
      const publisher = modal.querySelector('#tb-pub-input').value.trim();
      const category = modal.querySelector('#tb-cat-input').value;
      const desc = modal.querySelector('#tb-desc-input').value.trim();
      const q1 = modal.querySelector('#tb-q1-input').value.trim();
      const q2 = modal.querySelector('#tb-q2-input').value.trim();

      if (!title || !author) {
        showToast('도서 제목과 저자를 입력해주세요.', '⚠️');
        return;
      }

      const quotes = [q1, q2].filter(Boolean);
      appState.addRecommendedBook({
        title,
        author,
        publisher,
        category,
        coverIcon: '📘',
        desc,
        quotes,
        addedBy: `${appState.state.userProfile.realName} 선생님`
      });

      modal.classList.remove('active');
      sounds.playCelebration();
      triggerConfetti();
      showToast(`《${title}》 추천도서가 등록되어 학생들에게 배포되었습니다!`, '📚');
      this.renderTeacher(parentContainer);
    };
  }

  // TV Exhibition
  openExhibition() {
    const overlay = document.getElementById('exhibition-view');
    if (!overlay) return;
    overlay.classList.add('active');

    this.exhibitionIndex = 0;
    this.updateExhibitionSlide();

    clearInterval(this.exhibitionTimer);
    this.exhibitionTimer = setInterval(() => {
      this.nextExhibitionSlide();
    }, 5000);

    const closeBtn = document.getElementById('btn-close-exhibition');
    if (closeBtn) closeBtn.onclick = () => this.closeExhibition();

    const prevBtn = document.getElementById('btn-ex-prev');
    const nextBtn = document.getElementById('btn-ex-next');
    if (prevBtn) prevBtn.onclick = () => this.prevExhibitionSlide();
    if (nextBtn) nextBtn.onclick = () => this.nextExhibitionSlide();

    const escHandler = (e) => {
      if (e.key === 'Escape') {
        this.closeExhibition();
        window.removeEventListener('keydown', escHandler);
      }
    };
    window.addEventListener('keydown', escHandler);
  }

  closeExhibition() {
    const overlay = document.getElementById('exhibition-view');
    if (overlay) overlay.classList.remove('active');
    clearInterval(this.exhibitionTimer);
  }

  nextExhibitionSlide() {
    const students = appState.state.students.filter(s => s.comment);
    if (!students.length) return;
    this.exhibitionIndex = (this.exhibitionIndex + 1) % students.length;
    this.updateExhibitionSlide();
  }

  prevExhibitionSlide() {
    const students = appState.state.students.filter(s => s.comment);
    if (!students.length) return;
    this.exhibitionIndex = (this.exhibitionIndex - 1 + students.length) % students.length;
    this.updateExhibitionSlide();
  }

  updateExhibitionSlide() {
    const students = appState.state.students.filter(s => s.comment);
    if (!students.length) return;

    const student = students[this.exhibitionIndex];
    const stage = document.getElementById('exhibition-stage-content');
    const dots = document.getElementById('exhibition-dots');

    if (stage) {
      stage.innerHTML = `
        <div class="exhibition-card">
          <div class="exhibition-student-info">
            <span>🎒</span>
            <span>2학년 3반 ${student.number}번 <strong>${appState.formatStudentName(student)}</strong> 학생의 아침 다짐</span>
          </div>
          <div class="exhibition-quote">
            "${student.comment}"
          </div>
          <div class="exhibition-metrics">
            <div>
              <div class="ex-metric-val">${student.mannersScore}P</div>
              <div class="ex-metric-lbl">예절 점수</div>
            </div>
            <div>
              <div class="ex-metric-val">${student.typingBestCPM} <span style="font-size: 1rem; color: rgba(255,255,255,0.7);">CPM</span></div>
              <div class="ex-metric-lbl">최고 타수</div>
            </div>
            <div>
              <div class="ex-metric-val" style="color: #FBBF24;">${student.readingScore}P</div>
              <div class="ex-metric-lbl">독서기록 점수</div>
            </div>
          </div>
        </div>
      `;
    }

    if (dots) {
      dots.innerHTML = students.map((_, idx) => `
        <div class="ex-dot ${idx === this.exhibitionIndex ? 'active' : ''}"></div>
      `).join('');
    }
  }
}

function initApp() {
  if (!window.__app) {
    window.__app = new App();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
