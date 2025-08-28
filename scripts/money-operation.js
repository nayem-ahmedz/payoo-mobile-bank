// default pincode
const userPinCode = 1234;

document.getElementById('add-money-button').addEventListener('click', function(event){
    event.preventDefault();
    const bankName = getInputValue('bank-name');
    const accountNumber = getInputValue('account-number');
    const amount = getInputNumber('amount');
    const pinCode = getInputNumber('pincode');
    
    if(bankName === 'select' || !accountNumber || !amount || !pinCode){
        alert('Please fill in the boxs with valid input');
        return;
    }
    if(accountNumber.length < 11){
        alert('Enter 11 Digit Account number');
        return;
    }
    if(pinCode !== userPinCode){
        alert('Invalid Pin');
        return;
    }
    const availableBal = getInnerText('available-balance');
    let updatedAvBal = Number(availableBal) + amount;
    setInnerText('available-balance', updatedAvBal);
});

document.getElementById('withdraw-button').addEventListener('click', function(e){
    e.preventDefault();
    const agentNumber = getInputValue('agent-number');
    const amount = getInputNumber('withdraw-amount');
    const pinCode = getInputNumber('pincode2');
    if(!agentNumber || !amount || !pinCode){
        alert('Please fill in the boxs with valid input');
        return;
    }
    if(agentNumber.length < 11){
        alert('Enter 11 digit Agent Number');
        return;
    }
    if(pinCode !== userPinCode){
        alert('Invalid Pin');
        return;
    }
    const availableBal = getInnerText('available-balance');
    let updatedAvBal = Number(availableBal) - amount;
    setInnerText('available-balance', updatedAvBal);
});

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
    return isNaN(numberValue) ? null : numberValue;
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