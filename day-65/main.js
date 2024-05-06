// Function to calculate BMI
function BmiCalculator(weightInKg, heightInMeters) {
    return weightInKg / (heightInMeters * heightInMeters);
}
// Calling the function with valid arguments
var weightInKg = 70;
var heightInMeters = 1.75;
var bmi = weightInKg / (heightInMeters * heightInMeters);
//console.log(`your BMI is ${bmi}`)
//  Optional Parameter 
//An optional parameter is one that may or may not be provided when calling a function.
//To define an optional parameter, you use a ? symbol after the parameter name in the function's parameter list.
//The TypeScript compiler allows you to call the function with or without providing a value for the optional parameter.
function optionalFun(name, age) {
    if (age !== undefined) {
        console.log("Hello ".concat(name, " you are ").concat(age, " years old"));
    }
    else
        (console.log("Hello! ".concat(name)));
}
//optionalFun("khalid",24)
//  Default Parameter
//A default parameter is a parameter that automatically takes a default value if no argument is provided 
//during the function call.To set a default value for a parameter, you use the = operator in the parameter list.
function defaultFun(name, age) {
    if (age === void 0) { age = 24; }
    if (age !== undefined) {
        console.log("Hello ".concat(name, " you are ").concat(age, " years old"));
    }
    else
        (console.log("Hello! ".concat(name)));
}
//defaultFun("khalid")
//Function Rest Parameter
function restParameter() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var ans = 0;
    for (var i = 0; i < nums.length; i++) {
        ans += nums[i];
    }
    return ans;
}
;
//console.log(restParameter(10,10,10,10,10))
//  Arrow Function
var sum = function (num1, num2, num3) { return num1 + num2 * num3; };
//console.log(sum(2,3,4))
// Anonymous Function
var multiply = function (num1, num2) {
    return num1 * num2;
};
//console.log(multiply(6,2))
// Void Function
function greet(name) {
    console.log("Hello, ".concat(name, "!"));
}
greet("Ahmed");
// This function doesn't return a value (implicitly returns undefined).
