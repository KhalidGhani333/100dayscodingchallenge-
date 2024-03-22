//Add a Special Number: Make a program that creates custom adders.
 //These adders can add a specific number to any other number you give them later.

 function Adder(value:number):(number)=> number{
    return function (number: number):number {
        return number + value;
    }
 }

 let addValue= Adder(9);

 console.log(addValue(15))