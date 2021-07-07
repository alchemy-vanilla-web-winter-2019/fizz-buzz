//I just had extra time and wanted to try and make the strings appear on the browser, not quite successful yet

let inputInteger = document.getElementById('numberInput');


function fizzBuzz(inputInteger){
    if(inputInteger % 15 === 0){
        document.write('fizzbuzz');
    } else if(inputInteger % 5 === 0){
        document.write('buzz');
    } else if(inputInteger % 3 === 0){
        document.write('fizz');
    }
}

fizzBuzz(15);

