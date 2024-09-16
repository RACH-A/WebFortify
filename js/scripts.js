// Mobile Menu Toggle
const mobileMenuIcon = document.querySelector('.mobile-menu i');
const navbar = document.querySelector('.navbar');

mobileMenuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
