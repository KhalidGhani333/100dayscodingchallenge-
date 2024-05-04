
//Is "else" required?

function myage(age){
    if(age > 18 ){
        return true
    }
    else{
        return confirm("you are under 18")
    }
}
alert(myage(20))
//Will the function work differently if else is removed?

function myage2(age1){
    if(age1 > 18 ){
        return true
    }
    return confirm("you are under 18 ")
}
alert(myage(20))

//No difference! In both cases, return confirm('Did parents allow you?') executes exactly when the if condition is falsy.

//Rewrite the function using '?' or '||'

//Using a question mark operator ?
function checkage(age1){
  return (age1 > 18)? true :confirm("you are under 18 ")
}
alert(checkage(20))
//Using OR ||
function checkage(age1){
    return (age1 > 18) || confirm("you are under 18 ")
  }

alert(checkage(20))

//Function min(a, b)

//A solution using if:
function checkWord(a,b){
    if(a > b ){
        return a
    }
    else{return b
    }
}
alert(checkWord(4,2))

//A solution with a question mark operator '?':
function checkWord2(a,b){
    return a > b ? a : b
    }
alert(checkWord2(4,6))

//Write a function pow(x,n) that returns x in power n. Or, in other words,
// multiplies x by itself n times and returns the result.
function power(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;}
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( power(x, n) );}