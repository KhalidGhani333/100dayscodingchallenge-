"use strict";
//Modify a method in an object to use the this keyword to access another property in the same object.
const rectangle = {
    length: 6,
    width: 8,
    calculateArea: function () {
        return this.length * this.width;
    },
};
console.log(rectangle.calculateArea());
