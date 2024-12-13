

function showContent(serviceId) {
    document.querySelectorAll('.service-detail').forEach(detail => {
        detail.style.display = 'none';
    });
    document.getElementById(serviceId).style.display = 'block';
}

// Hide all service details initially
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.service-detail').forEach(detail => {
        detail.style.display = 'none';
    });
});


    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission
        
        // Display the success message
        const successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block";

        // Clear the form fields
        this.reset();
    });
