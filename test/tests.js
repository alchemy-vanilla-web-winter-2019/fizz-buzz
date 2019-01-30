const test = QUnit.test;

function fizzBuzzCheck(input) {
    if(input % 15 === 0) {
        return 'FizzBuzz';
    } else if(input % 5 === 0) {
        return 'Buzz';
    } else if(input % 3 === 0) {
        return 'Fizz';
    } else {
        return input;
    }
}

function fizzBuzz(input,catstring) {
    if(catstring === undefined) {
        catstring = input;
        return fizzBuzz(input-1,catstring);
    }
    if(input === 0) {
        return catstring;
    }
    let fizzBuzzString = fizzBuzzCheck(input);
    //let fizzBuzzString = input;
    catstring = fizzBuzzString + ', ' + catstring;
    return fizzBuzz(input-1,catstring);
}

test('test if input number is divisible by 3', function(assert) {
    const inputNumber = 9;
    const result = fizzBuzzCheck(inputNumber);
    const expected = 'Fizz';
    assert.equal(result, expected);
});

test('test if input number is divisible by 5', function(assert) {
    const inputNumber = 10;
    const result = fizzBuzzCheck(inputNumber);
    const expected = 'Buzz';
    assert.equal(result, expected);
});

test('test if input number is divisible by both 3&5', function(assert) {
    const inputNumber = 15;
    const result = fizzBuzzCheck(inputNumber);
    const expected = 'FizzBuzz';
    assert.equal(result, expected);
});

test('test if input number is not divisible by 3 or 5', function(assert) {
    const inputNumber = 7;
    const result = fizzBuzzCheck(inputNumber);
    const expected = inputNumber;
    assert.equal(result, expected);
});

/*
test('return a string of all numbers preceding input, comma separated', function(assert) {
    const inputNumber = 7;
    const result = fizzBuzz(inputNumber);
    const expected = '1, 2, 3, 4, 5, 6, 7';
    assert.equal(result, expected);
}); 
*/

test('return string of numbers +Fizz/Buzz preceding input, comma separated', function(assert) {
    const inputNumber = 16;
    const result = fizzBuzz(inputNumber);
    const expected = '1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16';
    assert.equal(result, expected);
})