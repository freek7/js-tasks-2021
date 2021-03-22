import { fillRange } from "./fillRange";

describe(`Заповнити значення масиву, які були пропущенні, 
    повинно працювати з префіксами (значення повинні бути строчного типу)
    очікуємо ['id10', 'id12'] => ['id10', 'id11', 'id12']`, () => {
  const testCases = [
    {
      entry: ["id10", "id12"],
      expected: ["id10", "id11", "id12"],
      prefix: "id",
    },

    {
      entry: ["id10", "id12", "id14"],
      expected: ["10", "11", "12", "13", "14"],
      prefix: "",
    },
    {
      entry: ["id10", "id12", "id14"],
      expected: ["xd10", "xd11", "xd12", "xd13", "xd14"],
      prefix: "xd",
    },
  ];

  testCases.forEach(({ entry, expected, prefix }) => {
    test(`${entry} => ${expected} with prefix=${prefix}`, () => {
      expect(fillRange(entry, prefix)).toEqual(expected);
    });
  });
});
