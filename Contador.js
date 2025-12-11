class Counter {
    #value
    constructor(value){
        this.#value = value
    }

    increment() {
        this.#value++
    }

    reset() {
        this.#value = 0
    }
}

export {
    Counter
}