const nombre = "Diego";

const edad = 15;

const hasIne = false;

console.log(`Yo me llamo ${nombre} y tengo ${edad} años por ende ${hasIne ? `tengo INE` : `no tengo INE`}`)

function dividir (a,b=2) {
    return a / b;
}

console.log(dividir(30,5));

function sumaNNumeros (...numeros) {
    let total = 0;
    for (const numero of numeros){
        total += numero
    }
    return total
}

console.log(sumaNNumeros(4,5));

let frutas = ["fresa", "Mango", "pera", "manzana", "uva"];

let verduras = ["jitomate", "cebolla"];

let frutasYVerduras = [...frutas,...verduras];

let persona = {
    nombre: "Diego",
    edad: 20,
}

let persona2 = {
    name: "Yaxche",
    age: 29,
}

let yo = {...persona, ...persona2}

console.log(yo);

let persona3 = {
    nombre: "Diego",
    edad: 20,
}

let { nombre2, edad2 } = persona

console.log(edad2);

let frutas2 = ["fresa", "Mango", "pera", "manzana", "uva"];

let [, , ,fruta1, fruta2] = frutas;

console.log(fruta2);

let nombre3 = "Diego";

let nombre4 = "Yaxche";

const suma = (a,b) => a + b;

const saludo = nombre => console.log(nombre);

console.log(suma(5,10));

saludo(nombre);

saludo(nombre2);

let personas = [
    {
        nombre: "Diego",
        edad: 20,
    },
    {
        nombre: "Yaxche",
        edad: 29,
    }
]

let encontrado = personas.find(({nombre}) => nombre === "Diego");

console.log(encontrado);

let numeros1 = [1,2,3,4,5];

let numerosPor2 = numeros1.map((numero) => 
    numero * 2
);

console.log(numerosPor2);

let numeros = [1,2,3,4];

console.log(numeros.at(-1)) 

let saludo2 = "Hola";

for(const letra of saludo){
    console.log(letra);
}

let numeros2 = [1,2,3,4,5];

numeros.forEach((numero) => 
    console.log(numero * 2)
);

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}


const multiplicacion = (a,b) => (
    console.log(`El resultado de multiplicar ${a} por ${b} es: ${a*b}`)
);

let arr = ["a", "b", "c"];