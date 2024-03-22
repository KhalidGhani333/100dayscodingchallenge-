//Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle
//and refactor it into an arrow function.


function calculateArea(height:number,width:number):number {
return height * width
}

let calculateAreaWithArrow=(height:number,width:number):number =>
      height * width
console.log(calculateAreaWithArrow(5,10))
