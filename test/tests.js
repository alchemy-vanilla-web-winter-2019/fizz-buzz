const test = QUnit.test;

function fizzBuzz(number) {
    let result = ''
    if(number % 15 === 0) {
        result = 'fizzbuzz';
    }
    else if(number % 5 === 0) {
        result = 'buzz';
    }
    else if(number % 3 === 0) {
        result = 'fizz';
    }
    else {
        result = number;
    }
    return result;
}

test('divisible by 15', function(assert) {
    const integer = 15;
    const expect = 'fizzbuzz';
    const results = fizzBuzz(integer);
    
    assert.equal(results, expect);
});
test('divisible by 5', function(assert) {
    const integer = 5;
    const expect = 'buzz';
    const results = fizzBuzz(integer);
    
    assert.equal(results, expect);
});
test('divisible by 3', function(assert) {
    const integer = 3;
    const expect = 'fizz';
    const results = fizzBuzz(integer);
    
    assert.equal(results, expect);
});
test('not divisible by 5 or 3 returns a number', function(assert) {
    const integer = 7;
    const expect = 7;
    const results = fizzBuzz(integer);
    
    assert.equal(results, expect);
});
