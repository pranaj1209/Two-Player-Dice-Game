var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var src1 = "./images/dice" + randomNumber1 + ".png";
var src2 = "./images/dice" + randomNumber2 + ".png";

console.log(src1);
console.log(src2);

document.querySelector(".img1").setAttribute("src", src1);
document.querySelector(".img2").setAttribute("src", src2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins!";
} else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
    document.querySelector("h1").textContent = "Draw!";
}