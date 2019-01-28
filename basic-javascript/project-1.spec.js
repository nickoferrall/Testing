const helpers = require('./project-1');

// start testing!

test('Should run test', () => {

})

it('Should run tests using it instead of test.', () => {

})

describe('multiplyByTen', () => {
    it('Should multiply provided number by ten', () => {
        const expected = 100;
        const actual = helpers.multiplyByTen(10);
        expect(actual).toEqual(expected);
    })
})

it('Should subtract by 5', () => {
    const expected = 5;
    const actual = helpers.subtractFive(10);
    expect(actual).toEqual(expected);
})

it('Should check if they are the same length', () => {
    const str1 = 'Tom';
    const str2 = 'Ben';
    console.log(areSameLength(str1, str2))
    expect(str1.length).toEqual(str2.length);
})

// it('Should check if they are the same', () => {
//     const str1 = 'Tom';
//     const str2 = 'Tom';
//     expect(str1).toBe(str2);
// })


// it('Should check if number is less than 90', () => {
//     const num = 85;
//     expect(num).toBeLessThan(90);
// })

it('Should add the two inputs', () => {
    const num1 = 10;
    const num2 = 5;
    expected = 15;
    actual = add(num1, num2);
    expect(actual).toEqual(expected);
})