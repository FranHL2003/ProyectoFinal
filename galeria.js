const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const imageContainer = document.querySelector('.image-container');
const images = document.querySelectorAll('.image-container img');

let currentIndex = 0;
const maxIndex = images.length - 1;

function updateButtons() {
  if (currentIndex === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }
  if (currentIndex === maxIndex) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

function navigate(direction) {
  if (direction === 'prev') {
    currentIndex--;
  } else if (direction === 'next') {
    currentIndex++;
  }
  updateButtons();
  imageContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => navigate('prev'));
nextButton.addEventListener('click', () => navigate('next'));

updateButtons();
  