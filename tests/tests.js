// eslint-disable-next-line
const test = QUnit.test;

import fizzBuzz from '../src/fizz-buzz.js';

test('tests if input is divisable by 15, if so, outputs fizzbuzz', function(assert) {
    const testInput = 45;
    const functionOutPut = fizzBuzz(testInput);
    assert.equal(functionOutPut, 'fizzbuzz');
});
test('tests if input is divisable by 5, if so, outputs buzz', function(assert) {
    const testInput = 10;
    const functionOutPut = fizzBuzz(testInput);
    assert.equal(functionOutPut, 'buzz');
});
test('tests if input is divisable by 3, if so, outputs fizz', function(assert) {
    const testInput = 9;
    const functionOutPut = fizzBuzz(testInput);
    assert.equal(functionOutPut, 'fizz');
});
test('tests if input is neither divisable by 3 or 5, if so, outputs input value', function(assert) {
    const testInput = 7;
    const functionOutPut = fizzBuzz(testInput);
    assert.equal(functionOutPut, testInput);
});