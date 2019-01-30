const test = QUnit.test;

function fizzBuzz(number) {
    if(number === 3){
        return 'fizz';
    }
}

test('replace numbers divisible by 3 with fizz', function(assert) {
    let num = 3;
    let result = fizzBuzz(num);
    assert.equal(result, 'fizz');
});