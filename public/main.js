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

  try {
    const res = await fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      }),
    });

    if (res.ok) {
      status.textContent = "Thanks! I'll get back to you soon.";
      status.className = 'form-status success';
      form.reset();
    } else {
      throw new Error();
    }
  } catch {
    status.textContent = 'Something went wrong. Please try again.';
    status.className = 'form-status error';
  }

  btn.disabled = false;
  btn.textContent = 'Send message';
});
