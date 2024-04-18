"use strict";
//Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
//*Explain & TIP:* The .then() method is called when a Promise is successfully resolved, while .catch() is called
// when a Promise is rejected. Together, they provide a powerful and readable way to handle asynchronous success
// and error scenarios.
let condition = new Promise((resolve, reject) => {
    let success = Math.random() > 0.5;
    if (success) {
        resolve("Success");
    }
    else {
        reject(new Error("Failure"));
    }
});
condition
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
