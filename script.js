var spinButton = document.getElementById('spinButton');
var arrow = document.querySelector('.arrow');
var resultElement = document.getElementById('result');

var spins = 0;

function spinWheel() {
  if (spins === 0) {
    // First spin, show "Try Again"
    arrow.style.display = 'block';
    arrow.classList.add('animate');
    resultElement.innerHTML = '<h2>Spinning...</h2>';
    setTimeout(function () {
      resultElement.innerHTML = '<h2>Try Again!</h2>';
    }, 2000);
    spins++;
  } else if (spins === 1) {
    // Second spin, show the gift card
    arrow.style.display = 'block';
    arrow.classList.add('animate1');
    resultElement.innerHTML = '<h2>Spinning...</h2>';
    setTimeout(function () {
      resultElement.innerHTML = '<h2>Congratulations! You won a Rs.500 gift card!</h2>';
    }, 2000);
    spins++;
  }
}
