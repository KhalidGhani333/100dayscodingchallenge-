"use strict";
//Rewrite with arrow functions
// Function
function sum(num1, num2) {
    console.log(num1 + num2);
}
sum(5, 5);
//Arrow Function
let arrowFunction = (a, b) => {
    return a + b;
};
console.log(arrowFunction(3, 4));
