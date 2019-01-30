const test = QUnit.test;



function fizzBuzz(number) {
    if(number % 3 === 0 && number % 5 === 0){
        return 'FizzBuzz';
    }
    else if(number % 3 === 0){
        return 'Fizz';
    } 
    else if(number % 5 === 0){
        return 'Buzz';
    }
    else {
        return number;
    }
}


test('returns FizzBuzz if number is divisible 3 and 5', function(assert){
    let number = 15;
    result = fizzBuzz(number);
    assert.equal(result, 'FizzBuzz');
});
test('returns Fizz if number is divisible 3', function(assert){
    let number = 3;
    result = fizzBuzz(number);
    assert.equal(result, 'Fizz');
});

test('returns Buzz if number is divisible by 5', function(assert){
    let number = 5;
    result = fizzBuzz(number);
    assert.equal(result, 'Buzz');
});


/*test('returns string of numbers from 1 through number passed replacing numbers divisible by 3 with Fizz and divisible by 5 with Buzz', function(assert){
    let number = 4;
    result = fizzBuzz(4);
    assert.equal(result, '1, 2, Fizz, 4');
});*/