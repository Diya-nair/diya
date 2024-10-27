// Animation for the search input placeholder
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('main input');

    // Placeholder text animation effect
    const placeholderText = ['Search for restaurant, cuisine or a dish'];
    let currentTextIndex = 0;
    let charIndex = 0;

    function typeEffect() {
        if (charIndex < placeholderText[currentTextIndex].length) {
            searchInput.setAttribute('placeholder', placeholderText[currentTextIndex].substring(0, charIndex + 1));
            charIndex++;
            setTimeout(typeEffect, 100); // Typing speed
        } else {
            setTimeout(eraseEffect, 2000); // Pause before erasing
        }
    }

    function eraseEffect() {
        if (charIndex > 0) {
            searchInput.setAttribute('placeholder', placeholderText[currentTextIndex].substring(0, charIndex - 1));
            charIndex--;
            setTimeout(eraseEffect, 50); // Erasing speed
        } else {
            setTimeout(typeEffect, 500); // Pause before typing starts again
        }
    }

    typeEffect(); // Start animation
});

// Header hover effect
const navLinks = document.querySelectorAll('header ul li a');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.1)';
        link.style.transition = 'transform 0.3s ease';
    });

    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
    });
});
