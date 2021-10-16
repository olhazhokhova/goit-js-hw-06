const refs = {
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  input: document.querySelector('#controls input'),
  boxesContainer: document.querySelector('#boxes'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let listBoxes = '';
  for (let i = 0; i < amount; i += 1) {
    listBoxes += `<div style="width: ${10 * i + 30}px;height: ${
      10 * i + 30
    }px;background: ${getRandomHexColor()}"></div>`;
  }
  refs.boxesContainer.innerHTML = listBoxes;
}

function onClickCreate() {
  refs.input.value && createBoxes(+refs.input.value);
}

function destroyBoxes() {
  refs.input.value = '';
  refs.boxesContainer.innerHTML = '';
}

refs.create.addEventListener('click', onClickCreate);
refs.destroy.addEventListener('click', destroyBoxes);
