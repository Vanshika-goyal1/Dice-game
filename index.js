var randomNumber1=Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;   //1 to 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

// Similarly for Dice 2
var randomNumber2=Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1; 

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";  //     images/dice1.png - images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

//Changing Titles after Reloading
//If player 1 wins
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}