/*Un pequeño negocio necesita un sistema para gestionar su inventario de productos.

El sistema debe permitir al usuario:
• Agregar nuevos productos: registrar nombre, descripción, precio, cantidad en stock
 y categoría.(crear array de
objetos)
• Listar todos los productos: mostrar información completa de cada producto.
• Buscar un producto por nombre: mostrar información del producto si existe.
• Eliminar un producto: eliminar producto del inventario.
• Actualizar la cantidad en stock: modificar la cantidad disponible de un producto*/

let tienda = [];
function Agregar (nombre, descripcion, precio,cantidad, categoria){
    let producto ={
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        cantidad: cantidad,
        categoria: categoria
    }
    tienda.push(producto);
    console.log("Agregado correctamente!!!");
    console.log("-------------------------")
}
Agregar("arroz","diana", 1600, 20, "granos");
Agregar("lentejas","lente", 3400, 50, "granos");

function Listar(){
    console.log("lista de productos");
    tienda.forEach(producto => {
        console.log("nombre: ",producto.nombre),
        console.log("descripcion: ", producto.descripcion),
        console.log("precio: ", producto.precio),
        console.log("cantidad: ", producto.cantidad),
        console.log("categoria: ", producto.categoria);
        console.log("----------------------------");
    })
}
Listar();

function Buscar(nombre){
    let filtrar = tienda.find (producto => producto.nombre === nombre);
    if(filtrar){
        console.log(filtrar.nombre),
        console.log(filtrar.descripcion),
        console.log(filtrar.precio),
        console.log(filtrar.cantidad),
        console.log(filtrar.categoria),
        console.log("------------------------");

    }
    else{
        console.log("No se encontro el producto");
    }
};
Buscar("arroz");

function Eliminar(nombre){
    tienda = tienda.filter (producto => producto.nombre !== nombre);
    console.log("se eliminó el producto")
}
Eliminar("lentejas");
Listar();

function modificar(nombre, nueva_cantidad){
    let producto = tienda.find(producto => producto.nombre === nombre);
    if(producto){
        producto.cantidad = nueva_cantidad;
        console.log("cantidad actualizada correctamente");
    }
    else {
        console.log("Producto no encontrado");
    }
}
modificar("arroz", 40);
Listar();