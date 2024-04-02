//Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string.
// It should return true if found, otherwise false.


function TextPresence(message:string):boolean{
    return message.includes("javascript");
}

console.log(TextPresence("we compile typescript code to javascript"))