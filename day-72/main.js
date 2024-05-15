"use strict";
//       Generics
function demo(value) {
    return value;
}
let valueNumber = demo(180);
let valueString = demo("Hello");
let valueBoolean = demo(true);
//console.log("valueNumber:", valueNumber);
//console.log("valueString:", valueString);
//console.log("valueBoolean:",valueBoolean);
//       Generics Multiple Types
function demo2(value) {
    return value;
}
//console.log(demo2<number>(180));
//console.log(demo2<string>("Hello"));
//    With ArrowFunction
let arrowDemo = (value) => value;
//console.log(arrowDemo<number>(180));
//console.log(arrowDemo<string>("Hello"));
function demo3(value) {
    return `The value ${value} and the type is ${typeof value}`;
}
//console.log(demo3<number>(180));
//console.log(demo3<string>("Hello"));
function demo4(value1, value2) {
    return `The value1 is: ${value1} and the value2 id: ${value2}`;
}
//console.log(demo4 <string,number>("hello",123))
//console.log(demo4 <string,boolean>("hello",true))
//          Generics Classes
class User {
    constructor(value) {
        this.value = value;
    }
    show(msg) {
        console.log(`${msg} - ${this.value}`);
    }
}
let userOne = new User("Hello World");
console.log(userOne.value);
userOne.show("message");
let userTow = new User(512);
console.log(userTow.value);
userTow.show("message");
class Collection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
let itemOne = new Collection();
itemOne.add({ type: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ type: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);
let itemTwo = new Collection();
itemTwo.add({ type: "Game", title: "Uncharted", style: "Action", price: 150 });
console.log(itemTwo);
