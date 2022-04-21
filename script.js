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
numbers.forEach(numbers => numbers.addEventListener('click', function(e){

    console.log(numbers.innerHTML);
    console.log(typeof numbers.innerHTML);
}));