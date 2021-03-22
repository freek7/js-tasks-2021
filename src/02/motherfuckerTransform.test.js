import { motherfuckerTransform } from "./motherfuckerTransform";

describe("Забрати зі строки всі матюки, замінити на формат 'сука'=> 'с**a' і тд", () => {

    const testCases = [
        {
            entry: "Та ти тупий єбаний хуй, поняв сука?",
            expected: "Та ти тупий є****й х*й, поняв с**а?",
        },
        {
            entry: "Та ти сам хуй єбаний, сука",
            expected: "Та ти сам х*й є****й, с**а",
        },
    ];

    testCases.forEach(({entry, expected}) => {
        test(`${entry} => ${expected}`, () => {
            expect(motherfuckerTransform(entry)).toEqual(expected);
        });
    })
  
});
