const test = QUnit.test;

function fizzBuzz(inputInteger) {
    if(inputInteger % 15 === 0) {
        return 'fizzBuzz';
    } else if(inputInteger % 5 === 0) {
        return 'buzz';
    } else if(inputInteger % 3 === 0) {
        return 'fizz';
    } else {
        return inputInteger;
    }
}

test('input integer return integer', function(assert) {
    let inputInteger = 1;
    let result = fizzBuzz(inputInteger);
    assert.equal(result, inputInteger);
});

test('input integer divisible by 3 return fizz', function(assert) {
    let inputInteger = 3;
    let result = fizzBuzz(inputInteger);
    assert.equal(result, 'fizz');
});

test('input integer divisible by 5 return buzz', function(assert){
    let inputInteger = 5;
    let result = fizzBuzz(inputInteger);
    assert.equal(result, 'buzz');
});

