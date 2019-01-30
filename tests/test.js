const test = QUnit.test;

import fizzBuzz from '../src/fizzbuzz.js';

test('If the input is divisible by 15 then FizzBuzz!', function(assert) {
    const input = 15;
    const result = fizzBuzz(input);
    assert.equal(result, 'FizzBuzz');
});

test('If the input is divisible by 5 then Buzz!', function(assert) {
    const input = 5;
    const result = fizzBuzz(input);
    assert.equal(result, 'Buzz');
});

test('If the input is divisible by 3 then Fizz!', function(assert) {
    const input = 3;
    const result = fizzBuzz(input);
    assert.equal(result, 'Fizz');
});

test('If the input is not divisible by 3, 5, or 15 then bummer but here\'s your number anyway!', function(assert) {
    const input = 7;
    const result = fizzBuzz(input);
    assert.equal(result, input);
});