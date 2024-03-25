"use strict";
//Compare let and const: Create two examples where let allows reassignment but const does not.
// Try to reassign a const-declared variable and catch the error.
let myage = 20;
myage = 21;
console.log(myage);
//it's work fine and change its value from 20 to 21 because let is reassignable variable it not given error.
const age = 20;
age = 21;
console.log(age);
