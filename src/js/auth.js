// Google Authentication, Role Detection & Onboarding Management
import { appState } from './state.js';
import { sounds } from './sound.js';
import { auth, googleProvider, db } from './firebase-config.js';
import { resolveAccountRole, normalizeTeacherCode, verifyTestTeacherCode, parseStudentEmail } from './roles.js';

const ROLE_LABELS = {
  student: '👨‍🎓 학생',
  teacher: '👩‍🏫 교사'
};

const ROLE_SOURCE_LABELS = {
  auto: '이메일로 자동 구분',
  code: '교사 인증 코드로 승격',
  default: '자동 구분 안 됨 (기본 학생)',
  test: '개발용 테스트 계정'
};

const LOGIN_ERROR_MESSAGES = {
  'auth/configuration-not-found': 'Firebase 콘솔에서 Authentication(Google 로그인)이 아직 설정되지 않았습니다.',
  'auth/operation-not-allowed': 'Firebase 콘솔에서 Google 로그인 제공업체가 사용 설정되지 않았습니다.',
  'auth/unauthorized-domain': '현재 사이트 주소가 Firebase 승인된 도메인에 등록되지 않았습니다.',
  'auth/popup-blocked': '브라우저가 로그인 팝업을 차단했습니다. 팝업을 허용해 주세요.',
  'auth/network-request-failed': '네트워크 연결을 확인해 주세요.'
};

// Firestore 프로필을 읽어 권한을 결정하고 role 필드를 저장한 뒤 세션 상태에 반영
// (Firestore를 사용할 수 없어도 이메일 규칙으로 로그인은 진행)
async function syncAccount(user) {
  const ref = db.collection('users').doc(user.uid);
  const prevAuth = appState.state.auth || {};
  let data = prevAuth.uid === user.uid ? { role: prevAuth.accountRole, roleSource: prevAuth.roleSource } : {};
  let hasStoredProfile = false;

  try {
    const doc = await ref.get();
    if (doc.exists) {
      data = doc.data();
      hasStoredProfile = !!data.nickname;
    }
  } catch (err) {
    console.warn('Firestore 프로필 조회 실패 (로컬 상태로 진행)', err);
  }

  const { role, roleSource } = resolveAccountRole(user.email, data);

  ref.set({
    uid: user.uid,
    email: user.email,
    role,
    roleSource,
    lastLoginAt: firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true }).catch(err => console.warn('Firestore role 저장 실패', err));

  appState.applyAccount({ uid: user.uid, email: user.email, accountRole: role, roleSource });

  if (hasStoredProfile) {
    appState.updateProfile({
      grade: data.grade || appState.state.userProfile.grade,
      classNum: data.classNum || appState.state.userProfile.classNum,
      number: data.number || appState.state.userProfile.number,
      realName: data.realName || user.displayName || '',
      nickname: data.nickname
    });
  } else if (prevAuth.uid !== user.uid) {
    // 처음 로그인한 학생은 이메일(입학년도·학년·반·번호)로 학적 정보 자동 입력
    const studentInfo = role === 'student' ? parseStudentEmail(user.email) : null;
    appState.updateProfile({
      ...(studentInfo ? { grade: studentInfo.grade, classNum: studentInfo.classNum, number: studentInfo.number } : {}),
      realName: user.displayName || '',
      nickname: user.displayName || ''
    });
  }

  return { isNewUser: !hasStoredProfile && prevAuth.uid !== user.uid, role };
}

// 새로고침 후에도 Firebase 로그인 세션을 복원 (테스트 계정 세션은 유지)
export function initAuthSession(onChange = () => {}) {
  auth.onAuthStateChanged(async (user) => {
    try {
      if (user) {
        if (!appState.isTestAccount()) await syncAccount(user);
      } else if (appState.isLoggedIn() && !appState.isTestAccount()) {
        appState.clearAccount();
      }
    } catch (err) {
      console.error('세션 동기화 실패', err);
    }
    onChange();
  });
}

export function openGoogleLoginModal(onSuccess = () => {}) {
  auth.signInWithPopup(googleProvider)
    .then(async (result) => {
      const { isNewUser } = await syncAccount(result.user);
      sounds.playSuccess();
      if (isNewUser) {
        openProfileOnboardingModal(onSuccess, true);
      } else {
        onSuccess();
      }
    })
    .catch((error) => {
      console.error("Google 로그인 에러", error);
      if (error.code === 'auth/popup-closed-by-user' || error.code === 'auth/cancelled-popup-request') return;
      const reason = LOGIN_ERROR_MESSAGES[error.code] || '잠시 후 다시 시도해 주세요.';
      alert(`로그인에 실패했습니다.\n${reason}\n(오류 코드: ${error.code || 'unknown'})\n\n학교 워크스페이스(@kyunghee.sen.ms.kr)로 로그인하세요.`);
    });
}

export function signOutUser(onDone = () => {}) {
  if (appState.isTestAccount()) {
    appState.clearAccount();
    onDone();
    return;
  }
  auth.signOut()
    .then(() => {
      appState.clearAccount();
      onDone();
    })
    .catch((error) => {
      console.error('로그아웃 에러', error);
      alert('로그아웃에 실패했습니다.');
    });
}

// [교사 권한 신청] 모달: 교사 인증 코드 입력 시 role을 teacher로 승격
export function openTeacherUpgradeModal(onSuccess = () => {}) {
  if (!appState.isLoggedIn()) {
    alert('교사 권한 신청은 로그인 후에 할 수 있습니다.\n우측 상단 로그인 버튼을 먼저 눌러 주세요.');
    return;
  }
  if (appState.isVerifiedTeacher()) {
    alert('이미 교사 권한이 있는 계정입니다.');
    return;
  }

  let modal = document.getElementById('teacher-upgrade-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'teacher-upgrade-modal';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-content" style="max-width: 440px; text-align: left;">
      <h3 style="font-size: 1.3rem; font-weight: 800; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
        <span>🔑</span> 교사 권한 신청
      </h3>
      <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1.25rem;">
        현재 계정(<strong>${appState.state.auth.email}</strong>)은 교사로 자동 구분되지 않았습니다.<br>
        학교에서 안내받은 <strong>교사 인증 코드</strong>를 입력하면 교사 권한으로 전환됩니다.
      </p>
      <input type="password" id="teacher-code-input" placeholder="교사 인증 코드" autocomplete="off"
        style="width: 100%; padding: 0.7rem; border: 2px solid #4F46E5; border-radius: var(--radius-md); font-weight: 700; margin-bottom: 0.5rem;">
      <div id="teacher-code-error" style="font-size: 0.8rem; color: #DC2626; min-height: 1.2em; margin-bottom: 0.75rem;"></div>
      <div style="display: flex; gap: 0.75rem;">
        <button class="btn btn-secondary" id="btn-cancel-teacher-code" style="flex: 1;">취소</button>
        <button class="btn btn-primary" id="btn-submit-teacher-code" style="flex: 2; background: #4F46E5;">권한 전환하기</button>
      </div>
    </div>
  `;

  modal.classList.add('active');
  const input = modal.querySelector('#teacher-code-input');
  const errorEl = modal.querySelector('#teacher-code-error');
  const submitBtn = modal.querySelector('#btn-submit-teacher-code');
  input.focus();

  modal.querySelector('#btn-cancel-teacher-code').onclick = () => modal.classList.remove('active');

  const fail = (message) => {
    sounds.playError();
    errorEl.textContent = message;
    submitBtn.disabled = false;
    input.select();
  };

  const submit = async () => {
    const code = normalizeTeacherCode(input.value);
    if (!code) {
      fail('교사 인증 코드를 입력해 주세요.');
      return;
    }

    const { uid, email } = appState.state.auth;
    const promote = () => {
      appState.applyAccount({ uid, email, accountRole: 'teacher', roleSource: 'code' });
      sounds.playCelebration();
      modal.classList.remove('active');
      onSuccess();
    };

    submitBtn.disabled = true;

    if (appState.isTestAccount()) {
      if (await verifyTestTeacherCode(code)) promote();
      else fail('인증 코드가 올바르지 않습니다.');
      return;
    }

    // 코드 확인은 Firestore 보안 규칙이 수행: teacherCodes/{code} 문서가 있어야 저장 허용
    db.collection('users').doc(uid).set({
      role: 'teacher',
      roleSource: 'code',
      teacherCode: code,
      roleUpdatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true }).then(promote).catch(err => {
      console.warn('교사 권한 저장 거부', err);
      if (err.code === 'permission-denied') {
        fail('인증 코드가 올바르지 않습니다.');
      } else {
        fail(`권한 확인 서버에 연결할 수 없습니다. (${err.code || 'unknown'})`);
      }
    });
  };

  submitBtn.onclick = submit;
  input.onkeydown = (e) => { if (e.key === 'Enter') submit(); };
}

export function openProfileOnboardingModal(onSuccess = () => {}, isNewUser = false, onTeacherUpgrade = onSuccess) {
  let modal = document.getElementById('profile-onboarding-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'profile-onboarding-modal';
  }

  const { userProfile } = appState.state;
  const authInfo = appState.state.auth || {};
  const isLoggedIn = appState.isLoggedIn();
  const accountRole = isLoggedIn ? (authInfo.accountRole || 'student') : 'student';
  const roleSourceLabel = isLoggedIn ? (ROLE_SOURCE_LABELS[authInfo.roleSource] || ROLE_SOURCE_LABELS.default) : '로그인 전 (체험 모드)';

  modal.innerHTML = `
    <div class="modal-content" style="max-width: 520px; text-align: left;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
        <h3 style="font-size: 1.35rem; font-weight: 800; display: flex; align-items: center; gap: 0.5rem;">
          <span>🎒</span> 마이페이지 · 프로필 설정
        </h3>
        <span class="badge ${isLoggedIn ? 'badge-green' : 'badge-gray'}">${isLoggedIn ? 'Google 연동됨' : '로그인 전'}</span>
      </div>

      <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.5;">
        중학교 학교생활에 맞추어 학년, 반, 번호와 함께 사용할 <strong>닉네임</strong>을 설정해 주세요.<br>
        <span style="color: #4F46E5; font-weight: 700;">* 학생 화면에는 닉네임만 노출되며, 교사 화면에서만 실명이 함께 표시됩니다.</span>
      </p>

      <!-- Account Role (자동 구분, 직접 선택 불가) -->
      <div style="margin-bottom: 1.25rem; padding: 0.85rem 1rem; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-subtle); display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; flex-wrap: wrap;">
        <div>
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted);">계정 권한</div>
          <div style="font-size: 1rem; font-weight: 800;">${ROLE_LABELS[accountRole]}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${isLoggedIn ? `${authInfo.email}` : ''}</div>
        </div>
      </div>


      <!-- Teacher vs Student Details -->
      ${accountRole === 'teacher' ? `
        <div style="margin-bottom: 1rem;">
          <label style="font-size: 0.85rem; font-weight: 700; display: block; margin-bottom: 0.5rem;">역할 구분</label>
          <div style="display: flex; gap: 1rem;">
            <label style="display: flex; align-items: center; gap: 0.4rem; cursor: pointer; font-size: 0.9rem;">
              <input type="radio" name="teacher_type" value="homeroom" ${userProfile.grade ? 'checked' : 'checked'} id="ob-teacher-homeroom"> 담임 교사
            </label>
            <label style="display: flex; align-items: center; gap: 0.4rem; cursor: pointer; font-size: 0.9rem;">
              <input type="radio" name="teacher_type" value="subject" ${!userProfile.grade && userProfile.realName ? 'checked' : ''} id="ob-teacher-subject"> 교과(비담임) 교사
            </label>
          </div>
        </div>
        
        <!-- School Info (Only for Homeroom Teachers) -->
        <div id="ob-school-info-container" style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1rem;">
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
        </div>
      ` : `
        <!-- School Info (Students) -->
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
      `}


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

  const btnRequestTeacher = modal.querySelector('#btn-request-teacher');
  if (btnRequestTeacher) {
    btnRequestTeacher.onclick = () => {
      modal.classList.remove('active');
      openTeacherUpgradeModal(onTeacherUpgrade);
    };
  }

  const btnClose = modal.querySelector('#btn-close-onboarding');
  if (btnClose) {
    btnClose.onclick = () => modal.classList.remove('active');
  }

  const btnSave = modal.querySelector('#btn-save-onboarding');
  if (btnSave) {
    btnSave.onclick = () => {
      const grade = parseInt(modal.querySelector('#ob-grade').value, 10) || 2;
      const classNum = parseInt(modal.querySelector('#ob-class').value, 10) || 3;
      const number = parseInt(modal.querySelector('#ob-number').value, 10) || 1;
      const realName = modal.querySelector('#ob-realname').value.trim() || '김민준';
      const nickname = modal.querySelector('#ob-nickname').value.trim() || '별빛달빛';

      appState.updateProfile({
        grade,
        classNum,
        number,
        realName,
        nickname
      });

      const { uid, email } = appState.state.auth;
      if (uid && !appState.isTestAccount()) {
        // role 필드는 로그인/교사 코드 승격 흐름에서만 저장
        db.collection('users').doc(uid).set({
          uid,
          email,
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
          // DB 저장 실패 시에도 이 기기에는 저장된 상태로 계속 진행
          console.warn("Firestore 프로필 저장 실패 (이 기기에만 저장)", err);
          sounds.playCelebration();
          modal.classList.remove('active');
          onSuccess();
        });
      } else {
        sounds.playCelebration();
        modal.classList.remove('active');
        onSuccess();
      }
    };
  }
}
