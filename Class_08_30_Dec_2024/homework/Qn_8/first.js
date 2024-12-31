const person = {
    firstName: "Saipriya",
    lastName: "Damarapati",
    age: 10
};

function getKeys(myObj) {
    return Object.keys(myObj);
}

function getValues(myObj) {
    return Object.values(myObj);
}

document.getElementById("demo-keys").innerHTML = "Keys : " + getKeys(person);
document.getElementById("demo-values").innerHTML = "Keys : " + getValues(person);