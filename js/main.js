/* =========================================================
   BOSETTI — Main interactions
   - Theme toggle (dark/light) with persistence
   - Mobile menu
   - Smooth scroll close on nav-link click
   - Reveal on scroll
   ========================================================= */

(() => {
  const root = document.documentElement;
  const STORAGE_KEY = 'bosetti-theme';

  /* ----- THEME ----- */
  const themeToggle = document.getElementById('themeToggle');

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (_) {}
  };

  const initTheme = () => {
    let stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (_) {}
    if (stored === 'light' || stored === 'dark') {
      applyTheme(stored);
      return;
    }
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    applyTheme(prefersLight ? 'light' : 'dark');
  };

  initTheme();

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  /* ----- MOBILE MENU ----- */
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ----- REVEAL ON SCROLL ----- */
  const revealEls = document.querySelectorAll(
    '.section-head, .service-card, .phase, .project, .faq, .about-text, .about-card, .sustain-text, .sustain-visual, .contact-link, .hero-stats'
  );
  revealEls.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in-view'));
  }

  /* ----- ACCORDION: only one open at a time (optional) ----- */
  const faqs = document.querySelectorAll('.faq');
  faqs.forEach((faq) => {
    faq.addEventListener('toggle', () => {
      if (faq.open) {
        faqs.forEach((other) => { if (other !== faq) other.open = false; });
      }
    });
  });
})();
