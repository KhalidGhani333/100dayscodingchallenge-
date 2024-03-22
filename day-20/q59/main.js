//Add a Special Number: Make a program that creates custom adders.
//These adders can add a specific number to any other number you give them later.
function Adder(value) {
    return function (number) {
        return number + value;
    };
}
var addValue = Adder(9);
console.log(addValue(15));
