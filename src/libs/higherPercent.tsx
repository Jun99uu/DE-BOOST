/** 대리 판별 기준 */
export const STANDARD = {
  highest: 80,
  higher: 65,
  regular: 40,
};

/** 높은 수치가 몇개인가 */
export const higherPercent = (predictionList: number[]) => {
  const array = predictionList.filter(
    (prediction) => prediction >= STANDARD.higher
  );
  return array.length;
};
