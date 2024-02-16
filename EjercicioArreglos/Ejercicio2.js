/* Ejercicio 2: Agregar y eliminar elementos de un array
• Crea un array vacío.
• Agrega al menos 3 elementos al array utilizando diferentes métodos (por ejemplo, push, unshift).
• Elimina el último elemento del array.
• Elimina un elemento específico del array por su índice.
• Imprime el array final después de las modificaciones. */

let objetos = [];

objetos.push("Casa", "Carro", "Flor");
objetos.unshift("Celular");
console.log(objetos);
console.log("------------------------------------------")
console.log(objetos.pop())
console.log(objetos);
console.log("------------------------------------------")
objetos.splice(1,1);
console.log(objetos);
