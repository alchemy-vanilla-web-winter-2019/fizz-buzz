const test = QUnit.test;


function fizzy(inputNumber) {
    if(inputNumber % 3 === 0 && inputNumber % 5 === 0) {
        return 'FizzBuzz';
    } else if(inputNumber % 3 === 0) {
        return 'Fizz';
    } else if(inputNumber % 5 === 0) {
        return 'Buzz';
    } else {return inputNumber;}
}

test('FizzBuzz test - number divisible by 3 and 5', function(assert) {
    const inputNumber = 15;
    const expected = 'FizzBuzz';
    const result = fizzy(inputNumber);
    assert.equal(expected, result);
});

test('Fizz test - number divisible by 3', function(assert) {
    const inputNumber = 9;
    const expected = 'Fizz';
    const result = fizzy(inputNumber);
    assert.equal(expected, result);
});

test('Buzz test - number divisible by 5', function(assert) {
    const inputNumber = 20;
    const expected = 'Buzz';
    const result = fizzy(inputNumber);
    assert.equal(expected, result);
});

