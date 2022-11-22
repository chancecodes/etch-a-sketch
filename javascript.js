//slider range
var slider = document.getElementById('myRange');
var length = document.getElementById('length');
var byLength = document.getElementById('length2');
// Display the default slider value
length.innerHTML = slider.value; 
byLength.innerHTML = slider.value;

// Update current slider value when you drag the slider handle and set to gridLength
slider.oninput = function() {
  length.innerHTML = this.value;
  byLength.innerHTML = length.innerHTML;
  gridLength = length.innerHTML;
}

//grid changes size when slider updated
slider.addEventListener ('mouseup', addColor);

//select pen color
var pickColor = document.getElementById('penColor');
var penColor = pickColor.value;
var userPick = pickColor.value;

pickColor.onchange = function() {
    userPick = this.value;
    penColor = userPick;
};

//initialize buttons
const color = document.getElementById('color');
color.classList.add("buttonOn");
var coloringMode = true;
const eraser = document.getElementById ('eraser');
const rainbow = document.getElementById('rainbow');
const shade = document.getElementById('shade');

//create initial grid with coloring ability
var gridLength = length.innerHTML;
const sketchArea = document.querySelector('.sketchArea');
var square;

addColor();


function createGrid (num) {
    const clear = document.querySelectorAll('.column');
    clear.forEach(column => {
    column.remove();
    });

    for (let x=0; x < num; x++) {
        const column = document.createElement('div');
        column.classList.add('column');
        sketchArea.appendChild(column);
        for (let y=0; y < num; y++) {
        const square = document.createElement('div');
        square.classList.add ('gridSquare', 'grid');
        square.style.backgroundColor = "rgb(255,255,255)";
        square.style.filter = "brightness(1)";
        column.appendChild(square);
        }
    }

    square = document.querySelectorAll('.gridSquare');
}

//add coloring events to each square
function addColor() {
    
    createGrid(gridLength);
    toggleGridLines();
    square.forEach((box) => {
        box.addEventListener ('mousedown', coloring);
        box.addEventListener ('mouseup', stopColoring);
    });
        window.addEventListener ('mouseup', stopColoring);
    };

function coloring(e) {
    if (rainbowMode) {
        randomColor();
    }

    if (eraserMode) {
        penColor = "rgb(255,255,255)";
        e.target.style.filter = "brightness(1)";
    }

    if (coloringMode) {
        e.target.style.backgroundColor = penColor;
    }

    if (shadingMode) {
        var getBrightness = e.target.style.filter;
        var brightnessValue = getBrightness.replace(/[brightness()]/g, "");
        e.target.style.filter = `brightness(${brightnessValue - .1})`;
        console.log(e.target.style.filter);
    }

    square.forEach((drag) => {
        drag.addEventListener ('mouseenter', coloring);;
    });
};

function stopColoring() {
    square.forEach((box) => {
        box.removeEventListener ('mouseenter', coloring);
    });
};

//remove highlight from button if new button clicked
function removeHighlight () {
    const btn = document.querySelectorAll('.button');
    btn.forEach(button => {
        button.classList.remove('buttonOn');
    })
}

//RAINBOW MODE
rainbow.addEventListener('click', activateRainbowMode)
var rainbowMode;

function randomColor () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    penColor = `rgb(${r},${g},${b})`;
}

function activateRainbowMode () {
    removeHighlight();
    rainbowMode = true;
    coloringMode = true;
    rainbow.classList.add("buttonOn");

    eraserMode = false;
    shadingMode = false;
}


//COLOR MODE
color.addEventListener ('click', activateColorMode);

function activateColorMode() {
    removeHighlight();
    coloringMode = true
    color.classList.add("buttonOn");
    penColor = userPick;

    rainbowMode = false;
    eraserMode = false;
    shadingMode = false;
}


//Shading Mode
shade.addEventListener ('click', activateShading);
var shadingMode;

function activateShading() {
    removeHighlight();
    shadingMode = true;
    shade.classList.add("buttonOn");

    rainbowMode = false;
    eraserMode = false;
    coloringMode = false;
}


//Eraser
eraser.addEventListener ('click', activateEraser);
var eraserMode;

function activateEraser() {
    removeHighlight();
    eraserMode = true;
    coloringMode = true;
    eraser.classList.add("buttonOn");

    rainbowMode = false;
    shadingMode = false;
}


//clear board
const clear = document.getElementById('clear');
clear.addEventListener ('click', clearBoard);

function clearBoard() {
    square = document.querySelectorAll('.gridSquare');
    square.forEach (box => {
        box.style.backgroundColor = "rgb(255,255,255)";
        box.style.filter = "brightness(1)";
    })
}


//toggle gridLines 
const gridLines = document.getElementById('gridLines');

gridLines.addEventListener('click', toggleGridLines);

function toggleGridLines() {
    square = document.querySelectorAll('.gridSquare')
    square.forEach (gridLine => {
        gridLine.classList.toggle('grid')
    }) 
}
