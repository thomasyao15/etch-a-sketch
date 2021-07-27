
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

    if (rainbowEnabled) {
        randomlyGeneratedColor = getRandomColor()
        console.log(randomlyGeneratedColor);
        e.target.style.cssText = `background-color: ${randomlyGeneratedColor}`;
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function modifyGridSize() {
    gridSize = parseInt(prompt("Enter a custom side length:"));
    
    if (gridSize > 100) {
        gridSize = 100;
    }
    generateGrid(gridSize);
}

// Set initial grid size
generateGrid(4);
let rainbowEnabled = false;
// let mouseDown = 0;

// document.body.onmousedown = function() { 
//   ++mouseDown;
//   console.log(mouseDown);
// }
// document.body.onmouseup = function() {
//   --mouseDown;
//   console.log(mouseUp);
// }


const modButton = document.getElementById("modify-size");
const rainbowButton = document.getElementById("toggle-rainbow");

modButton.addEventListener("click", modifyGridSize);
rainbowButton.addEventListener("click", () => {
    rainbowEnabled = !rainbowEnabled;
})


