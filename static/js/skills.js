document.addEventListener('DOMContentLoaded', function() {
    const sun = document.getElementById('sun');
    if (sun) {
        console.log("Sun element found:", sun);
    } else {
        console.error("Sun element not found!");
    }

    const orbits = document.querySelectorAll('.orbit');
    if (orbits.length > 0) {
        console.log("Orbits found:", orbits.length);
    } else {
        console.error("No orbits found!");
    }

    orbits.forEach((orbit, index) => {
        console.log(`Setting animation delay for orbit ${index + 1}`);
        orbit.style.animationDelay = `${index * 2}s`;
    });
});
fla