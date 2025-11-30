// Lógica para abrir y cerrar el menú móvil
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Efecto de la barra de navegación al hacer scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('bg-black/95');
        navbar.classList.remove('bg-dark-bg/90');
    } else {
        navbar.classList.remove('bg-black/95');
        navbar.classList.add('bg-dark-bg/90');
    }
});

// Observador para animaciones al aparecer en pantalla
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, { threshold: 0.1 });

// Aplicar el observador a todos los elementos con la clase .fade-in-up
document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));