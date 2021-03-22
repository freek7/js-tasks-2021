import { specificArrayTransform } from "./specificArrayTransform";

describe(`Дан цілочисельний масив. 
        Елементи масиву можуть приймати натуральні значення від 1 до 10 000 включно. 
        Складіть програму, яка знаходить мінімум серед елементів масиву,
        що не діляться без остачі на 5, 
        а потім замінює кожен елемент, що не ділиться без остачі на 5,
        на число, що дорівнює знайденому мінімуму.`, () => {
  const testCases = [
    {
      entry: [160, 244, 56, 224, 125, 105, 589, 25, 421, 78],
      expected: [160, 56, 56, 56, 125, 105, 56, 25, 56, 56],
    },
  ];

  testCases.forEach(({ entry, expected }) => {
    test(`${JSON.stringify(entry)} => ${JSON.stringify(expected)}`, () => {
      expect(specificArrayTransform(entry)).toEqual(expected);
    });
  });
});
