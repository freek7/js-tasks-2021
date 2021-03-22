import {unicValues} from './unicValues';

describe("Значення масиву не повинні повторюватись", () => {
    test("[1,1,2,2] очікуємо [1,2]", () => {
        expect(unicValues([1,1,2])).toEqual([1,2])
    })
})