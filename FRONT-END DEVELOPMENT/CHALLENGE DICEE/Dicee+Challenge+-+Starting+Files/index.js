//Get a random number for the player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";

//Get a random number for the player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

//Compare the dicees and show who the winner is.
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }