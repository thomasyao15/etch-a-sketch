
function generateGrid(gridSize) {
    const grid = document.getElementById("grid");
    grid.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr)`;

    grid.innerHTML = '';  // clears all divs before appending

    let amountOfSquares = gridSize * gridSize;

    for (let i = 0; i < amountOfSquares; i++) {
        const square = document.createElement('div');
        square.classList.add("square");
        grid.appendChild(square);
    }

    addEventListeners();
}

function addEventListeners() {
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("mouseover", fillSquareColour)
        console.log(square);
    })
}

function fillSquareColour(e) {
    e.target.classList.add("filled");
}

function modifyGridSize() {
    gridSize = parseInt(prompt("Enter a custom side length:"));
    
    generateGrid(gridSize);
}

// Set initial grid size
generateGrid(4);


const modButton = document.getElementById("modify-size");
const rainbowButton = document.getElementById("toggle-rainbow");

modButton.addEventListener("click", modifyGridSize);



