window.onload = function() {
    const currentPage = window.location.pathname;
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  };