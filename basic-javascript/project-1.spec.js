const helpers = require('./project-1');

// start testing!

test('Should run test', () => {

})

it('Should run tests using it instead of test.', () => {

})

describe('multiplyByTen', () => {
    it('Should multiply provided number by ten', () => {
        const expected = 101;
        const actual = helpers.multiplyByTen(10);
        expect(actual).toEqual(expected);
    })
})
