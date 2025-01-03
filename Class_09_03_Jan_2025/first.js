
// Method1: printing with the help of iteration

const student = {
    name: "Saipriya",
    age: 20,
    city: "Chennai"
}

let str="";

for(let x in student) {
    str += student[x] + " ";
}

document.getElementById("demo-1").innerHTML=str;


// Method2: printing with the help of array
const arr = Object.values(student);
document.getElementById("demo-2").innerHTML=arr;

// Method3: printing with the help of entries method
const studentArr = {
    "Saipriya": 20, "Vijitha": 10, "Arun": 31
}

let str1 = "";
for(let [x, y] of Object.entries(studentArr)) {
    str1 += x + ": " + y + "<br>";
}
document.getElementById("demo-3").innerHTML=str1;

// Method4: json format converted into string; json stringify method
document.getElementById("demo-4").innerHTML=JSON.stringify(student);



// creating object using constuctor functions
function myStudent(name, age, city) {
    this.fullName = name;
    this.age = age;
    this.currentCity = city;
}
const student1 = new myStudent("Priya", 12, "Tirupati");
document.getElementById("demo-5").innerHTML=JSON.stringify(student1);
const student2 = new myStudent("Queena", 19, "Bangalore");
document.getElementById("demo-6").innerHTML=JSON.stringify(student2);
const student3 = new myStudent("Kingy", 23, "Bengaluru");
document.getElementById("demo-7").innerHTML=JSON.stringify(student3);