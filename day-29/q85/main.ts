//Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code"
// within any given string and returns its position.

function codePosition(string:string):number{
    return string.indexOf("code")
}

console.log(codePosition("I'm learning typescript and i code 2 to 3 hours a day"))