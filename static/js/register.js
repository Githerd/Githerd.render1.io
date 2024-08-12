document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");
    const feedbackDiv = document.getElementById("feedback");

   
    const getButton = document.createElement("button");
    getButton.textContent = "Fetch Users (GET)";
    document.body.appendChild(getButton);

    getButton.addEventListener("click", () => {
        axios
            .get("https://reqres.in/api/users?page=2")
            .then((response) => {
                feedbackDiv.textContent = `Fetched Users: ${JSON.stringify(response.data)}`;
                console.log(response.data);
            })
            .catch((error) => {
                feedbackDiv.textContent = `Error Fetching Users: ${error.message}`;
                console.error(error);
            });
    });

   
    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = {
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            confirmPassword: document.getElementById("confirm-password").value
        };

        
        if (formData.password !== formData.confirmPassword) {
            feedbackDiv.textContent = "Passwords do not match!";
            return;
        }

        axios
            .post("https://reqres.in/api/register", {
                email: formData.email,
                password: formData.password,
            })
            .then((response) => {
                feedbackDiv.textContent = `Registration Successful! ${JSON.stringify(response.data)}`;
                console.log(response.data);
            })
            .catch((error) => {
                feedbackDiv.textContent = `Registration Failed! ${error.response?.data?.error || error.message}`;
                console.error(error);
            });
    });

    
    const postButton = document.createElement("button");
    postButton.textContent = "Simulate Registration (POST)";
    document.body.appendChild(postButton);

    postButton.addEventListener("click", () => {
        axios
            .post("https://reqres.in/api/register", {
                email: "eve.holt@reqres.in",
                password: "pistol",
            })
            .then((response) => {
                feedbackDiv.textContent = `Simulated Registration Successful! ${JSON.stringify(response.data)}`;
                console.log(response.data);
            })
            .catch((error) => {
                feedbackDiv.textContent = `Simulated Registration Failed! ${error.response?.data?.error || error.message}`;
                console.error(error);
            });
    });
});
