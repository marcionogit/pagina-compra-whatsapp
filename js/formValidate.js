const form = document.querySelector('#form');
const emailForm = document.querySelector('#email');
const passwordForm = document.querySelector('#password');
const inputs = document.querySelectorAll('#form input');
let isValidateForm = false;


const  validateEmail = (email) => {
  const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  return regex.test(String(email).toLocaleLowerCase());
}

const validatePassword = (password) =>{
  if(password.length >= 7){
    return true;
  } else{
    return false;
  }
}

const resetInput = (i) =>{
  i.classList.remove('invalid')
  i.nextElementSibling.classList.add('error-hidden')
}

const validateInput =() =>{
  isValidateForm = validateEmail(emailForm.value);
  if(!emailForm.value){
    emailForm.classList.add('invalid')
    emailForm.nextElementSibling.classList.remove('error-hidden')
    isValidateForm = false;
  }
  }

form.addEventListener('submit', (event) =>{
  event.preventDefault()

  validateInput()
  if(validateEmail(emailForm.value) && validatePassword(passwordForm.value)){
    console.log('Enviou')
  }
})

inputs.forEach((i)=>{
  i.addEventListener('input', ()=>{
    resetInput(i);
  })
})