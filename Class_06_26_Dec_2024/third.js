function myFun(x, y) {
    return x + y;
}

let z = myFun(4, 5);
document.getElementById('demo').innerHTML="The value of z is " + z;

function myFunction(x, y) {
    let z = myFun(x, y);
    document.getElementById('demo-1').innerHTML="The value of z is " + z;
}