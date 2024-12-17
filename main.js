const burgerMenu = document.querySelector('.burger-menu');
const topNav = document.querySelector('.topnav');

burgerMenu.addEventListener('click', () => {
  topNav.classList.toggle('active');
});