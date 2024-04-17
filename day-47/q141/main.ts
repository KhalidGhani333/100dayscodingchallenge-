//Discuss the significance of the await reserved word in asynchronous JavaScript.

//*Explain & TIP:* The await operator is used to wait for a Promise to settle.
// It can only be used inside an async function. Using await makes asynchronous code look and behave a 
//little more like synchronous code, which can make it easier to understand and debug.

async function myfuntion() {
    
    let data = await myfuntion();
    console.log(data);
    
  }
  
  console.log("The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
  );