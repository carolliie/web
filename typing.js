// Texto a ser digitado
const text = "hi! i am carole!";
// Elemento onde o texto será exibido
const element = document.getElementById('crl');
// Velocidade da digitação (em milissegundos)
const typingSpeed = 100;

let index = 0;

function type() {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(type, typingSpeed);
  }
}

// Chame a função type() quando a página carregar
window.onload = function() {
  type();
};