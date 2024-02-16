/* Ejercicio 6: Combinar dos arrays
• Crea dos arrays con diferentes elementos.
• Combina los dos arrays en un solo array nuevo.
• Mantén el orden original de los elementos en el array combinado. */

let animal1 = ["perro", "pollo", "loro", "rata"];
let animal2 = ["pez", "conejo", "lombriz"];

let animal3 = [...animal1, ...animal2];
console.log(animal3)