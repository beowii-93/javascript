let a=[1,54,67,86,46]

for(let i=0;i<a.length;i++){
    const element =a[i]; // or console.log(a[i])
    console.log(element)
}

a.forEach((value,index,arr)=>{
    console.log(value,index,arr)
})

let obj = {
    a: 1,
    b: 2,
    c: 3
}

//for-in loop
for(const key in obj){ //key is ur index value
    if(Object.hasOwnProperty.call(obj, key)){
        const element =obj[key];
        console.log(key,element)
    }
}
//for-of loop
for(const value of a){
   console.log(value) 
}


let arr =[1,13,5,7,11];

for(let i=0;i<arr.length;i++){
    console.log(arr[i]** 2)
}
//still easiest of solving this loop
let newArr = arr.map((e)=>{
    return e**2
})
console.log(newArr)  

//filter function
const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}

console.log(arr.filter(greaterThanSeven))

//reduce function--> contionous function performing the given iteration
let arr2 = [1,2,3,4,5,6]
const red =(a,b)=>{
    return a*b; //return a+b;
}
console.log(arr2.reduce(red))

//Array from
console.log(Array.from("TIMES"))
