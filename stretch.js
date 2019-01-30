/*
// Console Testing
function fizzBuzz(integer) {
    for(let i = 1; i <= integer; i++) {
        if(i % 15 === 0) {
            console.log('FizzBuzz');
        } else if(i % 3 === 0) {
            console.log('Fizz');
        } else if(i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
*/
function stretch(integer) {
    let output = 1;
    for(let i = 2; i <= integer; i++) {
        if(i % 15 === 0) {
            output += ', ' + 'FizzBuzz';
        } else if(i % 3 === 0) {
            output += ', ' + 'Fizz';
        } else if(i % 5 === 0) {
            output += ', ' + 'Buzz';
        } else {
            output += ', ' + i;
        }
    }
    console.log(output);
}
stretch(16);
