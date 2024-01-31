/* 
1. Función Constructora
2. Clases de ES06
3. Object.create()
*/

const arr = [1, 4, 53, 5];
console.log(arr)
// console.log(arr.indexOf(53));

const Person = function (firstName, birthYear) {
    // console.log(this);
    // yaxche.nombre = firstName;
    // this.nombre = firstName;
    // this.nacimiento = birthYear;
    this.firstName = firstName;
    this.birthYear = birthYear;

    // ⬇️ Es MUUUUUY mala práctica
    /* this.calcAge = function () {
        console.log(2024 - this.birthYear);
    } */
}

const yaxche = new Person('Yaxche', 1993);
const diego = new Person('Diego', 2000);
console.log(yaxche);
console.log(diego);
/* yaxche.calcAge();
diego.calcAge(); */

/* 
1. Se crea un nuevo objeto vacío {}
2. se llama a la funcion constructora, this = {}
3. {} se liga al prototipo
4. la funcion nos regresa nuestro objeto {}
*/

console.log(Person.prototype);

// Crear nuevos métodos
Person.prototype.calcAge = function () {
    console.log(2024 - this.birthYear);
}

yaxche.calcAge();
diego.calcAge();

/* console.log(Person.prototype);
console.log(yaxche.__proto__);
console.log(yaxche.__proto__ === Person.prototype);
// Person.prototype Person.prototypeInstance
console.log(Person.prototype.isPrototypeOf(yaxche));
console.log(Person.prototype.isPrototypeOf(diego));
console.log(Person.prototype.isPrototypeOf(Person));
*/
// Crear nuevas Propiedades
Person.prototype.species = 'Homo Sapiens';
// console.log(yaxche.species);
// console.log(diego.species);

// console.log(yaxche.hasOwnProperty('firstName'));
// console.log(yaxche.hasOwnProperty('species')); 

// Person
console.log(yaxche.__proto__);
// Object
console.log(yaxche.__proto__.__proto__);
// null
console.log(yaxche.__proto__.__proto__.__proto__);

// ! Cómo asigna memoria JS?
const array1 = [1, 3, 45, 6, 7];
// let array2 = [1, 3, 45, 6, 7];
let array2 = array1;

// console.log(array1 === array2);

// Array
console.log(array1.__proto__);
// Object
console.log(array1.__proto__.__proto__);
// null
console.log(array1.__proto__.__proto__.__proto__);

// Cuál es la cadena de prototipo de los elementos HTML?
// const h1 = document.querySelector('h1');

// ⚠️ Use con precaución
Array.prototype.average = function () {
    let acumulador = 0;
    for (let i = 0; i < this.length; i++) {
        acumulador += this[i];
    }
    return acumulador / this.length;
};

console.log(array1.average());
