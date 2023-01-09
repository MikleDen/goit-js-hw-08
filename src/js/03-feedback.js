import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refForm =document.querySelector('.feedback-form');
const input = document.querySelector('[name="email"]');
const textArea = document.querySelector('[name="message"]');

refForm.addEventListener('submit', onSubmit);
refForm.addEventListener('input', throttle(onTextareaInput, 500));

setInputValue();
const dataUser = { [input.name]: input.value, [textArea.name]: textArea.value };
localStorage.setItem(STORAGE_KEY, JSON.stringify(dataUser));


function onSubmit (e) {
    e.preventDefault();
    e.target.reset();
   
    localStorage.removeItem(STORAGE_KEY);
    console.log(dataUser);
  }


function onTextareaInput(e) {
  dataUser[input.name] = input.value;
  dataUser[textArea.name] = textArea.value;
  const strData = JSON.stringify(dataUser);
  localStorage.setItem(STORAGE_KEY, strData);
}


function setInputValue() {
  const savedMsg = localStorage.getItem(STORAGE_KEY);
  const currentDataUser = JSON.parse(savedMsg);
  if (!currentDataUser) {
    return;
  }
  input.value = currentDataUser.email;
  textArea.value = currentDataUser.message;
}



