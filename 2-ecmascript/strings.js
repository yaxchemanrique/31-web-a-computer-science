const mensaje = 'Hola!';
mensaje.startsWith('H');
mensaje.startsWith('o');

mensaje.endsWith('!');
mensaje.endsWith('H');

const mood = 'Happy! ';
console.log(`I feel ${mood.repeat(3)}`);

/*
Fulano Perez          5514241518
Mengano Perez         5514241518
*/
const user1 = {
    name: 'Fulano Pérez',
    phone: 5514241518,
};

const user2 = {
    name: 'Mengano López',
    phone: 5572682763,
};

function printForAddressbook(user) {
    const columnStartPhone = 20;
    const nameLenght = user.name.length;

    console.log(`${user.name}${' '.repeat(columnStartPhone - nameLenght)}${user.phone}`)
}

//printForAddressbook(user1);
//printForAddressbook(user2);

function printForAddressbook2(user) {
    const columnStartPhone = 20;
    console.log(`${user.name.padEnd(columnStartPhone, ' ')}${user.phone}`)
}

printForAddressbook2(user1);
printForAddressbook2(user2);
