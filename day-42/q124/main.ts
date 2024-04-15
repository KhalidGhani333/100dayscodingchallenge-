//Create a function inside an object that returns the object's own name property using the this keyword.

let personName={
    name:"khalid",
    firstName:function(){
        return this.name
    }
}

console.log(personName.firstName())