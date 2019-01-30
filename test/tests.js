const test = QUnit.test;

function fizzBuzz(number) {
    if(number % 15 === 0) {
        return 'FizzBuzz';
    } else if(number % 3 === 0){
        return 'Fizz'; 
    } else if(number % 5 === 0){
        return 'Buzz';
    }
    return number;
    }


test('if number is divisible by 3 return number', function(assert) {
    const inputNumber = 3;
    const result = 'Fizz';
    const expected = fizzBuzz(inputNumber); 
    assert.equal(result, expected);

test('if number is divisible by 5 return Buzz', function(assert) {
    const inputNumber = 5;
    const result = 'Buzz';
    const expected = fizzBuzz(inputNumber);
    assert.equal(result, expected);

test('if number is divisible by 15 return FizzBuzz', function(assert) {
    const inputNumber = 15;
    const result = 'FizzBuzz';
    const expected = fizzBuzz(inputNumber);
    assert.equal(result, expected);
}

}
});