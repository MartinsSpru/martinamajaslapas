document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('main p, main h1, main h2, main h3, main sub, main img');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        observer.observe(el);
        // Check if the element is already in the viewport
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('visible');
            observer.unobserve(el);
        }
    });
});