const test = QUnit.test;

function fizzBuzz(number) {
    if(number % 15 === 0) {
        return 'FizzBuzz';
    } else if(number % 3 === 0) {
        return 'Fizz';
    }
}

test('if number is divisible by 3, 5 or 15 then return FizzBuzz', function(assert) {
    const inputNumber = 15;
    const expected = 'FizzBuzz';
    const result = fizzBuzz(inputNumber);
    assert.equal(result, expected);
});

test('if number is divisible by 3 then return Fizz', function(assert){
    const inputNumber = 3;
    const expected = 'Fizz';
    const result = fizzBuzz(inputNumber);
    assert.equal(result, expected);
});