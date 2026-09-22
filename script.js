function openModal(element) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("expandedImg");
    const img = element.querySelector("img");
    
    modalImg.src = img.src;
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.classList.remove("active");
    
    // Add small delay for closing animation
    setTimeout(() => {
        document.body.style.overflow = "auto";
    }, 300);
}

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
