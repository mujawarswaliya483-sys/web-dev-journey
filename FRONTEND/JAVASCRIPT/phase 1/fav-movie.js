const favorate ="avatar";
let guess = prompt("enter your guessed movie name");

while(guess!=favorate){
    if(guess=="quit"){
        console.log("you quit the game");
        break;
    }
    guess = prompt("enter your guessed movie again");
}

if(guess==favorate){
    console.log("you guessed the correct movie name");
}