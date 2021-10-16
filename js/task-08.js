const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', event => {
  event.preventDefault();
  const elem = event.currentTarget.elements;

  if (elem.email.value !== '' && elem.password.value !== '') {
    console.log({
      email: elem.email.value,
      password: elem.password.value,
    });
    event.target.reset();
  } else {
    alert('Заполните все поля!');
  }
});
