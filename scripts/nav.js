// Charger le contenu commun
fetch("../pages/template/nav.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("nav-placeholder").innerHTML = data;
  });

function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

function goToDay(page) {
  if (page) window.location.href = page;
}
