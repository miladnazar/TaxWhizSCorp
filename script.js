// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const menuContainer = document.getElementById('menu-container');

hamburger.addEventListener('click', () => {
    menuContainer.classList.toggle('open'); // Toggle visibility of menu
});
