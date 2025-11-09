// ===== SLIDER DE CLIENTES (automático + manual) =====
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let index = 0;

function showSlide(i) {
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  slides[i].classList.add('active');
  dots[i].classList.add('active');
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    showSlide(index);
  });
});

// Troca automática a cada 5 segundos
setInterval(() => {
  index++;
  if (index >= slides.length) index = 0;
  showSlide(index);
}, 5000);


// ===== FORMULÁRIO COM CONTADOR DE CLIQUES =====
const form = document.querySelector('form');
const btnEnviar = form.querySelector('button');
let contador = 0;

form.addEventListener('submit', e => {
  e.preventDefault();

  contador++;
  alert(`Formulário enviado ${contador} vez(es)!`);

  const dados = {
    nome: form.querySelector('input[type="text"]').value,
    email: form.querySelector('input[type="email"]').value,
    msg: form.querySelector('textarea').value
  };
  localStorage.setItem('formConstrutora', JSON.stringify(dados));

  form.reset();

  if (contador === 5) {
    btnEnviar.remove();
    alert('Limite de envios atingido!');
  }
});