interface Data {
  [key: string]: number;
}

interface CalculatedData {
  higher: string[];
  regular: string[];
  lower: string[];
}

export const compareObjects = (a: any, b: Data): CalculatedData => {
  const keys = Object.keys(a);
  const result: CalculatedData = {
    higher: [],
    regular: [],
    lower: [],
  };

  keys.forEach((key) => {
    if (b.hasOwnProperty(key)) {
      const valueA = a[key];
      const valueB = b[key];

      if (valueA > valueB) {
        result.higher.push(key);
      } else if (valueA === valueB) {
        result.regular.push(key);
      } else {
        result.lower.push(key);
      }
    }
  });

  return result;
};
