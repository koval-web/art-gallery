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

// Filter logic
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.classList.remove('hide');
                item.classList.add('show');
            } else {
                item.classList.remove('show');
                item.classList.add('hide');
            }
        });
    });
});
