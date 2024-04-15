//Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

function Grades(garde:string):void{
    switch(garde){
    case "A":
    console.log("Excellent")
    break;

    case "B":
    console.log("Good")
    break;

    case "C":
    console.log("Fair")
    break;

    case "D":
    console.log("Poor")
    break;

    case "F":
    console.log("Fail")
    break;

    default:
    console.log("Invalid Grade")
    }
}

Grades("C")