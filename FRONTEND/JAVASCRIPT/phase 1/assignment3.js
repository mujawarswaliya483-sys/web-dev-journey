// Qs1.Write a JavaScript program to get the first n elements of an array.[n can be any positive number].
// For example: for array [7,9,0,-2] and n=3 Print [7,9,0]

let arr=[7,9,0,-2];
let n=3;
let ans=arr.slice(0,n);
console.log(ans);

// Qs2.Write a JavaScript program to get the 
// last n elements ofan array.[n can be any positive number].
// For example:for array[7,9,0,-2]and n=3 
// Print,[9,0,-2]

let arr=[7,9,0,-2];
let n=3;
let ans=arr.slice(arr.length-n);
console.log(ans);

// Q3.Write a JavaScript program to check whether a string is blank or not

let str= prompt("please enter the string");

if(str.length==0){
    console.log("string is empty");
}else{
    console.log("string is not empty");
}

// Q4.Write a JavaScript program to test whether the character at the given (character) index is lowercase

let str = "ApnACoLLeGe";

let idx = 3;

if(str[idx] == str[idx].toLowerCase()){
    console.log("character is in lower case");
}else{
    console.log("character is in upper case");
}

// Q5.Write a JavaScript program to strip leading and trailing spaces from a string
let str=prompt("please enter a string");
console.log(`original string=${str}`);
console.log(`string without spaces=${str.trim()}`);

// Q6.Write a JavaScript program to check if an element exists in an array or not.

let arr =["swaliya"];{
    if(arr[i]!=)
}