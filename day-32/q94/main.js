"use strict";
//Use the .map() method to create a new array that contains the lenght of each word from an array of words.
let words = ["Hello", "world", "GovernorHouse", "Program"];
let Wordlengths = words.map(word => word.length);
console.log(Wordlengths);
