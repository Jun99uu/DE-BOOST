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
  } else {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}년 ${month}월 ${day}일`;
  }
};
