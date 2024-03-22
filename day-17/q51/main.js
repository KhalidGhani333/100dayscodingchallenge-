//Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle
//and refactor it into an arrow function.
function calculateArea(height, width) {
    return height * width;
}
var calculateAreaWithArrow = function (height, width) {
    return height * width;
};
console.log(calculateAreaWithArrow(5, 10));
