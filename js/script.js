// Smooth fade-up animation for sections on scroll
const sections = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (top < triggerPoint) {
      section.classList.add('visible');
    }
  });
});
