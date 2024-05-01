// What's the result of OR? :
alert(null || 2 || undefined);

// What's the result of OR'ed alerts?
alert(alert(1) || 2 || alert(3));

//What is the result of AND?
alert(1 && null && 2)

//What is the result of AND'ed alerts?
alert( alert(1) && alert(2) );

//The result of OR AND OR 
alert( null || 2 && 3 || 4 );


//Which of these alerts are going to execute?
//What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );


//Check the login :
let username = prompt("who's there?","")

if(username === "admin"){
    let pass = prompt("Enter your password?","")
     if(pass == office123){
        alert("Welcome to office site ")    
     }
     else if(pass == " "){
        alert("please enter password")
     }
     else{alert("wrong password")}
}
else if(username == " "){
    alert("canceled")
}
else{("i don't know you")}