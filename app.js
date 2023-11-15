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

const operators = ["+", "-", "*", "/"];


// function updateNumber(number, condition) {
//     if (operators.includes(screen.textContent)) screen.textContent = "";
//     screen.textContent += number.textContent;
//     // screen.textContent = display;
//     condition = false;
// }

// function updateOperator(parameter, condition, operator, sign) {
//     parameter = screen.textContent;
//     //console.log(parameter);
//     screen.textContent = sign;
//     operator = sign;
//     condition = true;
// }

function display() {
    //let displayValue = "";
    let param1 = "";
    let param2 = "";
    let result = "";
    let operator = "";
    //let second = false;

    one.addEventListener("click", () => {
        if (operators.includes(screen.textContent)) screen.textContent = "";
        screen.textContent += one.textContent;
    })
    two.addEventListener("click", () => {
        if (operators.includes(screen.textContent)) screen.textContent = "";
        screen.textContent += two.textContent;
    })
    three.addEventListener("click", () => {
        if (operators.includes(screen.textContent)) screen.textContent = "";
        screen.textContent += three.textContent;
    })
    four.addEventListener("click", () => {
        if (operators.includes(screen.textContent)) screen.textContent = "";
        screen.textContent += four.textContent;
    })
    five.addEventListener("click", () => {
        if (operators.includes(screen.textContent)) screen.textContent = "";
        screen.textContent += five.textContent;
    })
    six.addEventListener("click", () => {
        if (operators.includes(screen.textContent)) screen.textContent = "";
        screen.textContent += six.textContent;
    })
    seven.addEventListener("click", () => {
        if (operators.includes(screen.textContent)) screen.textContent = "";
        screen.textContent += seven.textContent;
    })
    eight.addEventListener("click", () => {
        if (operators.includes(screen.textContent)) screen.textContent = "";
        screen.textContent += eight.textContent;
    })
    nine.addEventListener("click", () => {
        if (operators.includes(screen.textContent)) screen.textContent = "";
        screen.textContent += nine.textContent;
    })
    zero.addEventListener("click", () => {
        if (operators.includes(screen.textContent)) screen.textContent = "";
        screen.textContent += zero.textContent;
    })

    //one.addEventListener("click", () => updateNumber(one, second));
    //two.addEventListener("click", () => updateNumber(two, second));
    // three.addEventListener("click", () => updateNumber(three, displayValue, second))
    // four.addEventListener("click", () => updateNumber(four, displayValue, second))
    // five.addEventListener("click", () => updateNumber(five, displayValue, second))
    // six.addEventListener("click", () => updateNumber(six, displayValue, second))
    // seven.addEventListener("click", () => updateNumber(seven, displayValue, second))
    // eight.addEventListener("click", () => updateNumber(eight, displayValue, second))
    // nine.addEventListener("click", () => updateNumber(nine, displayValue, second))
    // zero.addEventListener("click", () => updateNumber(zero, displayValue, second))

    plus.addEventListener("click", () => {
        param1 = screen.textContent;
        screen.textContent = "+";
        operator = "+";
    })
    minus.addEventListener("click", () => {
        param1 = screen.textContent;
        screen.textContent = "-";
        operator = "-";
    })
    times.addEventListener("click", () => {
        param1 = screen.textContent;
        screen.textContent = "*";
        operator = "*";
    })
    divide.addEventListener("click", () => {
        param1 = screen.textContent;
        screen.textContent = "/";
        operator = "/";
    })
    
    equals.addEventListener("click", () => {
        param2 = screen.textContent;
        result = operate(param1, param2, operator);
        screen.textContent = result;
    })
    clear.addEventListener("click", () => {
        screen.textContent = "";
        param1 = "";
        param2 = "";
        operator = "";
    })
}

display();

// one.addEventListener("click", () => {
//     if (second) displayValue = "";
//     displayValue += one.textContent;
//     screen.textContent = displayValue;
//     second = false;
// })
// two.addEventListener("click", () => {
//     if (second) displayValue = "";
//     displayValue += two.textContent;
//     screen.textContent = displayValue;
//     second = false;
// })

//plus.addEventListener("click", () => {updateOperator(param1, second, operator, "+")})
//minus.addEventListener("click", () => updateOperator(param1, second, operator, minus));
//times.addEventListener("click", () => updateOperator(param1, second, operator, times));
//divide.addEventListener("click", () => updateOperator(param1, second, operator, divide));

// plus.addEventListener("click", () => {
//     param1 = screen.textContent;
//     //displayValue = plus.textContent;
//     screen.textContent = plus.textContent;
//     second = true;
//     operator = "+";
// })