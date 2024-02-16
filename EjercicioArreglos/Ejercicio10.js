/* Ejercicio 10: Convertir un array en un objeto
• Crea un array con elementos de diferentes tipos.
• Convierte el array en un objeto, donde cada elemento del array sea una propiedad del objeto */

let array = ["Nombre", "Apellido", "edad", "Ciudad"];

// Convertir el array en un objeto
let objeto = {};

for (let i = 0; i < array.length; i++) {
    objeto[i] = array[i];
}

console.log(objeto);