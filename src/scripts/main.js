const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".menu");

mobileMenuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  mobileMenuToggle.classList.toggle("active");
});

