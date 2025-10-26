const carrossel = document.querySelector('.carrossel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let indice = 0;
const totalSlides = document.querySelectorAll('.painel').length;

function atualizarSlide() {
  const deslocamento = -indice * 100;
  carrossel.style.transform = `translateX(${deslocamento}vw)`;
}

// Botão próximo
next.addEventListener('click', () => {
  indice = (indice + 1) % totalSlides;
  atualizarSlide();
});

// Botão anterior
prev.addEventListener('click', () => {
  indice = (indice - 1 + totalSlides) % totalSlides;
  atualizarSlide();
});

// (Opcional) deslizar automaticamente a cada 5 segundos
 setInterval(() => {
   next.click();
}, 5000);