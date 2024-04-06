//Write a function that returns a random boolean value, true or false.

function randomValue():boolean{
    return Math.random() > 0.5
}

console.log(randomValue())