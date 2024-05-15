//       Generics

function demo <T>(value:T):T{
  return value;
}

let valueNumber:number = demo<number>(180)
let valueString:string = demo<string>("Hello")
let valueBoolean:boolean = demo<boolean>(true)

console.log("valueNumber:", valueNumber);
console.log("valueString:", valueString);
console.log("valueBoolean:",valueBoolean);

//       Generics Multiple Types

function demo2 <T>(value:T):T{
    return value
}
 console.log(demo2<number>(180));
 console.log(demo2<string>("Hello"));
 
 //    With ArrowFunction

 let arrowDemo = <T>(value:T):T => value
 
 console.log(arrowDemo<number>(180));
 console.log(arrowDemo<string>("Hello"));
 
function demo3 <T>(value:T):string{
    return `The value ${value} and the type is ${typeof value}`
}

console.log(demo3<number>(180));
console.log(demo3<string>("Hello"));

// Generic Function `multipleTypes`
function demo4 <T,S>(value1:T,value2:S):string{
    return `The value1 is: ${value1} and the value2 id: ${value2}`
}
console.log(demo4 <string,number>("hello",123))
console.log(demo4 <string,boolean>("hello",true))


//          Generics Classes

class User<T=string>{
    constructor(public value:T){}


show(msg:T):void{
    console.log(`${msg} - ${this.value}`);
    
}}

let userOne = new User<string>("Hello World")
console.log(userOne.value)
userOne.show("message")

let userTow = new User<string|number>(512)
console.log(userTow.value);
userTow.show("message")



//              Generics And Interfaces

interface Book {
    type: string;
    title: string;
    isbn: number;
  }
  
  interface Game {
    type: string;
    title: string;
    style: string;
    price: number;
  }

  class Collection<T>{
    public data:T[]= []

    add(item:T):void{
        this.data.push(item)
    }
  }

  let itemOne = new Collection<Book>();
  itemOne.add({ type: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ type: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);

let itemTwo = new Collection<Game>();
itemTwo.add({ type: "Game", title: "Uncharted", style: "Action", price: 150 });
console.log(itemTwo);