/** 로마 숫자로 변경해주는 함수 */
export const convertToRomanNumber = (number?: number): string => {
  if (number === undefined) {
    return "";
  }

  const romanNumerals: { [key: number]: string } = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
  };

  return romanNumerals[number] || "";
};
