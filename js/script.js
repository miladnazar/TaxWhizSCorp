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

// Handling Form Submission
document.querySelector('#contact form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    
    // Get form data (you can use FormData or serialize the form inputs)
    const formData = new FormData(this); 

    // You can make an AJAX request to send the data to your PHP server if needed
    // Here we'll simulate a successful submission and show a thank you message

    // Example: You could use Fetch to send the form data to your PHP backend (info@taxwhiz.co)
    fetch('submit_form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())  // Assuming the server responds with JSON
    .then(data => {
        if (data.success) {
            // Show Thank You message on successful submission
            const thankYouMessage = document.createElement('div');
            thankYouMessage.textContent = "Thank you for your submission! We'll get back to you soon.";
            thankYouMessage.style.fontSize = '18px';
            thankYouMessage.style.color = '#28a745'; // Green color for success
            document.querySelector('#contact').appendChild(thankYouMessage);

            // Optionally, you can hide the form after submission
            document.querySelector('#contact form').style.display = 'none';
        } else {
            // Show error message if submission fails
            alert("Oops! Something went wrong. Please try again.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Oops! Something went wrong. Please try again.");
    });
});
