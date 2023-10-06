const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".menu");

mobileMenuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  mobileMenuToggle.classList.toggle("active");
});

async function fetchData() {
    try {
      const response = await fetch("./data/data-program.json");
      const data = await response.json();
      const devHandal = data.devhandal;
  
      const conditionsList = document.getElementById("conditions");
  
      devHandal.forEach((dev) => {
        const li = document.createElement("li");
        li.tabIndex = 0;
        li.innerHTML = `
        <img src="${dev.picture}" alt="${dev.mission}">
        <h3>${dev.mission}</h3>
        <p><i class="fa-solid fa-arrows-to-dot"></i> ${dev.passed}</p>
        <p>${dev.description}</p>
      `;
      conditionsList.appendChild(li);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      focusableElements.forEach((element) => {
        element.classList.remove('hide-focus');
      });
    }
  });
  
  document.addEventListener('mousedown', () => {
    focusableElements.forEach((element) => {
      element.classList.add('hide-focus');
    });
  });
  
  fetchData();