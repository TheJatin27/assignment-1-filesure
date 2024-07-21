// Function to smoothly scroll to a section
function scrollToSection(id) {
    document.querySelector(`#${id}`).scrollIntoView({
        behavior: 'smooth'
    });
}

// Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();
