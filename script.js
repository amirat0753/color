document.addEventListener("DOMContentLoaded", function() {
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    // Function to generate a random hexadecimal color code
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Function to change the background color of the color box
    function changeColor() {
        const newColor = getRandomColor();
        colorBox.style.backgroundColor = newColor;
    }

    // Attach event listener to the change color button
    changeColorBtn.addEventListener("click", changeColor);
});
