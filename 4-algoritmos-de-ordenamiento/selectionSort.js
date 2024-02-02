function selectionSort(array, size) {
    for(let step = 0; step < size - 1; step++){
        let minIndex = step;
        for(let i = step + 1; i < size; i++){
            if(array[i] < array[minIndex]){
                minIndex = i;
            }
        }
        let aux = array[step];
        array[step] = array[minIndex];
        array[minIndex] = aux;
    }

    console.log(array);
}

let numbers = [54,232,3,3434,645];

selectionSort(numbers, numbers.length);
