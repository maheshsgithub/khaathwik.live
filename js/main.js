document.addEventListener('DOMContentLoaded', () => {
    // Loading screen animation
    let percent = 0;
    const loadingPercent = document.getElementById('loading-percent');
    const loadingScreen = document.getElementById('loading-screen');
    
    const interval = setInterval(() => {
        percent += 10;
        loadingPercent.textContent = `${percent}%`;
        if (percent >= 100) {
            clearInterval(interval);
            loadingScreen.classList.add('hidden');
        }
    }, 300);

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
