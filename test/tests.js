const test = QUnit.test;

function fizzBuzz(input) {
    if(input % 15 === 0) {
        return 'FizzBuzz';
    } else if(input % 5 === 0) {
        return 'Buzz';
    } else if(input % 3 === 0) {
        return 'Fizz';
    }
}

test('test if input number is divisible by 3', function(assert) {
    const inputNumber = 9;
    const result = fizzBuzz(inputNumber);
    const expected = 'Fizz';
    assert.equal(result, expected);
});

test('test if input number is divisible by 5', function(assert) {
    const inputNumber = 10;
    const result = fizzBuzz(inputNumber);
    const expected = 'Buzz';
    assert.equal(result, expected);
});

test('test if input number is divisible by both 3&5', function(assert) {
    const inputNumber = 15;
    const result = fizzBuzz(inputNumber);
    const expected = 'FizzBuzz';
    assert.equal(result, expected);
});