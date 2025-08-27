// default pincode
const userPinCode = 1234;

document.getElementById('add-money-button').addEventListener('click', function(event){
    event.preventDefault();
    const bankName = document.getElementById('bank-name').value;
    const accountNumber = document.getElementById('account-number').value.trim();
    const amount = Number(document.getElementById('amount').value);
    const pinCode = Number(document.getElementById('pincode').value);
    
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
    const availableBal = document.getElementById('available-balance');
    let updatedAvBal = Number(availableBal.innerText) + amount;
    availableBal.innerText = updatedAvBal;
});

document.getElementById('withdraw-button').addEventListener('click', function(e){
    e.preventDefault();
    const agentNumber = document.getElementById('agent-number').value.trim();
    const amount = Number(document.getElementById('withdraw-amount').value);
    const pinCode = Number(document.getElementById('pincode2').value);
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
    const availableBal = document.getElementById('available-balance');
    let updatedAvBal = Number(availableBal.innerText) - amount;
    availableBal.innerText = updatedAvBal;
});