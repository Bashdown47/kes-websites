const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.querySelector('#contactForm');
const formMessage = document.querySelector('#formMessage');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

contactForm.addEventListener('submit', event => {
  event.preventDefault();
  formMessage.textContent = 'Thanks — this demo form is ready to connect to an email service later.';
  contactForm.reset();
});
