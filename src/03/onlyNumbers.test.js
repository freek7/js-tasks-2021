import { onlyNumbers } from "./onlyNumbers";

describe("Зі строки потрібно повернути тільки числа", () => {
  const testCases = [
    {
      entry: "012+d100,200",
      expected: "012100200",
    },

    {
      entry: "11 xx 323 00,22",
      expected: "113230022",
    },

    {
      entry: "+380 (12) 00 00 12",
      expected: "38012000012",
    },
  ];

  testCases.forEach(({ entry, expected }) => {
    test(`${entry} => ${expected}`, () => {
      expect(onlyNumbers(entry)).toEqual(expected);
    });
  });
  
});
