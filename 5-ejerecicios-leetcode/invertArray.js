/* Given a set of numbers (), return the additive inverse of each. Each positive becomes negatives, and the negatives become positives. */

const invertArray = function (array) {
    const inverted = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            inverted.push(0);
        } else {
            inverted.push(array[i] * (-1));
        }
    }
    return inverted;
}

const arr = [5, 6, -98, 1, 0];
const invertedArr = invertArray(arr);
console.log(invertedArr);
