import { sum } from "./sum";

describe("Тест функції суми", () => {
  test("1 + 2 дорівнює 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
