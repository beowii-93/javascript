console.log("This is strings file")
let a ="sneha";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

console.log(a.length)

let name2 ="priya"
// Template literals--> Simple formatting instead of  
console.log(`her name is ${name2} and her friend name is ${a}`)

let b = "boat"
console.log(b.toLowerCase())
console.log(b.toUpperCase())
console.log(b.slice(1,3)) //oa
console.log(b.slice(1)) //oat
console.log(b.replace("bo","go"))

console.log(name2.concat(a,"Aishwarya","Smriti","KLR"))
let c="   Outside "
console.log(c.trim())

//Strings are immutable ie they wont change their identity even after performing functions on them
console.log(b.toWellFormed())
