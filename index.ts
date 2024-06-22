// we need readline sync, includes types that are required (npm i --save @types/readline-sync)
import {question} from 'readline-sync'; // semi- conols optional

function main(): void {

    const firstStr: string = question('Enter first number: \n');
    const operator: string = question('Enter operator: \n')
    const secondStr: string = question('Enter second number: \n')
    // need to convert string to numbers for calculation
    console.log(firstStr,operator,secondStr);
    // need to check for valid inputs
}

main();