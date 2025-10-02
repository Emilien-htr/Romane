function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

function goToDay(page) {
  if (page) window.location.href = page;
}
