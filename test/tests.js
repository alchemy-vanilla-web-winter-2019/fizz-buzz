const test = QUnit.test;

function fizzy(inputNumber) {
    if(inputNumber % 3 === 0 && inputNumber % 5 === 0) {
        return 'FizzBuzz';
    } else if(inputNumber % 3 === 0) {
        return 'Fizz';
    }

}


test('FizzBuzz test - number divisible by 3 and 5', function(assert) {
    const inputNumber = 15;
    const expected = 'FizzBuzz';
    const result = fizzy(inputNumber);
    assert.equal(expected, result);
});

test('Fizz test - number divisible by 3', function(assert) {
    const inputNumber = 9;
    const expected = 'Fizz';
    const result = fizzy(inputNumber);
    assert.equal(expected, result);
});