const person = {
    firstName: "Saipriya",
    lastName: "Damarapati",
    age: 10
};

document.getElementById("demo").innerHTML = person.firstName + " " + person.lastName + " is " + person.age + " years old";

function updatePerson() {
    person.age = 20;
    person.address = "Chennai";
    document.getElementById("demo").innerHTML = person.firstName + " " + person.lastName + " is " + person.age + " years old, staying in " + person.address;
}