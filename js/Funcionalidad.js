window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
  });
  document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navbar = document.getElementById('main-navbar');
    const navLinks = document.querySelectorAll(' .nav-link');

    let currentSection = '';

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentSection = section.id;
      }
    });

    navLinks.forEach(link => {
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.style.textShadow = '0px 0px 10px white, 0px 0px 20px white, 0px 0px 30px white';
      } else {
        link.style.textShadow = 'none';
      }
    });


  });
    window.addEventListener('scroll', function () {
    const navbar = document.getElementById('main-navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#0833a280'; // Blue with transparency
    } else {
    }
  });


function openImage(element) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    modalImage.src = element.querySelector('img').src;
    modal.style.display = 'flex';
  }

  function closeImage() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
  }