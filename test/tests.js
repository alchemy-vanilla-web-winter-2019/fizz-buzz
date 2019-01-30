const test = QUnit.test;

import fizzBuzz from '../fizz-buzz.js';

test('If input is divisible by 15, return "FizzBuzz"', function(assert) {
    assert.equal(fizzBuzz(15), 'FizzBuzz');
});
test('If input is divisible by 3, return "Fizz"', function(assert) {
    assert.equal(fizzBuzz(6), 'Fizz');
});
test('If input is divisible by 5, return "Buzz"', function(assert) {
    assert.equal(fizzBuzz(10), 'Buzz');
});
test('If input is not divisible by 3 or 5, return input', function(assert) {
    const input = 8;
    assert.equal(fizzBuzz(input), input);
});

