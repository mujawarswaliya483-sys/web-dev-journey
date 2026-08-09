// write an arrow function that retuens the square of a number 'n'.


const square = (n) => n * n; 
console.log(square(4));

//  write a function that prints "hello world" 5 times at intervals of 2s each.

let id=setInterval(() =>{
    console.log("hello world");
},2000);

// creating set timeout function tostop hello world execution after it execute 
// hello world 5 times

setTimeout(()=>{
    clearInterval(id);
},10000) // stops after 10second.