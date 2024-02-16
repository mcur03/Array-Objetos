/* Ejercicio 5: Filtrar elementos de un array
• Crea un array con nombres de personas y sus edades.
• Filtra el array para obtener solo los nombres de las personas mayores de edad (por ejemplo, usando filter).
• Imprime los nombres de las personas que cumplen con el criterio.
• Usa un bucle para recorrer el array filtrado y realizar alguna acción con cada elemento (por ejemplo, mostrar un 
mensaje).
 */

let personas = [
    {
        nombre: "Camila",
        edad: 24
    },
    {
        nombre: "Flor",
        edad: 40
    },
    {
        nombre: "Emanuel",
        edad: 15
    },
    {
        nombre: "Jeronimo",
        edad: 6
    },
    {
        nombre: "Sebas",
        edad: 29
    },
    {
        nombre: "Victor",
        edad: 16
    }
];

let mayoresEdad = personas.filter(e = persona => persona.edad >= 18);

mayoresEdad.forEach(e = persona => console.log(persona.nombre));

mayoresEdad.forEach(e = persona => console.log("La persona " + persona.nombre + " es mayor de edad con " + persona.edad + " años."));

let menoresEdad = personas.filter(e = persona => persona.edad < 18);
console.log("----------------------------------------------------------------------")
menoresEdad.forEach(e = persona => console.log("La persona " + persona.nombre + " es menor de edad con " + persona.edad + " años"))