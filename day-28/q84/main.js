"use strict";
//Replacing Text in a String: Write a function that takes a sentence and replaces 
//all instances of the word "JavaScript" with "TypeScript".
function replace(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
    // Uses a regular expression with the 'g' flag for a global replacement
}
// Example: Changing a programming language name in a sentence
console.log(replace("I love JavaScript!"));
// Outputs: "I love TypeScript and TypeScript is awesome!"
// Every "JavaScript" in the sentence is changed to "TypeScript"
