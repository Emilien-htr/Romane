// Navigation flèches
function prevPhoto() {
    current = (current - 1 + photos.length) % photos.length;
    updatePhoto();
}

function nextPhoto() {
    current = (current + 1) % photos.length;
    updatePhoto();
}
