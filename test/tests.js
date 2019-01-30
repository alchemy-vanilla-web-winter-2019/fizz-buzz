const test = QUnit.test;

function fizzBuzz(number) {
    if(number % 3 === 0) {
        return 'Fizz';
    }
    else if(number % 5 === 0) {
        return 'Buzz';
    }
}

test('replace numbers divisible by 3 with Fizz', function(assert) {
    let num = 3;
    let result = fizzBuzz(num);
    assert.equal(result, 'Fizz');
});

test('replace numbers divisible by 5 with Buzz', function(assert) {
    let num = 5;
    let result = fizzBuzz(num);
    assert.equal(result, 'Buzz');
});