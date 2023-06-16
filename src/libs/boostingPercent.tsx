/** 최근 10 게임에서의 확률 */
export const boostingPercent = (predictionList: Array<number>) => {
  const sum = predictionList.reduce((prev, cur) => {
    return prev + cur;
  });
  const percentage = (sum / predictionList.length).toFixed(2);
  return percentage;
};
