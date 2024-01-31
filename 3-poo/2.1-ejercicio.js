/* 
! 1. Usar una funcion constructora para implementar un Carro (Car).
Un carro tiene las propiedades de:
    * Velocidad Actual (km/h)
    * Marca y modelo
! 2. Implementar un método de aceleración, en donde cada vez que se ejecute el método aumente la velocidad en 10km/h. (hacer un console.log de la velocidad actual)
! 3. Implementar un método de frenado, end donde cada vez que se ejecute el metodo, disminuya su velocidad en 5km/h.
! 4. Probar con dos carros
*/

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    // this.speed = this.speed + 10;
    this.speed += 10;
    console.log(`El carro ${this.make} va a ${this.speed}km/h`);
}

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`El carro ${this.make} va a ${this.speed}km/h`);
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 90);
/* console.log(bmw);
console.log(mercedes);

bmw.accelerate();
mercedes.accelerate();
bmw.brake();
mercedes.brake(); */

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate = function () {
        this.speed += 10;
        console.log(`El carro ${this.make} va a ${this.speed}km/h`);
    }

    brake = function () {
        this.speed -= 5;
        console.log(`El carro ${this.make} va a ${this.speed}km/h`);
    }
}

const bmwCl = new Car('BMW', 120);
const mercedesCl = new Car('Mercedes', 90);
console.log(bmwCl);
console.log(mercedesCl);

bmwCl.accelerate();
mercedesCl.accelerate();
bmwCl.brake();
mercedesCl.brake();