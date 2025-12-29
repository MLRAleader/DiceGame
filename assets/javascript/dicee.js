const diceSound = new Audio('./assets/sound/dice-son.mp3');
//diceSound.volume = 0.6;
document.getElementById("rollBtn").addEventListener("click", rollDice);

function rollDice() {
  diceSound.currentTime = 0; // Rewind to the start
  diceSound.play();
  let randomNumber1 = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6

  let randomNumber2 = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6

  document
    .querySelector(".img1")
    .setAttribute("src", "./assets/images/dice" + randomNumber1 + ".png"); //Add random image to dice 1
  document
    .querySelector(".img2")
    .setAttribute("src", "./assets/images/dice" + randomNumber2 + ".png"); //Add random image to dice 2
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"; //Decide the winner
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"; //Decide the winner
  } else {
    document.querySelector("h1").innerHTML = "It's a Draw!"; //If both are equal
  }
  //animation
  animateDice()
}


function animateDice() {
  const dices = document.querySelectorAll("img");

  dices.forEach(dice => {
    dice.classList.remove("roll"); // reset animation
    void dice.offsetWidth; // trick pour relancer l’animation
    dice.classList.add("roll");
  });
}

