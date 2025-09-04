if(sessionStorage.getItem('isLoggedIn') !== 'true'){
    window.location.href = '../index.html';
}
document.querySelector('.log-out-button').addEventListener('click', () => {
    sessionStorage.clear();
    window.location.href = '../index.html';
});