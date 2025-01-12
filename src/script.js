// JavaScript for interactivity

// 1. Navbar Toggle for Small Screens
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
});

// 2. Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1); // Get target ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 3. Image Modal for Profile or Hobbies
const images = document.querySelectorAll('.profile img, .hobby-item img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal img');
const modalClose = document.querySelector('.modal-close');

images.forEach(image => {
    image.addEventListener('click', () => {
        modal.classList.add('active');
        modalImg.src = image.src;
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
});
