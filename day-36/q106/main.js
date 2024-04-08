"use strict";
//Determine if a given year is a leap year using comparison operators.
function LeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(LeapYear(2024));
console.log(LeapYear(2013));
