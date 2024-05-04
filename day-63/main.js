"use strict";
// Type Annotation
let studentName1 = "Muhammad Hassan";
let studentAge1 = 26;
console.log("Name of Student is " + studentName1);
console.log("Age of Student is " + studentAge1);
//Another way to write this code.
//In this alternative approach, you first declare the variables and then assign values to them later
let studentName2;
let studentAge2;
studentName2 = "Ahmed shah";
studentAge2 = 22;
console.log("Name of Student is " + studentName2);
console.log("Age of Student is " + studentAge2);
// DYNAMIC TYPE DETERMINATION:
//If you choose not to use type annotations in TypeScript, the language can still infer the type dynamically
// based on your declaration.
let greeting = "Hello World";
console.log(greeting);
// Any Type
//Now, regarding the any type, it's a special type in TypeScript that can represent any type of value.
// When a variable is assigned the any type, it essentially tells the TypeScript compiler to disable type checking
// for that variable, allowing it to hold values of any type.
let studentName3 = "Asif Shah";
studentName3 = 25;
console.log(studentName3);
