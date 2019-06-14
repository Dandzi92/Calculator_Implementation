function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}
function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
function operate(operator, firstNumber, secondNumber) {
    let result;
    switch (operator) {
        case "+":
            result = add(firstNumber, secondNumber);
            break;
        case "-":
            result = subtract(firstNumber, secondNumber);
            break;
        case "*":
            result = multiply(firstNumber, secondNumber);
            break;
        case "/":
            result = divide(firstNumber, secondNumber);
            break;
    }
    return result;
}

let field = document.getElementById("field");

let additionButton = document.querySelector('#calculator .add');
let subtractionButton = document.querySelector('#calculator .subtract');
let multiplicationButton = document.querySelector('#calculator .multiply');
let divisionButton = document.querySelector('#calculator .divide');
let equalityButton = document.querySelector('#calculator .equal');
let clearButton = document.querySelector('#calculator .clear');
let zeroButton = document.querySelector('#calculator .zero');
let oneButton = document.querySelector('#calculator .one');
let twoButton = document.querySelector('#calculator .two');
let threeButton = document.querySelector('#calculator .three');
let fourButton = document.querySelector('#calculator .four');
let fiveButton = document.querySelector('#calculator .five');
let sixButton = document.querySelector('#calculator .six');
let sevenButton = document.querySelector('#calculator .seven');
let eightButton = document.querySelector('#calculator .eight');
let nineButton = document.querySelector('#calculator .nine');

let calculatorArea = document.getElementById("calculator");

let expressionString;
let expressionArray;
let resultOfOperation;
let allNumbersButtons = Array.from(document.querySelectorAll('#calculator .numbers'));

field.innerHTML = "0";

calculatorArea.addEventListener("click", function (e) {

    if ((allNumbersButtons.some(button => button == e.target)
        && field.innerHTML == "0")
        || (allNumbersButtons.some(button => button == e.target)
            && field.innerHTML == resultOfOperation)) {
        field.innerHTML = "";
    }
    switch (e.target) {
        case zeroButton:
            field.innerHTML += "0";
            break;
        case oneButton:
            field.innerHTML += "1"
            break;
        case twoButton:
            field.innerHTML += "2"
            break;
        case threeButton:
            field.innerHTML += "3"
            break;
        case fourButton:
            field.innerHTML += "4";
            break;
        case fiveButton:
            field.innerHTML += "5"
            break;
        case sixButton:
            field.innerHTML += "6"
            break;
        case sevenButton:
            field.innerHTML += "7"
            break;
        case eightButton:
            field.innerHTML += "8";
            break;
        case nineButton:
            field.innerHTML += "9"
            break;
        case additionButton:
            field.innerHTML += " + ";
            break;
        case subtractionButton:
            field.innerHTML += " - ";
            break;
        case multiplicationButton:
            field.innerHTML += " * ";
            break;
        case divisionButton:
            field.innerHTML += " / ";
            break;
        case clearButton:
            field.innerHTML = "0";
            break;
        case equalityButton:
            let finalResult;
            expressionString = field.innerHTML;
            expressionArray = expressionString.split(" ");
            for (let i = 0; i < expressionArray.length; i++) {
                if (expressionArray[i] == "/" || expressionArray[i] == "*") {
                    let result = operate(expressionArray[i], expressionArray[i - 1], expressionArray[i + 1])
                    expressionArray.splice((i - 1), 3, result)
                    i--;
                    continue;
                }
            }
            if (expressionArray.length == 1) {
                resultOfOperation = expressionArray[0];
                field.innerHTML = resultOfOperation;
            }
            else {
                for (let i = 0; i < expressionArray.length; i++) {
                    if (expressionArray[i] == "+" || expressionArray[i] == "-") {
                        finalResult = operate(expressionArray[i], Number(expressionArray[i - 1]),
                            Number(expressionArray[i + 1]));
                        expressionArray.splice((i - 1), 3, finalResult);
                        i--;
                        continue;
                    }
                }
                console.log(expressionArray);
                resultOfOperation = expressionArray[0];
                field.innerHTML = resultOfOperation;
            }
            break;
    }
})
