import { Counter } from "./Contador.js"

class LikesCount extends Counter {
    #users = []

    constructor(value = 0) {
        super(value)
    }

    increment(user) {
        const userExists = this.#users.includes(user) // true o false

        if(!userExists) {
            console.log(`${user} te dió un like.`)
            this.#users.push(user)
            super.increment()
        } else {
            console.log(`Oye ${user}, deja de psicopatear.`)
        }
    }
}

export {
    LikesCount
}