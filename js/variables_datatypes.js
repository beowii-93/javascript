console.log("hey this is tutorial page.")

var a=5; //global variable
var b=6;
var c="harry";
console.log(a+b+8)
console.log(typeof a,typeof b,typeof c)

// const a1=6;
// a1+=6; // assignment to const variable is not allowed

let d=5; //block's code
{
    let d =66;
    console.log(a)
}
// Data types : Primitive and object data types
let x="meow";
let y=33;
// let z= true;
const p= false;
console.log(x,y,p)
//type of null is object (this is due to the mistake or conception by the creators of javascript.)
console.log(typeof(null))

// object is the key-value pairs in the javascript

let o={
    "name": "Harry",
    "job code": 5600,
    "is_rain":  true
}
console.log(o);
//appending the object
o.salary="100cr";
console.log(o);
o.salary="500cr";
console.log(o)
