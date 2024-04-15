"use strict";
//Explain how this behaves differently in arrow functions compared to traditional functions.
//*Explain & TIP:* In traditional functions, this refers to the object that called the function,
// which can vary depending on the context. In arrow functions, this is lexically bound,
// meaning it uses this from the code that contains the arrow function.
let traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value);
    },
    arrowFunction: () => {
        console.log("Arrow function:", this.value);
    },
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();
