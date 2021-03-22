import { arrToObj } from "./arrToObj";

describe(`Маючи масив об'єктів отримати з нього об'єкт за спеціальним полем`, () => {
  const testCases = [
    {
      key: "id",

      entry: [
        {
          id: 1,
          name: "Phill",
        },
        {
          id: 10,
          name: "Tom",
        },
      ],

      expected: {
        1: {
          id: 1,
          name: "Phill",
        },
        10: {
          id: 10,
          name: "Tom",
        },
      },
    },
  ];

  testCases.forEach(({ entry, expected, key }) => {
    test(`${JSON.stringify(entry)} => ${JSON.stringify(expected)} with key=${key}`, () => {
      expect(arrToObj(entry, key)).toEqual(expected);
    });
  });
});
