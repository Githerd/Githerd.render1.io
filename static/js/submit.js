document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form'); // Select the form

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from actually submitting

        // Create a balloon element
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.textContent = '🎈'; // Emoji or any content you want in the balloon
        document.body.appendChild(balloon);

        // Position the balloon at the submit button
        const submitButton = form.querySelector('input[type="submit"], button[type="submit"]');
        const rect = submitButton.getBoundingClientRect();
        balloon.style.left = `${rect.left + window.scrollX}px`;
        balloon.style.top = `${rect.top + window.scrollY}px`;

        // Start the animation
        balloon.style.animation = 'float 5s linear infinite';

        // Optionally, remove the balloon after the animation ends
        setTimeout(() => {
            balloon.remove();
        }, 5000); // Adjust time if needed
    });
});
