console.log("hello this is a conditional statements")
let age=5;
let grace =2;
if(age>18){
    console.log("You can drive.");
}
else if(age==0){
    alert("Enter valid age.");
}
else{
    console.log("You can't drive.")
}

//Operators
let area=9;
console.log(area+grace);
console.log(area-grace);
console.log(area/grace);
console.log(area**grace);
console.log(area%grace);

//special cases
console.log("3"==3) //checks the value
console.log("3"===3) //checks the value and reference and the type.

// Ternary operator
let a=9,b=3;
let c=a>b ? a : b;
console.log(c);

