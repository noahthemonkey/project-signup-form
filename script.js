var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");
  var errormsg = document.getElementById("errormsg")
  var passwordLabel = document.getElementById("passwordLabel")
  var confirmLabel = document.getElementById("confirmLabel")
function validatePassword(){
  if(password.length != 0) {
    if(password.value != confirm_password.value) {
      confirm_password.classList.toggle('invalid')
      password.classList.toggle('invalid')
      passwordLabel.classList.add('error')
      confirmLabel.classList.add('error')
      errormsg.textContent = 'Passwords do not match'
      errormsg.style.color = 'rgba(100, 0, 0, 0.900)'
      confirm_password.setCustomValidity("Passwords do not match");
    }
     else if (password.value == confirm_password.value){
      passwordLabel.classList.remove('error')
      confirmLabel.classList.remove('error')
      errormsg.textContent = 'Passwords match'
      errormsg.style.color = 'rgba(99, 162, 217, 0.553)'
      confirm_password.setCustomValidity('');
    }
} 
}

password.onchange = validatePassword;
confirm_password.onchange = validatePassword;

confirm_password.onkeyup = validatePassword;
password.onkeyup = validatePassword;