"use strict";
//Discuss the difference between default and named exports in JavaScript modules.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Explain & TIP:* JavaScript provides two main types of exports: default and named.
// A module can have only one default export, but multiple named exports. This flexibility supports various 
//use cases in module design.
const index_1 = require("./index");
const app_1 = __importDefault(require("./app"));
console.log(`I'm ${index_1.myName}.I'm ${index_1.myAge} Years old.My father name is ${app_1.default}`);
