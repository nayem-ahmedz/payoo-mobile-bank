const loginButton = document.getElementById('login-button');
// login button click event
loginButton.addEventListener('click', function(e){
    e.preventDefault();
    const result = fetchInput();
    result === true ? window.location.href = 'pages/home.html' : alert(result);
});

// fetch inputs
function fetchInput(){
    let inputMobile = document.getElementById('mobile').value.trim();
    let inputPin = document.getElementById('pin').value;
    if(inputMobile && inputPin){
        inputMobile = parseInt(inputMobile);
        inputPin = Number(inputPin);
        return validateCredintial(inputMobile, inputPin);
    } else{
        return 'Please fill in all fields';
    }
    
}

// validate credintial
function validateCredintial(inputMobile, inputPin){
    const id = 880123456789;
    const pincode = 1234;
    if(id === inputMobile){
        if(pincode === inputPin){
            return true;
        } else{
            return 'wrong pin';
        }
    } else{
        return 'invalid mobile number';
    }
}