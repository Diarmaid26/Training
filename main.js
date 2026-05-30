const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved === 'light') { document.body.classList.add('light'); toggle.textContent = '🌙'; }

toggle.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light');
  toggle.textContent = isLight ? '🌙' : '☀️';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
const btn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  btn.disabled = true;
  btn.textContent = 'Sending…';
  status.className = 'form-status';
  status.textContent = '';

  // Swap this fetch() for your actual form endpoint (Formspree, Netlify Forms, etc.)
  await new Promise(r => setTimeout(r, 900));

  status.textContent = "Thanks! I'll get back to you soon.";
  status.className = 'form-status success';
  form.reset();
  btn.disabled = false;
  btn.textContent = 'Send message';
});
