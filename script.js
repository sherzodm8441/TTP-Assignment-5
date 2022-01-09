const gridBoardEl = document.getElementById("grid-board")
const addColBtn = document.getElementById("addCol-btn")
const removeColBtn = document.getElementById("removeCol-btn")
const rowTemplateValue = "100px 100px 100px"
const colTemplateValue = "100px 100px 100px"
let tempString = "" // Will be used in several functions as a temp variable
const gridChildNodes = gridBoardEl.children


// The below code is used to add a column to a filled grid

gridBoardEl.style.gridTemplateColumns = colTemplateValue

const addCol = () => {
    let cell
    
    //Find the number of columns so we know where to add new cells 
    tempString = gridBoardEl.style.gridTemplateColumns.split(" ")
    let cellsToSkip = tempString.length // number to decrement for loop by


    // Adding a new value creates a new column. Note the space.
    gridBoardEl.style.gridTemplateColumns += " 100px"   
    let cellElements = gridChildNodes.length

    // In the case of no nodes, the for loop would not run.
    // Therefore, we add one cell since there are no rows or columns
    if (cellElements - 1 === -1) {
        cell = document.createElement("div")
        cell.setAttribute("class", "box")
        gridBoardEl.appendChild(cell)
    }

    // Add an element after the last element of a row
    // We know where this is based on the number of columns
    for (let i = cellElements - 1; i >= 0; i -= cellsToSkip) {
        cell = document.createElement("div")
        cell.setAttribute("class", "box")
        gridChildNodes[i].after(cell)
    }


}

addColBtn.addEventListener("click", addCol)

////////////////////////////////////////////////////////////////////////


// The below code is used to add a column to a filled grid

const removeCol = () => {
    
    //Find the number of columns so we know where to remove new cells 
    tempString = gridBoardEl.style.gridTemplateColumns.split(" ")
    let cellsToSkip = tempString.length // number to decrement for loop by

    // Removing a value deletes a column recognized by CSS Grid.
    let index = gridBoardEl.style.gridTemplateColumns.lastIndexOf("100px")
    gridBoardEl.style.gridTemplateColumns = gridBoardEl.style.gridTemplateColumns.slice(0, index)
    let cellElements = gridChildNodes.length
    
    
    // Remove the last element of the row
    // We know where this is based on the number of columns
    for (let i = cellElements - 1; i >= 0; i -= cellsToSkip) {
        gridChildNodes[i].remove()
    }

}


removeColBtn.addEventListener("click", removeCol)


////////////////////////////////////////////////////////////////////////

// The below code is used to retrieve the current color the user has selected
// using the dropdown box. The value is stored in the let variable "selectedColor"
// Saving into a variable will help save on performance since we won't need to 
// communicate with the DOM as often. 

const colorSelectorEl = document.getElementById("color-selector")
let selectedColor = "transparent"

const setColor = (event) => {
    selectedColor = colorSelectorEl.value
}

colorSelectorEl.addEventListener("change", setColor)
