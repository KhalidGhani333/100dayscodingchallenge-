//Find the Average Grade: Given a list of grades, calculate the average grade.
var grades = [77, 87, 62, 83, 91, 69];
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }) / grades.length;
console.log(averageGrade);
