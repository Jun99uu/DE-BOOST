/** 대리 판별 기준 */
export const STANDARD = {
  highest: 90,
  higher: 75,
  regular: 50,
};

/** 높은 수치가 몇개인가 */
export const higherPercent = (predictionList: number[]) => {
  const array = predictionList.filter(
    (prediction) => prediction >= STANDARD.higher
  );
  return array.length;
};
