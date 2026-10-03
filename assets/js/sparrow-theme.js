(() => {
  const root = document.documentElement;
  const preference = window.matchMedia('(prefers-color-scheme: light)');
  let saved;
  try { saved = localStorage.getItem('sparrow-theme'); } catch (_) {}
  let explicit = saved === 'light' || saved === 'dark';
  const apply = theme => {
    root.dataset.sparrowTheme = theme;
    const button = document.querySelector('.sp-theme-toggle');
    if (button) {
      button.hidden = false;
      button.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
      button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
      button.setAttribute('aria-pressed', String(theme === 'light'));
    }
  };
  apply(explicit ? saved : preference.matches ? 'light' : 'dark');
  preference.addEventListener('change', event => {
    if (!explicit) apply(event.matches ? 'light' : 'dark');
  });
  document.addEventListener('DOMContentLoaded', () => {
    apply(root.dataset.sparrowTheme);
    document.querySelector('.sp-theme-toggle').addEventListener('click', () => {
      const theme = root.dataset.sparrowTheme === 'dark' ? 'light' : 'dark';
      explicit = true;
      apply(theme);
      try { localStorage.setItem('sparrow-theme', theme); } catch (_) {}
    });
  });
})();
