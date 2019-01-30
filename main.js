function fizzBuzz() {
    let integer = document.getElementById('number').value;
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

    document.getElementById('result').innerHTML = 'Your number is: ' + result;
}