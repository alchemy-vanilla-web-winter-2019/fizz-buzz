const test = QUnit.test;

function fizzBuzz(integer) {
    let result = '';
    const wordOne = 'fizz';
    const wordTwo = 'buzz';

    if(integer % 15 === 0) {
        result = wordOne + wordTwo;
    }
    else if(integer % 5 === 0) {
        result = wordTwo;
    }
    else if(integer % 3 === 0) {
        result = wordOne;
    }
    else {
        result = integer;
    }
    return result;
}


test('return fizzbuzz if divisible by 15', function(assert) {
    const integer = 15;
    const expect = 'fizzbuzz';
    const result = fizzBuzz(integer);

    assert.equal(expect, result);
});
test('return buzz if divisible by 5', function(assert) {
    const integer = 5;
    const expect = 'buzz';
    const result = fizzBuzz(integer);

    assert.equal(expect, result);
});
test('return fizz if divisible by 3', function(assert) {
    const integer = 3;
    const expect = 'fizz';
    const result = fizzBuzz(integer);

    assert.equal(expect, result);
});
test('return integer if not divisible by 3, 5, or 15', function(assert) {
    const integer = 8;
    const expect = integer;
    const result = fizzBuzz(integer);

    assert.equal(expect, result);
});