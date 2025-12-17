const elements = document.querySelectorAll('.fade-in');
const backToTop = document.getElementById('backToTop'); 

const hero = document.querySelector(".hero");


// Fade-in (Scroll Reveal)
function handleScrollReveal() {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

//Parallax 
function handleParallax(){
  if(!hero) return;

  const offset = window.scrollY * 0.3;
  hero.style.setProperty('--parallax', `${offset}px`);
}

// Botão back-to-top

function handleBackToTop() {
  if(window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }

}

// Scroll Spy 

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll(".menu a");

function handleScrollSpy(){
  if(!sections.length || !navLinks.length) return;

  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight){
      navLinks.forEach(link => link.classList.remove('active'));

      const activeLink = document.querySelector(
        `.menu a[href="#${sectionId}"]`
      );

      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}

// Scroll Handler 

function onScroll(){
  handleScrollReveal();
  handleParallax();
  handleBackToTop();
  handleScrollSpy();
}

window.addEventListener('scroll', onScroll);

document.addEventListener('DOMContentLoaded', () => {
  onScroll();

  if(backToTop){
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});

//Menu Hamburguer

const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

console.log(menuToggle, menu);

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    console.log('clicou');
    menu.classList.remove('active');
    menuToggle.classList.remove('active')
  });
});




