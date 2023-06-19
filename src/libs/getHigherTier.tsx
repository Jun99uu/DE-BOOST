export const TIERS = [
  "Iron",
  "Bronze",
  "Silver",
  "Gold",
  "Platinum",
  "Diamond",
  "High elo",
];

type Result = {
  tier: string;
  prediction: number;
};

/** 분석 결과 들어왔을 때, 확률 높은 티어 3개를 반환하는 함수 */
export const getHigherTier = (results: number[]): Array<Result> => {
  const sortedIndices = results
    .map((value, index) => [value, index])
    .sort(([a], [b]) => b - a);

  return sortedIndices.slice(0, 3).map(([_value, index]) => {
    return {
      tier: TIERS[index],
      prediction: results[index],
    };
  });
};
