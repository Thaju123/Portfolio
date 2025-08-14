// ===== HAMBURGER MENU TOGGLE =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  // Toggle navbar visibility
  navLinks.classList.toggle("active");

  // Toggle between hamburger and close icon
  menuToggle.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});


// Select every element that should animate
const animatedEls = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // fade/slide in
    } else {
      entry.target.classList.remove('show'); // fade/slide out when leaving
    }
  });
}, { threshold: 0.2 }); // Trigger when 20% visible

animatedEls.forEach(el => observer.observe(el));
