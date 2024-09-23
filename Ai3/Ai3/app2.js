const slider = document.getElementById('cardSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.dot');

let currentPosition = 0;
const cardWidth = 220; // card width + margin

prevBtn.addEventListener('click', () => {
  if (currentPosition < 0) {
    currentPosition += cardWidth;
    slider.style.transform = `translateX(${currentPosition}px)`;
    updateDots();
  }
});

nextBtn.addEventListener('click', () => {
  if (Math.abs(currentPosition) < (slider.children.length - 1) * cardWidth) {
    currentPosition -= cardWidth;
    slider.style.transform = `translateX(${currentPosition}px)`;
    updateDots();
  }
});

function updateDots() {
  let activeIndex = Math.abs(currentPosition) / cardWidth;
  dots.forEach((dot, index) => {
    if (index === activeIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}
