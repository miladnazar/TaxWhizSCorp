// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const menuLinks = document.querySelectorAll('#mobile-menu a');

// Toggle mobile menu visibility
hamburger.addEventListener('click', () => {
    mobileMenuOverlay.classList.toggle('open');
});

// Close the menu when clicking on a link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('open');
    });
});
