function openModal(element) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("expandedImg");
    
    // В новой верстке img лежит прямо внутри gallery-item
    const img = element.querySelector("img");
    
    if (img) {
        modalImg.src = img.src;
        modal.classList.add("active");
        document.body.style.overflow = "hidden"; // Блокируем скролл фона
    }
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.classList.remove("active");
    
    // Задержка совпадает с CSS transition модального окна
    setTimeout(() => {
        document.body.style.overflow = "auto";
    }, 500); 
}

// Закрытие модального окна по Escape
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

// Закрытие модального окна по клику вне картинки
document.getElementById('imageModal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeModal();
    }
});

// Логика фильтров
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Убираем класс active у всех
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Добавляем нажатой
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

// Логика FAQ (Аккордеон)
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');
        
        const icon = question.querySelector('.faq-icon');
        if (item.classList.contains('active')) {
            icon.textContent = '-';
        } else {
            icon.textContent = '+';
        }
    });
});

// Кнопка скролла наверх
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Анимация появления элементов при скролле (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Если нужно, чтобы анимация происходила только 1 раз:
            // observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

const scrollElements = document.querySelectorAll('.scroll-animate');
scrollElements.forEach(el => observer.observe(el));
