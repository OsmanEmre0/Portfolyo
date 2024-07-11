// Social

document.addEventListener('DOMContentLoaded', function() {
    const socialNavToggle = document.getElementById('socialNavToggle');
    const socialIcons = document.getElementById('socialIcons');

    socialNavToggle.addEventListener('click', function(event) {
        event.stopPropagation(); 
        socialIcons.classList.toggle('open');
    });

    document.addEventListener('click', function(event) {
        if (!socialIcons.contains(event.target) && !socialNavToggle.contains(event.target)) {
            socialIcons.classList.remove('open'); 
        }
    });
});

// contact me btn width

const contactBtn = document.getElementById('contactBtn');
const initialWidth = contactBtn.offsetWidth;

function adjustButtonWidth() {
    const textLength = contactBtn.textContent.length;
    const dynamicWidth = initialWidth + (textLength - 9) * 10; 
    contactBtn.style.minWidth = `${dynamicWidth}px`;
}

/////////////////


