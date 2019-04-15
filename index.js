var score1 = 0;
var score2 = 0;


function main() {

  var randomNumber1 = Math.floor((Math.random() * 6) + 1);
  var randomNumber2 = Math.floor((Math.random() * 6) + 1);

  document.getElementsByTagName("IMG")[0].src = "images/dice" + randomNumber1 + ".png";
  document.getElementsByTagName("IMG")[1].src = "images/dice" + randomNumber2 + ".png";



  if (randomNumber1 > randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player1 Wins!";
    score1++;
    document.getElementById("score1").innerHTML = score1;
  } else if (randomNumber2 > randomNumber1) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player2 Wins!";
    score2++;
    document.getElementById("score2").innerHTML = score2;
  } else {
    document.getElementsByTagName("h1")[0].innerHTML = "Scarlett Wins!";
  }
}



document.getElementsByTagName("button")[0].addEventListener("click", function() {
  main();
});
