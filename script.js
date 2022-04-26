// let navLinks = document.querySelectorAll(".sidebar li");
// const menu = document.querySelector(".menu");

// menuItem.addEventListener("click", () => {
//   menuItem.classList.toggle("fa-xmark");
//   sidebar.classList.toggle('active')
// });

const toggleDarkMode = document.querySelector(".toggle-darkmode");
const menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");

let darkMode = localStorage.getItem("darkMode");

// Set Dark Mode
const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
};

// Disable Dark Mode
const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", null);
};

// Save DarkMode History
if (darkMode === "enabled") {
  enableDarkMode();
}

// Add Event Listener
toggleDarkMode.addEventListener("click", () => {
  let darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

menu.addEventListener("click", () => {
  menu.classList.replace("fa-bars-staggered", "fa-xmark");
  sidebar.classList.toggle("active");
});
