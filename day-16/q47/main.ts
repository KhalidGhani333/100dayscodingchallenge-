//Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties
// make, model, and year, use array destructuring to assign the first and second laptops to variables.
// Then, log these variables.

let laptops =[
    {make:"Dell",model:"xps 13",year:"2019"},
    {make:"Acer",model:"Aspire E10-571",year:2020},
    {make:"Hp",model:"ZBook fury",year:2021},
]
let [laptop1,laptop2,laptop3]=laptops;
console.log(laptop1);
console.log(laptop2);