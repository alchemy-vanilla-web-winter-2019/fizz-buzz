const test = QUnit.test;


function fizzBuzz(num) {
    if(num % 15 === 0) {
        return 'FizzBuzz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else if(num % 5 === 0) {
        return 'Buzz';
    }
}

test('return Fizz if num is divisible by 3', function(assert) {
    const num = 12;
    const result = fizzBuzz(num);
    const expected = 'Fizz';
    assert.equal(result, expected);
});

test('return Buzz if num is divisible by 5', function(assert) {
    const num = 10;
    const result = fizzBuzz(num);
    const expected = 'Buzz';
    assert.equal(result, expected);
});

test('return FizzBuzz if num is divisible by 15', function(assert) {
    const num = 15;
    const result = fizzBuzz(num);
    const expected = 'FizzBuzz';
    assert.equal(result, expected);
});
