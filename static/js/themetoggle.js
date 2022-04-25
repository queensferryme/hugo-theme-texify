function setTheme(mode) {
  localStorage.setItem("theme-storage", mode);
  if (mode === "dark") {
    document.getElementById("wrapper").classList.add("dark")
    document.getElementById("wrapper").classList.remove("light")
    document.getElementById("dark-mode-toggle").innerHTML = "Toggle Light Mode";
  } else if (mode === "light") {
    document.getElementById("wrapper").classList.add("light")
    document.getElementById("wrapper").classList.remove("dark")
    document.getElementById("dark-mode-toggle").innerHTML = "Toggle Dark Mode";
  }
}

function toggleTheme() {
  if (localStorage.getItem("theme-storage") === "light") {
    setTheme("dark");
  } else if (localStorage.getItem("theme-storage") === "dark") {
    setTheme("light");
  }
}

var default_theme = "light";
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDarkScheme.matches) {
  default_theme = "dark";
}

var savedTheme = localStorage.getItem("theme-storage") || default_theme;
setTheme(savedTheme);
