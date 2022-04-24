function operate(operator, num1, num2){
    switch(operator){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    }
}

const numbers = document.querySelectorAll('.number');
let numOne = "";
let numTwo = "";
let operator = false;
let operation = "";

numbers.forEach(numbers => numbers.addEventListener('click', function(){
    if(operator === false){
        numOne += numbers.innerHTML;
        console.log(numOne);
    }
    else {
        numTwo += numbers.innerHTML;
        console.log(numTwo);
    }
}));

const clear = document.querySelectorAll('#clear');
clear.forEach(clear => clear.addEventListener('click', function(){
    numOne = "";
    numTwo = "";
    operator = false;
    operation = "";
}));

const operators = document.querySelectorAll('.operator');
operators.forEach(operators => operators.addEventListener('click', function(){
    if(operator){
        
    }
    else{
        operation = operators.innerHTML
        operator = true;
    }
}));