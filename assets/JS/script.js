let bntMobile = document.getElementById('btn-mobile');
bntMobile.addEventListener('click', toggleMenu);
bntMobile.addEventListener('touchstart', toggleMenu);

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();

    let nav = document.getElementById('nav');
    nav.classList.toggle('active');

    let active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    
    if (active){
        event.currentTarget.setAttribute('arial-label', 'Fechar Menu');
    }
    else{
        event.currentTarget.setAttribute('arial-label', 'Abrir Menue');
    }
}


