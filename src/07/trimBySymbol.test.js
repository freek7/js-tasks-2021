import { trimBySymbol } from "./trimBySymbol";

describe(`Обрізка строки по краю за спецсимволом`, () => {
  const testCases = [
    {
      entry: "(1)",
      expected: "1)",
      strToRemove: "(",
    },
    {
      entry: " test ",
      expected: "test",
      strToRemove: " ",
    },
    {
      entry: "|test|",
      expected: "|test|",
      strToRemove: " ",
    },
    {
      entry: "|test|",
      expected: "test",
      strToRemove: "|",
    },
  ];

  testCases.forEach(({ entry, expected, strToRemove }) => {
    test(`${entry} => ${expected} with strToRemove=${strToRemove}`, () => {
      expect(trimBySymbol(entry, strToRemove)).toBe(expected);
    });
  });
});
