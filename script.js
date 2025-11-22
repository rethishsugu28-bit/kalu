// Get the necessary DOM elements
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.getElementById('main-nav');

// Add an event listener for the button click
menuToggle.addEventListener('click', function() {
    // Toggle the 'active' class on the navigation menu
    mainNav.classList.toggle('active');
});

// Optional: Close the menu if a link is clicked on mobile
const navLinks = document.querySelectorAll('.main-nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Only attempt to close if the menu is open (has the 'active' class)
        if (mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
        }
    });
});