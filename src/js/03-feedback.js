import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refForm =document.querySelector('.feedback-form');

refForm.addEventListener('submit', onSubmit);
refForm.addEventListener('input', throttle(onTextareaInput, 500));

setInputValue();
const formData = {};

function onSubmit (e) {
    e.preventDefault();
    e.currentTarget.reset();
    formData.email = refForm.elements.email.value;
    formData.message = refForm.elements.message.value;
    
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
  }


function onTextareaInput(e) {
  formData[e.target.name] = e.target.value;
  const strData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, strData);
}


function setInputValue() {
  const savedForm = localStorage.getItem(STORAGE_KEY);
  if (savedForm) {
      const parceSavedForm = JSON.parse(savedForm);
      // console.log(parceSavedForm);
      for (const prop in parceSavedForm) {
      if (parceSavedForm.hasOwnProperty(prop)) {
          // console.log(parceSavedForm[prop]);
          refForm.elements[prop].value = parceSavedForm[prop];
          formData[prop] = parceSavedForm[prop];
      }
  }
  }  
}



