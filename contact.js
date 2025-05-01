document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuBars = document.getElementById('menu-bars');
    const navbar = document.querySelector('.navbar');
    
    menuBars.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
    
    // File upload display
    const fileUpload = document.getElementById('file-upload');
    const fileChosen = document.getElementById('file-chosen');
    
    fileUpload.addEventListener('change', function() {
        if (this.files.length > 0) {
            fileChosen.textContent = this.files[0].name;
        } else {
            fileChosen.textContent = 'No file chosen';
        }
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    const contactsContainer = document.getElementById('contactsContainer');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const message = document.getElementById('message').value;
        const fileUpload = document.getElementById('file-upload').files[0];
        
        // Create contact card
        const contactCard = document.createElement('div');
        contactCard.className = 'contact-card';
        contactCard.style.animation = 'fadeIn 0.5s ease-out';
        
        let fileInfo = '';
        if (fileUpload) {
            fileInfo = `<p><strong>File:</strong> ${fileUpload.name}</p>`;
        }
        
        const now = new Date();
        const dateTimeString = now.toLocaleString();
        
        contactCard.innerHTML = `
            <h3>${name}</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
            ${fileInfo}
            <p><strong>Message:</strong> ${message}</p>
            <div class="contact-meta">
                <span>Submitted: ${dateTimeString}</span>
            </div>
        `;
        
        // Add to container
        contactsContainer.prepend(contactCard);
        
        // Reset form
        contactForm.reset();
        fileChosen.textContent = 'No file chosen';
        
        // Show success message
        alert('Thank you for contacting us! We will get back to you soon.');
    });
});