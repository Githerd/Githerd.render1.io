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
