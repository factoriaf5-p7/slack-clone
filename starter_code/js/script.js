const menuBtn = document.querySelector('.menu-btn');
const menuDropdown = document.querySelector('.menu-dropdown');

menuBtn.addEventListener('click', () => {
  menuDropdown.classList.toggle('open');
});