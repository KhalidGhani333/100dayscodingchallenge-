"use strict";
//Write an if statement that logs "Good Morning" if the current time is before 12 PM
let current_Date = new Date();
if (current_Date.getHours() < 12) {
    console.log("Good Morning");
}
