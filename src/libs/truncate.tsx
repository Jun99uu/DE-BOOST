export const truncateString = (str: string): string => {
  if (str.length > 8) {
    return str.substring(0, 8) + "...";
  }
  return str;
};
