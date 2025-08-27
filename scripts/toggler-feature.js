const addMoneySection = document.getElementById('add-money-section');
const withdrawSection = document.getElementById('cash-out-section');

document.getElementById('add-money-toggler').addEventListener('click', function(e){
    addMoneySection.style.display = 'block';
    withdrawSection.style.display = 'none';
    // document.getElementById('add-money-toggler').classList.toggle('toggler-active');
});
document.getElementById('cash-out-toggler').addEventListener('click', function(e){
    withdrawSection.style.display = 'block';    
    addMoneySection.style.display = 'none';
    // document.getElementById('cash-out-toggler').classList.toggle('toggler-active');
});