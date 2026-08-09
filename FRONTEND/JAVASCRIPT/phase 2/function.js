function hello(){
    console.log("hello");
}
hello();

// create a function that prints a poem

function poem(){
  console.log("  Twinkle, twinkle, little star,");
  console.log("how i wonder what you are");
}

poem()

// create a function to roll a dice and always display the value between (1 to 6).

function dice(){
    console.log(Math.floor(Math.random()*6))+1;
}

dice();

// create a function that gives us the average of 3 numbers.

function sum(a , b , c){
   
   let avg = (a+b+c)/3;
   console.log(avg);

}

sum(3 , 3 , 3);

// create a function that prints a multiplication table.

function mul(n){

    for(let i=n;i<=10;i*n){
        console.log(i);
    }
}
mul(5);

// higher order function
// ~ takes one or multiple functions AS Arguments.

function multiGreet(func, count){ //higher order function.
    for(let i=1;i<count;i++){
        func();
    }
}
let greet = function(){
    console.log("hello");

}
multiGreet(greet, 2);
// we want to call greet two times

// ~ returns a function.

function oddEventest(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    }else if(request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    }else{
        console.log("wrong request");
    }
}