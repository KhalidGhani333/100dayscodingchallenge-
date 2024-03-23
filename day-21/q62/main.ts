//Making a Student Template: Create a blueprint for student information, including their name, age,
// and the classes they're taking, and then fill in this blueprint with an example student.

interface student{
    name:string,
    age:number,
    subjects:string[]

};

let studentInformation:student={
    name:"Muhammad Ali",
    age:13,
    subjects:["Math","English","Urdu"]

};
console.log(studentInformation);