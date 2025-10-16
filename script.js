// script.js

// Inicializar AOS (Animaciones al Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// ============================================
// NAVBAR - Cambiar color al hacer scroll
// ============================================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// SMOOTH SCROLL para enlaces del menú
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Cerrar el menú móvil si está abierto
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// ============================================
// VALIDACIÓN DEL FORMULARIO
// ============================================
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();

    if (contactForm.checkValidity()) {
        // Simular envío del formulario
        const formData = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            telefono: document.getElementById('telefono').value,
            pais: document.getElementById('pais').value,
            interes: document.getElementById('interes').value,
            mensaje: document.getElementById('mensaje').value,
            newsletter: document.getElementById('newsletter').checked
        };

        console.log('Datos del formulario:', formData);

        // Mostrar mensaje de éxito
        successMessage.classList.remove('d-none');
        contactForm.reset();
        contactForm.classList.remove('was-validated');

        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            successMessage.classList.add('d-none');
        }, 5000);

        // Aquí puedes agregar el código para enviar los datos a un servidor
        // fetch('/api/contacto', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // });

    } else {
        contactForm.classList.add('was-validated');
    }
});

// ============================================
// GALERÍA - Modal de imágenes
// ============================================
const galleryImages = document.querySelectorAll('.gallery-img');
const modalImage = document.getElementById('modalImage');

galleryImages.forEach(img => {
    img.addEventListener('click', function() {
        modalImage.src = this.src;
    });
});

// ============================================
// BOTÓN VOLVER ARRIBA
// ============================================
const btnScrollTop = document.getElementById('btnScrollTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        btnScrollTop.style.display = 'block';
    } else {
        btnScrollTop.style.display = 'none';
    }
});

btnScrollTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// CONTADOR ANIMADO (opcional)
// ============================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ============================================
// EFECTO PARALLAX en el carrusel (opcional)
// ============================================
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const parallax = document.querySelector('.carousel-img');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ============================================
// LAZY LOADING para imágenes (mejora rendimiento)
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('fade-in-up');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// TOGGLE DE MODO OSCURO (opcional - para futura implementación)
// ============================================
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Cargar preferencia de modo oscuro
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ============================================
// ANIMACIÓN DE CARGA
// ============================================
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// ============================================
// TOOLTIP de Bootstrap (activar todos)
// ============================================
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// ============================================
// CONSOLE LOG personalizado
// ============================================
console.log('%c🇨🇴 Bienvenido a Colombia! 🇨🇴', 'color: #FCD116; font-size: 24px; font-weight: bold;');
console.log('%cSitio web desarrollado con ❤️', 'color: #003893; font-size: 14px;');
