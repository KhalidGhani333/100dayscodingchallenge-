"use strict";
//Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations.
// Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division)
// on x using compound operators.
function CompoundOperator() {
    let x = 4;
    console.log(`initial x:  ${x}`);
    x += 6;
    console.log(`after addition x:  ${x}`);
    x -= 5;
    console.log(`after subtraction x:  ${x}`);
    x *= 4;
    console.log(`after multiplication x:  ${x}`);
    x /= 2;
    console.log(`after division x:  ${x}`);
}
CompoundOperator();
