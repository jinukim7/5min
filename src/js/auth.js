// Google Authentication & Onboarding Management
import { appState } from './state.js';
import { sounds } from './sound.js';

export function openGoogleLoginModal(onSuccess = () => {}) {
  let modal = document.getElementById('google-auth-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'google-auth-modal';
    modal.innerHTML = `
      <div class="modal-content" style="max-width: 460px;">
        <div style="display: flex; justify-content: center; margin-bottom: 1.25rem;">
          <svg width="48" height="48" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
          </svg>
        </div>
        <h3 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 0.5rem;">구글 계정으로 시작하기</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.75rem;">
          학교 워크스페이스(@school.ms.kr) 또는 일반 구글 계정으로 안전하게 로그인하세요.
        </p>

        <!-- Quick Demo Google Accounts -->
        <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem; text-align: left;">
          <div class="google-account-pill card-interactive" data-email="minjun.kim@seoul-ms.kr" data-name="김민준" data-role="student" style="display: flex; align-items: center; gap: 0.85rem; padding: 0.85rem 1rem; border: 1px solid var(--border-light); border-radius: var(--radius-lg); cursor: pointer;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background: #3B82F6; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700;">민</div>
            <div style="flex: 1;">
              <div style="font-weight: 700; font-size: 0.9rem;">김민준 (학생)</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">minjun.kim@seoul-ms.kr</div>
            </div>
            <span class="badge badge-blue">학생</span>
          </div>

          <div class="google-account-pill card-interactive" data-email="teacher.lee@seoul-ms.kr" data-name="이상혁" data-role="teacher" style="display: flex; align-items: center; gap: 0.85rem; padding: 0.85rem 1rem; border: 1px solid var(--border-light); border-radius: var(--radius-lg); cursor: pointer;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background: #4F46E5; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700;">이</div>
            <div style="flex: 1;">
              <div style="font-weight: 700; font-size: 0.9rem;">이상혁 선생님 (담임교사)</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">teacher.lee@seoul-ms.kr</div>
            </div>
            <span class="badge badge-purple">교사</span>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-light); padding-top: 1rem;">
          <button class="btn btn-secondary" id="btn-cancel-google" style="flex: 1; margin-right: 0.5rem;">취소</button>
          <button class="btn btn-primary" id="btn-custom-google" style="flex: 1;">직접 입력 로그인</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  modal.classList.add('active');

  modal.querySelectorAll('.google-account-pill').forEach(pill => {
    pill.onclick = () => {
      sounds.playSuccess();
      const email = pill.dataset.email;
      const name = pill.dataset.name;
      const role = pill.dataset.role;

      appState.state.auth.isLoggedIn = true;
      appState.state.auth.email = email;
      appState.state.userProfile.role = role;
      if (role === 'teacher') {
        appState.state.userProfile.realName = name;
        appState.state.userProfile.nickname = '2반담임';
      } else {
        appState.state.userProfile.realName = name;
      }
      appState.save();
      modal.classList.remove('active');
      openProfileOnboardingModal(onSuccess);
    };
  });

  const btnCancel = modal.querySelector('#btn-cancel-google');
  if (btnCancel) {
    btnCancel.onclick = () => modal.classList.remove('active');
  }

  const btnCustom = modal.querySelector('#btn-custom-google');
  if (btnCustom) {
    btnCustom.onclick = () => {
      sounds.playClick();
      modal.classList.remove('active');
      openProfileOnboardingModal(onSuccess);
    };
  }
}

export function openProfileOnboardingModal(onSuccess = () => {}) {
  let modal = document.getElementById('profile-onboarding-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'profile-onboarding-modal';
  }

  const { userProfile } = appState.state;

  modal.innerHTML = `
    <div class="modal-content" style="max-width: 520px; text-align: left;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
        <h3 style="font-size: 1.35rem; font-weight: 800; display: flex; align-items: center; gap: 0.5rem;">
          <span>🎒</span> 프로필 & 학적 정보 설정
        </h3>
        <span class="badge badge-green">Google 연동됨</span>
      </div>

      <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.5;">
        중학교 학교생활에 맞추어 학년, 반, 번호와 함께 사용할 <strong>닉네임</strong>을 설정해 주세요.<br>
        <span style="color: #4F46E5; font-weight: 700;">* 학생 화면에는 닉네임만 노출되며, 교사 화면에서만 실명이 함께 표시됩니다.</span>
      </p>

      <!-- Role Picker -->
      <div style="margin-bottom: 1.25rem;">
        <label style="font-size: 0.8rem; font-weight: 700; color: var(--text-secondary); display: block; margin-bottom: 0.4rem;">
          구분 (사용자 역할)
        </label>
        <div style="display: flex; gap: 0.75rem;">
          <label style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.4rem; padding: 0.65rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); cursor: pointer; font-weight: 700; font-size: 0.9rem;" class="role-label ${userProfile.role === 'student' ? 'active-role' : ''}">
            <input type="radio" name="profile-role" value="student" ${userProfile.role === 'student' ? 'checked' : ''} style="accent-color: #111827;">
            <span>👨‍🎓 학생 (Student)</span>
          </label>
          <label style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.4rem; padding: 0.65rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); cursor: pointer; font-weight: 700; font-size: 0.9rem;" class="role-label ${userProfile.role === 'teacher' ? 'active-role' : ''}">
            <input type="radio" name="profile-role" value="teacher" ${userProfile.role === 'teacher' ? 'checked' : ''} style="accent-color: #4F46E5;">
            <span>👩‍🏫 교사 (Teacher)</span>
          </label>
        </div>
      </div>

      <!-- School Info -->
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.75rem; margin-bottom: 1rem;">
        <div>
          <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">학년</label>
          <select id="ob-grade" style="width: 100%; padding: 0.6rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
            <option value="1" ${userProfile.grade === 1 ? 'selected' : ''}>1학년</option>
            <option value="2" ${userProfile.grade === 2 ? 'selected' : ''}>2학년</option>
            <option value="3" ${userProfile.grade === 3 ? 'selected' : ''}>3학년</option>
          </select>
        </div>
        <div>
          <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">반 (1~7반)</label>
          <select id="ob-class" style="width: 100%; padding: 0.6rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
            ${[1, 2, 3, 4, 5, 6, 7].map(c => `<option value="${c}" ${userProfile.classNum === c ? 'selected' : ''}>${c}반</option>`).join('')}
          </select>
        </div>
        <div>
          <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">출석 번호 (1~28번)</label>
          <input type="number" id="ob-number" value="${userProfile.number}" min="1" max="28" style="width: 100%; padding: 0.55rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
        </div>
      </div>

      <!-- Real Name & Nickname -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1.5rem;">
        <div>
          <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">
            실명 (선생님만 확인)
          </label>
          <input type="text" id="ob-realname" value="${userProfile.realName}" placeholder="예: 김민준" style="width: 100%; padding: 0.6rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 700;">
        </div>
        <div>
          <label style="font-size: 0.75rem; font-weight: 700; color: #4F46E5; display: block; margin-bottom: 0.3rem;">
            활동 닉네임 (공개)
          </label>
          <input type="text" id="ob-nickname" value="${userProfile.nickname}" placeholder="예: 별빛달빛" style="width: 100%; padding: 0.6rem; border: 2px solid #4F46E5; border-radius: var(--radius-md); font-weight: 700;">
        </div>
      </div>

      <div style="display: flex; gap: 0.75rem; margin-top: 1rem;">
        <button class="btn btn-secondary" id="btn-close-onboarding" style="flex: 1;">닫기</button>
        <button class="btn btn-primary" id="btn-save-onboarding" style="flex: 2; background: #4F46E5;">
          완료하고 시작하기 ✨
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  modal.classList.add('active');

  // Role radio change
  modal.querySelectorAll('input[name="profile-role"]').forEach(radio => {
    radio.onchange = (e) => {
      modal.querySelectorAll('.role-label').forEach(l => l.classList.remove('active-role'));
      e.target.closest('.role-label').classList.add('active-role');
    };
  });

  const btnClose = modal.querySelector('#btn-close-onboarding');
  if (btnClose) {
    btnClose.onclick = () => modal.classList.remove('active');
  }

  const btnSave = modal.querySelector('#btn-save-onboarding');
  if (btnSave) {
    btnSave.onclick = () => {
      const selectedRole = modal.querySelector('input[name="profile-role"]:checked').value;
      const grade = parseInt(modal.querySelector('#ob-grade').value, 10) || 2;
      const classNum = parseInt(modal.querySelector('#ob-class').value, 10) || 3;
      const number = parseInt(modal.querySelector('#ob-number').value, 10) || 1;
      const realName = modal.querySelector('#ob-realname').value.trim() || '김민준';
      const nickname = modal.querySelector('#ob-nickname').value.trim() || '별빛달빛';

      appState.updateProfile({
        role: selectedRole,
        grade,
        classNum,
        number,
        realName,
        nickname
      });

      sounds.playCelebration();
      modal.classList.remove('active');
      onSuccess();
    };
  }
}
