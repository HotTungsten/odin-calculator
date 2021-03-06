let operation = null;
let operationBool = false;
let numOne = null;
let numTwo = null;
let result = null;

const display= document.getElementById('display');
const numButtons = document.querySelectorAll('.number');
numButtons.forEach(numButtons => numButtons.addEventListener('click', function(){
    //if initial display is 0, and 0 is pressed, nothing is done
    if(operationBool === false){
        if(numOne === null && numButtons.innerHTML !== "0"){
            numOne = numButtons.innerHTML;
            display.textContent = numOne;
        }
        else if(numOne !== null) {
            numOne += numButtons.innerHTML;
            display.textContent = numOne;
        }
    }
    else{
        if(numTwo === null && numButtons.innerHTML !== "0"){
            numTwo = numButtons.innerHTML;
            display.textContent = numTwo;
        }
        else if(numTwo !== null) {
            numTwo += numButtons.innerHTML;
            display.textContent = numTwo;
        }
    }
    console.log(numOne);
}));

const operator = document.querySelectorAll('.operator');
operator.forEach(operator => operator.addEventListener('click', function(){
    if(operationBool === false && numOne !== null){
        operation = operator.innerHTML;
        operationBool = true;
    }
    if(numOne !== null && numTwo !== null){
        numOne = operate(operation, Number(numOne), Number(numTwo));
        display.textContent = numOne;
        operation = operator.innerHTML;
        numTwo = null;
    }
    console.log(operation);
}));

const equals = document.querySelectorAll('#equals');
equals.forEach(equals => equals.addEventListener('click', function(){
    if(operationBool === true && numOne !== "0" && numTwo !== "0"){
        result = operate(operation, Number(numOne), Number(numTwo));
        display.textContent = result;
        operationBool = false;
    }
}));

const clear = document.querySelectorAll('#clear');
clear.forEach(clear => clear.addEventListener('click', function(){
    operation = null;
    operationBool = false;
    numOne = null;
    numTwo = null;
    result = null;
    display.textContent = "0";
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
            if(num2 == 0){
                display.textContent = "Error";
            }
            else{
                return Math.round((num1 / num2) * 1000) / 1000;
            }
    }
}
