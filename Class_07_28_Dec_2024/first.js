// keyword-function followed by a functionName()
// function names contins letters, digits, specialcharacters ( underscore _ and dollar $)
// any number of parameters in parantheses

function display(l, b) {
    return "Area of the rectangle " + (l * b);
}

let areaRect=display(4, 3);
document.getElementById("demo").innerHTML = areaRect;