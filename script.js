// Add smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const targetId = link.getAttribute('href').replace('#', '');
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
