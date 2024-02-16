/* Ejercicio 4: Ordenar un array
• Crea un array con números aleatorios.
• Ordena el array de forma ascendente.
• Ordena el array de forma descendente.
• Imprime el array antes y después de ordenarlo. */


let numeros = [5, 2, 9, 1, 7, 3, 6, 4, 8, 0];
console.log("1. " + numeros)
console.log("----------------------------------------")
numeros.sort(b = (a, c) => a - c);
console.log("Ascendente: "+numeros); 
console.log("----------------------------------------")
numeros.sort(b = (a, c) => c - a);
console.log("Descendiente: "+numeros); 

