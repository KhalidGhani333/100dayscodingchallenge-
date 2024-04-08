"use strict";
//Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
//anyone under 13 a child, between 13 and 19 a teenager, and 20 or older an adult.
let personAge = 12;
if (personAge >= 20) {
    console.log("Adult");
}
else if (personAge >= 13 && personAge <= 19) {
    console.log("Teenager");
}
else {
    console.log("Child");
}
