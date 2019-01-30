const test = QUnit.test;

function fizzBuzz(inputInteger){
    if(inputInteger % 15 === 0){
        return 'fizzbuzz';
    } else if(inputInteger % 5 === 0){
        return 'buzz';
    } else if(inputInteger % 3 === 0){
        return 'fizz';
    }
}

/*test('input an integer and have it be passed through', function(assert) {
    let inputInteger = 1;
    let result = fizzBuzz(inputInteger);
    assert.equal(result, inputInteger);
});*/

test('input a number divisible by 15 and return the string fizzbuzz', function(assert){
    let inputInteger = 15;
    let result = fizzBuzz(inputInteger);
    assert.equal(result, 'fizzbuzz');
});

test('input an integer divisible by 5 and return the string buzz', function(assert){
    let inputInteger = 5;
    let result = fizzBuzz(inputInteger);
    assert.equal(result, 'buzz');
});

test('input a number divisible by 3 and return the string fizz', function(assert){
    let inputInteger = 3;
    let result = fizzBuzz(inputInteger);
    assert.equal(result, 'fizz');
});

