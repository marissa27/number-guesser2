const randomNumber = Math.floor(Math.random() * 100 +1);

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
  console.log(userValue, ' this was totes parsed')
  console.log(value, ' the value', randomNumber, ' randomNumber');
}
