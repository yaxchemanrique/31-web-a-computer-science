class Animal {

    #nombre;
    #edad;

    constructor (nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad
    }

    get nombre() {
        return this.#nombre
    }

    set nombre (nombre) {
        return this.#nombre = nombre
    }
}

let gato = new Animal("Paco",3);

gato.nombre = "Alan";

console.log(gato.nombre);