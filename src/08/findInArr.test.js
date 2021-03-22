import { findInArr } from "./findInArr";

describe(`Пошук по масиву за співпадінням зі строкою`, () => {
  const entryArr = [
    "Test",
    "tesT",
    "subTest",
    "sub",
    "bin",
    "localTest",
    "trim",
  ];

  const testCases = [
    {
      entry: entryArr,
      expected: ["Test", "tesT", "subTest", "localTest"],
      str: "test",
    },
    {
      entry: entryArr,
      expected: ["bin"],
      str: "BiN",
    },
  ];

  testCases.forEach(({ entry, expected, str }) => {
    test(`${entry} => ${expected} with str=${str}`, () => {
      expect(findInArr(entry, str)).toEqual(expected);
    });
  });
});
