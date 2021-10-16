const input = document.querySelector('#validation-input');

input.addEventListener('blur', ({ target: { value, dataset } }) => {
  value.length === +dataset.length
    ? toggleClass('valid', 'invalid')
    : toggleClass('invalid', 'valid');
});

function toggleClass(add, remove) {
  input.classList.add(add);
  input.classList.remove(remove);
}