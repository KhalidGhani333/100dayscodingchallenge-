"use strict";
//Block Scope with let and const: Demonstrate block scope by creating a code block with {} 
//that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
{
    const blockconst = "const can't print outside the body {}";
    let blocklet = "let can't print outside the body {}";
    console.log(blockconst);
    console.log(blocklet);
}
try {
    //   console.log(blockconst);
}
catch (error) {
    console.log("blockconst is not accessible outside the block.");
}
try {
    // console.log(blockLet); 
}
catch (error) {
    console.log("blockLet is not accessible outside the block.");
}
