/* Ejercicio 9: Agrupar elementos de un array por una propiedad
• Crea un array con objetos que tengan una propiedad en común (por ejemplo, color, tamaño, tipo).
• Agrupa los elementos del array por el valor de la propiedad común. */

let personas = [
    {
        nombre: "camila",
        apellido: "Uriber",
        edad: "24"
    },
    {
        nombre: "Sebas",
        apellido: "Ossa",
        edad: "29"
    },
    {
        nombre: "Jeronimo",
        apellido: "Uriber",
        edad: "6"
    },
    {
        nombre: "Flor",
        apellido: "Ossa",
        edad: "40"
    }
];

// Función para agrupar los elementos del array por el valor de la propiedad común
function agrupar(array, propiedad) {
    return array.reduce(function (acc, obj) {
        var clave = obj[propiedad];
        if (!acc[clave]) {
            acc[clave] = [];
        }
        acc[clave].push(obj);
        return acc;
    }, {});
}

// Agrupar los productos por color
let apelli = agrupar(personas, 'apellido');

console.log(apelli);


