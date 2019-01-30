const helpers = require('./project-1');

// console.log('Is ten or five', helpers.isTenOrFive())
// start testing!


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
    const answer = helpers.areSameLength(str1, str2);
    expect(str1.length).toEqual(str2.length);
    expect(answer).toBeTruthy();
})

it('Should check if they are the same', () => {
    const str1 = 'Tom';
    const str2 = 'Tom';
    expect(str1).toBe(str2);
})

it('Should check if number is less than 90', () => {
    const num1 = 85;
    const num2 = 95 
    const answer1 = helpers.lessThanNinety(num1);
    const answer2 = helpers.lessThanNinety(num2);
    expect(answer1).toBeTruthy();
    expect(answer2).toBeFalsy();
})

it('Should check if number is greater than 50', () => {
    const num1 = 55;
    const num2 = 45; 
    const answer1 = helpers.greaterThanFifty(num1);
    const answer2 = helpers.greaterThanFifty(num2);
    expect(answer1).toBeTruthy();
    expect(answer2).toBeFalsy();
})

it('Should add the two inputs', () => {
    const num1 = 10;
    const num2 = 5;
    const expected = 15;
    const actual = helpers.add(num1, num2);
    expect(actual).toEqual(expected);
});

it('Should subtract the inputs', () => {
    const num1 = 10;
    const num2 = 5;
    const expected = 5;
    const actual = helpers.subtract(num1, num2);
    expect(actual).toEqual(expected);
});

it('Should divide the inputs', () => {
    const num1 = 10;
    const num2 = 5;
    const expected = 2;
    const actual = helpers.divide(num1, num2);
    expect(actual).toEqual(expected);
});

it('Should multiply the inputs', () => {
    const num1 = 10;
    const num2 = 5;
    const expected = 50;
    const actual = helpers.multiply(num1, num2);
    expect(actual).toEqual(expected);
});

it('Should get remainder of the inputs', () => {
    const num1 = 10;
    const num2 = 4;
    const expected = 2;
    const actual = helpers.getRemainder(num1, num2);
    expect(actual).toEqual(expected);
});

it('Should get check if number is even', () => {
    const num1 = 10;
    const num2 = 11;
    const answer1 = helpers.isEven(num1);
    const answer2 = helpers.isEven(num2);
    expect(answer1).toBeTruthy();
    expect(answer2).toBeFalsy();
});

it('Should square of the input', () => {
    const num = 3;
    const expected = 9;
    const actual = helpers.square(num);
    expect(actual).toEqual(expected);
});

it('Should cube the input', () => {
    const num = 3;
    const expected = 27;
    const actual = helpers.cube(num);
    expect(actual).toEqual(expected);
});

it('Should raise the first imput to the power of the second input', () => {
    const num = 4;
    const exponent = 3
    const expected = 64;
    const actual = helpers.raiseToPower(num, exponent);
    expect(actual).toEqual(expected);
});

it('Should round the input', () => {
    const num = 5.5;
    const expected = 6;
    const actual = helpers.roundUp(num);
    expect(actual).toEqual(expected);
})

it('Should add an exclamation point to the string', () => {
    const myStr = 'Wow';
    const expected = 'Wow!';
    const actual = helpers.addExclamationPoint(myStr);
    expect(actual).toEqual(expected);
})

it('Should combine two strings', () => {
    const firstName = 'Kanye';
    const secondName = 'West';
    const expected = 'Kanye West';
    const actual = helpers.combineNames(firstName, secondName);
    expect(actual).toEqual(expected);
})

it('Should add Hello before input and exclamation point afterwards', () => {
    const name = 'Kanye';
    const expected = 'Hello Kanye!';
    const actual = helpers.getGreeting(name);
    expect(actual).toEqual(expected);
})

it('Should multiply the length and width inputs', () => {
    const length = 5;
    const width = 4;
    const expected = 20;
    const actual = helpers.getRectangleArea(length, width);
    expect(actual).toEqual(expected);
})

it('Should get the triangle area', () => {
    const base = 5;
    const height = 4;
    const expected = 10;
    const actual = helpers.getTriangleArea(base, height);
    expect(actual).toEqual(expected);
})

it('Should multiply radius by radius and pi', () => {
    const radius = 4;
    const expectedLower = 50;
    const expectedUpper = 51;
    const actual = helpers.getCircleArea(radius);
    expect(actual).toBeGreaterThanOrEqual(expectedLower)
    expect(actual).toBeLessThan(expectedUpper)
})

it('Should multiple the width, height and length inputs', () => {
    const length = 10;
    const width = 5;
    const height = 4;
    const expected = 200;
    const actual = helpers.getRectangularPrismVolume(length, width, height);
    expect(actual).toEqual(expected);
})