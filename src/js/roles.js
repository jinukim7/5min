// 교사/학생 역할 자동 구분 규칙 (학교 사정에 맞게 아래 값만 수정하세요)

// 학교 구글 워크스페이스 도메인
export const SCHOOL_DOMAIN = 'kyunghee.sen.ms.kr';

// 학생 계정 아이디 형식: 입학년도 2자리 + 학년 1자리 + 반 1자리 + 번호 2자리
// 예) 261501@kyunghee.sen.ms.kr → 26년 입학, 1학년 5반 1번
export const STUDENT_ID_PATTERN = /^(\d{2})(\d)(\d)(\d{2})$/;

// 학교 도메인이지만 학생 형식이 아닌 계정 + 아래 도메인은 교사로 구분
export const EXTRA_TEACHER_DOMAINS = ['sen.go.kr'];

// 교사 인증 코드는 사이트 코드에 두지 않습니다.
// 실제 계정: Firestore `teacherCodes/{코드}` 문서 존재 여부를 보안 규칙(firestore.rules)이 확인합니다.
// 테스트 계정(개발용): DB가 없으므로 코드의 해시값으로만 확인합니다.
const TEST_TEACHER_CODE_HASH = '2bd394809ca042d614cf6059adc332fdd2cc93cb5fe116b4c9356255d6fdb6b8';
const TEACHER_CODE_SALT = 'barum5-teacher:';

export function normalizeTeacherCode(code = '') {
  return String(code).trim().toUpperCase();
}

// 개발 단계용 [학생으로 테스트] / [교사로 테스트] 버튼 표시 여부 (운영 시 false)
export const DEV_TEST_LOGIN_ENABLED = true;

function splitEmail(email = '') {
  const [localPart = '', domain = ''] = String(email).trim().toLowerCase().split('@');
  return { localPart, domain };
}

/**
 * 학생 계정 이메일에서 입학년도/학년/반/번호를 읽습니다.
 * @returns {{ entryYear: number, grade: number, classNum: number, number: number } | null}
 */
export function parseStudentEmail(email = '') {
  const { localPart, domain } = splitEmail(email);
  if (domain !== SCHOOL_DOMAIN) return null;
  const match = localPart.match(STUDENT_ID_PATTERN);
  if (!match) return null;
  const [, year, grade, classNum, number] = match.map(Number);
  return { entryYear: 2000 + year, grade, classNum, number };
}

/**
 * 이메일로 역할을 판별합니다.
 * @returns {'student' | 'teacher' | null} 판별 불가 시 null
 */
export function detectRoleFromEmail(email = '') {
  const { localPart, domain } = splitEmail(email);
  if (!localPart || !domain) return null;

  if (parseStudentEmail(email)) return 'student';
  if (domain === SCHOOL_DOMAIN || EXTRA_TEACHER_DOMAINS.includes(domain)) return 'teacher';
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

// 테스트 계정 전용 코드 확인 (SHA-256 해시 비교)
export async function verifyTestTeacherCode(code = '') {
  const bytes = new TextEncoder().encode(TEACHER_CODE_SALT + normalizeTeacherCode(code));
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  const hex = [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, '0')).join('');
  return hex === TEST_TEACHER_CODE_HASH;
}
