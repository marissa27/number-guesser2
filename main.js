let randomNumber = Math.floor(Math.random() * 100 +1);

document.querySelector('.guess').addEventListener('click', (e) => {
  e.preventDefault();
  checkInput();
  document.querySelector('.user-guess').value = '';
});

document.querySelector('.clear').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.user-guess').value = '';
});

document.querySelector('.reset').addEventListener('click', (e) => {
  let randomNumber = Math.floor(Math.random() * 100 +1);
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
    response.innerHTML = 'ERROR: Please enter a value from 0 to 100';
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
  if (!document.querySelector('.user-guess').value) {
    document.querySelector('.guess').disabled = true;
    document.querySelector('.clear').disabled = true;
  } else if (document.querySelector('.user-guess').value) {
    document.querySelector('.guess').disabled = false;
    document.querySelector('.clear').disabled = false;
  }
});
