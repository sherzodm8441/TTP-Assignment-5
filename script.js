
function addRows(){
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

function removeRows(){
    //grab all the existing columns
    const colEls = document.getElementsByClassName('column')


    for(let item of colEls){
        //in each column...
        const div = item.getElementsByClassName('box')
        //...remove the last box div, effectively removing a row
        div[div.length - 1].remove()
    }
}
