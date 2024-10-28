const form = document.getElementById('form');
const firstname = document.getElementById('input-firstname');
const lastname = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const password = document.getElementById('input-password');
const conPassword = document.getElementById('input-password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const conPasswordValue = conPassword.value.trim();
    
    if (firstnameValue === '' || firstnameValue == null) {
        setError(firstname, 'Firstname is a required field!');
    }else{
        setSuccess(firstname);
    }

    if (lastnameValue === '' || lastnameValue == null) {
        setError(lastname, 'Last name is a required field!');
    }else{
        setSuccess(lastname);
    }

    if (emailValue === '' || emailValue == null) {
        setError(email,'Email is required!');       
    }else if(!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address!')
    }else{
        setSuccess(email);
    }

    if (passwordValue === '' || passwordValue == null) {
        setError(password, 'Password is required!');
    }else if(passwordValue.length < 8 ){
        setError(password, 'Password must be at least 8 character.')
    }else{
        setSuccess(password);
    }

    if (passwordValue !== conPasswordValue) {
        setError(conPassword, 'Passwords do not match!');
    }else if(conPasswordValue === '' || conPasswordValue == null){
        setError(conPassword, 'Please confirm your password!');
    }else{
        setSuccess(conPassword);
    }
};





















































