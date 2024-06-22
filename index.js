"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// we need readline sync, includes types that are required (npm i --save @types/readline-sync)
var readline_sync_1 = require("readline-sync"); // semi- conols optional
function main() {
    var firstStr = (0, readline_sync_1.question)('Enter first number: \n');
    var operator = (0, readline_sync_1.question)('Enter operator: \n');
    var secondStr = (0, readline_sync_1.question)('Enter second number: \n');
    // need to convert string to numbers for calculation
    console.log(firstStr, operator, secondStr);
    // need to check for valid inputs
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (validInput) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log('\ninvalid input\n');
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = Boolean(!isNaN(maybeNum));
    return isNum;
}
main();
