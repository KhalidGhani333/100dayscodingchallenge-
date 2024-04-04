//write a function to remove the last element from an array and return the removed element

function removeElement<T>(arr:T[]):T|undefined{
    return arr.pop()
}
 let fruits= ["apple","banana","mango"] 
 console.log(fruits)  
console.log(removeElement(fruits))