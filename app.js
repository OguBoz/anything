document.addEventListener("DOMContentLoaded", function(){

    const modal = document.querySelector(".modal");
    setTimeout(function(){
        modal.style.visibility = "visible";
        modal.style.opacity = "1";
    }, 2000);


});



function Car(brand, year){
    this.brand = brand;
    this.year = year;
}

Car.prototype.drive = function() {
    console.log("Booom");
}

let car1 = new Car('BMW', 1994);

function Motorcycle(brand, year) {
    Car.call(this,brand,year);
}

let m1 = new Motorcycle("Suzuki", 1999);