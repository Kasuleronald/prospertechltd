// Testimonials Slider
document.addEventListener('DOMContentLoaded', function() {
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    
    if (testimonialsSlider) {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        testimonialsSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - testimonialsSlider.offsetLeft;
            scrollLeft = testimonialsSlider.scrollLeft;
        });
        
        testimonialsSlider.addEventListener('mouseleave', () => {
            isDown = false;
        });
        
        testimonialsSlider.addEventListener('mouseup', () => {
            isDown = false;
        });
        
        testimonialsSlider.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - testimonialsSlider.offsetLeft;
            const walk = (x - startX) * 2;
            testimonialsSlider.scrollLeft = scrollLeft - walk;
        });
        
        // Touch events for mobile
        testimonialsSlider.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - testimonialsSlider.offsetLeft;
            scrollLeft = testimonialsSlider.scrollLeft;
        });
        
        testimonialsSlider.addEventListener('touchend', () => {
            isDown = false;
        });
        
        testimonialsSlider.addEventListener('touchmove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.touches[0].pageX - testimonialsSlider.offsetLeft;
            const walk = (x - startX) * 2;
            testimonialsSlider.scrollLeft = scrollLeft - walk;
        });
    }
    
    // Clients Slider Animation
    const clientsSlider = document.querySelector('.clients-slider');
    if (clientsSlider) {
        let direction = -1;
        
        function animateClients() {
            if (clientsSlider.scrollLeft + clientsSlider.clientWidth >= clientsSlider.scrollWidth) {
                direction = 1;
            } else if (clientsSlider.scrollLeft <= 0) {
                direction = -1;
            }
            
            clientsSlider.scrollLeft += direction * 1;
            requestAnimationFrame(animateClients);
        }
        
        // Only animate if there's overflow
        if (clientsSlider.scrollWidth > clientsSlider.clientWidth) {
            animateClients();
        }
    }
    
    // Scroll reveal animation
    if (typeof ScrollReveal !== 'undefined') {
        const scrollReveal = ScrollReveal({
            origin: 'bottom',
            distance: '60px',
            duration: 1000,
            delay: 200,
            reset: true
        });
        
        scrollReveal.reveal('.service-card, .blog-post, .testimonial-item', {
            interval: 200
        });
        
        scrollReveal.reveal('.about-image, .about-content', {
            interval: 200,
            origin: 'left'
        });
        
        scrollReveal.reveal('.section-title', {
            origin: 'top'
        });
    }
});