// Fade-up animation on scroll
const sections = document.querySelectorAll('.fade-up');
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});
