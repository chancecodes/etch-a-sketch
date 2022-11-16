// Etch a Sketch
// Create 16 x 16 grid

const gridSquares = 16;
const container = document.querySelector('.container')

function createGrid (num) {
    for (let x=0; x < num; x++) {
        const column = document.createElement('div');
        column.classList.add('column');
        container.appendChild(column);
        for (let y=0; y < num; y++) {
        const square = document.createElement('div');
        square.classList.add ('box');
        column.appendChild(square);
        }
    }
}

createGrid(gridSquares)