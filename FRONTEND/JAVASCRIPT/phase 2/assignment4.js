// Q1.

let arr = [ 1,2,3,4,5,6,2,3];
num == 2;

for(let i=0;i<arr.length;i++){
    if(arr[i]== num){
        arr.splice(i,1);
    }
}
console.log(arr);
 

// arr.pop(2);
// console.log(arr);

// Q2.

//  let num=2871236;

//  console.log(num.toString().length);


//  Q3.

// let number = [2,3,10];{
// let sum = 0;

// for(let i=0; i<number.length; i++){
//     sum = sum + number[i];
// }
// console.log(sum);
// }

// Q4.



let num = prompt("enter the number");
if(num==0){
   return 1;
}else{
    return num*factorial(num-1);
}


let n =[1,2,7,5,8];

// Q5.

let arr = [4,8,6,9,10];
let max=arr[i];

for(let i;i<arr[i];i++){
   if(max<arr[i]){
        max=arr[i];
   } 
    
}

console.log(max);
