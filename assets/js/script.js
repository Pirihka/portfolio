
// Escribiendo...
var typed = new Typed('#type-it', {
  strings: ['Paloma <br>González'], 
  // , 'texto2'
  typeSpeed: 80,
});

// navbar sroll
$.scrollIt({
  easing: 'linear',      // the easing function for animation
  topOffset: -70,           // offste (in px) for fixed top navigation
  scrollTime: 600,
});


document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section[data-scroll-index]');
  const navItems = document.querySelectorAll('[data-scroll-nav]');

  function onScroll() {
    let scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionIndex = section.getAttribute('data-scroll-index');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navItems.forEach(navItem => {
          navItem.classList.remove('active');
          if (navItem.getAttribute('data-scroll-nav') === sectionIndex) {
            navItem.classList.add('active');
          }
        });
      }
    });
  }

  function onClickNavItem(event) {
    event.preventDefault();
    const targetIndex = event.target.getAttribute('data-scroll-nav');
    const targetSection = document.querySelector('section[data-scroll-index="${targetIndex}"]');

    if (targetSection) {
      const targetPosition = targetSection.offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  navItems.forEach(navItem => {
    navItem.addEventListener('click', onClickNavItem);
  });

  window.addEventListener('scroll', onScroll);
  onScroll(); // Llamar a la función para establecer la sección activa al cargar la página
});