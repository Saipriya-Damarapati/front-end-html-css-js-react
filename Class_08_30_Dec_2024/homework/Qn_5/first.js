function createCounter() {
    const counter = 0;
    return incrementCounter(counter);
}

/*
function incrementCounter(counter) {
    return counter + 1;
}
*/

// using arrow function for single line statement
incrementCounter = counter => counter + 1;

function display() {
    var result = 0;
    if(document.getElementById("demo").innerHTML == null) {
        result = createCounter();
    } else {
        const demoVal = document.getElementById("demo").innerHTML;
        result = incrementCounter(Number(demoVal));
    }
    document.getElementById("demo").innerHTML = result;
}