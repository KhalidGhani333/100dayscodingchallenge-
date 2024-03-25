//Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5.
 //Explain how the let keyword affects the visibility of the loop variable.

 function printNumber (){
    for(let i=1; i<=5; i++){
        console.log(i)
    }
    // (i) is not accessible here, outside the loop,
    // because it's defined with `let` and let is block scope variable it's never print outside the loop
 }

 printNumber()