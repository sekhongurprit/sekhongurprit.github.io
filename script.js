function togglePublications() {
  const container = document.getElementById("pubContainer");

  if (container.style.display === "block") {
    container.style.display = "none";
  } else {
    container.style.display = "block";
  }
}

function expandGif(src) {
  const modal = document.getElementById("gifModal");
  const expandedGif = document.getElementById("expandedGif");

  expandedGif.src = src;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("gifModal").style.display = "none";
}
