import { SKILLS, PROJECTS, EXPERIENCE, SOCIAL } from './content.js';

/* Mark body as JS-ready so reveal animations can hide content. If this line
   never runs (e.g. file:// blocks module imports), CSS keeps content visible. */
document.body.classList.add('js-ready');

/* ---------- Theme ---------- */
const THEME_KEY = "ap_theme";
const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme === "light") {
  document.body.classList.add("light");
  themeToggle && (themeToggle.textContent = "◑");
} else {
  themeToggle && (themeToggle.textContent = "◐");
}

themeToggle?.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  localStorage.setItem(THEME_KEY, isLight ? "light" : "dark");
  themeToggle.textContent = isLight ? "◑" : "◐";
});

/* ---------- Year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Typed.js ---------- */
const typedEl = document.getElementById("typed");
if (typedEl && window.Typed) {
  new window.Typed("#typed", {
    strings: [
      "Anurag Pandey | AI/ML Engineer",
      "B.Tech CSE (AI/ML) | UPES Dehradun",
      "Building ML systems end-to-end",
      "Python • PyTorch • FastAPI"
    ],
    typeSpeed: 40,
    backSpeed: 22,
    backDelay: 1500,
    loop: true,
    smartBackspace: true,
    showCursor: true,
    cursorChar: "_",
  });
}

/* ---------- Particles background ---------- */
const canvas = document.getElementById("particles-canvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let w, h, particles;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  function initParticles() {
    const count = Math.min(110, Math.floor((w * h) / 16000));
    particles = new Array(count).fill(0).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.4 + 0.4,
      c: Math.random() < 0.33 ? "#00e5ff88" : (Math.random() < 0.66 ? "#8a5cff88" : "#00ff9c88")
    }));
  }

  function tick() {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c;
      ctx.fill();
    }
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 120 * 120) {
          const alpha = 1 - d2 / (120 * 120);
          ctx.strokeStyle = `rgba(158, 199, 255, ${alpha * 0.22})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    if (!prefersReduced) requestAnimationFrame(tick);
  }

  initParticles();
  if (!prefersReduced) tick(); else { /* single frame only */ ctx.clearRect(0,0,w,h); }
}

/* ---------- Render Skills ---------- */
(function renderSkills(){
  const grid = document.getElementById('skills-grid');
  if (!grid) return;
  grid.innerHTML = '';
  SKILLS.forEach(group => {
    const card = document.createElement('div');
    card.className = 'card glass skill-card';

    const head = document.createElement('div');
    head.className = 'skill-head';
    const icon = document.createElement('span');
    icon.className = 'skill-icon';
    icon.textContent = group.icon || '•';
    const h = document.createElement('h3');
    h.textContent = group.category;
    head.appendChild(icon);
    head.appendChild(h);
    card.appendChild(head);

    const chips = document.createElement('div');
    chips.className = 'chip-row';
    group.items.forEach(item => {
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = item;
      chips.appendChild(chip);
    });
    card.appendChild(chips);
    grid.appendChild(card);
  });
})();

/* ---------- Render Projects ---------- */
(function renderProjects(){
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = '';
  PROJECTS.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card glass project-card';

    const h = document.createElement('h3');
    h.textContent = p.name;
    card.appendChild(h);

    if (p.tagline) {
      const tag = document.createElement('p');
      tag.className = 'project-tagline';
      tag.textContent = p.tagline;
      card.appendChild(tag);
    }

    const d = document.createElement('p');
    d.className = 'muted project-desc';
    d.textContent = p.description;
    card.appendChild(d);

    const tags = document.createElement('div');
    tags.className = 'chip-row';
    p.tags.forEach(t => {
      const chip = document.createElement('span');
      chip.className = 'chip chip-tech';
      chip.textContent = t;
      tags.appendChild(chip);
    });
    card.appendChild(tags);

    const actions = document.createElement('div');
    actions.className = 'project-actions';
    if (p.repo) {
      const a = document.createElement('a');
      a.className = 'btn btn-outline btn-sm';
      a.href = p.repo;
      a.target = '_blank';
      a.rel = 'noreferrer';
      a.innerHTML = '<span class="btn-ico">⌥</span> Code';
      actions.appendChild(a);
    }
    if (p.demo) {
      const a = document.createElement('a');
      a.className = 'btn btn-primary btn-sm';
      a.href = p.demo;
      a.target = '_blank';
      a.rel = 'noreferrer';
      a.innerHTML = '↗ Visit Site';
      actions.appendChild(a);
    }
    card.appendChild(actions);

    grid.appendChild(card);
  });
})();

/* ---------- Render Experience Timeline ---------- */
(function renderExperience(){
  const root = document.getElementById('experience-timeline');
  if (!root) return;
  root.innerHTML = '';
  EXPERIENCE.forEach(item => {
    const node = document.createElement('div');
    node.className = 'tl-node glass';

    const head = document.createElement('div');
    head.className = 'tl-head';
    const role = document.createElement('h3');
    role.className = 'tl-role';
    role.textContent = item.role;
    const period = document.createElement('span');
    period.className = 'tl-period';
    period.textContent = item.period;
    head.appendChild(role);
    head.appendChild(period);
    node.appendChild(head);

    const company = document.createElement('div');
    company.className = 'tl-company';
    company.textContent = item.company;
    node.appendChild(company);

    if (item.bullets?.length) {
      const ul = document.createElement('ul');
      ul.className = 'tl-bullets';
      item.bullets.forEach(b => {
        const li = document.createElement('li');
        li.textContent = b;
        ul.appendChild(li);
      });
      node.appendChild(ul);
    }
    root.appendChild(node);
  });
})();

/* ---------- Set social links (defensive — already in HTML, but reaffirm) ---------- */
(function wireSocial(){
  const gh = document.getElementById('github-link');
  const li = document.getElementById('linkedin-link');
  if (gh) gh.href = SOCIAL.github;
  if (li) li.href = SOCIAL.linkedin;
})();

/* ---------- Scroll reveal ---------- */
(function reveal(){
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();

/* ---------- Smooth scroll for nav links ---------- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});
