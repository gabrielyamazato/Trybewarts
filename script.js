const btEnter = document.getElementById('btn-enter');
const email = document.querySelector('#email').value;
const password = document.querySelector('#password').value;

function alert() {
    if (email == 'tryber@teste.com' && password == 123456) {
        return alert('Olá, Tryber!')
    } else {
        return alert('Email ou senha inválidos.') 
    }
}

btEnter.addEventListener('click', alert);