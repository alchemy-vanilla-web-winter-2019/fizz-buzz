const test = Qunit.test;

function FizzBuzz(input){
    if(input % 15 === 0) {
    return 'FizzBuzz';
    } else if(input % 5 === 0) {
    return 'Buzz';
    } else if(input % 3 === 0) {
    return 'Fizz';
    } else
    return (input);
    }
}


test('input divisible by 15', function(assert){
    const input = 15;
    const result = FizzBuzz(input);
    assert.equal = (result, 'FizzBuzz');
});
test('input divisible by 5', function(assert){
    const input = 5;
    const result = Buzz(input);
    assert.equal = (result, 'Buzz');
});
test('input divisible by 3', function(assert){
    const input = 3;
    const result = Fizz(input);
    assert.equal = (result, 'Fizz');
});