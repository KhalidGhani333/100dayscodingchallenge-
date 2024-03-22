//Pulling Apart a Nested Object: Imagine you have a list inside another list that shows
// what a computer programmer knows, like coding languages, tools, and software frameworks.
// Find a way to get three specific skills from this list and show them.

let programmerKnows={
    languages:["Typescript","Javascript","Python"],
    tools:["Vs.code","Git","Atom"],
    Frameworks:["Django","AngularJS","React"]

}
let {languages,tools,Frameworks}=programmerKnows

console.log(`${languages[1]}, ${tools[1]}, ${Frameworks[1]}`)