//Create a function that accepts a callback and invokes it with some arguments.

//*Explain & TIP:* Callbacks are functions passed as arguments to another function.
// This design pattern is very common in JavaScript for asynchronous operations, event listeners,
// or to customize the behavior of a function with custom actions.

function callback(
    callback2:(arg1:number,arg2:number)=>void,
   arg1:number,
   arg2:number
):void{
    callback2(arg1,arg2)
}

let sum= (a: number,b: number) =>{
    console.log(a+b);
};

callback(sum,6,4)