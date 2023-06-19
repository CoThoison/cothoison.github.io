const menuHamburger = document.querySelector(".menuHamburger");
const navLinks = document.querySelector("nav ul");
 
menuHamburger.addEventListener('click',()=>{
	navLinks.classList.toggle('mobile-menu');
})

const navButtons = document.querySelectorAll('nav ul a');

navButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    if (navLinks.classList.contains('mobile-menu')) {
      navLinks.classList.remove('mobile-menu');
    }
  });
});

window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('div[id]');
  let currentSection = '';
  
  sections.forEach(function(section) {
    let sectionTop = section.offsetTop;
    let sectionHeight = section.clientHeight;
  
    if (window.pageYOffset >= sectionTop - sectionHeight / 2) {
      currentSection = section.getAttribute('id');
    }
  });
  
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(function(link) {
    link.classList.remove('current');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('current');
    }
  });
});