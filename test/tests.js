const test = QUnit.test;

test('time to write a test', function(assert) {
    assert.equal(true, false);
});

function fizzBuzz(number) {
    let result = '';
    const wordOne = 'fizz';
    const wordTwo = 'buzz';
    
    if(number % 15 === 0) {
        result = wordOne + wordTwo;
    }
    else if(number % 3 === 0) {
        result = wordOne;
    }
    else if(number % 5 === 0) {
        result = wordTwo;
    }
    else {
        result = number;
    }
    return result;
}

test('number is divisible by 15', function(assert) {
    const number = 15;
    const expect = 'fizzbuzz';
    const result = fizzBuzz(number);
    assert.equal(expect, result);
});

test('number is divisible by 3', function(assert) {
    const number = 3;
    const expect = 'fizz';
    const result = fizzBuzz(number);
    assert.equal(expect, result);
});

test('number is divisible by 5', function(assert) {
    const number = 5;
    const expect = 'buzz';
    const result = fizzBuzz(number);
    assert.equal(expect, result);
});

test('number is not divisible by 3, 5 or 15', function(assert) {
    const number = 7;
    const expect = number;
    const result = fizzBuzz(number);
    assert.equal(expect, result);
});