import { numberFormatted } from "./numberFormatted";

describe(`Округлення чисел, з різним форматом "," або "." очікуємо строку`, () => {
  const testCases = [
    {
      entry: "12,006",
      expected: "12.01",
    },

    {
      entry: "0,3",
      expected: "0.30",
    },

    {
      entry: "0.35",
      expected: "0.35",
    },

    {
      entry: "5",
      expected: "5.00",
    },
  ];

  testCases.forEach(({ entry, expected }) => {
    test(`${entry} => ${expected}`, () => {
      expect(numberFormatted(entry)).toEqual(expected);
    });
  });

});
