import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('input'),
  submit:document.querySelector('button[type="submit"]')
};
const formData = {};



// function onInput(e){
//     const inputValue= e.target.value;
//     console.log(inputValue);
// }

refs.form.addEventListener('submit', onSubmit);
function onSubmit (e) {
    e.preventDefault();
    e.currentTarget.reset();
    const objData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    localStorage.removeItem(STORAGE_KEY);
  }


  

refs.form.addEventListener('input', throttle(onTextareaInput, 500));

function onTextareaInput(e) {
  formData[e.target.name] = e.target.value;
  const strData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, strData);
}
setInputValue();

function setInputValue() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage === null) {
    //console.log(savedMessage);
    return;
  }
  refs.textarea.value = savedMessage['message'] || '';
  refs.input.value = savedMessage['email'] || '';
}



