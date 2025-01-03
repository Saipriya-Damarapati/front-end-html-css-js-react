const car={
    brand:"Honda",
    model:"Amaze",
    year:2024,
    startEngine: function() {
        return `${this.brand} ${this.model} ${this.year} starting the engine`;
    },
    stopEngine: function() {
        return `${this.brand} ${this.model} ${this.year} stopping the engine`;
    }
};
car.color="Red";
delete car.color;

document.write("Car brand: ", car.brand);
document.write("Car model: ", car.model);
document.write("Car year: ", car.year);
document.write("Car startEngine: ", car.startEngine());
document.write("Car stopEngine: ", car.stopEngine());