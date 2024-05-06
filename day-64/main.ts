//            Type Annotation with Object

//Type annotations with objects in TypeScript allow you to specify the types of properties that an object should have
let  studentInfo:{
    Name:string,
    fatherName:string,
    age:number,
    gender:string,
    rollNumber:number,
    address:{
        streetNo:string
        city:string
    };

}
studentInfo ={
    Name:"Willims Jack",
    fatherName:"Jack",
    age:24,
    gender:"Male",
    rollNumber:97840,
    address:{
        streetNo:"5000 young street",
        city:"North york"
    }

}
console.log(studentInfo)

//And there is yet another method

// Define an object type with type annotations

let  studentInfo2:{
    Name:string,
    fatherName:string,
    age:number,
    gender:string,
    rollNumber:number,
    address:{
        streetNo:string
        city:string
    };

}
={
    Name:"john",
    fatherName:"mickle",
    age:24,
    gender:"Male",
    rollNumber:97850,
    address:{
        streetNo:"5000 young street",
        city:"North york"
    }

}
console.log(studentInfo2)