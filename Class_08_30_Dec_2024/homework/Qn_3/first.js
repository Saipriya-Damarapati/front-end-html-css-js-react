// arrow functions can be used if the function has only one statement
// parameters can be passed in parantheses
// if there is only one parameter, parantheses can be skipped
let areaRect = (l, b) => (l*b);
document.getElementById("demo").innerHTML = "Area of rectangle is " + areaRect(5, 5);