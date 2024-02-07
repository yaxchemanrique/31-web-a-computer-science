/* We need a function that can transform a string into a number. What ways of achieving this do you know? */
const stringToNumber = function (string) {
    // const number = parseFloat(string); //✅
    const number = Number(string);
    return number;
}

const string = '62.126';
const number = stringToNumber(string);

console.log(number);
console.log(typeof number);