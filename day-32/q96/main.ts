//Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array


function Sum(numbers:number[]):number{
    return numbers.reduce((accumulator ,current)=> accumulator + current)
}

let number =[2,4,6,8,10]

console.log(Sum(number))