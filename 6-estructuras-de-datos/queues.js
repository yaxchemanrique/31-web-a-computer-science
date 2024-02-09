class Queue {
    #array;
    #size;

    constructor () {
        this.#array = [];
        this.#size = this.#array.length;
    }

    Enqueue (data) {
        this.#array.unshift(data);
        this.#size = this.#array.length;
    }

    Dequeue () {
        let item = this.#array[this.#size - 1];
        this.#array.pop();
        this.#size = this.#array.length;
        return item;
    }

    isEmpty () {
        if(this.#size <= 0){
            return true;
        } else {
            return false;
        }
    }

    Front () {
        return this.#array[this.#size - 1];
    }

    Back () {
        return this.#array[0];
    }

    Size () {
        return this.#size;
    }
}

let cola = new Queue();

console.log(cola);
console.log(`Console.log antes de insertar elementos ${cola.isEmpty()}`);

cola.Enqueue(5);
cola.Enqueue(3);
cola.Enqueue(2);
cola.Enqueue(1);

console.log(`Console.log despues de insertar elementos ${cola.isEmpty()}`);

console.log(cola);

console.log(cola.Front());
console.log(cola.Back());
console.log(cola.Size());
