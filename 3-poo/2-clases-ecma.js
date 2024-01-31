// Sugar Syntactic

class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2024 - this.birthYear);
    }
    // No hay comas en medio!
    sayHello() {
        console.log(`Hola! Me llamo ${this.firstName}`)
    }
}

const yaxche = new Person('Yaxche', 1993);
const diego = new Person('Diego', 2000);
console.log(yaxche);

yaxche.calcAge();
yaxche.sayHello();

diego.calcAge();
diego.sayHello();