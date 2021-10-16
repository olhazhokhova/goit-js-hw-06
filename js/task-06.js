const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  input.classList =
    input.value.length >= input.dataset.length ? 'valid' : 'invalid';
});
