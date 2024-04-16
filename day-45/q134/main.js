"use strict";
//Take a JSON string and parse it into a JavaScript object.
//*Explain & TIP:* JSON.parse() is used to convert a JSON string into a JavaScript object.
// This is particularly useful when dealing with data received as JSON from a web server or API.
let jsonString = '{"name":"Ali","age":23,"city":"Karachi"}';
let student = JSON.parse(jsonString);
console.log(student);
