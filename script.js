// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log('Web Demo Codespaces - JavaScript loaded!');
    
    // Demo Button Functionality
    const demoButton = document.getElementById('demoButton');
    const output = document.getElementById('output');
    
    if (demoButton && output) {
        let clickCount = 0;
        
        demoButton.addEventListener('click', function() {
            clickCount++;
            output.innerHTML = `
                <p style="color: #667eea; font-weight: bold;">
                    ¡Botón clickeado ${clickCount} ${clickCount === 1 ? 'vez' : 'veces'}!
                </p>
                <p>Timestamp: ${new Date().toLocaleTimeString()}</p>
            `;
            
            // Add animation
            output.style.animation = 'none';
            setTimeout(() => {
                output.style.animation = 'fadeIn 0.5s ease-in';
            }, 10);
        });
    }
    
    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Display success message
            const successDiv = document.createElement('div');
            successDiv.style.cssText = `
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 1rem;
                border-radius: 5px;
                margin-top: 1rem;
                animation: fadeIn 0.5s ease-in;
            `;
            successDiv.innerHTML = `
                <h3>¡Formulario enviado con éxito!</h3>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensaje:</strong> ${message}</p>
            `;
            
            contactForm.parentNode.insertBefore(successDiv, contactForm.nextSibling);
            contactForm.reset();
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successDiv.style.animation = 'fadeOut 0.5s ease-out';
                setTimeout(() => successDiv.remove(), 500);
            }, 5000);
        });
    }
    
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add fade-in animation to sections on scroll
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.8s ease-in';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-20px); }
    }
`;
document.head.appendChild(style);

console.log('Script.js cargado completamente - Listo para Codespaces!');
