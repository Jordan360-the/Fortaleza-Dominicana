document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMobile = document.querySelector('.nav-mobile');
    const icon = menuToggle.querySelector('i');

    // Función para abrir/cerrar el menú
    function toggleMenu() {
        navMobile.classList.toggle('active');
        
        // Cambiar el icono
        if (navMobile.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    // Evento para el botón del menú
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Cerrar el menú al hacer clic en un enlace
    document.querySelectorAll('.nav-mobile .nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMobile.classList.remove('active');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Cerrar el menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (navMobile.classList.contains('active') && 
            !navMobile.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            navMobile.classList.remove('active');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Cerrar el menú al hacer scroll
    window.addEventListener('scroll', function() {
        if (navMobile.classList.contains('active')) {
            navMobile.classList.remove('active');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}); 