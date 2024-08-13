document.addEventListener("DOMContentLoaded", () =>
      const contactForm = document.getElementById("contact-form");
    const feedbackDiv = document.getElementById("feedback");

    if (contactForm) {
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
                    window.location.href = "{{ url_for('main.balloon') }}";  // Redirect to balloon page
                })
                .catch(error => {
                    feedbackDiv.textContent = `Failed to send message: ${error.response?.data?.error || error.message}`;
                    feedbackDiv.style.color = "red";
                });
        });
    }


if (window.location.pathname === "{{ url_for('main.balloon') }}") {
        const balloon = document.querySelector('.balloon');
        if (balloon) {
            balloon.textContent = '🎈';  // Add balloon emoji or any content you want

          
            balloon.style.animation = 'float 5s linear infinite';

           
            setTimeout(() => {
                balloon.remove();
            }, 5000); // Adjust time if needed
        }
    }


    function initializeFlipEffects() {
        const flipContainers = document.querySelectorAll('.flip-container');

        flipContainers.forEach(container => {
            container.addEventListener('click', () => {
                container.classList.toggle('flip');
            });
        });
    }
    initializeFlipEffects();

    
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
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
    }

    
    const colors = [
    "#000080", "#00008B", "#0000CD", "#0000FF", "#006400", "#008000", "#008080",
    "#008B8B", "#00BFFF", "#00CED1", "#00FA9A", "#00FF00", "#00FF7F", "#00FFFF",
    "#191970", "#1E90FF", "#20B2AA", "#228B22", "#2E8B57", "#2F4F4F", "#32CD32",
    "#3CB371", "#40E0D0", "#4169E1", "#4682B4", "#483D8B", "#48D1CC", "#4B0082",
    "#556B2F", "#5F9EA0", "#6495ED", "#663399", "#66CDAA", "#696969", "#6A5ACD",
    "#6B8E23", "#708090", "#778899", "#7B68EE", "#7CFC00", "#7FFF00", "#7FFFD4",
    "#800000", "#800080", "#808000", "#808080", "#87CEEB", "#87CEFA", "#8A2BE2",
    "#8B0000", "#8B008B", "#8B4513", "#8FBC8F", "#90EE90", "#9370DB", "#9400D3",
    "#98FB98", "#9932CC", "#9ACD32", "#A0522D", "#A52A2A", "#A9A9A9", "#ADD8E6",
    "#ADFF2F", "#AFEEEE", "#B0C4DE", "#B0E0E6", "#B22222", "#B8860B", "#BA55D3",
    "#BC8F8F", "#BDB76B", "#C0C0C0", "#C71585", "#CD5C5C", "#CD853F", "#D2691E",
    "#D2B48C", "#D3D3D3", "#D8BFD8", "#DA70D6", "#DAA520", "#DB7093", "#DC143C",
    "#DCDCDC", "#DDA0DD", "#DEB887", "#E0FFFF", "#E6E6FA", "#E9967A", "#EE82EE",
    "#EEE8AA", "#F08080", "#F0E68C", "#F0F8FF", "#F0FFF0", "#F0FFFF", "#F4A460",
    "#F5DEB3", "#F5F5DC", "#F5F5F5", "#F5FFFA", "#F8F8FF", "#FA8072", "#FAEBD7",
    "#FAF0E6", "#FAFAD2", "#FDF5E6", "#FF0000", "#FF00FF", "#FF1493", "#FF4500",
    "#FF6347", "#FF69B4", "#FF7F50", "#FF8C00", "#FFA07A", "#FFA500", "#FFB6C1",
    "#FFC0CB", "#FFD700", "#FFDAB9", "#FFDEAD", "#FFE4B5", "#FFE4C4", "#FFE4E1",
    "#FFEBCD", "#FFEFD5", "#FFF0F5", "#FFF5EE", "#FFF8DC", "#FFFACD", "#FFFAF0",
    "#FFFAFA", "#FFFF00", "#FFFFE0", "#FFFFF0", "#FFFFFF"
];

document.addEventListener('DOMContentLoaded', () => {
   
    const btn = document.getElementById("btn");
    const colorSpan = document.querySelector(".color");
    const projectDisplay = document.getElementById('project-display');

  
    if (!btn || !projectDisplay) {
        console.error("Essential DOM elements not found.");
        return;
    }

  
    const projects = [
        {
            title: "Project One",
            description: "A comedy website using HTML and CSS",
            technologies: "HTML and CSS",
            link: "https://Githerd.github.io"
        },
        {
            title: "Project Two",
            description: "A website created with HTML, CSS, and Javascript",
            technologies: "HTML, CSS, and Javascript",
            link: "https://Githerd.javascript.io"
        },
        {
            title: "Project Three",
            description: "A website showcasing all my previous work",
            technologies: "HTML, CSS, Javascript, Python, and Flask",
            link: "https://Githerd.render.io"
        },
        {
            title: "Project Four",
            description: "A dynamic blog platform",
            technologies: "React, Node.js, MongoDB",
            link: "https://Githerd.blog.io"
        },
        {
            title: "Project Five",
            description: "An e-commerce website",
            technologies: "Django, HTML, CSS, JavaScript",
            link: "https://Githerd.shop.io"
        }
    ];

    let currentProjectIndex = 0;

   
    function displayProject(index) {
        const project = projects[index];
        projectDisplay.innerHTML = `
            <h2>${project.title}</h2>
            <p><strong>Description:</strong> ${project.description}</p>
            <p><strong>Technologies:</strong> ${project.technologies}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
    }


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
    
    const randomInterval = Math.floor(Math.random() * 4000) + 1000;

    setTimeout(changeBackgroundColor, randomInterval);
}

window.onload = function() {
    changeBackgroundColor();
};
