//find the index of "Banana" in an array of fruits and replace it with "Mango". 


function findIndex(fruits: string[]): void {
    const index = fruits.indexOf("Banana"); 
    if (index !== -1) fruits[index] = "Mango"; 
}


const fruits: string[] = ["Apple", "Banana", "Cherry"];
findIndex(fruits);
console.log(fruits); 