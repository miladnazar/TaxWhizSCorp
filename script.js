// Mobile menu toggle functionality
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('change', function () {
    if (menuToggle.checked) {
        menu.style.display = 'flex'; // Show menu on mobile
    } else {
        menu.style.display = 'none'; // Hide menu on mobile
    }
});
