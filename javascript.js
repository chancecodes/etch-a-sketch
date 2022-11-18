//slider range
var slider = document.getElementById("myRange");
var length = document.getElementById("length");
var byLength = document.getElementById("length2")
length.innerHTML = slider.value; // Display the default slider value
byLength.innerHTML = slider.value;

//create initial grid
var gridLength = length.innerHTML;
const sketchArea = document.querySelector('.sketchArea');
var square;
addColor();

// Update the current slider value (each time you drag the slider handle) and set gridLength
slider.oninput = function() {
  length.innerHTML = this.value;
  byLength.innerHTML = length.innerHTML;
  gridLength = length.innerHTML;
}

//grid changes size when slider updated
slider.addEventListener ('mouseup', addColor);

//select pen color
var pickColor = document.getElementById("penColor");
var penColor = pickColor.value;

pickColor.onchange = function() {
    penColor = this.value;
}

//select background color
var bgPickColor = document.getElementById("bgColor")
var bgColor = bgPickColor.value;

bgPickColor.onchange = function() {
    bgColor = this.value;
    console.log(bgColor)
    sketchArea.style.backgroundColor = bgColor;
}


function createGrid (num) {
    const clear = document.querySelectorAll('.column')
    clear.forEach(column => {
    column.remove();
    });

    for (let x=0; x < num; x++) {
        const column = document.createElement('div');
        column.classList.add('column');
        sketchArea.appendChild(column);
        for (let y=0; y < num; y++) {
        const square = document.createElement('div');
        square.classList.add ('gridSquare');
        column.appendChild(square);
        }
    }

    square = document.querySelectorAll('.gridSquare')
}


//add coloring events for each square
function addColor() {
    createGrid(gridLength)
    square.forEach((box) => {
        box.addEventListener ('mousedown', coloring)
        box.addEventListener ('mouseup', stopColoring)
    })
        window.addEventListener ('mouseup', stopColoring)
    }

function coloring() {
    this.style.backgroundColor = penColor;
    square.forEach((box) => {
        box.addEventListener ('mouseenter', dragColor)
    })
}

function stopColoring() {
    square.forEach((box) => {
        box.removeEventListener ('mouseenter', dragColor)
    })
}

function dragColor () {
    this.style.backgroundColor = penColor;
}



