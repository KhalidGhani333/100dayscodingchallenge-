//Iterating Over Object Properties: Write a function that takes an object as an argument and
// logs all of its properties and values.


function takeObject(obj:any) {
    for (let property in obj) {
       
        console.log(`${property}: ${obj[property]}`);
       
    }
}


takeObject({ make: "Toyota", model: "Camry", year: 2023, color: "white" });