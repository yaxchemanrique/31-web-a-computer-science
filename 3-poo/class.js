class Animal {

    #nombre;
    #edad;

    constructor (nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad
    }

    getNombre() {
        return this.#nombre
    }

    set nombre (nombre) {
        return this.#nombre = nombre
    }
}

let gato = new Animal("Paco",3);

gato.nombre = "Alan";

console.log(gato);

class Construccion {

    medidas;
    pisos;
    color;

    constructor(medidas, pisos, color){
        this.medidas = medidas;
        this.pisos = pisos;
        this.color = color;
    }

    expandir () {
        this.medidas += 3
        this.pisos += 1
    }
}

const construccion1 = new Construccion(6, 2, "rojo");

construccion1.expandir()

console.log(construccion1.pisos);

class Vehiculo {

    color;
    velocidad;

    constructor (color, velocidad){
        this.color = color;
        this.velocidad = velocidad;
    }

    encender () {
        console.log("El vehiculo se encendio");
    }
}

class Coche extends Vehiculo {

    marca;
    modelo;

    constructor (color, velocidad, marca, modelo){
        super(color, velocidad);
        this.marca = marca;
        this.modelo = modelo;
    }

    acelerar () {
        this.velocidad += 5
    }
}

const bugatti = new Coche("Naranja", 200, "Bugatti", "Vyron");

bugatti.encender()

class VehiculoVolador extends Vehiculo {
    alturaMaxima;

    constructor(color, velocidad, alturaMaxima){
        super(color, velocidad);
        this.alturaMaxima = alturaMaxima;
    }

    volar() {
        console.log("El vehiculo esta volando");
    }
}

class Helicoptero extends VehiculoVolador {
    numeroDeHelices;
    tipo;

    constructor(color,numeroDeHelices){
        super(color);
        this.numeroDeHelices = numeroDeHelices;
        this.tipo = "Militar"
    }

    ascender () {
        console.log(`El helicoptero de tipo ${this.tipo} esta ascendiendo`);
    }
}

class Car {
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    static numberOfWheels = 4;

    static startEngine() {
        console.log("Engine started!");
    }
}