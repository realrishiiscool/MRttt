function setThemeColors(bg, text, accent) {
  const root = document.documentElement;
  root.style.setProperty('--bg-color', bg);
  root.style.setProperty('--text-color', text);
  root.style.setProperty('--accent-color', accent);
  localStorage.setItem('theme', JSON.stringify({ bg, text, accent }));
}

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem('theme');
  if (saved) {
    const { bg, text, accent } = JSON.parse(saved);
    setThemeColors(bg, text, accent);
  }
});
