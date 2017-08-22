let randomNumber = Math.floor(Math.random() * 100 +1);

document.querySelector('.guess').addEventListener('click', (e) => {
  e.preventDefault();
  checkInput();
  document.getElementById("myForm").reset();
  activateReset();
});

document.querySelector('.clear').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById("myForm").reset();
});

document.querySelector('.reset').addEventListener('click', (e) => {
  displayLastGuess('Zilch')
  return randomNumber = Math.floor(Math.random() * 100 +1);
})

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
  } else if (userValue < randomNumber) {
    response.innerHTML = 'That is too low!';
  } else {
    response.innerHTML = 'Please enter a value from 0 to 100';
  }
}

function checkInput() {
  let userNumber = parseInt(document.querySelector('.user-guess').value);
  let bannerMessage = document.querySelector('.notification-message');

  if (userNumber < 0 || userNumber > 100) {
    bannerMessage.innerHTML = 'That is outside of the range.';
  } else {
    bannerMessage.innerHTML = '';
    displayLastGuess(userNumber);
  }
}

document.querySelector('.user-guess').addEventListener('input', function(e) {
  let userGuess = document.querySelector('.user-guess').value;
  if (!userGuess) {
    document.querySelector('.guess').disabled = true;
    document.querySelector('.clear').disabled = true;

  } else if (userGuess) {
    document.querySelector('.guess').disabled = false;
    document.querySelector('.clear').disabled = false;
  }
});

function activateReset() {
  if (document.querySelector('.last-guess') != 'Zilch') {
    document.querySelector('.reset').disabled = false;
  } else {
    document.querySelector('.reset').disabled = true;
  }
}
console.log(randomNumber)
