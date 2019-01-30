
const test = QUnit.test;

function fizzBuzz(number) {
    let finalString;
    const originalNumber = number;
    if(number > 0) {
        for(let i = 1; i <= originalNumber; i++) {
            number = number - (number - 1);
            finalString =+ i;         
        }
        return finalString;
    }
    if(number % 15 === 0) {
        return 'FizzBuzz';
    } else if(number % 5 === 0) {
        return 'Buzz';
    } else if(number % 3 === 0) {
        return 'Fizz';
    } else {
        return number;
    }
}

test ('return a string of all numbers including the supplied number', function(assert) {
    const inputNumber = 4;
    const result = fizzBuzz(inputNumber);
    const expected = '1 2 3 4';
    assert.equal(result, expected);
});

test('return Fizz if number is evenly divisible by 3', function(assert) {
    const inputNumber = 3;
    const result = fizzBuzz(inputNumber);
    const expected = 'Fizz';
    assert.equal(result, expected);
});

test('return Buzz if number is evenly divisable by 5', function(assert) {
    const inputNumber = 5;
    const result = fizzBuzz(inputNumber);
    const expected = 'Buzz';
    assert.equal(result, expected);
});

test ('return FizzBuzz if number is evenly divisable by 3 & 5', function(assert) {
    const inputNumber = 15;
    const result = fizzBuzz(inputNumber);
    const expected = 'FizzBuzz';
    assert.equal(result, expected);
});

test ('return number if number is not evenly divisable by 3 or 5', function(assert) {
    const inputNumber = 2;
    const result = fizzBuzz(inputNumber);
    const expected = inputNumber;
    assert.equal(result, expected);
});