//Find the Average Grade: Given a list of grades, calculate the average grade.

let grades =[77,87,62,83,91,69];

let averageGrade=grades.reduce((total,grade)=> total + grade)/ grades.length;

console.log(averageGrade)