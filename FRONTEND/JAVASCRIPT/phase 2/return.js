// create a function that return the sum of numbers from 1 to n.

function num(n){
    let sum=0;
    for(let i=1;i<=n;i++){
      sum = sum + i;
     
    }
    return sum;
}

num(5);

// create a function that returns the concatination of all strings in an array.

let str = ["swaliya","sajid","mujawar"];

function concat(str){
    let result ="";
  for(let i=0;i<str.length;i++){
    result += str[i];  }
      return result;
}
