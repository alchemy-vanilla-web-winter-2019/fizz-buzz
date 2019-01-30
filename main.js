const test = QUnit.test;

function fizzBuzz(inputNumber) { 
    if(inputNumber % 15 === 0) {
        return 'fizzbuzz';
    }
    else if(inputNumber % 3 === 0) {
        return 'fizz';
    } 
    else if(inputNumber % 5 === 0) {
        return 'buzz';
    }

}

test('input integer divisibl by 3 return fizz', function(assert) {
    let inputNumber = 3;
    let result = fizzBuzz(inputNumber);
    assert.equal(result, 'fizz');
});

test('input integer divisible by 5 return buzz,', function(assert) {
    let inputNumber = 5;
    let result = fizzBuzz(inputNumber);
    assert.equal(result, 'buzz');
}); 

test('input integer divisible by 15 return fizzbuzz', function(assert) {
    let inputNumber = 15;
    let result = fizzBuzz(inputNumber);
    assert.equal(result, 'fizzbuzz');
});