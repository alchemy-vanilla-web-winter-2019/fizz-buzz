function fizzBuzz() {
    let newArray = [];


    let integer = document.getElementById('number').value;
    let result = '';
    const wordOne = 'fizz';
    const wordTwo = 'buzz';

    for(i = 1; i <= integer; i++) {
        if(i % 15 === 0) {
            result = wordOne + wordTwo;
        }
        else if(i % 5 === 0) {
            result = wordTwo;
        }
        else if(i % 3 === 0) {
            result = wordOne;
        }
        else {
            result = i;
        }
        newArray.push(' ' + result);
    }
    console.log(newArray);

    document.getElementById('result').innerHTML = newArray.toString();
}