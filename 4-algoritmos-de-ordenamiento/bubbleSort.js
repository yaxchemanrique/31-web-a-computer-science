function bubbleSort (array) {
    for(let i = 0; i < array.length; i++) {
        for(let step = 0 ; step < array.length - i; step++){
            if (array[step] > array[step+1]){
                let aux = array[step];
                array[step] = array[step + 1];
                array[step + 1] = aux
            }
        }
    }
    return array
}

let numbers = [7,5,9,3,4,1]

console.log(numbers);

let sortedArray = bubbleSort(numbers);

console.log(sortedArray);

console.log(numbers);