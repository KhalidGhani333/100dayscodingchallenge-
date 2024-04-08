"use strict";
//Compare two strings to check if they are identical, ignoring case sensitivity.
function CompareString(word1, word2) {
    return word1.toLowerCase() === word2.toLowerCase();
}
console.log(CompareString("khalid", "Khalid"));
console.log(CompareString("khalid", "Ghani"));
