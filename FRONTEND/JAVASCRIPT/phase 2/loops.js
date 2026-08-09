// loops with arrays

let fruits = ["mango", "banana", "apple"];

// for(let i=0; i<fruits.length; i++){
//     console.log(i,fruits[i]);
// }

// to run reversely
for(let i=fruits.length-1; i>=0; i--){
    console.log(i,fruits[i]);
}

// nested loop with nested array
let vegetables = [["carrot", "broccoli"], ["spinach", "lettuce"]];  

for(let i=0; i<vegetables.length; i++){
    console.log('list #${i}');
    for(let j=0; j<vegetables[i].length; j++){
        console.log(vegetables[i][j]);
    }
}

// for of loop
for(elements of collection) {
      console.log(elements);
 }

 let fruits =["mango", "banana", "apple"];
 for(fruit of fruits){
    console.log(fruit);
 }

 for(char of "apnacollege"){
    console.log(char);
 }

//  nested for of loop

let heroes = [["ironman", "spiderman"], ["thor", "hulk"]];

for(list of heroes){
    for(hero of list){      
        console.log(hero);
    }   
}