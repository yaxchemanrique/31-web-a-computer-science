/* Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"

If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the person would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0. 

howMuchILoveYou(7) => "I love you"
howMuchILoveYou(3) => "a lot"
howMuchILoveYou(6) => "not at all"
*/

function howMuchILoveYou(n) {
    let love = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    let index = (n - 1) % love.length;
    return love[index];
}

function howMuchILoveYou(n) {
    while (n > 6) {
        n = n - 6;
    }
    switch (n) {
        case 1:
            console.log("I love you");
            break;
        case 2:
            console.log("a little");
            break;
        case 3:
            console.log("a lot");
            break;
        case 4:
            console.log("passionately");
            break;
        case 5:
            console.log("madly");
            break;
        case 6:
            console.log("not at all");
            break;
        default:
            console.log("Hay algo mal");
            break;
    }
}

howMuchILoveYou(13);
howMuchILoveYou(1);
howMuchILoveYou(3);
howMuchILoveYou(7);

/* console.log(howMuchILoveYou(1));
console.log(howMuchILoveYou(2));
console.log(howMuchILoveYou(3));
console.log(howMuchILoveYou(8)); */