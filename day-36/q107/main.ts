
//Write a condition using logical operators that checks if a number is divisible by both 2 and 3.


function divisibleNumber(number:number):boolean{
    return number % 2 === 0 && number % 3 === 0
}

console.log(divisibleNumber(16))
console.log(divisibleNumber(12))