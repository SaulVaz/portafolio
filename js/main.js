(() => {
  'use strict';
  const portfolio = window.Portfolio;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (window.AOS && !reduced) {
    window.AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 });
    document.addEventListener('portfolio:layoutchange', () => window.AOS.refresh());
  } else {
    // Mantener el contenido visible si la libreria externa no carga.
    document.querySelectorAll('[data-aos]').forEach(element => {
      element.removeAttribute('data-aos');
      element.removeAttribute('data-aos-delay');
    });
  }
  portfolio.initLanguage();
  portfolio.initScroll();
  portfolio.initProjects();
})();
