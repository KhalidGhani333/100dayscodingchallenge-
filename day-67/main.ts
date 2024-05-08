// Type Annotations With Arrays

let pslTeams:string[]=["karachi","islamabad","lahore","multan","peshawer","quetta"]

for(let i=0; i<pslTeams.length; i++){
    console.log(pslTeams[i].toUpperCase())
}


// Type Annotations With Multidimensional Arrays

let students:string[]=["Ali","Ahmed","Aslam","Ahmer","Abdullah"]
console.log(students)

let rollNumber:number[]=[101,102,103,104,105]
console.log(rollNumber)

let students_rollNumber:(string|number)[]=["Ali","Ahmed","Aslam","Ahmer","Abdullah",101,102,103,104,105]
console.log(students_rollNumber)