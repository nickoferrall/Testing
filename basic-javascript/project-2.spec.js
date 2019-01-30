const helpers = require('./project-2');

// console.log("Heelpers 2=", helpers)

// console.log("Helper that I want", helpers.isTenOrFive)

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Tests for project 2', () => {
it('Should check if the input is 10 or 5', () => {
    const num1 = 10;
    const num2 = 5;
    const num3 = 6;
    const answer1 = helpers.isTenOrFive(num1);
    const answer2 = helpers.isTenOrFive(num2);
    const answer3 = helpers.isTenOrFive(num3);
    expect(answer1).toBeTruthy();
    expect(answer2).toBeTruthy();
    expect(answer3).toBeFalsy();
})
})

it('Should get the biggest of the two inputs', () => {
    const number1 = 7;
    const number2 = 5;
    const result1 = helpers.getBiggest(number1, number2);
    const number3 = 5;
    const result2 = helpers.getBiggest(number2, number3);
    const result3 = helpers.getBiggest(number2, number1);
    expect(result1).toBe(number1);
    expect(result2).toBe(number3);
    expect(result3).toBe(number1);
})