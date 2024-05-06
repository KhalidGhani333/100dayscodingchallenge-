//            Type Annotation with Object
//Type annotations with objects in TypeScript allow you to specify the types of properties that an object should have
var studentInfo;
studentInfo = {
    Name: "Willims Jack",
    fatherName: "Jack",
    age: 24,
    gender: "Male",
    rollNumber: 97840,
    address: {
        streetNo: "5000 young street",
        city: "North york"
    }
};
console.log(studentInfo);
//And there is yet another method
// Define an object type with type annotations
var studentInfo2 = {
    Name: "john",
    fatherName: "mickle",
    age: 24,
    gender: "Male",
    rollNumber: 97850,
    address: {
        streetNo: "5000 young street",
        city: "North york"
    }
};
console.log(studentInfo2);
