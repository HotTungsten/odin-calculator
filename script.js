const numbers = document.querySelectorAll('.number');
let numOne = "0";
let numTwo = "0";
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
    numOne = "0";
    numTwo = "0";
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
    console.log(operation);
}));

const equals = document.querySelectorAll('#equals');
equals.forEach(equals => equals.addEventListener('click', function(){
    if(numOne !== "0" && numTwo !== "0" && operation !== ""){
        console.log(operate(operator, parseInt(numOne), parseInt(numTwo)));
    }
}));

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

function clearAll(){
    
}