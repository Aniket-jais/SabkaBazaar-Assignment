import { countTotalItems, countTotalPrice } from './cartPrice';


test('countTotalItems', () => {
    const items = [
        {
            count: 1
        },
        {
            count: 4
        },
        {
            count: 9
        },
    ]
    expect(countTotalItems(items)).toBe(14);
})
test('countTotalItems', () => {
    const items = [
        {
            count: 1,
            price: 4
        },
        {
            count: 4,
            price: 5,
        },
        {
            count: 9,
            price: 10
        },
    ]
    expect(countTotalPrice(items)).toBe(114);
})