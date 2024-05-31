// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Toggle mobile navigation menu
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('open');
});

// Modal popup for project details
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        const projectId = project.getAttribute('data-project-id');
        document.getElementById(`modal-${projectId}`).style.display = 'block';
        document.getElementById('modal').style.display = 'block';
    });
});

function closeModal() {
    document.querySelectorAll('.modal-project').forEach(modalProject => {
        modalProject.style.display = 'none';
    });
    document.getElementById('modal').style.display = 'none';
}

// Form validation
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (name === '' || email === '' || message === '') {
        alert('All fields are required.');
        event.preventDefault();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
