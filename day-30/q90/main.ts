//checking if a value is NaN:Demonstrate how tp check if a variable's value is NaN 
//(Not a Number)and return a boolean result 

function valueIsNaN(value:any):boolean{
    return isNaN(value)
}

console.log(valueIsNaN("hello"))

console.log(valueIsNaN(123))