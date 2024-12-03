function generateColor() {
    // Generate random RGB values
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    // Set the background color of the display div
    const colorDisplay = document.getElementById("color-display");
    colorDisplay.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // Display the RGB value
    const rgbValue = document.getElementById("rgb-value");
    rgbValue.textContent = `RGB(${r}, ${g}, ${b})`;
}
