const test = QUnit.test;


function fizzBuzz(num) {
    if(num % 3 === 0) {
        return 'Fizz';
    }
}



test('return Fizz if num is divisible by 3', function(assert) {
    const num = 12;
    const result = fizzBuzz(num);
    const expected = 'Fizz';
    assert.equal(result, expected);
});
