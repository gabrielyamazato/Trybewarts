const btEnter = document.querySelector('#btn-enter');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btSend = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');
const count = document.querySelector('#counter');

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

const hideForm = () => {
  const dataForm = document.querySelector('#form-data');

  dataForm.style.display = 'none';
}

function hiddenForm() {
  const formData = document.querySelector('#form-data');
  const formEvaluation = document.querySelector('#evaluation-form')

  formData.style.display = 'flex';
  formEvaluation.style.display = 'none';
}

function getValues() {
  hiddenForm();
  const fullNameData = document.querySelector('#fullname-data');
  const nameInput = document.querySelector('#input-name').value;
  const lastnameInput = document.querySelector('#input-lastname').value;

  fullNameData.innerHTML = `Nome: ${nameInput} ${lastnameInput}`;

  const emailData = document.querySelector('#email-data');
  const emailInput = document.querySelector('#input-email').value;

  emailData.innerHTML = `Email: ${emailInput}`;

  const houseData = document.querySelector('#house-data');
  const houseInput = document.querySelector('#house').value;

  houseData.innerHTML = `Casa: ${houseInput}`;

  const familyData = document.querySelector('#family-data');
  const familyInput = document.getElementsByName('family');
  let inputChecked;

  for (let i = 0; i < familyInput.length; i += 1) {
    if (familyInput[i].checked) {
      inputChecked = familyInput[i].value;
    }
  }

  familyData.innerHTML = `Família: ${inputChecked}`;

  const subjectData = document.querySelector('#subject-data');
  const subjectInput = document.querySelectorAll('.subject')
  let subjectChecked = '';

  for (let i = 0; i < subjectInput.length; i += 1) {
    if (subjectInput[i].checked) {
      subjectChecked += `${subjectInput[i].value}, `
    }
  }

  subjectData.innerHTML = `Matérias: ${subjectChecked}`

  const evaluationData = document.querySelector('#evaluation-data');
  const evaluationInput = document.getElementsByName('rate');
  let evaInputChecked;

  for (let i = 0; i < evaluationInput.length; i += 1) {
    if (evaluationInput[i].checked) {
      evaInputChecked = evaluationInput[i].value;
    }
  }

  evaluationData.innerHTML = `Avaliação: ${evaInputChecked}`
}

function textAreaInput() {
  const obsData = document.querySelector('#obs-data');

  let text = '';
  let textarea = document.getElementById('textarea');
  textarea.addEventListener('input', function getText() {
    text = textarea.value;
    obsData.innerHTML = `Observações: ${text}`
  })
}
textAreaInput()

window.onload = () => {
  hideForm();
  btSend.addEventListener('click', getValues);
  btEnter.addEventListener('click', getInput);
  // checkbox.addEventListener('click', checkedBox);
};

function countDown(obj) {
  count.innerHTML = 500 - obj.value.length;
}
console.log(countDown);
