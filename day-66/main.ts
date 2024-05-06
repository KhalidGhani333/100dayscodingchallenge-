// Union Types
//Annotating a variable with union types means specifying that the variable can hold values of multiple type

let rollNumber:string | number;

rollNumber ="GIAIC"
console.log(rollNumber);

rollNumber = 67775
console.log(rollNumber);


//Literal Type
let direction : "left" | "right" | "up" | "down"

function fruitName(fruit:"apple"|"banana"|"mango"|"orange"){
    console.log(fruit)
}
fruitName("apple")


//    Nullable Types
//In TypeScript, you can create a nullable type by appending | null to an existing data type
let myname:string|null ="Ali Ahmed"
let myage:number|null =2345

console.log(myname)
console.log(myage)


//Here's an example of using nullable types with function parameters
function user(userName:string|null){
    if(userName === null){
        console.log("Hello Guest")
    }
    else{console.log(`Hello ${userName}`)}
}
user(null)
user("Rashid")



//  Type Alias
//A Type Alias in TypeScript allows you to create a custom name for a type. It's a way to define your own custom data types
// that can be composed of existing types like numbers, strings, objects, or other custom types
type Person = {
    name: string;
    age: number;
    email?: string;
  };
  
  const client1: Person = {
    name: "Shahzad",
    age: 34,
    email: "abc@example.com",
  };
  
  const client2: Person = {
    name: "Raheem",
    age: 54,
  };
  
  console.log(client1);
  console.log(client2);


//   Intersection Type
//An intersection type in TypeScript allows you to combine multiple types into one, creating a new type that
// has all the properties and functionalities of the individual types being intersected.

type person1 ={
    name:string,
    age:number
}

type person2 ={
    email:string,
    city:string
}

type combineBothType = person1 & person2

let personData:combineBothType ={
    name:"Asif",
    age:33,
    email:"xyz@gmail.com",
    city:"karachi"

}
console.log(personData)