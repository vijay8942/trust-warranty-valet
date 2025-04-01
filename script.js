document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            if (name && email && message) {
                document.getElementById('formResponse').textContent = "Thank you for your message!";
                contactForm.reset();
            } else {
                document.getElementById('formResponse').textContent = "Please fill out all fields.";
            }
        });
    }
});