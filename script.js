// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('#menu-container'); // Correctly target the menu container

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open'); // Toggle the 'open' class to show/hide the menu
});
