// Theme toggle
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', toggle.checked);
  localStorage.setItem('darkMode', toggle.checked);
});
if (localStorage.getItem('darkMode') === 'true') {
  toggle.checked = true;
  document.body.classList.add('dark-mode');
}

// Back to top
const btn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  btn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
btn.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);

// Carousel
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.carousel .slides img');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let current = 0;
  let interval;

  function showSlide(index) {
    slides.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  function startAutoSlide() {
    interval = setInterval(nextSlide, 3000); // Change image every 3 seconds
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }

  prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
  });

  nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
  });

  showSlide(current);
  startAutoSlide();
});

