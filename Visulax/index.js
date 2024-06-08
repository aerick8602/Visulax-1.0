document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
});

// Handle the link click to add fade-out effect
function handleLinkClick(event) {
    event.preventDefault(); // Prevent the default link behavior
    const link = event.currentTarget;

    // Add the fade-out class to the body
    document.body.classList.add('fade-out');

    // Wait for the animation to complete before navigating
    setTimeout(() => {
        window.location.href = link.href;
    }, 500); // Duration should match the animation duration (0.5s)
}

function support() {
    alert("Thank u bhai ❤️❤️");
}