/* ─── LOADER ───────────────────────────────────────── */
const loader = document.getElementById('loader');
if (loader) {
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 1400);
  });
}

/* ─── CUSTOM CURSOR ────────────────────────────────── */
const dot  = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');

if (dot && ring) {
  let mx = -100, my = -100, rx = -100, ry = -100;
  let raf;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  document.addEventListener('mouseleave', () => document.body.classList.add('cursor-hidden'));
  document.addEventListener('mouseenter', () => document.body.classList.remove('cursor-hidden'));

  const interactables = 'a, button, [data-hover], .gallery-item, .project-card, .filter-btn, .role-chip';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactables)) document.body.classList.add('cursor-hover');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(interactables)) document.body.classList.remove('cursor-hover');
  });

  function animCursor() {
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    raf = requestAnimationFrame(animCursor);
  }
  animCursor();
}

/* ─── NAV SCROLL STATE ─────────────────────────────── */
const nav = document.querySelector('nav');
if (nav) {
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ─── MOBILE NAV ───────────────────────────────────── */
const mobileBtn     = document.querySelector('.nav-mobile-btn');
const mobileOverlay = document.querySelector('.nav-mobile-overlay');
if (mobileBtn && mobileOverlay) {
  mobileBtn.addEventListener('click', () => {
    const open = mobileOverlay.classList.toggle('open');
    mobileBtn.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileOverlay.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileOverlay.classList.remove('open');
      mobileBtn.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ─── SCROLL REVEAL ────────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
}

/* ─── HERO TEXT ROTATOR ────────────────────────────── */
const rotator = document.getElementById('hero-rotate');
if (rotator) {
  const words = ['engineer', 'designer', 'artist'];
  let idx = 0;
  setInterval(() => {
    idx = (idx + 1) % words.length;
    rotator.style.opacity = '0';
    rotator.style.transform = 'translateY(10px)';
    setTimeout(() => {
      rotator.textContent = words[idx];
      rotator.style.opacity = '1';
      rotator.style.transform = 'translateY(0)';
    }, 300);
  }, 2200);
  rotator.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
}

/* ─── STATS COUNTER ────────────────────────────────── */
function animateCounter(el, target, suffix) {
  const duration = 1800;
  const start = performance.now();
  const update = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(eased * target).toLocaleString() + suffix;
    if (t < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const counters = document.querySelectorAll('[data-count]');
if (counters.length) {
  const counterIo = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const target = parseInt(e.target.dataset.count);
        const suffix = e.target.dataset.suffix || '';
        animateCounter(e.target, target, suffix);
        counterIo.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => counterIo.observe(el));
}

/* ─── ART GALLERY FILTER ───────────────────────────── */
const filterBtns = document.querySelectorAll('.filter-btn');
if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      document.querySelectorAll('.gallery-item').forEach(item => {
        const show = cat === 'all' || item.dataset.cat === cat;
        item.style.opacity    = show ? '1' : '0';
        item.style.display    = show ? 'block' : 'none';
      });
    });
  });
}

/* ─── LIGHTBOX ─────────────────────────────────────── */
const lightbox      = document.getElementById('lightbox');
const lightboxImg   = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

if (lightbox && lightboxImg) {
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.querySelector('img').src;
      lightboxImg.src = src;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });
  const closeLb = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };
  lightboxClose?.addEventListener('click', closeLb);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLb(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });
}

/* ─── WORK PAGE FILTER ─────────────────────────────── */
const workFilterBtns = document.querySelectorAll('.work-filter .filter-btn');
if (workFilterBtns.length) {
  workFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      workFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      document.querySelectorAll('.project-card').forEach(card => {
        const show = cat === 'all' || card.dataset.cat === cat;
        card.style.opacity = show ? '1' : '0.25';
        card.style.pointerEvents = show ? 'auto' : 'none';
      });
    });
  });
}

/* ─── MAGNETIC BUTTONS ─────────────────────────────── */
document.querySelectorAll('.btn-primary, .btn-nav').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top  + rect.height / 2);
    btn.style.transform = `translate(${dx * 0.18}px, ${dy * 0.18}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

/* ─── PAGE TRANSITION ──────────────────────────────── */
document.querySelectorAll('a[href]').forEach(a => {
  const href = a.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('http')) return;
  a.addEventListener('click', e => {
    e.preventDefault();
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    setTimeout(() => { window.location.href = href; }, 300);
  });
});
window.addEventListener('pageshow', () => {
  document.body.style.opacity = '1';
  document.body.style.transition = 'opacity 0.4s ease';
});
