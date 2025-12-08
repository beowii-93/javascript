function program(name) {
    console.log("Hey " + name + " is a programming language.")
}
console.log("Hey Javascript is a programming language.")
program("C")
program("Python")

function sum(a, b) {
    // console.log(a+b)
    return a + b;
}

result = sum(3, 5)
console.log("The sum is:"+result)

//Arrow function
const add = (a, b) => a + b;
// or
const func1 =(x)=>{
    console.log("This is arrow function",x)
}
func1(34);

