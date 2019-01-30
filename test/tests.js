const test = QUnit.test;

function fizzBuzz(number) {
    if(number % 15 === 0) {
        return 'FizzBuzz';
    }
    else if(number % 3 === 0) {
        return 'Fizz';
    }
    else if(number % 5 === 0){
        return 'Buzz';
    }
    else return number;
}

function listAll(number) {
    var numberString = '';
    for(let i = 1; i <= number; i++) {
        numberString += fizzBuzz(i);
        if(i < number) {
            numberString += ', ';
        }
    }
    return numberString;
}

test('return list of fizzbuzzed numbers up to n', function(assert) {
    const inputNumber = 15;
    const result = listAll(inputNumber);
    const expected = '1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz';
    assert.equal(result, expected);
});

test('return number itself when not divisible by 3 or 5', function(assert) {
    const inputNumber = 15;
    const result = fizzBuzz(inputNumber);
    const expected = 'FizzBuzz';
    assert.equal(result, expected);
});

test('return Buzz when divisible by 15', function(assert) {
    const inputNumber = 15;
    const result = fizzBuzz(inputNumber);
    const expected = 'FizzBuzz';
    assert.equal(result, expected);
});

test('return Buzz when divisible by 5', function(assert) {
    const inputNumber = 5;
    const result = fizzBuzz(inputNumber);
    const expected = 'Buzz';
    assert.equal(result, expected);
});

test('return Fizz when divisible by 3', function(assert) {
    const inputNumber = 3;
    const result = fizzBuzz(inputNumber);
    const expected = 'Fizz';
    assert.equal(result, expected);
});