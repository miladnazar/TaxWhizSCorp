// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const menuLinks = document.querySelectorAll('#mobile-menu a');
const servicesLink = document.getElementById('services-link');
const servicesMenu = document.getElementById('services-submenu');

// Toggle mobile menu visibility
hamburger.addEventListener('click', () => {
    mobileMenuOverlay.classList.toggle('open');
});

// Close the menu when clicking anywhere outside or on a menu link
document.addEventListener('click', (event) => {
    const isClickInside = mobileMenuOverlay.contains(event.target) || hamburger.contains(event.target);

    if (!isClickInside) {
        mobileMenuOverlay.classList.remove('open');
    }
});

// Handle submenu toggle for "Services"
servicesLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default navigation
    servicesMenu.classList.toggle('open'); // Toggle submenu visibility
});
