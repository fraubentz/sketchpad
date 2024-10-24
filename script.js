let container = document.querySelector(".container");
let button = document.querySelector("#getValue");
let defaultValue = 16;

populateGrid(defaultValue);

function populateGrid(num) {
    const squareSize = 600 / num;
    clearGrid();
    for (let i = 0; i < (num*num); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.borderColor = "black";
        square.style.borderWidth = "0.1rem";
        //square.textContent = "Square";
        //console.log("square");
        container.appendChild(square);
    }
}

function clearGrid() {
    container.innerHTML = "";
}

function randomRGB() {
    let ranNum = Math.floor(Math.random() * 255.999);
    let ranNum2 = Math.floor(Math.random() * 255.999);
    let ranNum3 = Math.floor(Math.random() * 255.999);
    return "rgb(" + ranNum.toString() + "," + ranNum2.toString() + "," + ranNum3.toString() + ")";
}

container.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = randomRGB();
    event.target.style.opacity = Math.random();
});

button.addEventListener("click", () => {
    let value = parseInt(prompt("Please enter the number of squares per side you want (between 1 and 100):"));
    
    if (value > 100) {
        alert("Sorry. Only between 1 and 100 is allowed. Please choose again.");
    } else {
        populateGrid(value);
    }
});

