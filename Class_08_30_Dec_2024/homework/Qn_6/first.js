const person = {
    firstName: "Saipriya",
    lastName: "Damarapati",
    gender: "Female",
    workExp: 10
};
const genderBasedPronoun = person.gender == "Female" ? "She" : "He";

const displayPerson = "Here I introduce " + person.firstName + " " + person.lastName + ".<br>" + genderBasedPronoun +" has work experience of " + person.workExp + " years ";

document.getElementById("demo").innerHTML = displayPerson;