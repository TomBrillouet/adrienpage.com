document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll("form, #contact");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
      });
    }, { threshold: 0 });
    items.forEach(item => observer.observe(item));
  });