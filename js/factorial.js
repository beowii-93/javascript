//Factorial using a simple loop
let a=5;
let result =1;
for(let i=1;i<=a;i++){
    result *= i;
}
console.log(result) 

//Factorial using recursion
function factorial(n){
    if(n<=1) 
        return 1;
    else
        return n*factorial(n-1);
}
console.log(factorial(5));