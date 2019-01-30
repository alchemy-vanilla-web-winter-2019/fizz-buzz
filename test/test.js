const test = QUnit.test;

//Function created then moved to fizzBuzzFunction.js

// function fizzBuzz(input) {
//     if (input % 15 === 0) {
//         return 'FizzBuzz';
//     }

//     else if (input % 3 === 0) {
//         return 'Fizz';
//     }

//     else if (input % 5 === 0) {
//         return 'Buzz';
//     }

//     else {
//         return input;
//     }

// }

//Import Function
import fizzBuzz from '../src/fizzBuzzFunction.js';

//Prelim Tests
test ('is testing working', function(assert) {
    assert.equal(true, true);
});

test('is math stuff working', function(assert) {
    const input = 6
    assert.equal(input, 6);
})

//Function Tests
test('is Fizz working', function(assert) {
    const input = 6
    const result = fizzBuzz(input);
    assert.equal(result, 'Fizz');
});

test('is Buzz working', function(assert) {
    const input = 5
    const result = fizzBuzz(input);
    assert.equal(result, 'Buzz');
});

test('is FizzBuzz working', function(assert) {
    const input = 15
    const result = fizzBuzz(input);
    assert.equal(result, 'FizzBuzz');
});

