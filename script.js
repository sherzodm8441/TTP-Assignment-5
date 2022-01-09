const gridBoardEl = document.getElementById("grid-board")
const addColBtn = document.getElementById("addCol-btn")
const removeColBtn = document.getElementById("removeCol-btn")
const rowTemplateValue = "100px 100px 100px"
const colTemplateValue = "100px 100px 100px"
let tempString = "" // Will be used in several functions
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
