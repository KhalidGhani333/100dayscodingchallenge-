"use strict";
//Here's a basic example of an interface definition:
let person = {
    name: "Muhammad Ahad",
    age: 25
};
console.log(person);
let person2 = {
    name: "Farooq Shah",
    age: 28,
    greet(message) {
        console.log(`${this.name}: says ${message}`);
    }
};
person2.greet("Hello World");
let student = {
    name: "Ahmed ali",
    age: 22,
    fatherName: "Zia khan",
    rollNumber: 1234,
    Email: "abc@gmail.com"
};
console.log(student);
let interfaceExtend = {
    name: "Dog",
    bark: "woof"
};
console.log(interfaceExtend);
let typeExtend = {
    name: "monkey",
    bark: "woof"
};
console.log(typeExtend);
let myCar = {
    brand: "Toyota",
    model: "Camry",
};
console.log(myCar);
