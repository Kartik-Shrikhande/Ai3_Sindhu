

// Hover effect for gallery images
document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('mouseover', function() {
        this.style.border = '2px solid #00bfa5';
    });

    image.addEventListener('mouseout', function() {
        this.style.border = 'none';
    });
});

// Toggle between Dark and Light Mode
let isDarkMode = true; // Initially dark mode

document.addEventListener('keydown', function(e) {
    // Toggle mode when 'D' is pressed
    if (e.key === 'D' || e.key === 'd') {
        toggleDarkLightMode();
    }
});

function toggleDarkLightMode() {
    if (isDarkMode) {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        document.querySelector('.menu a.active').style.color = '#00bfa5';
        document.querySelectorAll('.menu a').forEach(link => {
            link.style.color = '#111';
        });
        isDarkMode = false;
    } else {
        document.body.style.backgroundColor = '#111';
        document.body.style.color = '#fff';
        document.querySelector('.menu a.active').style.color = '#00bfa5';
        document.querySelectorAll('.menu a').forEach(link => {
            link.style.color = '#00bfa5';
        });
        isDarkMode = true;
    }
}