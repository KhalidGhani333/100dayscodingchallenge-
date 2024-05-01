"use strict";
//Comparisons :
console.log(5 > 4);
console.log("apple" > "pineapple");
console.log("2" > "12");
console.log(undefined == null);
console.log(undefined === null);
console.log(null == "\n 0 \n");
console.log(null === "\n 0 \n");
//Conditional Operators: if, '?'(Ternary Operator) in JavaScript :
//if (a string with zero)
if ("0") {
    console.log("Hello");
}
//Rewrite this if using the conditional operator '?':
let age = 18;
let message = (age >= 18) ? "you can drive" : "you can't drive";
console.log(message);
//if..else using multiple ternary operators '?'.
let login = "Director";
let message1 = (login == "Director") ? "Greeting" :
    (login == "Employee") ? "Hello" :
        (login == " ") ? "No Login" : "";
console.log(message1);
