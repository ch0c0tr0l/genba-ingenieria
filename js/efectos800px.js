if (window.matchMedia("(min-width: 401px)and (max-width: 800px)").matches) {
      function checkNosotrosVisible() {
        var section = document.getElementById('nosotros');
        var rect = section.getBoundingClientRect();
        var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        if (rect.top < windowHeight - 60) {
          section.classList.add('visible');
        }
      }
      document.addEventListener('scroll', checkNosotrosVisible);
      window.addEventListener('DOMContentLoaded', checkNosotrosVisible);
    }


    // Efecto con el scroll
document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.efecto-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('efecto-scroll-visible');
      }
    });
  }, { threshold: 0.2 });
  elements.forEach(el => observer.observe(el));
});