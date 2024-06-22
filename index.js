"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// we need readline sync, includes types that are required (npm i --save @types/readline-sync)
var readline_sync_1 = require("readline-sync"); // semi- conols optional
function main() {
    var firstStr = (0, readline_sync_1.question)('Enter first number: \n');
    var operator = (0, readline_sync_1.question)('Enter operator: \n');
    var secondStr = (0, readline_sync_1.question)('Enter second number: \n');
    console.log(firstStr, operator, secondStr);
}
main();
