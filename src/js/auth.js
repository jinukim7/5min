// Google Authentication & Onboarding Management
import { appState } from './state.js';
import { sounds } from './sound.js';
import { auth, googleProvider, db } from './firebase-config.js';

export function openGoogleLoginModal(onSuccess = () => {}) {
  auth.signInWithPopup(googleProvider)
    .then((result) => {
      const user = result.user;
      
      db.collection('users').doc(user.uid).get().then((doc) => {
        if (doc.exists) {
          // Returning user
          const data = doc.data();
          appState.state.auth.isLoggedIn = true;
          appState.state.auth.email = user.email;
          appState.state.auth.uid = user.uid;
          
          appState.state.userProfile.role = data.role || 'student';
          appState.state.userProfile.grade = data.grade || 1;
          appState.state.userProfile.classNum = data.classNum || 1;
          appState.state.userProfile.number = data.number || 1;
          appState.state.userProfile.realName = data.realName || user.displayName;
          appState.state.userProfile.nickname = data.nickname || user.displayName;
          
          appState.save();
          sounds.playSuccess();
          onSuccess();
        } else {
          // New user -> setup onboarding
          appState.state.auth.isLoggedIn = true;
          appState.state.auth.email = user.email;
          appState.state.auth.uid = user.uid;
          appState.state.userProfile.realName = user.displayName || '';
          appState.state.userProfile.nickname = user.displayName || '';
          
          appState.save();
          sounds.playSuccess();
          openProfileOnboardingModal(onSuccess, true);
        }
      });
    })
    .catch((error) => {
      console.error("Google 로그인 에러", error);
      alert("구글 로그인에 실패했습니다. 다시 시도해 주세요.");
    });
}

export function openProfileOnboardingModal(onSuccess = () => {}, isNewUser = false) {
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
        ${!isNewUser ? `<button class="btn btn-secondary" id="btn-close-onboarding" style="flex: 1;">닫기</button>` : ''}
        <button class="btn btn-primary" id="btn-save-onboarding" style="flex: 2; background: #4F46E5;">
          완료하고 시작하기 ✨
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  modal.classList.add('active');

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
      
      const { uid, email } = appState.state.auth;
      if (uid) {
        db.collection('users').doc(uid).set({
          uid,
          email,
          role: selectedRole,
          grade,
          classNum,
          number,
          realName,
          nickname,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true }).then(() => {
          sounds.playCelebration();
          modal.classList.remove('active');
          onSuccess();
        }).catch(err => {
          console.error("Failed to save profile", err);
          alert("프로필 저장에 실패했습니다.");
        });
      } else {
        sounds.playCelebration();
        modal.classList.remove('active');
        onSuccess();
      }
    };
  }
}
