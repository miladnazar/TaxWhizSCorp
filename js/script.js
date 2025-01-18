// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

hamburger.addEventListener('click', () => {
    mobileMenuOverlay.classList.toggle('open'); // Toggle the 'open' class
});
