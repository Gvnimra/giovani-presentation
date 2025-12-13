const elements = document.querySelectorAll('.fade-in');



// Efeito de Parallax 
function scrollReveal() {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', scrollReveal);
scrollReveal();

document.addEventListener("scroll", () => {
  const offset = window.scrollY * 0.3; // velocidade do parallax
  document.querySelector(".hero").style.setProperty("--parallax", `${offset}px`);
});               

// Botão back-to-top

const backToTop = document.getElementById('backToTop'); 

window.addEventListener('scroll', () => {
  if(window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

