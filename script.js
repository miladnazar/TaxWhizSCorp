// Mobile menu toggle functionality
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle?.addEventListener('change', function () {
    if (menuToggle.checked) {
        menu.style.display = 'flex'; // Show menu on mobile
    } else {
        menu.style.display = 'none'; // Hide menu on mobile
    }
});

// Dropdown functionality
const serviceItem = document.querySelector('#menu li:nth-child(2)'); // Target Services menu
const dropdown = serviceItem.querySelector('.dropdown');

serviceItem.addEventListener('mouseover', () => {
    dropdown.style.display = 'block';
});

serviceItem.addEventListener('mouseout', () => {
    dropdown.style.display = 'none';
});
