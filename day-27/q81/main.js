"use strict";
//Iterating Over Object Properties: Write a function that takes an object as an argument and
// logs all of its properties and values.
function takeObject(obj1) {
    for (let property in obj1) {
        console.log(`${property}: ${obj1[property]}`);
    }
}
takeObject({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
