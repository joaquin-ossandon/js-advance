// sets son una especie de colección que no permite elementos duplicados

const mySet = new Set(["Apple", "Banana", "Orange", "Apple"])

console.log(mySet) // Set(3) {"Apple", "Banana", "Orange"}

mySet.add("Grapes")
console.log(mySet) // Set(4) {"Apple", "Banana", "Orange", "Grapes"}

mySet.add("Banana") // no se agrega porque ya existe
console.log(mySet) // Set(4) {"Apple", "Banana", "Orange", "Grapes"}

mySet.delete("Orange")
console.log(mySet) // Set(3) {"Apple", "Banana", "Grapes"}

console.log(mySet.has("Apple")) // true
console.log(mySet.has("Orange")) // false

console.log(mySet.size) // 3

mySet.clear()
console.log(mySet) // Set(0) {}

// maps son una especie de colección de pares clave-valor, básicamente son lo mismo que los objetos pero con algunas diferencias

const myMap = new Map()

// agregar elementos al map
myMap.set("name", "John")
myMap.set("age", 30)
myMap.set("city", "New York")

console.log(myMap) // Map(3) {"name" => "John", "age" => 30, "city" => "New York"}

// obtener un valor del map
console.log(myMap.get("name")) // John
console.log(myMap.get("age")) // 30

// verificar si una clave existe en el map
console.log(myMap.has("city")) // true
console.log(myMap.has("country")) // false

// como verificamos si una clave existe en un objeto?
// const myObject = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }

// console.log("city" in myObject) // true
// console.log("country" in myObject) // false

// obtener el tamaño del map
console.log(myMap.size) // 3

// eliminar un elemento del map
myMap.delete("age") // similar a delete en objetos
console.log(myMap) // Map(2) {"name" => "John", "city" => "New York"}

// como recorremos un map?
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`)
})

// como lo haríamos con un objeto?
// const myObject = {
//     name: "John",
//     city: "New York"
// }

// for (const key in myObject) {
//     console.log(`${key}: ${myObject[key]}`)
// }

// limpiar el map
myMap.clear()
console.log(myMap) // Map(0) {}

// en un objeto, sólo podemos usar strings o símbolos como claves
const myObject = {
    1: "one", // esto se convierte a string "1"
    true: "boolean true", // esto se convierte a string "true",
}

// el map en cambio, permite cualquier tipo de dato como clave
const anotherMap = new Map()
const objKey = {name: "John"}

anotherMap.set(1, "one") // número
anotherMap.set(true, "boolean true") // booleano
anotherMap.set(objKey, "object value")

console.log(anotherMap) // Map(3) {1 => "one", true => "boolean true", {…} => "object"}

// acceder a los valores
console.log(anotherMap.get(1)) // one
console.log(anotherMap.get(true)) // boolean true
console.log(anotherMap.get(objKey)) // object value

const otherMapAgain = new Map()
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")

otherMapAgain.set(btn1, () => {console.log("Boton 1 presionado")})
otherMapAgain.set(btn2, () => {console.log("Boton 2 presionado y hace otra cosa")})
otherMapAgain.set(btn3, () => {console.log("Boton 3 presionado")})
otherMapAgain.set(btn4, () => {console.log("Boton 4 presionado")})
otherMapAgain.set(btn5, () => {console.log("Boton 5 presionado")})

console.log(otherMapAgain) // Map(5) {button#btn1 => "Botón 1", button#btn2 => "Botón 2", button#btn3 => "Botón 3", button#btn4 => "Botón 4", button#btn5 => "Botón 5"}

// acceder a los valores
document.body.addEventListener("click", (e) => {
    const buttonValue = otherMapAgain.get(e.target)
    buttonValue()
})