// messageAlive is used to ensure that the function does not run again 
// if setTimeOut has not finished
let messageAlive = false
const maxColAlert = document.getElementById("max-columns")

function reanimate() {
    
    if (messageAlive)
        return

    maxColAlert.innerText = "Maximum Columns Reached!" // Places text into element
    maxColAlert.setAttribute("class", "fadeOut") // Gives class which starts animation
    
    messageAlive = true
    setTimeout(function() {
        maxColAlert.innerText = ""
        maxColAlert.removeAttribute("class", "fade-out")
        messageAlive = false
    }, 5000) // Make text empty after 5 seconds (time of animation) to remove text and class from page


}