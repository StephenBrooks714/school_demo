function changeBg(){
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('bg-light-gradient');
    } else {
        navbar.classList.remove('bg-light-gradient');
    }
}

window.addEventListener('scroll', changeBg);

function showMenu() {
    if(document.querySelector('.dropdown-items').style.display === 'block') {
        document.querySelector('.dropdown-items').style.display = 'none';
    } else {
        document.querySelector('.dropdown-items').style.display = 'block';
    }
}

function closeMenu() {
    document.querySelector('.dropdown-items').style.display = 'none';
}