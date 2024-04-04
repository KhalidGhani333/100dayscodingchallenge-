//Rounding to the Nearest Integer: Write a function that takes a decimal number as input and 
//returns the number rounded to the nearest integer.

function integer(num:number):number{
    return Math.round(num)
}

console.log(integer(12.7))
console.log(integer(12.4))