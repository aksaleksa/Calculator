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
let negative = false;

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
const topDisplay = document.querySelector("#top-display")
const mainDisplay = document.querySelector("#main-display")

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
    let result;
    let sign = "";

    // Both displays allow a limited number of digits. If an operation symbol is present the main display is wiped 
    // first and then populated with numbers.

    for (let number of numbers) {
        number.addEventListener("click", () => {
            if (symbols.includes(mainDisplay.textContent)) {
                mainDisplay.textContent = "";
            }
            if (mainDisplay.textContent.length < 13) {
                if (topDisplay.textContent.length > 22) {
                    mainDisplay.classList.add("main-display-small");
                    topDisplay.classList.add("top-display-small");
                }
                mainDisplay.textContent += number.textContent;
                topDisplay.textContent += number.textContent;
            }
        })
    }

    for (let operator of operators) {
        operator.addEventListener("click", () => {
            // If the sum involves more than two numbers, this block will continually recalculate the parameters and
            // update the displays.
            if (param1) {
                param2 = mainDisplay.textContent;
                let param3 = operate(param1, param2, sign);
                param1 = param3;
                param2 = ""
                mainDisplay.textContent = operator.getAttribute("value");
                topDisplay.textContent = `${param1} ${operator.getAttribute("value")} `;
                sign = mainDisplay.textContent;
            }
            else {
                param1 = mainDisplay.textContent;
                // This block allows users to start sums with negative numbers.
                if (topDisplay.textContent[1] === "-") negative = true;
                if (negative) {
                    param1 = "-" + param1;
                    negative = false;
                }
                mainDisplay.textContent = operator.getAttribute("value");
                topDisplay.textContent += ` ${operator.getAttribute("value")} `;
                sign = mainDisplay.textContent;
            }
        })
    }

    // Only one decimal point can be added per number.

    point.addEventListener("click", () => {
        if (!symbols.includes(mainDisplay.textContent)) {
            if (!mainDisplay.textContent.includes(".")) {
                mainDisplay.textContent += ".";
                topDisplay.textContent += ".";
            }
        } 
    })

    // If the displays get too crowded they switch to a smaller font size. After the calculation the result is printed
    // and the parameters reset.

    equals.addEventListener("click", () => {
        if (sign === "sqrt" || sign === "exp" || sign === "log") param2 = 0;
        else param2 = mainDisplay.textContent;
        result = operate(param1, param2, sign);
        if (result.toString().length > 12) {
            mainDisplay.classList.add("main-display-small");
            topDisplay.classList.add("top-display-small");
        }
        mainDisplay.textContent = result;
        param1 = "";
        param2 = "";
    })

    // Backspace works using string/array manipulation. If more space appears, the displays can regain their
    // larger font sizes.

    backspace.addEventListener("click", () => {
        if (topDisplay.textContent.length < 22) {
            mainDisplay.classList.remove("main-display-small");
            topDisplay.classList.remove("top-display-small");
        }
        let tempStr1 = mainDisplay.textContent;
        tempStr1 = tempStr1.split("").slice(0, tempStr1.length - 1).join("");
        tempStr1.split("").slice(0, tempStr1.length - 1).join("");
        mainDisplay.textContent = tempStr1;
        let tempStr2 = topDisplay.textContent;
        tempStr2 = tempStr2.split("").slice(0, tempStr2.length - 1).join("");
        topDisplay.textContent = tempStr2;
    })

    clear.addEventListener("click", () => {
        mainDisplay.classList.remove("main-display-small");
        topDisplay.classList.remove("top-display-small");
        mainDisplay.textContent = "";
        topDisplay.textContent = "";
        param1 = "";
        param2 = "";
        sign = "";
    })

    // The code below adds keyboard functionality to the calculator and is largely identical to above.
    document.addEventListener("keypress", (e) => {
        for (let number of numbers) {
            if (symbols.includes(mainDisplay.textContent)) {
                mainDisplay.textContent = "";
            }
            if (e.key === number.textContent) {
                if (mainDisplay.textContent.length < 13) {
                    if (topDisplay.textContent.length > 22) {
                        mainDisplay.classList.add("main-display-small");
                        topDisplay.classList.add("top-display-small");
                    }
                    mainDisplay.textContent += number.textContent;
                    topDisplay.textContent += number.textContent;
                }
            }
        }
        for (let operator of operators) {
            if (e.key === operator.getAttribute("value")) {
                if (param1) {
                    param2 = mainDisplay.textContent;
                    let param3 = operate(param1, param2, sign);
                    param1 = param3;
                    param2 = ""
                    mainDisplay.textContent = operator.getAttribute("value");
                    topDisplay.textContent = `${param1} ${operator.getAttribute("value")} `;
                    sign = mainDisplay.textContent;
                }
                else {
                    param1 = mainDisplay.textContent;
                    if (topDisplay.textContent[1] === "-") negative = true;
                    if (negative) {
                        param1 = "-" + param1;
                        negative = false;
                    }
                    mainDisplay.textContent = operator.getAttribute("value");
                    topDisplay.textContent += ` ${operator.getAttribute("value")} `;
                    sign = mainDisplay.textContent;
                }
            }
        }
        if (e.key === "=" || e.key === "Enter") {
            if (sign === "sqrt" || sign === "exp" || sign === "log") param2 = 0;
            else param2 = mainDisplay.textContent;
            result = operate(param1, param2, sign);
            if (result.toString().length > 12) {
                mainDisplay.classList.add("main-display-small");
                topDisplay.classList.add("top-display-small");
            }
            mainDisplay.textContent = result;
            param1 = "";
            param2 = "";
        }
        if (e.key === "b") {
            if (topDisplay.textContent.length < 22) {
                mainDisplay.classList.remove("main-display-small");
                topDisplay.classList.remove("top-display-small");
            }
            let tempStr1 = mainDisplay.textContent;
            tempStr1 = tempStr1.split("").slice(0, tempStr1.length - 1).join("");
            tempStr1.split("").slice(0, tempStr1.length - 1).join("");
            mainDisplay.textContent = tempStr1;
            let tempStr2 = topDisplay.textContent;
            tempStr2 = tempStr2.split("").slice(0, tempStr2.length - 1).join("");
            topDisplay.textContent = tempStr2;
        }
        if (e.key === "c") {
            mainDisplay.classList.remove("main-display-small");
            topDisplay.classList.remove("top-display-small");
            mainDisplay.textContent = "";
            topDisplay.textContent = "";
            param1 = "";
            param2 = "";
            sign = "";
        }
        if (e.key === ".") {
            if (!symbols.includes(mainDisplay.textContent)) {
                if (!mainDisplay.textContent.includes(".")) {
                    mainDisplay.textContent += ".";
                    topDisplay.textContent += ".";
                }
            } 
        }
    })
}

display();