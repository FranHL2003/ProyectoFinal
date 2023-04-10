// Seleccionar elementos del DOM
const carrousel = document.querySelector('.carrousel');
const images = document.querySelectorAll('.carrousel img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Inicializar índice actual del carrousel
let currentIndex = 0;

// Añadir event listeners a botones de "anterior" y "siguiente"
prevBtn.addEventListener('click', () => changeImage(-1));
nextBtn.addEventListener('click', () => changeImage(1));

// Función de cambio de imagen
function changeImage(n) {
  currentIndex += n;
  // Comprobar si se ha sobrepasado el número de imágenes disponibles
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  // Actualizar imagen mostrada
  carrousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
