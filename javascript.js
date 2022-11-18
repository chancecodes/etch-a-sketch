//slider range
var slider = document.getElementById("myRange");
var length = document.getElementById("length");
var byLength = document.getElementById("length2")
length.innerHTML = slider.value; // Display the default slider value
byLength.innerHTML = slider.value;

//create initial grid
var gridLength = length.innerHTML;
const container = document.querySelector('.container')
var square;
addColor()

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  length.innerHTML = this.value;
  byLength.innerHTML = length.innerHTML;
  gridLength = length.innerHTML;
}

//grid changes size when slider updated
slider.addEventListener ('mouseup', function() {
    addColor()
});


function createGrid (num) {
    const clear = document.querySelectorAll('.column')
    clear.forEach(column => {
    column.remove();
    });
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
    square = document.querySelectorAll('.gridSquare')
}


//add mousedown/mouseenter/mouseup events for each square

function addColor() {
    createGrid(gridLength)
    square.forEach((box) => {
        box.addEventListener ('mousedown', mouseDown)
        box.addEventListener ('mouseup', mouseUp)
    })
        window.addEventListener ('mouseup', mouseUp)
    }


function mouseDown() {
    console.log('mousedown')
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
    console.log('mouse moving')
    this.classList.add('on')
}



