/**
 * 현재 url에서 ?para=value 형태의 params를 추출하는 유틸 함수
 * */
export const getParams = (param: string): string | null => {
  const curUrl = new URL(window.location.href);
  const searchParams = new URLSearchParams(curUrl.search);
  const newParam = searchParams.get(param);
  return newParam;
};
