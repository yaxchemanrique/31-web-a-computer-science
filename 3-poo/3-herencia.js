const Person = function (firstName, birthYear) {
    console.log('Person: ', this);
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2024 - this.birthYear);
}

/* const Student = function(firstName, birthYear, course) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.course = course;
} */

const Student = function (firstName, birthYear, course) {
    console.log('Student: ', this)
    // Person(firstName, birthYear);
    Person.call(this, firstName, birthYear);
    this.course = course;
}

const yaxche = new Student('Yaxche', 1993, 'Profesional en Coding')
console.log(yaxche)