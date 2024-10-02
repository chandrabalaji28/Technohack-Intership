// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function openModal(imgElement) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("fullImage");
    modal.style.display = "flex"; // Use flex to ensure center alignment
    modalImg.src = imgElement.src; // Set the modal image to the clicked image
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Send the email using EmailJS
    emailjs.sendForm('service_xhcyc09', 'template_9yfd9ww', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            // Optionally reset the form after successful submission
            document.getElementById('contactForm').reset();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send the message. Please try again.');
        });
});
