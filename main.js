let randomNumber = Math.floor(Math.random() * 100 +1);
let min = 0;
let max = 100;

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
  displayLastGuess('Zilch');
  return randomNumber = Math.floor(Math.random() * 100 +1);
})

function displayLastGuess(value) {
  document.querySelector('.last-guess').innerHTML = value;
  compareGuess(value);
}

function compareGuess(value) {
  let userValue = parseInt(value);
  let response = document.querySelector('.response');
  let kidHelp = document.querySelector('.kid-help')

  if (userValue === randomNumber) {
    response.innerHTML = 'BOOM!';
    correctAnswer();
    showRange();
  } else if (userValue > randomNumber) {
    response.innerHTML = 'That is too high!';
    kidHelp.innerHTML = 'You are ' + (userValue - randomNumber) + ' number(s) away.';
  } else if (userValue < randomNumber) {
    response.innerHTML = 'That is too low!';
    kidHelp.innerHTML = 'You are ' + (randomNumber - userValue) + ' number(s) away.';
  } else {
    response.innerHTML = 'Please enter a value from ' + min + 'to ' + max;
  }
}

function correctAnswer() {
  min = min - 10;
  max = max + 10;
  return randomNumber = Math.floor(Math.random() * (max - min)) + min;
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

document.querySelector('.new-range-btn').addEventListener('click', (e) => {
  e.preventDefault();
  min = parseInt(document.querySelector('.min').value);
  max = parseInt(document.querySelector('.max').value);
  changeRange(min, max);
});

document.querySelector('.kid-version').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.kid-help').classList.remove('initial');
});

function changeRange (min, max)  {
  return randomNumber = Math.floor(Math.random() * (max - min)) + min;
}

function showRange() {
  document.querySelector('.range-form').classList.remove('initial')
}
