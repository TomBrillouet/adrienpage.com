window.onload = function() {
    const currentPage = window.location.pathname;
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  };

  // mobile-menu.js
const burger = document.getElementById('burger');
const overlay = document.getElementById('menu-overlay');
const closeBtn = document.getElementById('overlay-close');

function openMenu(){
  overlay.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  burger.setAttribute('aria-expanded','true');
  overlay.setAttribute('aria-hidden','false');
}
function closeMenu(){
  overlay.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
  burger.setAttribute('aria-expanded','false');
  overlay.setAttribute('aria-hidden','true');
}

burger.addEventListener('click', () => {
  const open = !overlay.classList.contains('hidden');
  open ? closeMenu() : openMenu();
});
closeBtn.addEventListener('click', closeMenu);
// Fermer si clic sur le fond
overlay.addEventListener('click', e => { if(e.target === overlay) closeMenu(); });
// Échapper
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeMenu(); });
