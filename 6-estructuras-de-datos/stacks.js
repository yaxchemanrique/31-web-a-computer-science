class Stack {
    #array;
    #size;

    constructor(){
        this.#array = [];
        this.#size = this.#array.length;
    }

    Size () {
        if(this.#size <= 0){
            return "Esta pila esta vacia";
        } else {
            return this.#size;
        }
    }

    Push (data) {
        this.#array.push(data);
        this.#size = this.#array.length;
    }

    Pop () {
        let item = this.#array[this.#size - 1];
        this.#array.pop();
        this.#size = this.#array.length;
        return item;
    }

    Peek () {
        return this.#array[this.#size - 1];
    }

    Print(){
        this.#array.forEach(function (element) {
            console.log(element);
        });
    }
}

let pila = new Stack();

pila.Push(5);
pila.Push(6);
pila.Push(7);
pila.Push(9);


pila.Print();