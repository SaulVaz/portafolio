(() => {
  'use strict';
  const portfolio = window.Portfolio = window.Portfolio || {};
  portfolio.initLanguage = function () {
    const button = document.getElementById('langBtn');
    if (!button) return;
    const elements = document.querySelectorAll('[data-i18n]');
    let language = 'es';
    try {
      if (localStorage.getItem('portfolio-language') === 'en') language = 'en';
    } catch { /* El idioma funciona si el almacenamiento esta bloqueado. */ }
    function applyLanguage(nextLanguage) {
      language = nextLanguage;
      elements.forEach(element => {
        const entry = portfolio.translations[element.dataset.i18n];
        const content = entry?.[language] ?? entry?.es;
        if (content == null) return;
        // Algunos textos originales contienen strong y span.
        if (/<[a-z][\s\S]*>/i.test(content)) element.innerHTML = content;
        else element.textContent = content;
      });
      document.documentElement.lang = language;
      button.textContent = language === 'en' ? 'ES' : 'EN';
      button.setAttribute('aria-label', language === 'en' ? 'Switch language to Spanish' : 'Cambiar idioma a ingles');
      button.title = button.getAttribute('aria-label');
      document.getElementById('backToTop')?.setAttribute('aria-label', language === 'en' ? 'Back to top' : 'Volver arriba');
      try { localStorage.setItem('portfolio-language', language); } catch {}
      document.dispatchEvent(new Event('portfolio:layoutchange'));
    }
    button.addEventListener('click', () => applyLanguage(language === 'es' ? 'en' : 'es'));
    applyLanguage(language);
  };
})();
