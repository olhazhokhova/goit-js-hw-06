function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const spanRef = document.querySelector('.color');

buttonRef.addEventListener('click', () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = getRandomHexColor();
});
