(() => {
  'use strict';
  const portfolio = window.Portfolio = window.Portfolio || {};
  portfolio.initProjects = function () {
    const buttons = [...document.querySelectorAll('.filter-btn')];
    const projects = [...document.querySelectorAll('.cv-project')];
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(item => {
          const active = item === button;
          item.classList.toggle('active', active);
          item.setAttribute('aria-pressed', String(active));
        });
        const filter = button.dataset.filter;
        projects.forEach(project => {
          const categories = (project.dataset.category || '').split(/\s+/);
          project.classList.toggle('hidden', filter !== 'all' && !categories.includes(filter));
        });
        document.dispatchEvent(new Event('portfolio:layoutchange'));
      });
    });
  };
})();
