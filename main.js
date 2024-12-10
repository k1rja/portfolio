import './style.css'
    const burger = document.querySelector('.burger-menu');
    const nav= document.querySelector('.main.nav');
    burger.addEventListener('click',()=>{
        nav.classList.toggle('open');
    })