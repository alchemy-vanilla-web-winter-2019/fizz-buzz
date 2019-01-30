const test = QUnit.test;

function fizzBuzz(input) {
    if(input % 5 === 0) {
        return 'Buzz';
    } else if(input % 3 === 0) {
        return 'Fizz';
    };
}

test('test if input number is divisible by 3', function(assert) {
    const inputNumber = 3;
    const result = fizzBuzz(inputNumber);
    const expected = 'Fizz';
    assert.equal(result, expected);
});

test('test if input number is divisible by 5', function(assert) {
    const inputNumber = 5;
    const result = fizzBuzz(inputNumber);
    const expected = 'Buzz';
    assert.equal(result, expected);
});