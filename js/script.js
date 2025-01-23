// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const menuContainer = document.getElementById('menu-container');

hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    menuContainer.classList.toggle('open'); // Toggle the 'open' class
});

// Smooth Scrolling
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active Link Highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });

    // Fade in the Mission image when it comes into view
    const missionImage = document.querySelector('#mission img');
    const imagePosition = missionImage.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (imagePosition < screenPosition) {
        missionImage.classList.add('visible'); // Trigger fade-in
    }
});
