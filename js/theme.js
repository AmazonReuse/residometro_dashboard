// Store the theme
let darkTheme = localStorage.getItem("darkTheme");
const themeToggle = document.querySelector("#themeButton");

// Apply Dark theme
const enableDark = () => {
  document.body.classList.add("darktheme");
  localStorage.setItem("darkTheme", "enabled");
  themeToggle.innerHTML = `modo normal <i id="themeButton__icon" data-feather="sun"></i>`;
  feather.replace();
};

// Remove Dark theme
const disableDark = () => {
  document.body.classList.remove("darktheme");
  localStorage.setItem("darkTheme", null);
  themeToggle.innerHTML = `modo descanso <i id="themeButton__icon" data-feather="moon"></i>`;
  feather.replace();
};

//Toggle theme
if (darkTheme === "enabled") {
  enableDark();
} else {
  disableDark();
}

themeToggle.addEventListener("click", () => {
  darkTheme = localStorage.getItem("darkTheme");
  if (darkTheme !== "enabled") {
    enableDark();
  } else {
    disableDark();
  }
});

// Theme according to the hour

let today = new Date();
let hours = today.getHours(); 

if (hours >= 19 || hours < 6) {
    enableDark();
} else {
    disableDark();
}

