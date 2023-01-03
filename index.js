var randomNumer1 = Math.floor((Math.random() * 6) + 1);
var randomImage = "images/dice" + randomNumer1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage);

var randomNumer2 = Math.floor((Math.random() * 6) + 1);
var randomImage2 = "images/dice" + randomNumer2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomNumer1>randomNumer2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumer1 < randomNumer2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML = "Draw";
}
