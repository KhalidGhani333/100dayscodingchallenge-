
//Iterate over a Map of student IDs and names, and log each pair to the console.

//*Explain & TIP:* Iterating over a Map can be done using the .forEach() method or a for...of loop,
// providing access to each key-value pair.

let students= new Map<number,string>()

students.set(1011,"Shahzaib")
students.set(1012,"Faraz")
students.set(1013,"Faizan")
students.set(1014,"Ibrahim")
students.set(1015,"Saad")

students.forEach((name1,id)=>{
console.log(`Student Id:${id} student Name:${name1}`)})