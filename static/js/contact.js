document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const feedbackDiv = document.getElementById("feedback");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();  

        const formData = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            message: document.getElementById("message").value.trim()
        };

        
        if (!formData.name || !formData.email || !formData.message) {
            feedbackDiv.textContent = "All fields are required.";
            return;
        }

       
        axios.post(contactForm.action, formData)
            .then(response => {
                feedbackDiv.textContent = "Your message has been sent successfully!";
                feedbackDiv.style.color = "green";
                contactForm.reset(); 
            })
            .catch(error => {
                feedbackDiv.textContent = `Failed to send message: ${error.response?.data?.error || error.message}`;
                feedbackDiv.style.color = "red";
            });
    });
});
