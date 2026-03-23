import '../style.css';

// ── Scroll-triggered fade-up animations ──────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-up');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll<HTMLElement>('.scard, .bcard, .cta__box').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  observer.observe(el);
});

// ── Navbar scroll behavior ───────────────────────────
const nav = document.querySelector<HTMLElement>('.nav')!;

window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 40);
});