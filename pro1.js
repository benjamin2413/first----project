//How to select HTML element using DOM/*
/* document.querySelector(".message").textContent = "correct Number!";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
document.querySelector(".guess").value = 10; */

//events
/* document.querySelector(".check") .addEventListener("click", function (){
    console.log(document.querySelector(".guess").value);
});
 */

let secretNumber = Math.trunc(Math.random() * 20 + 1)
let score = 20
let highscore = 0

//DOM
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

//Adding Event Click
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)

  // When there is no INPUT

  if (!guess) {
    displayMessage('No Number')
  } else if (guess === secretNumber) {
    displayMessage('correct Number')
    document.querySelector('.number').textContent = secretNumber

    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'

    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }

    //When the guess is wrongh
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low')
      score--
      document.querySelector('.score').textContent = score
    } else {
      displayMessage('You have Lost The Game ')
      document.querySelector('.score').textContent = 0
    }
  }
})
