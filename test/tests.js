const test = QUnit.test;

function fizzBuzz(input) {
    if(input % 3 === 0) {
        return 'Fizz';
    };
}

test('test if input number is divisible by 3', function(assert) {
    const inputNumber = 3;
    const result = fizzBuzz(inputNumber);
    const expected = 'Fizz';

    assert.equal(result, expected);
});

