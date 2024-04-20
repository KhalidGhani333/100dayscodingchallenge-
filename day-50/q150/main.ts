//Describe how asynchronous callbacks differ from synchronous code execution.

//*Explain & TIP:* Asynchronous callbacks allow JavaScript to perform long network requests, file operations,
// or set timers without blocking the main thread, enabling the continuation of code execution. 
//Synchronous code, in contrast, runs sequentially, blocking further execution until the current operation completes.

console.log("Before synchronous operation");

for (let i = 0; i < 1e9; i++) {} 
console.log("After synchronous operation");


console.log("Before synchronous operation")

setTimeout(()=>{
    console.log("synchronous operation complete")
},1000)

console.log("After synchronous operation setup")