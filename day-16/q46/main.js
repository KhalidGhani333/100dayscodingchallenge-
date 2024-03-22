"use strict";
//Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year,
// and a method describe() that logs a sentence about the laptop.
let aboutLaptop = {
    make: "DEll",
    model: "Corei5",
    year: 2019,
    description: function () {
        console.log(`I have ${this.make} ${this.model} ${this.year} laptop`);
    }
};
aboutLaptop.description();
