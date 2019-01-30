const test = QUnit.test;

function fizzBuzz(number) {
    if(number % 3 === 0) {
        return 'fizz';
    }
}


test('if number is divisible by 3, return fizz', function(assert) {
    let result = fizzBuzz(3);
    assert.equal(result, 'fizz');

});




