if (window.matchMedia("(max-width: 400px)").matches) {
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
function toggleSoluciones(show) {
  var extra = document.getElementById('soluciones-extra');
<<<<<<< HEAD
=======
  var verMasBtn = document.getElementById('vermas-btn');
  var verMenosBtn = document.getElementById('vermenos-btn');
>>>>>>> a961346413c2a24ec2c199d4c22501a4645edad6
  if (show === false || extra.style.display === 'block') {
    extra.style.opacity = 0;
    setTimeout(function() {
      extra.style.display = 'none';
<<<<<<< HEAD
=======
      verMasBtn.style.display = 'none';
       verMenosBtn.style.display = 'none';
>>>>>>> a961346413c2a24ec2c199d4c22501a4645edad6
    }, 700);
  } else {
    extra.style.display = 'block';
    setTimeout(function() {
      extra.style.opacity = 1;
<<<<<<< HEAD
    }, 10);
  }
}
=======
      verMasBtn.style.display = 'none';
       verMenosBtn.style.display = 'none';
    }, 10);
  }
}

>>>>>>> a961346413c2a24ec2c199d4c22501a4645edad6
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