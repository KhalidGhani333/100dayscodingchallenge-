"use strict";
//Create an arrow function that takes multiple parameters and returns the product of all parameters.
//*Explain & TIP:* Arrow functions can take zero, one, or multiple parameters. When dealing with multiple parameters,
// you enclose them in parentheses.
let ArrowFunction = (...number) => number.reduce((total, number) => total * number);
console.log(ArrowFunction(3, 4, 5));
