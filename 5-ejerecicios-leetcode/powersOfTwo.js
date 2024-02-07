/* Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ). 
    n = 0  ==> [1]          # [2^0]
    n = 1  ==> [1, 2]       # [2^0, 2^1]
    n = 2  ==> [1, 2, 4]    # [2^0, 2^1, 2^2]

    5 min para hacer representar el algoritmo
    - pseudocodigo, lenguaje natural, DDF, código JS
    
    2**5
    Math.pow()
*/

const powerOfTwo = function (n) {
    let result = [];
    for (let i = 0; i <= n; i++) {
        // auxArray[i] = Math.pow(2, i);
        // result.push(Math.pow(2, i));
        result.push(2 ** i);
    }
    return result;
}

console.log(powerOfTwo(3));
console.log(powerOfTwo(0)); // [1]
console.log(powerOfTwo(1)); // [1, 2]
console.log(powerOfTwo(5)); // [1, 2, 4, 8, 16, 32]
