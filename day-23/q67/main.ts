//Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string
// that represents a number (e.g., "5"). Return their sum as a number.

function MixedType(number1:number,number2:string):number {
    return number1 + Number(number2)
}

console.log(MixedType(6,"5"))