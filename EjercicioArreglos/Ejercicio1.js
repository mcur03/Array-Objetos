/* Ejercicio 1: Crear un array de nombres y recorrerlo
• Crea un array con al menos 5 nombres de personas.
• Recorre el array e imprime cada nombre en la consola.
• Imprime la longitud del array.
 */

let nombre = ["Maria", "Camila", "Flor", "Jeronimo", "Luis"];

for(let i = 0; i < nombre.length; i++){
    console.log("Nombre: " + nombre[i])
}
console.log("Longitud del array: " + nombre.length);
