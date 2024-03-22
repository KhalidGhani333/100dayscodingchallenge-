"use strict";
//Average score calculator:write a simple program that can take lots of scores and find their average.
function scores(...score) {
    let total = score.reduce((sum, score) => sum + score);
    return total / score.length;
}
console.log(scores(60, 90, 70, 80, 85, 75));
