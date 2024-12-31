// callbacks: A callback is a function passed as an argument to another function.

function getNumbersFromCallback(myNumbers, isEvenNumber) {
    const evenNumArr = [];
    myNumbers.forEach(element => {
        if(isEvenNumber(element)) {
            evenNumArr.push(element);
        }
    });
    return evenNumArr;
}

// this is a callback fnction
function isEvenNumber(number) {
    if(number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

// this is a callback fnction
function isOddNumber(number) {
    if(number % 2 == 0) {
        return false;
    } else {
        return true;
    }
}

const myNumbers = [4, 1, 20, 7, 5, 9, 6];
// When you pass a function as an argument, remember not to use parenthesis.
document.getElementById("demo-1").innerHTML = "Even numbers are " + getNumbersFromCallback(myNumbers, isEvenNumber);
document.getElementById("demo-2").innerHTML = "Odd numbers are " + getNumbersFromCallback(myNumbers, isOddNumber);