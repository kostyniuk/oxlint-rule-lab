const themeButton = document.querySelector('[data-theme-toggle]');
let savedTheme;
try { savedTheme = localStorage.getItem('oxlint-course-theme'); } catch {}
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton.textContent = theme === 'dark' ? 'Use light theme' : 'Use black theme';
  themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
}
setTheme(savedTheme === 'light' ? 'light' : 'dark');
themeButton.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(theme);
  try { localStorage.setItem('oxlint-course-theme', theme); } catch {}
});
