"use strict";
//Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
let mixItem = [1, "Apple", 2, "Banana", 3, "Orange", 4, "Mango"];
let onlyWord = mixItem.filter(item => typeof item === "string");
console.log(onlyWord);
