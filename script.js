

function addRow(){ //add a row when called
    //grab all the existing columns
    const colEls = document.getElementsByClassName('column')

    for(let item of colEls){
        //create a new div element with the class attribute of "box"
        const newDiv = document.createElement('div')
        newDiv.setAttribute('class', "box")
        newDiv.addEventListener('click', setCellColor) // add event listener to set color when clicked
        newDiv.addEventListener("mousedown", dragStart) // add event listener to record beginning of drag & drop
        newDiv.addEventListener("mouseover", dropColors) // set color of box when mouse is held down
        newDiv.addEventListener("mouseup", dragEnd) // add event listener to record ending of drag & drop

        //append the div element to the end of every row, effectively creating a new row
        item.append(newDiv)
    }
    
    
}


function removeRow(){ //removes a row when called
    //grab all the existing columns
    const colEls = document.getElementsByClassName('column')


    for(let item of colEls){
        //in each column...
        const div = item.getElementsByClassName('box')

        //...remove the last box div, effectively removing a row
        if(div.length > 1){ //makes sure theres at least one row remaining
            div[div.length - 1].remove()
        }
        
    }
}


function addColumn(){ //adds a column when called
    //grab the grid
    const grid = document.getElementById('grid-board')
    //create a new div...
    const newCol = document.createElement('div')
    //...and indicate that it is a column
    newCol.setAttribute('class', 'column')

    //grab existing columns
    const colEls = document.getElementsByClassName('column')
    //check a column to find the number of boxes we need to append
    const numOfBoxes = colEls[0].getElementsByClassName('box').length
    

    for(let i = 0; i < numOfBoxes; i++){
        //create a new div element with the class attribute of "box"
        const newDiv = document.createElement('div')
        newDiv.setAttribute('class', "box")
        newDiv.addEventListener('click', setCellColor) // set color when clicked
        newDiv.addEventListener("mousedown", dragStart) // record beginning box of drag & drop
        newDiv.addEventListener("mouseover", dropColors) // set color of box when mouse is held down
        newDiv.addEventListener("mouseup", dragEnd) // record ending box of drag & drop


        //append the div element to the end of every column
        newCol.append(newDiv)
    }
    //append the new column with the correct number of boxes to the grid
    grid.append(newCol)

}

function removeColumn(){ //removes a column when called
    const grid = document.getElementById('grid-board')
    const cols = grid.getElementsByClassName('column')
    if(cols.length > 1){ ////makes sure theres at least one column remaining
        cols[cols.length - 1 ].remove()
    } 
}






////////////////////////////////////////////////////////////////////////

// The code below is used to retrieve the current color the user has selected
// using the dropdown box. The value is stored in the let variable "selectedColor"
// Saving into a variable will help save on performance since we won't need to 
// communicate with the DOM as often. 

const colorSelectorEl = document.getElementById("color-selector")
let selectedColor = "transparent"

const setColor = (event) => {
    selectedColor = colorSelectorEl.value
}

colorSelectorEl.addEventListener("change", setColor)


////////////////////////////////////////////////////////////////////////

// The code below is a function that sets the backgroundColor CSS property
// of a cell.


// When an event calls this function, it passes an event object
// Through this object, we can access the element by event.target

function setCellColor(event) {
    
    // Set the background color of the element to the user-selected color
    event.target.style.backgroundColor = selectedColor;

}

////////////////////////////////////////////////////////////////////////

// The code below is a function that goes through each cell in the grid.
// For each cell, it checks if its background color property is transparent
// If it is, it sets the color of it to the currently selected color.

function fillUncoloredCells() {
    // grab existing boxes
    const boxEls = document.getElementsByClassName('box')

    // loop through each box and set color if transparent
    for (box of boxEls) {
        const currentColor = getComputedStyle(box).backgroundColor // returns rgba(0, 0, 0, 0) if transparent

        if (currentColor === "rgba(0, 0, 0, 0)") 
            box.style.backgroundColor = selectedColor
    }

}

////////////////////////////////////////////////////////////////////////


// The below code is for the drag and drop feature

const bodyEl = document.getElementsByTagName("body")
bodyEl[0].addEventListener("mouseup", dragEnd) // record ending box of drag & drop

// The above event listener is needed to prevent the event ending outside the div
// Since in that case, we can't listen to it and the user can keep painting colors.

let dragAndDrop = false

function dragStart(event) {
    dragAndDrop = true
    event.target.style.backgroundColor = selectedColor
}

function dragEnd(event) {
    dragAndDrop = false
}

function dropColors(event) {
    if (dragAndDrop) {
        console.log(event.target)
        event.target.style.backgroundColor = selectedColor
    }
// The code below is a function that goes through each cell in the grid.
// For each cell, it sets the color to the selected color regardless of the current color of the cell


function fillAllCells() {
    // grab existing boxes
    const boxEls = document.getElementsByClassName('box')

    // loop through each box...
    for (box of boxEls) {
        //and set the color to the selected color 
        box.style.backgroundColor = selectedColor
    }

}


////////////////////////////////////////////////////////////////////////

// The code below is a function that goes through each cell in the grid.
// For each cell, it sets the color to transparent regardless of the current color of the cell

function clearColors() {
    // grab existing boxes
    const boxEls = document.getElementsByClassName('box')

    // loop through each box...
    for (box of boxEls) {
        //and set the color to transparent
        box.style.backgroundColor = "transparent"
    }

}