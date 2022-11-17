//establish x by x grid length
const gridLength = 20;
const container = document.querySelector('.container')

function createGrid (num) {
    for (let x=0; x < num; x++) {
        const column = document.createElement('div');
        column.classList.add('column');
        container.appendChild(column);
        for (let y=0; y < num; y++) {
        const square = document.createElement('div');
        square.classList.add ('gridSquare');
        column.appendChild(square);
        }
    }
}

createGrid(gridLength)

//add mousedown/mouseenter/mouseup events for each square
const square = document.querySelectorAll('.gridSquare')
square.forEach((box) => {
    box.addEventListener ('mousedown', mouseDown)
    box.addEventListener ('mouseup', mouseUp)
})

window.addEventListener ('mouseup', mouseUp)

function mouseDown() {
    this.classList.add('on')
    square.forEach((box) => {
        box.addEventListener ('mouseenter', drag)
    })
}

function mouseUp() {
    console.log("mouse up")
    square.forEach((box) => {
        box.removeEventListener ('mouseenter', drag)
    })
}

function drag () {
    this.classList.add('on')
}