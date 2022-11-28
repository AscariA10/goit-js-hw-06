const paintedBody = document.querySelector('body');
const changeColorButton = document.querySelector('.change-color');
const informationWindow = document.querySelector('.color');

changeColorButton.addEventListener('click', changeColor);

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
   informationWindow.textContent = paintedBody.style.backgroundColor = getRandomHexColor();
}
