(() => {
  'use strict';
  const portfolio = window.Portfolio = window.Portfolio || {};
  portfolio.initScroll = function () {
    const sections = [...document.querySelectorAll('section[id]')];
    const links = [...document.querySelectorAll('.nav-links a')];
    const progress = document.getElementById('scrollProgress');
    const backToTop = document.getElementById('backToTop');
    let pending = false;
    function update() {
      pending = false;
      const top = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.width = (height > 0 ? Math.min(100, Math.max(0, top / height * 100)) : 0) + '%';
      backToTop?.classList.toggle('visible', top > 600);
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + top;
        if (top >= sectionTop - 200) current = section.id;
      });
      links.forEach(link => {
        const active = link.getAttribute('href') === '#' + current;
        link.classList.toggle('is-active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
    function scheduleUpdate() {
      if (pending) return;
      pending = true;
      requestAnimationFrame(update);
    }
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('load', scheduleUpdate);
    document.addEventListener('portfolio:layoutchange', scheduleUpdate);
    backToTop?.addEventListener('click', () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    });
    update();
  };
})();
