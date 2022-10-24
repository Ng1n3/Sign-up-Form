const letter = document.getElementById('letter');
const capital = document.getElementById('capital');
const number = document.getElementById('number');
const length = document.getElementById('length');
const myInput = document.getElementById('pswd');

//when user clicks on the password field, show the message box
myInput.onfocus = () => {
    document.getElementById('message').style.display = 'block';
}

//when the user clicks outside of the password field, hide the message box
myInput.onblur = () => {
    document.getElementById('message').style.display = 'none';
}

//when the user starts to type something inside the password field

myInput.onkeyup = () => {
    //validate lowercase letters
    let lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    }else {
        letter.classList.remove('valid');
        letter.classList.add('invalid')
    }

    //validate capital letters
    let capitalCaseLetters = /[A-Z]/g;
    if(myInput.value.match(capitalCaseLetters)) {
        capital.classList.remove('invalid');
        capital.classList.add('valid');
    }else {
        capital.classList.remove('valid');
        capital.classList.add('invalid');
    }

    //validate number
    let numberDigits = /[0-9]/g;
    if(myInput.value.match(numberDigits)) {
        number.classList.remove('invalid');
        number.classList.add('valid')
    }else {
        number.classList.remove('valid');
        number.classList.add('invalid');
    }

    //validate digit length
    if(myInput.value.length > 8) {
        length.classList.remove('invalid');
        length.classList.add('valid');
    }else {
        length.classList.remove('valid');
        length.classList.add('invalid');
    }


}
function checkPassword() {
    let confirmPassword = document.getElementById('confirmPassword').value;
    let password = myInput.value;
    console.log(password,confirmPassword);
    let message = document.getElementById('password-message')

    if(password.length != 0) {
        if(password == confirmPassword) {
            message.textContent = 'password Matched';
        }else {
            message.textContent = 'password do not match'
        }
    }
}
