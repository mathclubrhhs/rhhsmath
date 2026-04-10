document.addEventListener('DOMContentLoaded', () => {

  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  const dots = document.querySelectorAll('.dot');
  const track = document.querySelector('.carousel-slides');

  let current = 0;
  let interval;

  function updateSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');

    current = index;
  }

  function nextSlide() {
    updateSlide((current + 1) % slides.length);
  }

  function prevSlide() {
    updateSlide((current - 1 + slides.length) % slides.length);
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      updateSlide(parseInt(dot.dataset.index));
    });
  });

  function startAuto() {
    interval = setInterval(nextSlide, 4000);
  }

  function stopAuto() {
    clearInterval(interval);
  }

  const container = document.querySelector('.carousel-container');
  container.addEventListener('mouseenter', stopAuto);
  container.addEventListener('mouseleave', startAuto);

  updateSlide(0);
  startAuto();
});