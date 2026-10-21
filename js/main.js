// ---------- Portfolio filtering ----------
const filterChips = document.querySelectorAll('.filter-chip');
const projectCards = document.querySelectorAll('#project-grid .project-card');

filterChips.forEach(chip => {
  chip.addEventListener('click', () => {
    filterChips.forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');

    const filter = chip.dataset.filter;

    projectCards.forEach(card => {
      const tags = card.dataset.tags.split(' ');
      const show = filter === 'all' || tags.includes(filter);
      card.style.display = show ? '' : 'none';
    });
  });
});

// ---------- Active nav link on scroll ----------
const sections = document.querySelectorAll('.section[id]');
const navLinks = document.querySelectorAll('.sidebar__nav a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(section => observer.observe(section));

// ---------- Scroll reveal ("printing in" as content enters view) ----------
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  const revealSelector = '.project-card, .spec-list li, .offtopic__item, .detail-row, .project-grid > *';
  // NOTE: .detail-row is excluded from the trace/overflow-hidden treatment -
  // its children (e.g. the Normandia theme's washi-tape corner accents) rely
  // on overflowing the row's box, which reveal--trace's overflow:hidden would clip.
  // .spec-list li uses its own border-color transition instead (see CSS) -
  // more robust across browsers than an overlay bar at a computed offset.
  const traceSelector = '.project-card, .offtopic__item';
  const revealItems = document.querySelectorAll(revealSelector);

  revealItems.forEach(el => {
    el.classList.add('reveal');
    if (el.matches(traceSelector)) el.classList.add('reveal--trace');

    const siblings = Array.from(el.parentElement.children);
    const idx = siblings.indexOf(el);
    el.style.transitionDelay = `${Math.min(idx, 6) * 70}ms`;
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px' });

  // Tightly-packed list rows (e.g. .spec-list) are observed as one group via
  // their shared parent, instead of individually - a low-height row right at
  // the edge of the viewport can otherwise get a slightly different
  // intersection timing than its neighbors, so it never gets revealed.
  const grouped = new Set();
  revealItems.forEach(el => {
    if (el.matches('.spec-list li')) {
      grouped.add(el.parentElement);
    } else {
      revealObserver.observe(el);
    }
  });

  grouped.forEach(parent => {
    const groupObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          Array.from(parent.children).forEach(child => child.classList.add('is-visible'));
          groupObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px' });
    groupObserver.observe(parent);
  });
}

// ---------- Image galleries (slideshow with arrows/dots) ----------
document.querySelectorAll('[data-gallery]').forEach(gallery => {
  const track = gallery.querySelector('.gallery__track');
  const slides = Array.from(track.children);
  const prevBtn = gallery.querySelector('.gallery__arrow--prev');
  const nextBtn = gallery.querySelector('.gallery__arrow--next');
  const dotsWrap = gallery.querySelector('.gallery__dots');

  if (slides.length <= 1) {
    gallery.classList.add('has-one-slide');
    return;
  }

  let index = 0;

  const dots = slides.map((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'gallery__dot';
    dot.setAttribute('aria-label', `Go to image ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
    return dot;
  });

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, di) => d.classList.toggle('is-active', di === index));
  }

  // Auto-advance so visitors notice there is more than one slide. Runs only
  // while the gallery is on screen and the pointer isn't over it, restarts
  // after any manual interaction, and is skipped for reduced-motion users.
  const AUTO_DELAY = 5000;
  let autoTimer = null;
  let galleryInView = false;
  let hovering = false;

  function stopAuto() {
    clearTimeout(autoTimer);
    autoTimer = null;
  }
  function startAuto() {
    stopAuto();
    if (reduceMotion || !galleryInView || hovering) return;
    autoTimer = setTimeout(() => { goTo(index + 1); startAuto(); }, AUTO_DELAY);
  }

  prevBtn.addEventListener('click', (e) => { e.stopPropagation(); goTo(index - 1); startAuto(); });
  nextBtn.addEventListener('click', (e) => { e.stopPropagation(); goTo(index + 1); startAuto(); });
  dots.forEach(dot => dot.addEventListener('click', startAuto));

  gallery.addEventListener('mouseenter', () => { hovering = true; stopAuto(); });
  gallery.addEventListener('mouseleave', () => { hovering = false; startAuto(); });
  gallery.addEventListener('focusin', () => { hovering = true; stopAuto(); });
  gallery.addEventListener('focusout', () => { hovering = false; startAuto(); });

  new IntersectionObserver((entries) => {
    galleryInView = entries[0].isIntersecting;
    if (galleryInView) startAuto(); else stopAuto();
  }, { threshold: 0.5 }).observe(gallery);

  goTo(0);
});

// ---------- Scroll gallery autoplay (ping-pongs, pauses on manual scroll) ----------
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const RESUME_DELAY = 2500;
const EDGE_PAUSE = 900;

document.querySelectorAll('.scroll-gallery').forEach(gallery => {
  if (prefersReducedMotion) {
    gallery.classList.add('is-interactive');
    return;
  }

  let rafId = null;
  let resumeTimer = null;
  let edgeTimer = null;
  let inView = false;
  let running = false;
  let direction = 1;

  function step() {
    const atEnd = gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 1;
    const atStart = gallery.scrollLeft <= 0;

    // Rest a moment at each end before reversing, instead of bouncing
    // back immediately - a hard instant reverse reads as jittery pingpong.
    if ((direction === 1 && atEnd) || (direction === -1 && atStart)) {
      rafId = null;
      edgeTimer = setTimeout(() => {
        edgeTimer = null;
        direction *= -1;
        if (running && inView) rafId = requestAnimationFrame(step);
      }, EDGE_PAUSE);
      return;
    }

    gallery.scrollLeft += 0.7 * direction;
    rafId = requestAnimationFrame(step);
  }

  function play() {
    running = true;
    gallery.classList.remove('is-interactive');
    if (!rafId && !edgeTimer && inView) rafId = requestAnimationFrame(step);
  }

  function pause() {
    running = false;
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    if (edgeTimer) {
      clearTimeout(edgeTimer);
      edgeTimer = null;
    }
    gallery.classList.add('is-interactive');
  }

  function scheduleResume() {
    pause();
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(play, RESUME_DELAY);
  }

  // Only a genuinely horizontal gesture counts as "the user is scrolling
  // the gallery" - a vertical wheel/swipe over it is just page scrolling
  // passing through and must not pause the autoplay.
  gallery.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) scheduleResume();
  }, { passive: true });

  // Mouse only here - touch already has its own direction check below,
  // and pointerdown fires for touch too, which would bypass it.
  gallery.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse') scheduleResume();
  }, { passive: true });

  let touchStartX = 0;
  let touchStartY = 0;
  gallery.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  gallery.addEventListener('touchmove', (e) => {
    const dx = Math.abs(e.touches[0].clientX - touchStartX);
    const dy = Math.abs(e.touches[0].clientY - touchStartY);
    if (dx > dy) scheduleResume();
  }, { passive: true });

  // While paused, autoplay isn't touching scrollLeft, so any 'scroll' event
  // can only be user-driven (scrollbar drag, touch momentum) - keep pushing
  // the resume back until it's actually quiet again.
  gallery.addEventListener('scroll', () => {
    if (!rafId) scheduleResume();
  }, { passive: true });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      inView = entry.isIntersecting;
      if (inView) {
        play();
      } else {
        pause();
        clearTimeout(resumeTimer);
      }
    });
  }, { threshold: 0.2 });
  observer.observe(gallery);
});

// ---------- Videos: play only while visible (saves CPU/bandwidth) ----------
const autoVideos = document.querySelectorAll('video[autoplay]');
if (autoVideos.length) {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const v = entry.target;
      if (entry.isIntersecting) {
        const p = v.play();
        if (p) p.catch(() => {});
      } else {
        v.pause();
      }
    });
  }, { threshold: 0.1 });
  autoVideos.forEach(v => {
    v.preload = 'metadata';
    videoObserver.observe(v);
  });
}

// ---------- Project pages: "On this page" contents + back-to-top ----------
const projectHeadings = document.querySelectorAll('.detail-row__text h3, .role-block h3, .section > h3');
if (document.querySelector('.project-facts') && projectHeadings.length >= 3) {
  const toc = document.createElement('nav');
  toc.className = 'project-toc';
  toc.setAttribute('aria-label', 'On this page');
  toc.innerHTML = '<span class="project-toc__label">On this page</span>';
  projectHeadings.forEach((h, i) => {
    h.id = h.id || `sec-${i + 1}`;
    const a = document.createElement('a');
    a.href = `#${h.id}`;
    a.textContent = h.textContent.replace(/\s+/g, ' ').trim();
    toc.appendChild(a);
  });
  document.querySelector('.project-facts').after(toc);
}

if (document.querySelector('.project-facts')) {
  const topBtn = document.createElement('button');
  topBtn.type = 'button';
  topBtn.className = 'back-to-top';
  topBtn.setAttribute('aria-label', 'Back to top');
  topBtn.innerHTML = '&uarr;';
  topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(topBtn);
  window.addEventListener('scroll', () => {
    topBtn.classList.toggle('is-visible', window.scrollY > 800);
  }, { passive: true });
}

// ---------- Project pages: auto-hiding sidebar (tap to open on touch) ----------
const pageSidebar = document.querySelector('body.project-page .sidebar');
if (pageSidebar) {
  const canHover = window.matchMedia('(hover: hover)').matches;
  const isCollapsible = () => window.matchMedia('(min-width: 861px) and (max-width: 1279px)').matches;
  const closeSidebar = () => pageSidebar.classList.remove('is-open');
  if (!canHover) {
    pageSidebar.addEventListener('click', (e) => {
      if (isCollapsible() && !pageSidebar.classList.contains('is-open')) {
        e.preventDefault();
        pageSidebar.classList.add('is-open');
      }
    });
    document.addEventListener('click', (e) => {
      if (!pageSidebar.contains(e.target)) closeSidebar();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSidebar();
      if (pageSidebar.contains(document.activeElement)) document.activeElement.blur();
    }
  });
}

// ---------- 3D model viewer (Sketchfab embed, loaded only on click) ----------
const modelCards = document.querySelectorAll('.model-card');
if (modelCards.length) {
  const viewer = document.createElement('div');
  viewer.className = 'model-viewer';
  viewer.setAttribute('role', 'dialog');
  viewer.setAttribute('aria-modal', 'true');
  viewer.innerHTML = `
    <div class="model-viewer__panel">
      <div class="model-viewer__bar">
        <span class="model-viewer__title"></span>
        <span class="model-viewer__note">Viewer by Sketchfab</span>
        <a class="model-viewer__link" target="_blank" rel="noopener">Open on Sketchfab ↗</a>
        <button type="button" class="model-viewer__close" aria-label="Close viewer">&times;</button>
      </div>
      <div class="model-viewer__stage"></div>
    </div>`;
  document.body.appendChild(viewer);
  const viewerTitle = viewer.querySelector('.model-viewer__title');
  const viewerLink = viewer.querySelector('.model-viewer__link');
  const viewerStage = viewer.querySelector('.model-viewer__stage');
  let lastTrigger = null;

  function openViewer(card, trigger) {
    const uid = card.dataset.sketchfab;
    const title = card.dataset.title;
    lastTrigger = trigger;
    viewerTitle.textContent = title;
    viewerLink.href = `https://sketchfab.com/3d-models/${card.dataset.slug}-${uid}`;
    const iframe = document.createElement('iframe');
    iframe.title = `${title} - 3D model`;
    iframe.allow = 'autoplay; fullscreen; xr-spatial-tracking';
    iframe.src = `https://sketchfab.com/models/${uid}/embed?autostart=1&ui_theme=dark`;
    viewerStage.replaceChildren(iframe);
    viewer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    viewer.querySelector('.model-viewer__close').focus();
  }
  function closeViewer() {
    viewer.classList.remove('is-open');
    viewerStage.replaceChildren();
    document.body.style.overflow = '';
    if (lastTrigger) lastTrigger.focus();
  }

  modelCards.forEach(card => {
    card.querySelectorAll('.model-card__open').forEach(btn => {
      btn.addEventListener('click', () => openViewer(card, btn));
    });
  });
  viewer.addEventListener('click', (e) => { if (e.target === viewer) closeViewer(); });
  viewer.querySelector('.model-viewer__close').addEventListener('click', closeViewer);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && viewer.classList.contains('is-open')) closeViewer();
  });
}

// ---------- Before/after sliders ----------
document.querySelectorAll('[data-ba]').forEach(ba => {
  const range = ba.querySelector('.ba__range');
  const update = () => ba.style.setProperty('--pos', `${range.value}%`);
  range.addEventListener('input', update);
  update();
});

// ---------- "Sound" tag on videos that have audio (the sound plays in the zoomed view) ----------
document.querySelectorAll('video[data-audio]').forEach(v => {
  const box = v.closest('.project-card__media');
  if (!box || box.querySelector('.audio-tag')) return;
  const tag = document.createElement('span');
  tag.className = 'audio-tag';
  tag.setAttribute('aria-hidden', 'true');
  tag.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/></svg><span>Click for sound</span>';
  box.appendChild(tag);
});

// ---------- Lightbox (click an image or video to zoom) ----------
// Only media that isn't inside a link gets this - on the portfolio grid
// the thumbnail IS the "view project" link, so clicking it must still navigate.
const zoomableMedia = document.querySelectorAll('main img, main video');

if (zoomableMedia.length) {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<button class="lightbox-overlay__close" aria-label="Close">&times;</button><img alt=""><video muted loop playsinline controls></video>';
  document.body.appendChild(overlay);
  const overlayImg = overlay.querySelector('img');
  const overlayVideo = overlay.querySelector('video');
  const closeBtn = overlay.querySelector('.lightbox-overlay__close');

  function openLightbox(el) {
    if (el.tagName === 'VIDEO') {
      // a video can point to a higher-quality file for the zoomed view
      overlayVideo.src = el.dataset.full || el.currentSrc || el.src;
      overlayVideo.style.display = '';
      overlayImg.style.display = 'none';
      // videos marked data-audio start with sound (the click counts as a user gesture)
      overlayVideo.muted = !el.hasAttribute('data-audio');
      const started = overlayVideo.play();
      if (started) started.catch(() => { overlayVideo.muted = true; overlayVideo.play(); });
    } else {
      overlayImg.src = el.currentSrc || el.src;
      overlayImg.alt = el.alt || '';
      overlayImg.style.display = '';
      overlayVideo.style.display = 'none';
    }
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    overlayVideo.pause();
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlayVideo) return;
    closeLightbox();
  });
  closeBtn.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  zoomableMedia.forEach(el => {
    if (el.closest('a, button, .ba')) return;
    el.classList.add('is-zoomable');
    el.addEventListener('click', () => openLightbox(el));
  });
}
