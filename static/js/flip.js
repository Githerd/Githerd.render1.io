function initializeFlipEffects() {
    const flipContainers = document.querySelectorAll('.flip-container');

    flipContainers.forEach(container => {
        container.addEventListener('click', () => {
            container.classList.toggle('flip');
        });
    });
}


document.addEventListener('DOMContentLoaded', initializeFlipEffects);