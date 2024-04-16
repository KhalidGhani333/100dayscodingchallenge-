//Discuss the difference between default and named exports in JavaScript modules.

//Explain & TIP:* JavaScript provides two main types of exports: default and named.
// A module can have only one default export, but multiple named exports. This flexibility supports various 
//use cases in module design.

import { myName,myAge } from "./index";



import myFather from "./app";



console.log(`I'm ${myName}.I'm ${myAge} Years old.My father name is ${myFather}`)