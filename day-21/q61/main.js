"use strict";
// Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks,
// and motorcycles using enums, and show one example.
var vehicles;
(function (vehicles) {
    vehicles[vehicles["bike"] = 0] = "bike";
    vehicles[vehicles["car"] = 1] = "car";
    vehicles[vehicles["bus"] = 2] = "bus";
})(vehicles || (vehicles = {}));
console.log(vehicles.bus);
