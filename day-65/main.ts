// Function to calculate BMI
function BmiCalculator(weightInKg: number,heightInMeters: number): number {
  return weightInKg/ (heightInMeters * heightInMeters)
}
// Calling the function with valid arguments
let weightInKg =70
let heightInMeters =1.75

let bmi = weightInKg /(heightInMeters * heightInMeters) 

console.log(`your BMI is ${bmi}`)



//  Optional Parameter 
//An optional parameter is one that may or may not be provided when calling a function.
//To define an optional parameter, you use a ? symbol after the parameter name in the function's parameter list.
//The TypeScript compiler allows you to call the function with or without providing a value for the optional parameter.

function optionalFun(name:string,age?:number){
    if(age !== undefined){
        console.log (`Hello ${name} you are ${age} years old`)}
    
     else(console.log(`Hello! ${name}`))
}
optionalFun("khalid",24)



//  Default Parameter
//A default parameter is a parameter that automatically takes a default value if no argument is provided 
//during the function call.To set a default value for a parameter, you use the = operator in the parameter list.

function defaultFun(name:string,age:number=24){
    if(age !== undefined){
        console.log (`Hello ${name} you are ${age} years old`)}
    
     else(console.log(`Hello! ${name}`))
}
  defaultFun("khalid")



  //Function Rest Parameter

function restParameter(...nums:number[]):number{
    let ans = 0
    for(let i=0; i < nums.length; i++){
     ans += nums[i]}
     return ans;
};

console.log(restParameter(10,10,10,10,10))



//  Arrow Function

let sum = (num1:number,num2:number,num3:number) => num1 + num2 * num3
console.log(sum(2,3,4))



// Anonymous Function

let multiply = function(num1:number,num2:number):number{
return num1 * num2
}
console.log(multiply(6,2))



// Void Function
function greet(name: string): void {
    console.log(`Hello, ${name}!`);
  }
  greet("Ahmed")
  
// This function doesn't return a value (implicitly returns undefined).
  