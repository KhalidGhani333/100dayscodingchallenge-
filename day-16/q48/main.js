"use strict";
//Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
// Use the spread operator to combine these arrays into a single array sorted in ascending order,
// then log the result.
let price1 = [1000, 3000, 5000];
let price2 = [2000, 4000, 6000];
let combineprice = [...price1, ...price2];
combineprice.sort((a, b) => a - b);
console.log(combineprice);
