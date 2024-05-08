"use strict";
// Defining a tuple type
let student = ["Ali", 123, true];
// Assigning a new tuple value to the `article` variable
student = ["Faiz", 124, false];
// Assigning a new tuple value to the `article` variable
//student.push(125)
console.log(student);
// Destructuring the tuple into individual variables
let [stdName, id, present] = student;
console.log(stdName);
console.log(id);
console.log(present);
