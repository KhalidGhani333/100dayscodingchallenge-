
let c = 3;

while (c) {
    alert(c--)
}

// prefix 
let i = 0;
while(++i < 5){
    alert(i)
}

//post fix
let j = 0;
while(j++ < 5){
    alert(j)
}

//prefix
for(let k=0; k < 5; k++)
alert(k)

//postfix
for(let l = 0; l < 5; ++l)
alert(l)

//Output even numbers in the loop 
for(let m = 2; m < 10; m++ ){
    if( m % 2 == 0){
        alert(m)
    }
}

//Replace for loop with while loop

for ( let n = 0; n < 3; n++){
    alert(`number ${n}`)
}

//Repeat until the input is correct 
 let num ;
 do{num = prompt("enter a number greater than 100",0);}
 
 while(num <=100 && num);

 //Output Prime Numbers
 let p = 10
 for(let i = 2; i <= p; i++){
    for(let j =2; j < i; j++){
        if(i % j == 0) continue
    }
    alert(i)
 }

 // Switch Statement

//Rewrite the "switch" into an "if"
 let days = prompt("Enter day name ")

 switch(days){
    case sunday: 
    alert("Today is off  ")
    break;
    case moday: 
    alert("Today is 1st working day ")
    break;
    case tuesday: 
    alert("Today is 2nd working day ")
    break;
    case wednesday: 
    alert("Today is 3rd working day ")
    break;
    case thrusday: 
    alert("Today is 4th working day ")
    break;
    case friday: 
    alert("Today is 5th working day ")
    break;
    default: 
    alert("Today is half working day ")
    break;
}

 if(days == sunday){
    alert("Today is off") }
 else if(days == monday){
    alert("Today is 1st working day ")}
else if(days == tuesday){
    alert("Today is 2nd working day ")}
else if(days == wednesday){
    alert("Today is 3rd working day ")}
else if(days == thrusday){
    alert("Today is 4th working day ")}
else if(days == friday){
    alert("Today is 5th working day ")}
else{
    alert("Today is half working day ")}

//Rewrite "if" into "switch"
    let a = prompt('a?', '');
    if (a == 0) {
      alert( 0 );
    }
    if (a == 1) {
      alert( 1 );
    }
    if (a == 2 || a == 3) {
      alert( '2,3' );
    }

switch(a){
    case 0:
        alert(0)
        break;
    case 1:
        alert(1)
        break;
    case 2:
    case 3:
        alert(2,3)     
        break;       
}