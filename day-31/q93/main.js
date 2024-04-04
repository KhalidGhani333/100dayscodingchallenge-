"use strict";
//find the index of "Banana" in an array of fruits and replace it with "Mango". 
function findIndex(fruits) {
    const index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Mango";
}
const fruits = ["Apple", "Banana", "Cherry"];
findIndex(fruits);
console.log(fruits);
