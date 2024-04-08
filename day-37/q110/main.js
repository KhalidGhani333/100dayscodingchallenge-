"use strict";
//Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
let score = 88;
if (score >= 80 && score <= 100) {
    console.log(`Your Grade is "A"`);
}
else if (score >= 70 && score <= 80) {
    console.log(`Your Grade is "B"`);
}
else if (score >= 60 && score <= 70) {
    console.log(`Your Grade is "C"`);
}
else if (score >= 50 && score <= 60) {
    console.log(`Your Grade is "D"`);
}
else {
    `You Are Fail !! Your Grade is "F"`;
}
