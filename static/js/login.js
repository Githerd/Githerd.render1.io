document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(loginForm);
        const loginUrl = "{{ url_for('auth.login') }}";

        fetch(loginUrl, {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = "{{ url_for('main.home') }}";
            } else {
                alert('Login failed!');
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
