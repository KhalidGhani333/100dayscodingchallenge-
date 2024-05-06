// Union Types
//Annotating a variable with union types means specifying that the variable can hold values of multiple type
var rollNumber;
rollNumber = "GIAIC";
//console.log(rollNumber);
rollNumber = 67775;
//console.log(rollNumber);
//Literal Type
var direction;
function fruitName(fruit) {
    console.log(fruit);
}
//fruitName("apple")
//    Nullable Types
//In TypeScript, you can create a nullable type by appending | null to an existing data type
var myname = "Ali Ahmed";
var myage = 2345;
//console.log(myname)
//console.log(myage)
//Here's an example of using nullable types with function parameters
function user(userName) {
    if (userName === null) {
        console.log("Hello Guest");
    }
    else {
        console.log("Hello ".concat(userName));
    }
}
user(null);
user("Rashid");
var client1 = {
    name: "Shahzad",
    age: 34,
    email: "abc@example.com",
};
var client2 = {
    name: "Raheem",
    age: 54,
};
var personData = {
    name: "Asif",
    age: 33,
    email: "xyz@gmail.com",
    city: "karachi"
};
console.log(personData);
