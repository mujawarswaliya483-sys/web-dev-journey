// Q1.

let arr=[1,2,3,4,5,6];
let num= 5;

function greater(arr,num){
    for(i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}

greater(arr,num);



// Q2.

let str = "abcdahnghrthjdkf";

// functions to get string with all unique elements.
function getunique(str){
    let ans = "";
    for(i=0;i<str.length;i++){
        let currChar = str[i];
        if( ans.indexOf(currChar) == -1){
            // if current character is not added, then add it in ans.

            // otherwise it is a duplicate.

            ans=ans+currChar;
        }
    }
    return ans;
}

getunique(str);

// Q3.

let country = ["Australia","Germany","United state of America"];

function output(){

}

console.log("str");

// Q4.js program to count the number of vowels in a string argument.

let ch = "apnacollege";

{
    let count;
    for(let i=0;i<ch.length;i++){
    if(ch==a || ch==b || ch==c ||ch==d ||ch==e){
        count++;
    }
}
}

// Q5.js func to generate a random number within a range (start,end)


let start = 3;
let end = 5;

function range(start,end){
    
    let random = (Math.random()* end)+ start;
    console.log("random");
}

range();
