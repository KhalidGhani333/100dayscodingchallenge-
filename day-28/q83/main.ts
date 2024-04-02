//Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase,
// then to lowercase, and logs both.

function myfun(place:string){
    let  lowercase = place.toLowerCase()
    console.log(`Lowercase :${lowercase}`)

    let uppercase = place.toUpperCase()
    console.log(`Uppercase :${uppercase}`)
}


myfun("Karachi,Pakistan")