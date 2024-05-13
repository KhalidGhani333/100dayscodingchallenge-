//Here's a basic example of an interface definition:

interface example{
    name:string,
    age:number
}

let person:example = {
    name:"Muhammad Ahad",
    age:25
}
console.log(person)

//Interface Method And Parameters

interface example2{
    name:string,
    age:number,
    greet(message:string):void
}

let person2:example2={
    name:"Farooq Shah",
    age:28,
    greet(message:string){
        console.log(`${this.name}: says ${message}`)
    }
}
person2.greet("Hello World")

//ReOpen The Interface And Use Cases

interface stdInfo{
    name:string,
    age:number
}

interface stdInfo{
   fatherName:string
}

interface stdInfo{
    rollNumber:number
}

interface stdInfo{
    Email:string
}

let student:stdInfo ={
    name:"Ahmed ali",
    age:22,
    fatherName:"Zia khan",
    rollNumber:1234,
    Email:"abc@gmail.com"
}

console.log(student)

             //Interface vs. Type Aliases

//Interface: Declared using the interface keyword       
interface interfaceSyntex {
    name:string,
    age:number
}      

//Type Alias: Declared using the type keyword.
type typeSyntex ={
    name:string,
    age:number
}

            //Extending and Implementing:

 // Interface: Can be extended by other interfaces using the extends keyword and implemented by classes using the implements keyword.          

 interface animal{
    name:string
 }

 interface dog extends animal{
    bark:string
 }

 
 let interfaceExtend:dog={
    name:"Dog",
    bark:"woof"
    }
 
 console.log(interfaceExtend)

 //Type Alias: Cannot be extended or implemented directly. However, you can achieve similar results using intersection types.

 type animalEx ={
    name:string
 }

 type newAnimal = animalEx & {
    bark:string
 }

 let typeExtend:newAnimal ={
    name:"monkey",
    bark:"woof"
    
 }

 console.log(typeExtend)


 //Interface: Supports declaration merging. When you declare multiple interfaces with the same name,
 // TypeScript will merge them into a single interface.

 interface Car {
    brand: string;
  }
  
  interface Car {
    model: string;
  }
  
  let myCar: Car = {
    brand: "Toyota",
    model: "Camry",
  };

  console.log(myCar)