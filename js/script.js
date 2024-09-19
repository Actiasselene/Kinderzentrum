
 
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const links = navMenu.querySelectorAll('a');

    mobileMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const bars = document.querySelectorAll('.hamburger .bar');
        bars.forEach((bar, index) => {
            bar.classList.toggle(`bar${index + 1}`);
        });
    });

    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            navMenu.classList.remove('active'); // Закрываем меню после выбора
        });
    });
});

// Получаем элементы галереи и модальное окно
const galleryItems = document.querySelectorAll('.gallery-item img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

// Открытие изображения в модальном окне при нажатии на него
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = item.src;
    });
});

// Закрытие модального окна
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие модального окна при нажатии за пределы изображения
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});