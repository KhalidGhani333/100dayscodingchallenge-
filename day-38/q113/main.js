"use strict";
//Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
//*Explain & TIP:* You can check for the presence of a key in a Map with the .has() method and
// retrieve its value with the .get() method.
let CountriesCapital = new Map();
CountriesCapital.set("Pakistan", "Islamabad");
CountriesCapital.set("Germany", "Berlin");
CountriesCapital.set("Italy", "Rome");
CountriesCapital.set("Canada", "Ottawa");
console.log(CountriesCapital);
function CapitalOfCanada(CountriesCapital) {
    if (CountriesCapital.has("Canada")) {
        console.log(`The capital of Canada is: ${CountriesCapital.get("Canada")}`);
    }
    else {
        console.log("Canada is not in the Map.");
    }
}
CapitalOfCanada(CountriesCapital);
