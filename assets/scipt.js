/* ================================================
   Theme Toggle (dark / light)
   ================================================ */
(function () {
  const html  = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const STORAGE_KEY = 'jz-theme';

  // Restore saved theme (加 try-catch 防止报错)
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) html.setAttribute('data-theme', saved);
  } catch (e) {}

  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
    });
  }

  /* ================================================
     Hamburger / Sidebar (mobile)
     ================================================ */
  const hamburger = document.getElementById('hamburger');
  const sidebar   = document.getElementById('sidebar');
  const overlay   = document.getElementById('overlay');

  function closeSidebar() {
    sidebar.classList.remove('open');
    hamburger.classList.remove('open');
    overlay.classList.remove('show');
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isOpen = sidebar.classList.toggle('open');
      hamburger.classList.toggle('open');
      overlay.classList.toggle('show', isOpen);
    });
  }

  if (overlay) overlay.addEventListener('click', closeSidebar);

  // Close sidebar on link click (mobile)
  document.querySelectorAll('.sidebar nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) closeSidebar();
    });
  });
})();