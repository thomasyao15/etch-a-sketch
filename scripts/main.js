
function generateGrid(gridSize) {
    const grid = document.getElementById("grid");
    grid.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr)`;

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

generateGrid(4);

