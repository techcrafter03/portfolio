// ── MOBILE NAV TOGGLE ──────────────────────────────────────────────────────
const navMenu = document.querySelector('.nav-menu');
const navBrand = document.querySelector('.nav-brand');

// Create hamburger button for mobile
const hamburger = document.createElement('button');
hamburger.classList.add('hamburger');
hamburger.innerHTML = '&#9776;';
hamburger.style.cssText = `
  display: none;
  background: none;
  border: none;
  color: inherit;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 4px 8px;
`;
document.querySelector('.navbar .container').appendChild(hamburger);

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('nav-open');
});

// Close nav when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('nav-open');
  });
});

// Show hamburger on mobile
function checkMobile() {
  if (window.innerWidth <= 768) {
    hamburger.style.display = 'block';
  } else {
    hamburger.style.display = 'none';
    navMenu.classList.remove('nav-open');
  }
}
checkMobile();
window.addEventListener('resize', checkMobile);

// ── SMOOTH SCROLLING ───────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── ACTIVE NAV LINK ON SCROLL ──────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

function highlightNavLink() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}
window.addEventListener('scroll', highlightNavLink);

// ── STICKY NAVBAR SHADOW ───────────────────────────────────────────────────
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ── TYPING EFFECT IN HERO ──────────────────────────────────────────────────
const titles = [
  "System Integration Enthusiast",
  "Linux & Bash Developer",
  "IoT Engineer on Raspberry Pi",
  "Ausbildung Candidate 🇩🇪"
];

let i = 0, j = 0, isDeleting = false;
const el = document.querySelector('.subtitle');

function type() {
  if (!el) return;
  const current = titles[i];
  if (isDeleting) {
    el.textContent = current.substring(0, j--);
  } else {
    el.textContent = current.substring(0, j++);
  }
  if (!isDeleting && j === current.length + 1) {
    isDeleting = true;
    setTimeout(type, 1800);
    return;
  }
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % titles.length;
  }
  setTimeout(type, isDeleting ? 45 : 95);
}

// Start typing after page loads
window.addEventListener('load', () => {
  setTimeout(type, 600);
});

// ── SCROLL FADE-IN ANIMATIONS ──────────────────────────────────────────────
const animatedSections = document.querySelectorAll(
  '.about, .video-section, .skills, .projects, .why-me, .contact'
);

// Set initial state
animatedSections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

animatedSections.forEach(section => sectionObserver.observe(section));

// ── PROJECT CARD HOVER LIFT ────────────────────────────────────────────────
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-6px)';
    card.style.transition = 'transform 0.25s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// ── WHY-ME CARD HOVER ─────────────────────────────────────────────────────
document.querySelectorAll('.why-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-4px)';
    card.style.transition = 'transform 0.25s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// ── CURRENT YEAR IN FOOTER ────────────────────────────────────────────────
const yearEl = document.querySelector('.footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
