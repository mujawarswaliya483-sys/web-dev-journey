// user enters a max number and then tries to guess a random generated number between 1 to max.

const max = prompt("enter the max number");

const random = Math.floor(Math.random()*max) + 1;

let guess = prompt("guess the number");


while(true) {

    if(guess=="quit"){
        console.log("user quit");
        break;
}
 if(guess < random){
    guess = prompt("guess was low please try again");

}else if(guess > random){
    guess = prompt("guess was high please try again");
}
else if(guess == random){
    console.log("you guessed it right");
}else{
    guess = prompt("guess was wrong ! try again");
}
}