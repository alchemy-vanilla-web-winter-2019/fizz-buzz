function fizzBuzz(testInput) {
    if(testInput % 15 === 0) {
        return 'fizzbuzz';
    }
    else if(testInput % 5 === 0) {
        return 'buzz';
    }
    else if(testInput % 3 === 0) {
        return 'fizz';
    }
    else {
        return testInput;
    }
}

export default fizzBuzz;