document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-bar ul li');

    // Improved handling of mouse events with better performance
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => toggleSubMenu(item, true));
        item.addEventListener('mouseleave', () => toggleSubMenu(item, false));
    });

    function toggleSubMenu(item, isVisible) {
        const subMenu = item.querySelector('.sub-menu');
        if (subMenu) {
            subMenu.style.display = isVisible ? 'block' : 'none';
            subMenu.style.animation = isVisible ? 'slideDown 0.3s ease-out forwards' : 'slideUp 0.3s ease-out forwards';
        }
    }

    // Enhanced smooth scrolling functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

