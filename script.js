const btEnter = document.querySelector('#btn-enter');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btSend = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');

const getInput = () => {
  const getEmail = email.value;
  const getPassword = password.value;

  if (getEmail === 'tryber@teste.com' && getPassword === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

// const checkedBox = () => {
// btSend.disabled ? btSend.disabled = false : btSend.disabled = true;
// };

checkbox.addEventListener('click', () => {
  if (checkbox.checked === true) {
    btSend.removeAttribute('disabled');
  } else if (checkbox.checked === false) {
    btSend.setAttribute('disabled', '');
  }
});

window.onload = () => {
  btEnter.addEventListener('click', getInput);
// checkbox.addEventListener('click', checkedBox);
};
