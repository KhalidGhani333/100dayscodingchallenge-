"use strict";
//Function Expressions vs. Function Declarations: Compare function expressions and declarations by
// creating one of each that performs the same task, such as squaring a number.
function Declaration(num1) {
    return num1 * num1;
}
console.log(Declaration(5));
let expression = function (num2) {
    return num2 * num2;
};
console.log(expression(5));
