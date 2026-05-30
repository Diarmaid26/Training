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
