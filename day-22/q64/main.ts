//Combine Strings and Numbers: Write a function that merges a piece of text with a number.
// For example, if provided with "Age: " and 30, it should give back "Age: 30"

function Combine(text:string,num:number):string{
    return text + num;
};

console.log(Combine("Age: ",24));

