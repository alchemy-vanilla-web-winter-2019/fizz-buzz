const test = QUnit.test;

/* This function converts a single integer to Fizz, Buzz, FizzBuzz, or returns
the original value */
function fizzBuzz(number) {
    if(number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz';
    }
    else if(number % 3 === 0) {
        return 'Fizz';
    }
    else if(number % 5 === 0) {
        return 'Buzz';
    }
    else {
        return number;
    }
}

/* This function uses the fizzBuzz function to make a string from 1 to
the input parameter `number` containing the integers, Fizz, Buzz, or FizzBuzz
separated by commas and spaces */
function fizzBuzzString(number) {
    let result = '1';
    for(let i = 2; i <= number; i++){
        result += ', ' + fizzBuzz(i);
    }
    return result;
}

/*** Testing suite ***/
test('return string 1, 2, ... FizzBuzz, 16 for input 16', function(assert) {
    let num = 16;
    let result = fizzBuzzString(num);
    assert.equal(result, '1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16');
});

test('return string 1, 2, Fizz, 4 for input 4', function(assert) {
    let num = 4;
    let result = fizzBuzzString(num);
    assert.equal(result, '1, 2, Fizz, 4');
});

test('return string 1, 2, Fizz, 4, Buzz for input 5', function(assert) {
    let num = 5;
    let result = fizzBuzzString(num);
    assert.equal(result, '1, 2, Fizz, 4, Buzz');
});

test('replace numbers divisible by 3 with Fizz', function(assert) {
    let num = 3;
    let result = fizzBuzz(num);
    assert.equal(result, 'Fizz');
});

test('replace numbers divisible by 5 with Buzz', function(assert) {
    let num = 5;
    let result = fizzBuzz(num);
    assert.equal(result, 'Buzz');
});

test('replace numbers divisible by 3 and 5 with FizzBuzz', function(assert) {
    let num = 15;
    let result = fizzBuzz(num);
    assert.equal(result, 'FizzBuzz');
});

test('numbers not divisible by 3 or 5 return the number', function(assert) {
    let num = 7;
    let result = fizzBuzz(num);
    assert.equal(result, num);
});