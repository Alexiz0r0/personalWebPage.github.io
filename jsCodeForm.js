const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const celular = document.getElementById('celular');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkImputs();
});

function checkImputs() {
  const nombreValue = nombre.value.trim();
  const emailValue = email.value.trim();
  const celularValue = celular.value.trim();

  if (nombreValue === '') {
    setErrorFor(nombre, 'Por favor, rellena este campo.');
  } else{
    setSuccessFor(nombre);
  }
  if (emailValue === '') {
    setErrorFor(email, 'Por favor, rellena este campo.');
  } else if(!isEmail(emailValue)){
    setErrorFor(email, 'Por favor, introduce una dirección de correo electrónico.');
  }else {
    setSuccessFor(email);
  }
  if (celularValue === '') {
    setErrorFor(celular, 'Por favor, rellena este campo.');
  } else if(!isPhone(celularValue)){
    setErrorFor(celular, 'Por favor, introduce un número de teléfono.');
  } else{
    setSuccessFor(celular);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'formControl error';
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'formControl success'; 
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isPhone(number) {
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(number)  
}