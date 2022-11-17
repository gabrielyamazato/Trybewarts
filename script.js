const btEnter = document.querySelector('#btn-enter');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const getInput = () => {
    const getEmail = email.value;
    const getPassword = password.value;

    if (getEmail == 'tryber@teste.com' && getPassword == 123456) {
        return alert('Olá, Tryber!')
    } else {
        return alert('Email ou senha inválidos.')
    }
}

window.onload = () => {
    btEnter.addEventListener('click', getInput)
}