let arr = [1,2,3,4,5]
//Index starts from 0
// Arrays are mutable
arr[0]=34;
console.log(arr, typeof(arr));
console.log(arr.length);
console.log(arr[0]) //1
console.log(arr[1]) //2
console.log(arr[2]) //3
console.log(arr[3]) //4
console.log(arr[4]) //5

console.log(arr.toString())
console.log(arr.join(" and "))
//push,pop,shift,unshift
console.log(arr.pop())
console.log(arr.push("demon"))
console.log(arr.shift()) //removes the first element of the array.
console.log(arr.unshift("hulk"))//removes the last element of the array.
console.log(arr)
console.log(delete(arr[3]));
console.log(arr)
console.log(arr[3]) 
let a1=[1,2,3]
let a2=[4,5,6]
console.log(arr.concat(a1,a2))
console.log(arr.sort())

let numbers=[1,2,3,4,5]
console.log(numbers.splice(1,2),numbers)
let numbers1=[1,2,3,4,5]
console.log(numbers1.slice(1,2),numbers)


