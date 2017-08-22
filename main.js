window.onload = function() {
  randomNumber();
};

function randomNumber() {
  let randomNumber = Math.floor(Math.random() * 100 +1);
}

document.querySelector('.guess').addEventListener('click', (e) => {
  e.preventDefault();
  grabGuess();
});

function grabGuess() {
    let userNumber = document.querySelector('.user-guess').value;
    displayLastGuess(userNumber);
}

function displayLastGuess(value) {
  document.querySelector('.last-guess').innerHTML = value;
}
