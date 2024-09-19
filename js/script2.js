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