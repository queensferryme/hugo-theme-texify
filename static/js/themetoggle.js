function setTheme(mode) {
  localStorage.setItem("theme-storage", mode);
  if (mode === "dark") {
    document.getElementsByTagName("body")[0].classList.add("dark")
    document.getElementsByTagName("body")[0].classList.remove("light")
    document.getElementById("dark-mode-toggle").innerHTML = "Light";
  } else if (mode === "light") {
    document.getElementsByTagName("body")[0].classList.add("light")
    document.getElementsByTagName("body")[0].classList.remove("dark")
    document.getElementById("dark-mode-toggle").innerHTML = "Dark";
  }
}

function toggleTheme() {
  if (localStorage.getItem("theme-storage") === "light") {
    setTheme("dark");
  } else if (localStorage.getItem("theme-storage") === "dark") {
    setTheme("light");
  }
}

var savedTheme = localStorage.getItem("theme-storage") || "light";
setTheme(savedTheme);
