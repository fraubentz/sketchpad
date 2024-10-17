let container = document.querySelector(".container");


function populateGrid(num) {
    const squareSize = 700 / num;
    for (let i = 0; i < (num*num); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.borderColor = "black";
        square.style.borderWidth = "thick";
        square.textContent = "Square";
        console.log("square");
        container.appendChild(square);
    }
}

populateGrid(16);