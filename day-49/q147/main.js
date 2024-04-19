"use strict";
//Explain how to handle errors in a callback pattern.
//*Explain & TIP:* Handling errors in a callback pattern often involves passing an error as the first argument
// to the callback. This convention allows the callback function to check for errors before proceeding with its execution.
function Data(callback) {
    let error = new Error("Failed to data");
    let data1 = "Some data";
    if (Math.random() > 0.5) {
        callback(null, data1);
    }
    else {
        callback(error);
    }
}
Data((error, data) => {
    if (error) {
        console.error(error.message);
    }
    else {
        console.log(data);
    }
});
