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

const numbers = [one, two, three, four, five, six, seven, eight, nine, zero];

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const divide = document.querySelector("#divide");
const power = document.querySelector("#power");
const root = document.querySelector("#root");
const exp = document.querySelector("#exp");
const log = document.querySelector("#log");

const operators = [plus, minus, times, divide, power, root, exp, log];

const point = document.querySelector("#point");
const equals = document.querySelector("#equals");
const backspace = document.querySelector("#backspace");
const clear = document.querySelector("#clear");
const screen = document.querySelector("#screen");

function operate(param1, param2, operator) {
    let output = param1;
    switch(operator) {
        case "+":
            output = Number(param1) + Number(param2);
            break;
        case "-":
            output = param1 - param2;
            break;
        case "*":
            output = param1 * param2;
            break;
        case "/":
            output = param1 / param2;
            break;
        case "^":
            output = Math.pow(param1, param2);
            break;
        case "sqrt":
            output = Math.sqrt(param1);
            break;
        case "exp":
            output = Math.exp(param1);
            break; 
        case "ln":
            output = Math.log(param1);
            break;
    }
    return output
}

const symbols = ["+", "-", "*", "/", "^", "sqrt", "exp", "ln"];

function display() {
    let param1 = "";
    let param2 = "";
    let result = 0;
    let sign = "";

    for (let number of numbers) {
        number.addEventListener("click", () => {
            if (symbols.includes(screen.textContent)) screen.textContent = "";
            if (screen.textContent.length < 13) screen.textContent += number.textContent;
        })
    }

    for (let operator of operators) {
        operator.addEventListener("click", () => {
            param1 = screen.textContent;
            screen.textContent = operator.getAttribute("value");
            sign = operator.getAttribute("value");
        })
    }

    point.addEventListener("click", () => {
        if (symbols.includes(screen.textContent) || !(screen.textContent.includes("."))) {
            screen.textContent += ".";
        } 
    })

    equals.addEventListener("click", () => {
        if (sign === "sqrt" || sign === "exp" || sign === "log") param2 = 0;
        else param2 = screen.textContent;
        result = operate(param1, param2, sign);
        if (result.toString().length > 12) {
            screen.textContent = result.toFixed(10);
        }
        else screen.textContent = result;
    })

    backspace.addEventListener("click", () => {
        let tempStr = screen.textContent;
        tempStr = tempStr.split("").slice(0, tempStr.length - 1).join("");
        screen.textContent = tempStr;
    })

    clear.addEventListener("click", () => {
        screen.textContent = "";
        param1 = "";
        param2 = "";
        sign = "";
    })

    // Add keyboard functionality for the calculator
    document.addEventListener("keypress", (e) => {
        for (let number of numbers) {
            if (symbols.includes(screen.textContent)) screen.textContent = "";
            if (e.key === number.textContent) {
                screen.textContent += number.textContent;
            }
        }
        for (let operator of operators) {
            if (e.key === operator.getAttribute("value")) {
                param1 = screen.textContent;
                screen.textContent = operator.getAttribute("value");
                sign = operator.getAttribute("value");
            }
        }
        if (e.key === "=" || e.key === "Enter") {
            if (sign === "sqrt" || sign === "exp" || sign === "log") param2 = 0;
            else param2 = screen.textContent;
            result = operate(param1, param2, sign);
            if (result.toString().length > 12) {
                screen.textContent = result.toFixed(10);
            }
            else screen.textContent = result;
        }
        if (e.key === "b") {
            let tempStr = screen.textContent;
            tempStr = tempStr.split("").slice(0, tempStr.length - 1).join("");
            screen.textContent = tempStr;
        }
        if (e.key === "c") {
            screen.textContent = "";
            param1 = "";
            param2 = "";
            sign = "";
        }
        if (e.key === ".") {
            if (symbols.includes(screen.textContent) || !(screen.textContent.includes("."))) {
                screen.textContent += ".";
            } 
        }
    })
}

display();