document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Loaded');
    const cursor = document.querySelector('.cursor');
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const nav = document.querySelector('nav');

    // Function to scale the cursor
    function scaleCursor() {
        cursor.style.transform = 'scale(6)';
    }

    // Function to reset the cursor scale
    function resetCursor() {
        cursor.style.transform = 'scale(3)';
    }

    // Add mouseover event listeners to all <a> elements
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseover', scaleCursor);
        link.addEventListener('mouseout', resetCursor);
    });

    // Apply mix-blend-mode: difference;
    cursor.style.mixBlendMode = 'difference';

    // Move the cursor according to mouse movement
    document.addEventListener('mousemove', (e) => {
        const scrollX = window.pageXOffset; // Current horizontal scroll position
        const scrollY = window.pageYOffset; // Current vertical scroll position
        
        cursor.style.left = (e.pageX - scrollX) + 'px';
        cursor.style.top = (e.pageY - scrollY) + 'px';
    });

    // Toggle menu
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            navLinks.classList.remove('active');
        }
    });

    // Scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});

window.addEventListener("load", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });