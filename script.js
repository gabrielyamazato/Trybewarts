const btEnter = document.querySelector('#btn-enter');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btSend = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');
const count = document.querySelector('#counter');

// ALERTA DO LOGIN
const getInput = () => {
  const getEmail = email.value;
  const getPassword = password.value;

  if (getEmail === 'tryber@teste.com' && getPassword === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

// DESABILITA OU HABILITA O BOTÃO DE ACORDO COM O CHECKBOX
checkbox.addEventListener('click', () => {
  if (checkbox.checked === true) {
    btSend.removeAttribute('disabled');
  } else if (checkbox.checked === false) {
    btSend.setAttribute('disabled', '');
  }
});

// FUNÇÃO QUE ESCONDE O FORMULÁRIO APÓS O ENVIO
const hideForm = () => {
  const dataForm = document.querySelector('#form-data');

  dataForm.style.display = 'none';
};

function hiddenForm() {
  const formData = document.querySelector('#form-data');
  const formEvaluation = document.querySelector('#evaluation-form');

  formData.style.display = 'flex';
  formEvaluation.style.display = 'none';
}

const fullNameData = document.querySelector('#fullname-data');
const emailData = document.querySelector('#email-data');
const houseData = document.querySelector('#house-data');
const familyData = document.querySelector('#family-data');
const subjectData = document.querySelector('#subject-data');
const evaluationData = document.querySelector('#evaluation-data');

// FUNÇÃO QUE POPULA AS OPÇÕES DE AVALIAÇÃO NO FEEDBACK
function evaluationForm() {
  const evaluationInput = document.getElementsByName('rate');
  let evaInputChecked;

  for (let i = 0; i < evaluationInput.length; i += 1) {
    if (evaluationInput[i].checked) {
      evaInputChecked = evaluationInput[i].value;
    }
  }

  evaluationData.innerHTML = `Avaliação: ${evaInputChecked}`;
}

// FUNÇÃO QUE POPULA AS OPÇÕES DE MATERIAS NO FEEDBACK
function subjectForm() {
  const subjectInput = document.querySelectorAll('.subject');
  let subjectChecked = '';

  for (let i = 0; i < subjectInput.length; i += 1) {
    if (subjectInput[i].checked) {
      subjectChecked += `${subjectInput[i].value}, `;
    }
  }

  subjectData.innerHTML = `Matérias: ${subjectChecked}`;
}

// FUNÇÃO QUE POPULA AS OPÇÕES DE FAMILIA NO FEEDBACK
function familyForm() {
  const familyInput = document.getElementsByName('family');
  let inputChecked;

  for (let i = 0; i < familyInput.length; i += 1) {
    if (familyInput[i].checked) {
      inputChecked = familyInput[i].value;
    }
  }

  familyData.innerHTML = `Família: ${inputChecked}`;
}

// FUNÇÃO QUE POPULA OS DADOS DA TEXTAREA NO FEEDBACK
function textAreaInput() {
  const obsData = document.querySelector('#obs-data');

  let text = '';
  const textarea = document.getElementById('textarea');
  textarea.addEventListener('input', () => {
    text = textarea.value;
    obsData.innerHTML = `Observações: ${text}`;
  });
}
textAreaInput();

// FUNÇÃO QUE ESCONDE O FORMULARIO E RETORNA A PAGINA DE FEEDBACK
function getValues() {
  hiddenForm();
  const nameInput = document.querySelector('#input-name').value;
  const lastnameInput = document.querySelector('#input-lastname').value;
  fullNameData.innerHTML = `Nome: ${nameInput} ${lastnameInput}`;
  const emailInput = document.querySelector('#input-email').value;
  emailData.innerHTML = `Email: ${emailInput}`;
  const houseInput = document.querySelector('#house').value;
  houseData.innerHTML = `Casa: ${houseInput}`;
  evaluationForm();
  subjectForm();
  familyForm();
}

window.onload = () => {
  hideForm();
  btSend.addEventListener('click', getValues);
  btEnter.addEventListener('click', getInput);
};

// FUNÇÃO QUE ATUALIZA O CONTADOR DA TEXTAREA
function countDown(obj) {
  count.innerHTML = 500 - obj.value.length;
}
