window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('div[id]');
    var currentSection = '';
  
    sections.forEach(function(section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.clientHeight;
  
      if (window.pageYOffset >= sectionTop - sectionHeight / 2) {
        currentSection = section.getAttribute('id');
      }
    });
  
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
      link.classList.remove('current');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('current');
      }
    });
  });
  