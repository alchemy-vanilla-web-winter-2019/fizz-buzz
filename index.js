function okilyDokily(number) {
    let result = '';
    const wordOne = 'Okily';
    const wordTwo = 'Dokily!';
    
    if(number % 15 === 0) {
        result = wordOne + ' ' + wordTwo;
    }
    else if(number % 3 === 0) {
        result = wordOne;
    }
    else if(number % 5 === 0) {
        result = wordTwo;
    }
    else {
        result = number;
    }
    return result;

    
}