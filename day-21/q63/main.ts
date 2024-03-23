//Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias,
// including properties unique to each shape.

type shape={
    kind:string,
    radious?:number,
    width?:number,
    height?:number,
}

let circle:shape={
    kind:"circle",
    radious:50

}

let Rectangle:shape={
    kind:"Rectangle",
    height:15,
    width:30
}

console.log(circle)
console.log(Rectangle)