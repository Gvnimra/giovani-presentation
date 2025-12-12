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