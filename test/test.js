const test = QUnit.test;

function fizzBuzz(number) {
    if(number % 15 === 0){
        return 'FizzBuzz';
    } else if(number % 3 === 0) {
        return 'Fizz';
    } else if(number % 5 === 0){
        return "Buzz";
    } else {return number;}
}

test('if number is divisible by 3, 5 or 15 then return FizzBuzz', function(assert) {
    const inputNumber = 15;
    const expected = 'FizzBuzz';
    const result = fizzBuzz(inputNumber);
    assert.equal(result, expected);
});

test('in number is divisible by 3 then return Fizz', function(assert){
    const inputNumber = 3;
    const expected = 'Fizz';
    const result = fizzBuzz(inputNumber);
    assert.equal(result, expected);
});

test('if number is dibisible by 5 then return Buzz', function(assert){
    const inputNumber = 5;
    const expected = 'Buzz';
    const result = fizzBuzz(inputNumber);
    assert.equal(result, expected);
});

test('if number is not divisible by 3, 5, or 15 then return number' function(assert){
    const inputNumber = 2;
    const expected = number;
    const result = fizzBuzz(inputNumber);
    assert.equal(result, expected);
});
