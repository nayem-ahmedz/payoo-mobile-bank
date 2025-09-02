// default pincode
const userPinCode = 1234;

// add money system
document.getElementById('add-money-button').addEventListener('click', function(event){
    event.preventDefault();
    const bankName = getInputValue('bank-name'); // simply get the value
    const accountNumber = getInputValue('account-number');
    const amount = getInputNumber('amount'); // get the value in number
    const pinCode = getInputNumber('pincode');
    if(bankName === 'select'){
        alert('Select a bank');
        return;
    }
    if(validateInputs([accountNumber, amount, pinCode])){
        if(validateAccount(accountNumber) && validateAmount(amount) && validatePin(pinCode)){
            const availableBal = Number(getInnerText('available-balance')); // get available bal / DOM
            const updatedAvBal = availableBal + amount;
            setInnerText('available-balance', updatedAvBal); // set updated balance in DOM
            getElement('add-money-form').reset(); // resetting the form after succesfull operation
            alert(`Add Money $${amount} is succesfull, current balance is $${updatedAvBal}`);
        }
    }
});

// withdraw system
document.getElementById('withdraw-button').addEventListener('click', function(e){
    e.preventDefault();
    const agentNumber = getInputValue('agent-number');
    const amount = getInputNumber('withdraw-amount');
    const pin = getInputNumber('pincode2');
    if(validateInputs([agentNumber, amount, pin])){
        if(validateAccount(agentNumber) && validateAmount(amount) && validatePin(pin)){
            const availableBal = Number(getInnerText('available-balance'));
            if(availableBal >= amount){
                const updatedAvBal = availableBal - amount;
                setInnerText('available-balance', updatedAvBal);
                getElement('cash-out-form').reset();
                alert(`Withdraw $${amount} is successful`);
            } else{
                alert('Insufficient Balance!');
            }
        }
    }
});

// Transfer Money System
document.getElementById('transfer-button').addEventListener('click', function(event){
    event.preventDefault();
    const transferNumber = getInputValue('transfer-number');
    const amount = getInputNumber('transfer-amount');
    const pinCode = getInputNumber('pincode3');
    if(validateInputs([transferNumber, amount, pinCode])){
        if(validateAccount(transferNumber) && validateAmount(amount) && validatePin(pinCode)){
            const availableBal = Number(getInnerText('available-balance'));
            if(availableBal >= amount){
                const updatedAvBal = availableBal - amount;
                setInnerText('available-balance', updatedAvBal);
                getElement('transfer-money-form').reset();
                alert(`Amount $${amount} is succesfully Transferred to account no ${transferNumber}`);
            } else{
                alert('Insufficient Balance!');
            }
        }
    }
});

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

// validate amount
function validateAmount(amount){
    if(amount < 0){
        alert('negative amount is not allowed');
        return false;
    }
    return true;
}

// validate pin
function validatePin(pin){
    const userPinCode = 1234;
    if(pin === userPinCode){
        return true;
    }
    alert('Invalid Pin');
    return false;
}

// function to get element, input value and input value in Number
function getElement(id){
    const element = document.getElementById(id);
    return element;
}
function getInputValue(id){
    const element = getElement(id);
    return element.value.trim();
}
function getInputNumber(id){
    const value = getInputValue(id);
    const numberValue = Number(value);
    return isNaN(numberValue) ? -1 : numberValue;
}

// function to set and get Inner Text
function setInnerText(id, value){
    const element = getElement(id);
    element.innerText = value;
}
function getInnerText(id){
    const element = getElement(id);
    const value = element.innerText;
    return value;
}