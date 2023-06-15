/**
 * 현재시간과 비교해주는 유틸함수
 */
export const dateFormatter = (timestamp: number): string => {
  const currentTime = Date.now();
  const diffTime = currentTime - timestamp;
  if (diffTime < 60000) {
    return "방금 전";
  } else if (diffTime < 3600000) {
    const minutes = Math.floor(diffTime / 60000);
    return `${minutes}분 전`;
  } else if (diffTime < 86400000) {
    const hours = Math.floor(diffTime / 3600000);
    return `${hours}시간 전`;
  } else if (diffTime < 604800000) {
    const days = Math.floor(diffTime / 86400000);
    return `${days}일 전`;
  } else if (diffTime < 2629800000) {
    const weeks = Math.floor(diffTime / 604800000);
    return `${weeks}주 전`;
  } else if (diffTime < 31557600000) {
    const months = Math.floor(diffTime / 2629800000);
    return `${months}달 전`;
  } else {
    const years = Math.floor(diffTime / 31557600000);
    return `${years}년 전`;
  }
};

/**
 * 게임 시간을 분 초로 변환해주는 유틸함수
 */
export const convertToMinutes = (gameDuration: number): string => {
  const minutes = Math.floor(gameDuration / 60);
  const seconds = gameDuration % 60;
  return `${minutes}분 ${seconds}초`;
};

/**
 * 게임 시간을 콜론 구별로 변환해주는 유틸함수 확장
 */
export const convertColon = (gameDuration: number): string => {
  const minutes = Math.floor(gameDuration / 60);
  const seconds = gameDuration % 60;
  return `${minutes}:${seconds}`;
};

/** 타임스탬프 두개 넣어서 차이를 시간으로 */
export const getTimeDifference = (
  timestamp1: number,
  timestamp2: number
): string => {
  // timestamp의 차이를 계산합니다. (milliseconds 단위)
  const diffMilliseconds = Math.abs(timestamp1 - timestamp2);

  // 각 단위별로 시간, 분, 초를 계산합니다.
  const hours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
  const minutes = Math.floor(
    (diffMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((diffMilliseconds % (1000 * 60)) / 1000);

  // 시간, 분, 초 값을 문자열로 반환합니다.
  let date = "";
  if (hours > 0) date = `${hours}:${minutes}:${seconds}`;
  else if (minutes > 0) date = `${minutes}:${seconds}`;
  else date = `${seconds}sec`;

  return date;
};
