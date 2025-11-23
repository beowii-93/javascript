console.log("Loops tutorial.")
let a=1;

for(let i=0;i<10;i++){
    console.log(a+i);
}

let obj={
    name: "hello",
    role: "Programmer",
    comapny: "Code"
}

// for in loop
for(const key in obj){
    console.log(key)
}
// for of loop
for(const c of "hello"){
    console.log(c)
}

//while-loop
i=0;
while(i<6){
    console.log(i)
    i++;
}


// do-while loop
let i=10;
do {
    console.log(i)
    i++;
}
while (i<6);