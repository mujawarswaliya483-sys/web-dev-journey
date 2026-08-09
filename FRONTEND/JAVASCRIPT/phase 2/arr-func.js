// forEach.

// let arr=[1,2,3,4,5];
// let print = function(el){
//     console.log(el);
// };

// arr.forEach(print);

// map

// let num = [1,2,3,4,5];
// let double = num.map((el)=>{
//     return el*2;
// });

// reduce method

// let nums =[1,2,3,4];
// let finalVal = numsreduce((res,el)=> res+el);
// console.log(finalVal);

// QUESTION ON REDUCE

// finding maximum in an array

// let arr=[1,2,3,4,,78,7,10,6]
// let maximum = Array.reduce(max, el) =>(
//     if(max < el){
//         return el;
//     }else{
//         return max;
//     }
// );

// cheak if all numbers in our array are multiple of 10 or not.
// let arr = [1,2,3,4,5];
// let cheak = arr.every(el)=>(

//     el%10 == 0;
// );

console.log(cheak);

// create a function to find a min number in array

let arr=[1,4,2,0,2];

let minimum = arr.reduce(min,el) => (
    if(el>min){
        return el;

    }else{
        return min;
    }
);

// rest

function sum(...args){
    // arguments
    for(let i=0;i< args.length;i++){
        console.log("you gave us:",args[i]);
    }
}

