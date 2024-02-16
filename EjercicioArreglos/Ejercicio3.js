/* Ejercicio 3: Buscar un elemento en un array
• Crea un array con al menos 10 elementos de diferentes tipos (números, strings, booleanos).
• Busca un elemento específico en el array por su valor.
• Imprime la posición (índice) del elemento encontrado o un mensaje si no se encuentra.
• Bonus: Usa diferentes métodos para realizar la búsqueda (por ejemplo, indexOf, find) */

let animales = ["perro", "gato", 123, 0, 1, true, false, 4567, "zorro", "1234"];

let falso = animales.filter(num => num == false);
console.log("tipo booleano-falso: " + falso);
console.log("-----------------------------------------------------------------")

let indice = animales.indexOf(0);
console.log(indice);