// reusuable -> functional approach
// hide all form section and show one specific section
const forms = document.getElementsByClassName('forms');
function showForm(id){
    for(const form of forms){
        form.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}

// active toggle button
const allTogglers = document.getElementsByClassName('toggler'); // all the toggler buttons
function activeToggler(id){
    for(const toggler of allTogglers){
        toggler.classList.remove('active-toggler'); // first remove .active from all
    }
    document.getElementById(id).classList.add('active-toggler'); // then add .active to clicked one
}

// click event listener in all toggler buttons
document.getElementById('add-money-toggler').addEventListener('click', function(){
    showForm('add-money-section');
    activeToggler('add-money-toggler');
});
document.getElementById('cash-out-toggler').addEventListener('click', function(){
    showForm('cash-out-section');
    activeToggler('cash-out-toggler');
});
document.getElementById('transfer-toggler').addEventListener('click', function(){
    showForm('transfer-section');
    activeToggler('transfer-toggler');
});
document.getElementById('bonus-toggler').addEventListener('click', function(){
    showForm('bonus-section');
    activeToggler('bonus-toggler');
});
document.getElementById('bill-toggler').addEventListener('click', function(){
    showForm('bill-section');
    activeToggler('bill-toggler');
});
document.getElementById('transaction-toggler').addEventListener('click', function(){
    showForm('transaction-section');
    activeToggler('transaction-toggler');
});


/* unsolved code : event delegation approach
const forms = document.getElementsByClassName('forms');

const toggleMenue = document.querySelector('.toggle-menue');
toggleMenue.addEventListener('click', function(e){
    if(e.target.classList.contains('toggler') || e.target.parentNode.classList.contains('toggler')){
        for(const form of forms){
            form.style.display = 'none';
        }
    }
});
*/
/*
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
*/