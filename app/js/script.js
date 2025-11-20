window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) { 
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});