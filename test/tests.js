const test = QUnit.test;

function fizzy(inputNumber) {
    if(inputNumber % 3 === 0 && inputNumber % 5 === 0) {
        return 'FizzBuzz';
    }
}


test('time to write a test', function(assert) {
    const inputNumber = 15;
    const expected = 'FizzBuzz';
    const result = fizzy(inputNumber);
    assert.equal(expected, result);
});