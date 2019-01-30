const test = QUnit.test;

function fizzBuzz(integer) {

    let result = ''; 
    const wordOne = 'Fizz';
    const wordTwo = 'Buzz';

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
    const expect = 'FizzBuzz';
    const result = fizzBuzz(integer);

    assert.equal(result, expect);
});

test('return Buzz if divisible by 5', function(assert) {
    const integer = 5;
    const expect = 'Buzz';
    const result = fizzBuzz(integer);

    assert.equal(result, expect);
});

test('return Fizz if divisible by 3', function(assert) {
    const integer = 3;
    const expect = 'Fizz';
    const result = fizzBuzz(integer);

    assert.equal(result, expect);
});

test('return integer if integer is not divisible by either 3 or 5', function(assert) {
    const integer = 7;
    const expect = integer;
    const result = fizzBuzz(integer);

    assert.equal(result, expect);
});