// 교사/학생 역할 자동 구분 규칙 (학교 사정에 맞게 아래 값만 수정하세요)

// 이메일 아이디(@ 앞)에 이 문자열이 포함되면 학생
export const STUDENT_EMAIL_KEYWORDS = ['g.'];

// 이 도메인이면 학생 (예: 학생 전용 도메인이 따로 있을 때 추가)
export const STUDENT_DOMAINS = [];

// 위 학생 규칙에 해당하지 않고 이 도메인이면 교사
export const TEACHER_DOMAINS = ['kyunghee.sen.ms.kr', 'sen.go.kr'];

// 자동 구분이 안 된 사용자가 교사 권한을 신청할 때 입력하는 코드
export const TEACHER_SECRET_CODE = 'TEACHER2026';

/**
 * 이메일로 역할을 판별합니다.
 * @returns {'student' | 'teacher' | null} 판별 불가 시 null
 */
export function detectRoleFromEmail(email = '') {
  const normalized = String(email).trim().toLowerCase();
  const [localPart, domain] = normalized.split('@');
  if (!localPart || !domain) return null;

  if (STUDENT_EMAIL_KEYWORDS.some(k => localPart.includes(k))) return 'student';
  if (STUDENT_DOMAINS.includes(domain)) return 'student';
  if (TEACHER_DOMAINS.includes(domain)) return 'teacher';
  return null;
}

/**
 * 저장된 프로필과 이메일 규칙으로 최종 권한을 결정합니다.
 * 교사 코드로 승격된 권한은 유지하고, 그 외에는 이메일 규칙 → 기본값 student 순입니다.
 */
export function resolveAccountRole(email, stored = {}) {
  if (stored.role === 'teacher' && stored.roleSource === 'code') {
    return { role: 'teacher', roleSource: 'code' };
  }
  const detected = detectRoleFromEmail(email);
  if (detected) return { role: detected, roleSource: 'auto' };
  return { role: 'student', roleSource: 'default' };
}

export function verifyTeacherCode(code = '') {
  return String(code).trim().toUpperCase() === TEACHER_SECRET_CODE;
}
