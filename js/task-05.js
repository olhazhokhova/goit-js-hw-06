const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', ({ currentTarget: { value } }) => {
  refs.output.textContent = value.trim() ? value : 'Anonymous';
});
