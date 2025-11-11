document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const errorMessage = params.get("error");

    if (errorMessage) {
        const errorDiv = document.getElementById("error-message");
        if (errorDiv) {
            errorDiv.textContent = errorMessage;
            errorDiv.style.display = "block";
        }
    }

    // Получаем элементы
    var modal = document.getElementById("orderModal");
    var openModalBtn = document.getElementById("openModal");
    var closeModalBtn = document.getElementById("closeModal");

    // Открытие модального окна
    openModalBtn.addEventListener("click", function () {
        modal.style.display = "flex"; // Используем flex для центрирования
    });

    // Закрытие модального окна
    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Закрытие при клике вне области модального окна
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.3 }
    );

    fadeElements.forEach((el) => observer.observe(el));

    // Изменение шапки при скролле
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(51, 51, 51, 0.8)";
        } else {
            header.style.background = "rgba(51, 51, 51, 0.9)";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true, 
        autoplay: {
            delay: 8000, // 8 секунд на слайд
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });
});

AOS.init({
    duration: 1000,  // продолжительность анимации
    easing: 'ease',  // эффект ускорения
    once: false        // анимации выполняются только один раз
});
