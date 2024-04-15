"use strict";
//Create a loop that iterates through a string and stops when it finds the first vowel.
function logUntilVowel(str) {
    const vowels = "aeiouAEIOU";
    for (const Vowel of str) {
        if (vowels.includes(Vowel)) {
            console.log(`First vowel found: ${Vowel}`);
            break;
        }
        console.log(Vowel);
    }
}
logUntilVowel("kdigod");
