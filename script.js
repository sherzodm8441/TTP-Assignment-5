

function addRow(){ //add a row when called
    //grab all the existing columns
    const colEls = document.getElementsByClassName('column')

    for(let item of colEls){
        //create a new div element with the class attribute of "box"
        const newDiv = document.createElement('div')
        newDiv.setAttribute('class', "box")
        newDiv.addEventListener('click', setCellColor) // add event listener to set color when clicked

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
        newDiv.addEventListener('click', setCellColor) // add event listener to set color when clicked

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