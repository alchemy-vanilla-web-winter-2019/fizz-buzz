const test = QUnit.test;

function fizzBuzz(input) {
    if(input % 15 === 0) {
        return 'FizzBuzz';
    } else if(input % 5 === 0) {
        return 'Buzz';
    } else if(input % 3 === 0) {
        return 'Fizz';
    } else return input;
}

test('if number is divisible by 15, return FizzBuzz', function(assert) {
    const input = 15;
    const result = fizzBuzz(input);
    assert.equal(result, 'FizzBuzz');
});

test('if number is divisible by 5, return Buzz', function(assert) {
    const input = 5;
    const result = fizzBuzz(input);
    assert.equal(result, 'Buzz');
});

test('if number is divisible by 3, return Fizz', function(assert) {
    const input = 3;
    const result = fizzBuzz(input);
    assert.equal(result, 'Fizz');
});