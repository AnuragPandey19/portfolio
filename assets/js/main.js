import { SKILLS, PROJECTS, EXPERIENCE, EDUCATION, SOCIAL } from './content.js';

/* Mark body as JS-ready (graceful degradation for .reveal animations) */
document.body.classList.add('js-ready');

/* ---------- Theme (works for sidebar + topbar toggles) ---------- */
const THEME_KEY = "ap_theme";
const themeToggles = [
  document.getElementById('theme-toggle'),
  document.getElementById('theme-toggle-mobile')
].filter(Boolean);

function applyTheme(isLight) {
  document.body.classList.toggle('light', isLight);
  themeToggles.forEach(t => t && (t.textContent = isLight ? '◑' : '◐'));
  localStorage.setItem(THEME_KEY, isLight ? 'light' : 'dark');
}
applyTheme(localStorage.getItem(THEME_KEY) === 'light');
themeToggles.forEach(btn => btn.addEventListener('click', () => {
  applyTheme(!document.body.classList.contains('light'));
}));

/* ---------- Year ---------- */
const y = new Date().getFullYear();
document.querySelectorAll('#year, #year-2').forEach(el => el.textContent = y);

/* ---------- Typed.js ---------- */
const typedEl = document.getElementById('typed');
if (typedEl && window.Typed) {
  new window.Typed('#typed', {
    strings: [
      'AI/ML Engineer',
      'Open to SDE roles',
      'B.Tech CSE (AI/ML) · UPES Dehradun',
      'Python · PyTorch · Java · FastAPI',
      'Open to internships, jobs &amp; projects'
    ],
    typeSpeed: 40,
    backSpeed: 22,
    backDelay: 1500,
    loop: true,
    smartBackspace: true,
    showCursor: true,
    cursorChar: '_'
  });
}

/* ---------- Render Skills ---------- */
(function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;
  grid.innerHTML = '';
  SKILLS.forEach(group => {
    const card = document.createElement('div');
    card.className = 'skill-card';

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
      chip.className = 'chip chip-tech';
      chip.textContent = item;
      chips.appendChild(chip);
    });
    card.appendChild(chips);
    grid.appendChild(card);
  });
})();

/* ---------- Render Projects ---------- */
(function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = '';
  PROJECTS.forEach(p => {
    const card = document.createElement('article');
    card.className = 'project-card';

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
    d.className = 'project-desc';
    d.textContent = p.description;
    card.appendChild(d);

    if (p.highlights?.length) {
      const ul = document.createElement('ul');
      ul.className = 'project-highlights';
      p.highlights.forEach(h => {
        const li = document.createElement('li');
        li.textContent = h;
        ul.appendChild(li);
      });
      card.appendChild(ul);
    }

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
      a.textContent = p.repoLabel || '⌥ Code';
      actions.appendChild(a);
    }
    if (p.demo) {
      const a = document.createElement('a');
      a.className = 'btn btn-primary btn-sm';
      a.href = p.demo;
      a.target = '_blank';
      a.rel = 'noreferrer';
      a.textContent = '↗ Visit Site';
      actions.appendChild(a);
    }
    card.appendChild(actions);

    grid.appendChild(card);
  });
})();

/* ---------- Render Experience ---------- */
(function renderExperience() {
  const root = document.getElementById('experience-timeline');
  if (!root) return;
  root.innerHTML = '';
  EXPERIENCE.forEach(item => {
    const node = document.createElement('div');
    node.className = 'tl-node';

    const head = document.createElement('div');
    head.className = 'tl-head';
    const role = document.createElement('h3'); role.className = 'tl-role'; role.textContent = item.role;
    const period = document.createElement('span'); period.className = 'tl-period'; period.textContent = item.period;
    head.appendChild(role); head.appendChild(period);
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

/* ---------- Render Education ---------- */
(function renderEducation() {
  const root = document.getElementById('education-timeline');
  if (!root) return;
  root.innerHTML = '';
  EDUCATION.forEach(item => {
    const node = document.createElement('div');
    node.className = 'tl-node';

    const head = document.createElement('div');
    head.className = 'tl-head';
    const role = document.createElement('h3'); role.className = 'tl-role'; role.textContent = item.degree;
    const period = document.createElement('span'); period.className = 'tl-period'; period.textContent = item.period;
    head.appendChild(role); head.appendChild(period);
    node.appendChild(head);

    const company = document.createElement('div');
    company.className = 'tl-company';
    company.textContent = item.institution;
    node.appendChild(company);

    if (item.detail) {
      const detail = document.createElement('div');
      detail.className = 'tl-detail';
      detail.textContent = item.detail;
      node.appendChild(detail);
    }

    if (item.highlights?.length) {
      const ul = document.createElement('ul');
      ul.className = 'tl-bullets';
      item.highlights.forEach(h => {
        const li = document.createElement('li');
        li.textContent = h;
        ul.appendChild(li);
      });
      node.appendChild(ul);
    }
    root.appendChild(node);
  });
})();

/* ---------- Sidebar mobile drawer ---------- */
(function sidebarDrawer() {
  const sidebar = document.getElementById('sidebar');
  const toggle = document.getElementById('sidebar-toggle');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (!sidebar || !toggle) return;

  function setOpen(open) {
    sidebar.classList.toggle('is-open', open);
    backdrop.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  toggle.addEventListener('click', () => {
    setOpen(!sidebar.classList.contains('is-open'));
  });
  backdrop.addEventListener('click', () => setOpen(false));

  // close drawer on nav-link click (mobile only)
  sidebar.querySelectorAll('.sb-nav a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 980px)').matches) setOpen(false);
    });
  });

  // ESC closes
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') setOpen(false);
  });
})();

/* ---------- Active section observer (highlight current nav link) ---------- */
(function activeSectionObserver() {
  const links = document.querySelectorAll('.sb-nav a[href^="#"]');
  if (!links.length || !('IntersectionObserver' in window)) return;

  const linkMap = new Map();
  links.forEach(link => {
    const id = link.getAttribute('href').slice(1);
    linkMap.set(id, link);
  });

  const sections = [...linkMap.keys()]
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('is-active'));
        const link = linkMap.get(entry.target.id);
        if (link) link.classList.add('is-active');
      }
    });
  }, {
    rootMargin: '-40% 0px -50% 0px',
    threshold: 0
  });

  sections.forEach(s => observer.observe(s));
})();

/* ---------- Scroll reveal ---------- */
(function reveal() {
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

/* ---------- Smooth scroll for anchor links ---------- */
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
