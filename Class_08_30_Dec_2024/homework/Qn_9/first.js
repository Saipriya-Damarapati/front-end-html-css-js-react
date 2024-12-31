function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const firstCar = new Car("Hyundai", "Creta", 2022);

document.getElementById("demo").innerHTML = getDetails();

function getDetails() {
    return "My car is " + firstCar.make + " " + firstCar.model + " of year " + firstCar.year;
}