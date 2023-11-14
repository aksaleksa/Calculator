// To start with, our calculator must have the four main operations:
// addition, subtraction, multiplication and division. Also, it is
// essential to have a clear button. These can be defined with functions.
// In simple terms, a single sum/operation comprises two numbers and an operator
// The value of the output depends on all of these, so we should save the user's
// choices in some variables.
// It is sensible to house the functions within a single object
// In addition, it would make sense to house the button (operation and number)
// variables in their own objects
// An operator (+, -, *, /) can only be accepted once the first number has been chosen
// Likewise, a second number can only be accepted once the operator is chosen
// There must be a general calculate/initialize function to deal with this
// Depending on what a user types, the display of the calculator should update accordingly

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const divide = document.querySelector("#divide");
const point = document.querySelector("#point");
const equals = document.querySelector("#equals");

const backspace = document.querySelector("#backspace");
const clear = document.querySelector("#clear");
const screen = document.querySelector("#screen");

const operations = {
    addition: function(num1, num2) {
        return parseInt(num1) + parseInt(num2);
    },
    subtraction: function(num1, num2) {
        return num1 - num2;
    },
    multiplication: function(num1, num2) {
        return num1 * num2;
    },
    division: function(num1, num2) {
        return num1 / num2;
    }
}

function operate(param1, param2, operator) {
    let output = 0;
    switch(operator) {
        case "+":
            output = operations.addition(param1, param2);
            break;
        case "-":
            output = operations.subtraction(param1, param2);
            break;
        case "*":
            output = operations.multiplication(param1, param2);
            break;
        case "/":
            output = operations.division(param1, param2);
            break;
    }
    return output
}


// function updateDisplay(button, displayValue) {
//     displayValue += button.textContent;
//     screen.textContent = displayValue;
// }

function display() {
    let displayValue = "";
    let param1 = "";
    let param2 = "";
    let result = "";
    let operator = "";
    let firstReceived = false;
    one.addEventListener("click", () => {
        if (firstReceived) displayValue = "";
        displayValue += one.textContent 
        screen.textContent = displayValue;
        firstReceived = false;
    })
    two.addEventListener("click", () => {
        if (firstReceived) displayValue = "";
        displayValue += two.textContent;
        screen.textContent = displayValue;
        firstReceived = false;
    })
    three.addEventListener("click", () => {
        if (firstReceived) displayValue = "";
        displayValue += three.textContent;
        screen.textContent = displayValue;
        firstReceived = false;
    })
    four.addEventListener("click", () => {
        if (firstReceived) displayValue = "";
        displayValue += four.textContent;
        screen.textContent = displayValue;
        firstReceived = false;
    })
    five.addEventListener("click", () => {
        if (firstReceived) displayValue = "";
        displayValue += five.textContent;
        screen.textContent = displayValue;
        firstReceived = false;
    })
    six.addEventListener("click", () => {
        if (firstReceived) displayValue = "";
        displayValue += six.textContent;
        screen.textContent = displayValue;
        firstReceived = false;
    })
    seven.addEventListener("click", () => {
        if (firstReceived) displayValue = "";
        displayValue += seven.textContent;
        screen.textContent = displayValue;
        firstReceived = false;
    })
    eight.addEventListener("click", () => {
        if (firstReceived) displayValue = "";
        displayValue += eight.textContent;
        screen.textContent = displayValue;
        firstReceived = false;
    })
    nine.addEventListener("click", () => {
        if (firstReceived) displayValue = "";
        displayValue += nine.textContent;
        screen.textContent = displayValue;
        firstReceived = false;
    })
    zero.addEventListener("click", () => {
        if (firstReceived) displayValue = "";
        displayValue += zero.textContent;
        screen.textContent = displayValue;
        firstReceived = false;
    })
    plus.addEventListener("click", () => {
        param1 = displayValue;
        displayValue = plus.textContent;
        screen.textContent = displayValue;
        firstReceived = true;
        operator = "+";
    })
    minus.addEventListener("click", () => {
        param1 = displayValue;
        displayValue = minus.textContent;
        screen.textContent = displayValue;
        firstReceived = true;
        operator = "-";
    })
    times.addEventListener("click", () => {
        param1 = displayValue;
        displayValue = times.textContent;
        screen.textContent = displayValue;
        firstReceived = true;
        operator = "*";
    })
    divide.addEventListener("click", () => {
        param1 = displayValue;
        displayValue = divide.textContent;
        screen.textContent = displayValue;
        firstReceived = true;
        operator = "/";
    })
    equals.addEventListener("click", () => {
        param2 = displayValue;
        result = operate(param1, param2, operator);
        screen.textContent = result;
    })
    clear.addEventListener("click", () => {
        screen.textContent = "";
        displayValue = "";
        param1 = "";
        param2 = "";
        operator = "";
    })
}

display();