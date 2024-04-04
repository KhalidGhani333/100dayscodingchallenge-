//write a funtion that uses the .filter() method to return an array of numbers greater than 10.

function greaterThan10(num1:number[]):number[]{
    return num1.filter(Number => Number >= 10)
}

let num2 = [7,12,3,22,11,10,9]
console.log(greaterThan10(num2))