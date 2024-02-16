/* Ejercicio 7: Eliminar elementos duplicados de un array
• Crea un array con elementos duplicados.
• Elimina los elementos duplicados del array.
 */
let array1 = [1, 2, 3, 4, 1, 5, 2, 3, 6, 7];

let array2 = array1.filter(a = (elemento, indice) => array1.indexOf(elemento) === indice)

console.log(array2);
