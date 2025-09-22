window.onload = function() {
    const currentPage = window.location.pathname;
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  };

const burger = document.getElementById('burger');
const overlay = document.getElementById('menu-overlay');
const closeBtn = document.getElementById('overlay-close');

function openMenu() {
  overlay.classList.add('open');
  document.body.classList.add('overflow-hidden');
  burger.setAttribute('aria-expanded', 'true');
  overlay.setAttribute('aria-hidden', 'false');
}

function closeMenu() {
  overlay.classList.remove('open');
  document.body.classList.remove('overflow-hidden');
  burger.setAttribute('aria-expanded', 'false');
  overlay.setAttribute('aria-hidden', 'true');
}

burger.addEventListener('click', () => {
  const open = overlay.classList.contains('open');
  open ? closeMenu() : openMenu();
});

closeBtn.addEventListener('click', closeMenu);

overlay.addEventListener('click', e => {
  if (e.target === overlay) closeMenu();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});


