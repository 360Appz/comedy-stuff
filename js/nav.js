// ============================================================
// NAV.JS — Shared responsive navigation logic
// Mobile: burger drawer, backdrop overlay, close on link/Escape
// Desktop: static nav-links always visible
// ============================================================

function initNav() {
  const burger = document.getElementById('burgerBtn');
  const drawer = document.getElementById('mobileNav');
  if (!burger || !drawer) return;

  // Create backdrop overlay once
  let overlay = document.getElementById('navOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'navOverlay';
    overlay.className = 'nav-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(overlay);
  }

  function openNav() {
    drawer.classList.add('open');
    burger.classList.add('open');
    overlay.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    drawer.classList.remove('open');
    burger.classList.remove('open');
    overlay.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Burger click — toggle
  burger.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) closeNav(); else openNav();
    if (typeof SOUNDS !== 'undefined') SOUNDS.click();
  });

  // Close when tapping a nav link
  drawer.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // Close when clicking the backdrop
  overlay.addEventListener('click', closeNav);

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) closeNav();
  });
}
