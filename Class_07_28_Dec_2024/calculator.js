const result=document.getElementById("result");

function calculate() {
    try {
        result.value = eval(result.value);
    } catch {
        alert("Invalid input");
    }
}

function append(value) {
    result.value += value;
}

function deleteResult() {
    result.value = '';
}