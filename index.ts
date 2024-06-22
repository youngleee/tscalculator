// we need readline sync, includes types that are required (npm i --save @types/readline-sync)
import {question} from 'readline-sync'; // semi- conols optional

type Operator = '+' | '-' | '/' | '*';

function main(): void {

    const firstStr: string = question('Enter first number: \n');
    const operator: string = question('Enter operator: \n')
    const secondStr: string = question('Enter second number: \n')
    // need to convert string to numbers for calculation
    console.log(firstStr,operator,secondStr);
    // need to check for valid inputs
    const validInput:boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    
    if (validInput) {
        const firstNum: number = parseInt(firstStr);
        const secondNum: number = parseInt(secondStr);
        const result = calculate(firstNum, operator as Operator, secondNum);
        console.log(result);
    }
    else {
        console.log('\ninvalid input\n');
        main();
    }
}

function calculate(firstNum: number, operator: Operator, secondNum: number){
    switch(operator){
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

function isOperator(operator: string): boolean {
    switch(operator){
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}

function isNumber(str: string): boolean{
    const maybeNum = parseInt(str);
    const isNum: boolean = Boolean(!isNaN(maybeNum));
    return isNum;
}
main();