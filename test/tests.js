const test = QUnit.test;

function fizzBuzz(number) {
    if(number % 15 === 0) {
        return 'FizzBuzz';
    }
}

test('if number is divisible by 3, 5 or 15 then return FizzBuzz', function(assert) {
    const inputNumber = 15;
    const expected = 'FizzBuzz';
    const result = fizzBuzz(inputNumber);
    assert.equal(result, expected);
});