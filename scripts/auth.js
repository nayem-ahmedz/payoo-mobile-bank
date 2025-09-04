// login process
const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', function(e){
    e.preventDefault();
    let inputMobile = getInputValue('mobile'); // getting input value.trim()
    let inputPin = getInputValue('pin');
    if(inputMobile && inputPin){
        if(validateAccount(inputMobile)){
            inputPin = Number(inputPin);
            if(validateCredintial(inputMobile, inputPin)){
                const userID = localStorage.getItem('name') || 'Guest';
                alert(`Welcome ${userID}`);
                sessionStorage.setItem('isLoggedIn', 'true');
                window.location.href = 'pages/home.html';
            }
        }
    } else{
        alert('Please fill in all fields');
    }
});


// register process
document.getElementById('regi-button').addEventListener('click', function(e){
    e.preventDefault();
    const name = getInputValue('name');
    const regiMobile = getInputValue('regi-mobile');
    const pin = getInputNumber('regi-pin');
    const pinConfirm = getInputNumber('regi-pin2');
    if(validateInputs([name, regiMobile, pin, pinConfirm])){
        if(validateAccount(regiMobile) && validatePin(pin) && isPinMatched(pin, pinConfirm)){
            localStorage.setItem('name', name.split(' ')[0]);
            localStorage.setItem('mobile', regiMobile);
            localStorage.setItem('pin', pin);
            alert('Succesfully Registered');
            showLogin();
        }
    }
})

// validate credintial
function validateCredintial(account, pin){
    const storedMobile = localStorage.getItem('mobile') || '';
    const storedPin = Number(localStorage.getItem('pin') || '');
    if(storedMobile === account){
        if(storedPin === pin){
            return true;
        } else{
            alert('wrong pin');
            return false;
        }
    } else{
        alert('invalid mobile number');
        return false;
    }
}

// get element
function getInputValue(id){
    const element = document.getElementById(id).value.trim();
    return element;
}
function getInputNumber(id){
    const number = Number(getInputValue(id));
    return isNaN(number) ? -1 : number;
}

// validate input
function validateInputs(inputs){
    for(const input of inputs){
        if(!input){
            alert('Please fill in the boxs with valid input ');
            return false;
        }
    }
    return true;
}

// validate account nubmer
function validateAccount(number){
    if(number.length < 11){
        alert('Enter 11 digit Agent Number')
        return false;
    }
    for(const digit of number){
        if(digit < '0' || digit > '9'){
            alert('account number should be numeric');
            return false;
        }
    }
    return true;
}

// validate Pin(digits)
function validatePin(pin){
    const key = String(pin);
    if(key.length < 4){
        alert('Pin should be 4 digits');
        return false;
    }
    return true;
}

// pin confirm
function isPinMatched(pin1, pin2){
    if(pin1 === pin2){
        return true;
    }
    alert('Pin Number mismatch!');
    return false;
}



// toggle login and register form
const loginForm = document.querySelector('.login-form');
const signUpForm = document.querySelector('.regi-form');
function showSignUp(){
    loginForm.style.display = 'none';
    signUpForm.style.display = 'block';
    signUpForm.reset();
}
function showLogin(){
    signUpForm.style.display = 'none';
    loginForm.style.display = 'block';
    loginForm.reset();
}