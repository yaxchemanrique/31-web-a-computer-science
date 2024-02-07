/* Sum all the numbers of a given array, except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
[ 6, 2, 1, 8, 10 ] => 16
[ 1, 1, 11, 2, 3 ] => 6

Input validation

If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0. */

function sumArray(array) {
    let result = 0;
    if ((array === undefined) || (array === null) || (array.length <= 1)) {
        return (0);
    } else {
        for (let i = 0; i < array.length; i++) {
            result += array[i];
        }
        result -= Math.max(...array);
        result -= Math.min(...array);

        return result;
    }
}

function sumArray2(array) {
    if ((array === undefined) || (array === null) || (array.length < 2)) {
        return 0;
    }

    let minValue = Math.min(...array);
    let maxValue = Math.max(...array);

    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== minValue && array[i] !== maxValue) {
            suma += array[i];
        }

    }
    return suma;

}

console.log(sumArray([1, 2, 3, 4, 5]));

let arr = [];
let arr2;
let arr3 = null;
console.log(sumArray(arr));
console.log(sumArray(arr2));
console.log(sumArray(arr3));
console.log(sumArray([1, 2, 5, 9, 10, 3]));
console.log(sumArray([1, 1, 2, 5, 9, 10, 3]));
console.log(sumArray([1, 1, 2, 5, 9, 10, 10, 3]));