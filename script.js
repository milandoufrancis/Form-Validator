const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// const small = document.querySelector('small');

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  // small.innerText = message;
  const small = formControl.querySelector('small');
  small.innerText = message;

}

//show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (username.value === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }

  if (email.value === '') {
    showError(email, 'email is required');
  } else if(!isValidEmail(email.value)){
    showError(email, 'Email is not valid');
  }else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'password is required');
  } else if(password.value !== password2.value) {
    showError(password, 'Both passwords must be identical');
  }else {
    showSuccess(password);
  }

  if (password2.value === '') {
    showError(password2, 'password 2 is required');
  }else if(password.value !== password2.value) {
    showError(password2, 'Both passwords must be identical');
  } else {
    showSuccess(password2);
  }
});