const hamburger = document.getElementById('handburger');
const navUl= document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUl.classList.togle('show');

})