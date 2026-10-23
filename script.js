const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  menuButton.textContent = isOpen ? '×' : '☰';
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) { menuButton.textContent = '☰'; menuButton.setAttribute('aria-label', 'Ouvrir le menu'); }
}));
document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('quote-form');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const phone = String(data.get('phone') || '').trim();
  const service = String(data.get('service') || '').trim();
  const message = String(data.get('message') || '').trim();
  const text = `Bonjour CC.Couverture, je souhaite un devis gratuit.\nNom : ${name}\nTéléphone : ${phone}\nPrestation : ${service}\nDemande : ${message}`;
  const status = document.getElementById('form-status');
  status.textContent = 'Votre demande va être préparée dans WhatsApp. Si WhatsApp ne fonctionne pas, appelez directement le 06 95 17 53 90.';
  const whatsappUrl = `https://wa.me/33695175390?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});
