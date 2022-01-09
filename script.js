
function addRow(){ //add a row when called
    //grab all the existing columns
    const colEls = document.getElementsByClassName('column')

    for(let item of colEls){
        //create a new div element with the class attribute of "box"
        const newDiv = document.createElement('div')
        newDiv.setAttribute('class', "box")

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
