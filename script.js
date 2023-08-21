const numbers = [20,22,23,18,44];
let some = numbers.some(myFunction);
document.getElementById("para").innerHTML = some ;
function myFunction(value, index, array ){
    return value > 18;
}