const test = QUnit.test;

function fizzBuzz(number) {
    if(number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz';
    }
    else if(number % 3 === 0) {
        return 'Fizz';
    }
    else if(number % 5 === 0) {
        return 'Buzz';
    }
    else {
        return number;
    }
}

test('return string 1 2 Fizz 4 for input 4', function(assert))

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

test('replace numbers divisible by 3 and 5 with FizzBuzz', function(assert) {
    let num = 15;
    let result = fizzBuzz(num);
    assert.equal(result, 'FizzBuzz');
});

test('numbers not divisible by 3 or 5 return the number', function(assert) {
    let num = 7;
    let result = fizzBuzz(num);
    assert.equal(result, num);
});