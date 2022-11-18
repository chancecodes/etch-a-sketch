//slider range
var slider = document.getElementById("myRange");
var length = document.getElementById("length");
var byLength = document.getElementById("length2");
// Display the default slider value
length.innerHTML = slider.value; 
byLength.innerHTML = slider.value;

//create initial grid with coloring ability
var gridLength = length.innerHTML;
const sketchArea = document.querySelector('.sketchArea');
var square;
addColor();

// Update current slider value when you drag the slider handle and set to gridLength
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
};

//select background color
var bgColor = document.getElementById("bgColor");

bgColor.onchange = function() {
    bgColor = this.value;
    sketchArea.style.backgroundColor = bgColor;
};


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


//add coloring events to each square
function addColor() {
    createGrid(gridLength);
    square.forEach((box) => {
        box.addEventListener ('mousedown', coloring);
        box.addEventListener ('mouseup', stopColoring);
    });
        window.addEventListener ('mouseup', stopColoring);
    };

function coloring() {
    if (rainbowMode === "on") {
        randomColor()
    }
    this.style.backgroundColor = penColor;
    square.forEach((box) => {
        box.addEventListener ('mouseenter', dragColor);
    });
};

function stopColoring() {
    square.forEach((box) => {
        box.removeEventListener ('mouseenter', dragColor);
    });
};

function dragColor () {
    if (rainbowMode === "on") {
        randomColor()
    }
    this.style.backgroundColor = penColor;
};


//RAINBOW MODE
const rainbow = document.getElementById("rainbow")
rainbow.addEventListener('click', activateRainbowMode)
var rainbowMode;

function randomColor () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    penColor = `rgb(${r},${g},${b})`
}

function activateRainbowMode () {
    rainbowMode = "on";
    rainbow.classList.add("buttonOn");
}