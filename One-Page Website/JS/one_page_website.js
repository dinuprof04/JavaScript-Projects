// Build lightbox container once
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.setAttribute('role', 'dialog');
lightbox.setAttribute('aria-modal', 'true');
lightbox.innerHTML = `
  <div class="lightbox__dialog">
    <button class="lightbox__close" aria-label="Close">Close</button>
    <button class="lightbox__btn lightbox__btn--prev" aria-label="Previous">&#10094;</button>
    <img class="lightbox__img" alt="">
    <button class="lightbox__btn lightbox__btn--next" aria-label="Next">&#10095;</button>
    <div class="lightbox__caption" aria-live="polite"></div>
  </div>
`;
document.body.appendChild(lightbox);

const imgEl = lightbox.querySelector('.lightbox__img');
const captionEl = lightbox.querySelector('.lightbox__caption');
const btnPrev = lightbox.querySelector('.lightbox__btn--prev');
const btnNext = lightbox.querySelector('.lightbox__btn--next');
const btnClose = lightbox.querySelector('.lightbox__close');

const figures = Array.from(document.querySelectorAll('.gallery-grid figure'));
const images = figures.map(f => f.querySelector('img'));

let index = 0;
let lastFocus = null;

function openLightbox(i, invoker) {
  index = i;
  lastFocus = invoker || figures[i];
  updateSlide();
  lightbox.classList.add('is-open');
  btnClose.focus();
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}

function updateSlide() {
  const thumb = images[index];
  const fullSrc = thumb.getAttribute('data-full') || thumb.src;
  imgEl.src = fullSrc;
  imgEl.alt = thumb.alt || '';
  const figcap = thumb.closest('figure').querySelector('figcaption')?.textContent?.trim() || '';
  captionEl.textContent = figcap;
}

function next() {
  index = (index + 1) % images.length;
  updateSlide();
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  updateSlide();
}

// Activate by click or keyboard (Enter/Space) on figure or image
figures.forEach((fig, i) => {
  fig.addEventListener('click', (e) => {
    const target = e.currentTarget.querySelector('img');
    openLightbox(i, fig);
  });
  fig.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox(i, fig);
    }
  });
});

// Controls
btnNext.addEventListener('click', next);
btnPrev.addEventListener('click', prev);
btnClose.addEventListener('click', closeLightbox);

// Overlay click closes
lightbox.addEventListener('click', (e) => {
  const dialog = lightbox.querySelector('.lightbox__dialog');
  if (!dialog.contains(e.target)) closeLightbox();
});

// Keyboard navigation within lightbox
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('is-open')) return;
  if (e.key === 'Escape') closeLightbox();
  else if (e.key === 'ArrowRight') next();
  else if (e.key === 'ArrowLeft') prev();
});

// Basic focus trap for the three controls
lightbox.addEventListener('keydown', (e) => {
  if (e.key !== 'Tab') return;
  const focusables = [btnClose, btnPrev, btnNext];
  const first = focusables;
  const last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault(); last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault(); first.focus();
  }
});
