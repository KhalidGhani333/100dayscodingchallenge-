//Convert a traditional function expression to an arrow function.

//*Explain & TIP:* Arrow functions provide a concise syntax for writing function expressions.
// They don't have their own bindings to this or super, and should not be used as methods.

function traditionalFunction(a:number,b:number){
    return a + b 
}

let arrowFunction=(a:number,b:number) => a + b;

console.log(traditionalFunction(8,2))
console.log(arrowFunction(8,2))