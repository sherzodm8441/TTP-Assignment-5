const gridBoardEl = document.getElementById("grid-board")
const addColBtn = document.getElementById("addCol-btn")
const cell = `<div class="box"></div>` // Use this variable to add a cell
const rowTemplateValue = "100px 100px"
const colTemplateValue = "100px 100px"
let tempString = ""

// The below code is used to add a column to a filled grid

gridBoardEl.style.gridTemplateColumns = colTemplateValue

const addCol = () => {

    // Adding a new value creates a new column. Note the space.
    gridBoardEl.style.gridTemplateColumns += " 100px"

    //Find number of rows
    tempString = rowTemplateValue.split(" ")

    // Add an element for every row (to fill the grid)
    for (let i = 0; i < tempString.length; i++) {
        gridBoardEl.innerHTML += cell
    }

}

addColBtn.addEventListener("click", addCol)

////////////////////////////////////////////////////////////////////////