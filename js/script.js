 // Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const menuContainer = document.getElementById('menu-container');

hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    menuContainer.classList.toggle('open'); // Toggle the 'open' class
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

<script>
  // When an anchor link is clicked, scroll smoothly with an offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
<script>
                            
  // Function to scroll to the middle of a section
  function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
      // Scroll to the element and adjust position to middle
      window.scrollTo({
        top: element.offsetTop - (window.innerHeight / 2) + (element.offsetHeight / 2),
        behavior: 'smooth'
      });
    }
  }

  // Event listener for anchor clicks
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1); // Get target id
      scrollToElement(targetId); // Call function to scroll to middle of the section
    });
  });
</script>


