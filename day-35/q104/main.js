"use strict";
//Create a function that generates a random hexadecimal color code.
function hexadecimalColor() {
    let color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color;
}
console.log(hexadecimalColor());
