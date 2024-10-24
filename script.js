let container = document.querySelector(".container");


function populateGrid(num) {
    const squareSize = 600 / num;
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

function getValue() {
    //let inputField = document.querySelector(".valueSquares");
    //let value = inputField.value;
    let value = prompt("Please enter the number of squares per side you want:");
    clearGrid();
    populateGrid(value);
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
    let colour = randomRGB();
    console.log(colour);
    event.target.style.backgroundColor = colour;
    
});


populateGrid(16);