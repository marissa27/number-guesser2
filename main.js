const randomNumber = Math.floor(Math.random() * 100 +1);

document.querySelector('.guess').addEventListener('click', (e) => {
  e.preventDefault();
  checkInput()
});

function displayLastGuess(value) {
  document.querySelector('.last-guess').innerHTML = value;
  compareGuess(value);
}

function compareGuess(value) {
  let userValue = parseInt(value);
  let response = document.querySelector('.response');

  if (userValue === randomNumber) {
    response.innerHTML = 'BOOM!';
  } else if (userValue > randomNumber) {
    response.innerHTML = 'That is too high!';
  } else {
    response.innerHTML = 'That is too low!';
  }
}

function checkInput() {
  let userNumber = parseInt(document.querySelector('.user-guess').value);

  if (userNumber < 0 || userNumber > 100) {
    document.querySelector('.notification-message').innerHTML = "That is outside of the range.";
  } else {
    displayLastGuess(userNumber)
  }
}
