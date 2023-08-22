var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

var pathImage = "images/dice" + randomNumber1 + ".png";
var pathImage2 = "images/dice" + randomNumber2 + ".png";

image1.setAttribute('src', pathImage);
image2.setAttribute('src', pathImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = 'Player 1 Wins !';
} else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").innerHTML = 'Player 2 Wins !';
} else {
    document.querySelector(".container h1").innerHTML = 'Draw';
}