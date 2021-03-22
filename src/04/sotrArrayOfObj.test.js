import { sotrArrayOfObj } from "./sotrArrayOfObj";

describe(`Сортування масиву об'єктів по ключу з параметром desc, якщо true то по спаданню`, () => {
  const baseEntry = [
    {
      amount: 1000,
      name: "pie",
    },
    {
      amount: 100,
      name: "apple",
    },
    {
      amount: 300,
      name: "juice",
    },
  ];

  const testCases = [
    {
      entry: baseEntry,
      desc: false,
      field: "amount",
      expected: [
        {
          amount: 100,
          name: "apple",
        },
        {
          amount: 300,
          name: "juice",
        },
        {
          amount: 1000,
          name: "pie",
        },
      ],
    },
    {
      entry: baseEntry,
      desc: true,
      field: "amount",
      expected: [
        {
          amount: 1000,
          name: "pie",
        },
        {
          amount: 300,
          name: "juice",
        },
        {
          amount: 100,
          name: "apple",
        },
      ],
    },
  ];

  testCases.forEach(({ entry, field, desc, expected }) => {
    test(`sort by ${field} with desc=${desc}`, () => {
      expect(sotrArrayOfObj(entry, field, desc)).toEqual(expected);
    });
  });
});
