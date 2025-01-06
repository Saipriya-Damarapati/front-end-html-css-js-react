var globalEmp;

function employee(name, age, designation) {
    this.name = name;
    this.age = age;
    this.designation = designation;
    
    this.displayEmployee = function() {
        return JSON.stringify(this);
    };

    globalEmp = this;
}

function createEmp() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const designation = document.getElementById("designation").value;
    return new employee(name, age, designation);
}

function displayDetails() {
    if(!globalEmp) {
        createEmp();
    }
    const dispData = globalEmp.displayEmployee();
    document.getElementById("result").textContent = dispData;
}

function addSalary() {
    if(!globalEmp) {
        createEmp();
    }
    globalEmp.salary = 75000;

    const dispData = globalEmp.displayEmployee();
    document.getElementById("result").textContent = dispData;
}

function removeDesignation() {
    if(!globalEmp) {
        createEmp();
    }
    delete globalEmp.designation;

    const dispData = globalEmp.displayEmployee();
    document.getElementById("result").textContent = dispData;
}
