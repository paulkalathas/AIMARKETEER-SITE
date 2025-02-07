// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Toggle Mobile Menu
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

// Pricing Table Highlight on Hover
document.querySelectorAll('.plan').forEach(plan => {
    plan.addEventListener('mouseenter', () => plan.style.transform = 'scale(1.05)');
    plan.addEventListener('mouseleave', () => plan.style.transform = 'scale(1)');
});
