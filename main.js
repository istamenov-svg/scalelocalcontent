// ScaleLocalContent — Global JS

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Form handler
function handleSubmit(e) {
    e.preventDefault();
    alert('Thank you! We\'ll respond within 24 hours with a project scope.');
}

// Mobile nav
function toggleNav() {
    document.querySelector('.nav-links').classList.toggle('mobile-open');
}
