//Compare two strings to check if they are identical, ignoring case sensitivity.

function CompareString(word1:string,word2:string):boolean{
    return word1.toLowerCase() === word2.toLowerCase()
}

console.log(CompareString("khalid", "Khalid"))
console.log(CompareString("khalid","Ghani"))