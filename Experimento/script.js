const btnMobile = document.getElementById('btn-Mobile')

function toggleMenu(event){
    if(event.type ==='touchstart') event.preventDefault()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    console.log(btnMobile);
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);