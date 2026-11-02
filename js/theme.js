/**
 * Theme Switcher: Dark Blue & Light Themes
 * Portfolio DevTria - Muhammad Satria Nurulloh
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'devtria_theme';
  const THEME_DARK_BLUE = 'dark-blue';
  const THEME_LIGHT = 'light';

  // Get initial theme: saved in localStorage or default to dark-blue
  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === THEME_LIGHT || saved === THEME_DARK_BLUE) {
      return saved;
    }
    // Default to modern Dark Blue theme
    return THEME_DARK_BLUE;
  }

  // Apply theme to body and root
  function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    // Update toggle button accessibility label
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      const nextThemeLabel = theme === THEME_DARK_BLUE ? 'Ganti ke Tema Terang' : 'Ganti ke Tema Biru Gelap';
      toggleBtn.setAttribute('aria-label', nextThemeLabel);
      toggleBtn.setAttribute('title', nextThemeLabel);
    }

    // Dispatch event
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  }

  // Toggle between dark-blue and light
  function toggleTheme() {
    const current = document.body.getAttribute('data-theme') || THEME_DARK_BLUE;
    const next = current === THEME_LIGHT ? THEME_DARK_BLUE : THEME_LIGHT;
    applyTheme(next);

    // Show a subtle toast notice
    if (window.showToast) {
      const msg = next === THEME_DARK_BLUE ? 'Tema Biru Gelap aktif 🌙' : 'Tema Terang aktif ☀️';
      window.showToast(msg);
    }
  }

  // Init on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    const initialTheme = getPreferredTheme();
    applyTheme(initialTheme);

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }

    // Keyboard shortcut: Alt + T
    window.addEventListener('keydown', (e) => {
      if (e.altKey && (e.key === 't' || e.key === 'T')) {
        e.preventDefault();
        toggleTheme();
      }
    });
  });

  // Expose toggle globally
  window.toggleDevTriaTheme = toggleTheme;
  window.applyDevTriaTheme = applyTheme;
})();

