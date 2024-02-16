/*Ejercicio 2:
Desarrollar en JavaScript un programa para la gestión reservas de un hotel, el cual, debe tener las 
siguientes características y consideraciones:
1. Un cliente puede reservar cualquier tipo de habitación: individual, doble y familiar.
2. Las habitaciones pueden ser para fumadores o no fumadores.
3. Las mascotas solo se aceptan en habitaciones familiares.
4. El hotel cuenta con 3 habitaciones de cada tipo.
5. No se puede exceder el número de personas por habitación: individual 2 personas, 4 personas para 
doble y 6 personas para familiar.
6. El hotel necesita una estadística de las reservas: nombre de quien reserva, país de origen, número de 
personas, el periodo de la estadía, número de personas que están ocupando el hotel y si el huésped 
trajo mascota*/

// Se define las características de las habitaciones del hotel
let habitaciones = {
    individual: { disponible: 3, capacidad: 2, fumadores: false },
    doble: { disponible: 3, capacidad: 4, fumadores: false },
    familiar: { disponible: 3, capacidad: 6, fumadores: false },
  };
  
  // Se crea la array vacía para la lista de reservas
  let reservas = [];
  
  // Se crea la función para realizar la reserva
  function reservar_habitacion(tipo, fumadores, personas, nombre, pais, periodo, mascota) {
    let habitacion = habitaciones[tipo];
  
    // Se verifica la disponibilidad de las habitaciones
    if (habitacion.disponible === 0 || personas > habitacion.capacidad) {
      return "Lo sentimos, no hay disponibilidad de la habitación o se excede del cupo en número de personas";
    }
  
    // Se verifica las restricciones de fumadores y mascotas
    if (fumadores !== habitacion.fumadores) {
      return "Lo sentimos, no se puede reservar una habitación que no cumpla con la preferencia de fumadores.";
    }
    if (tipo !== "familiar" && mascota) {
      return "Lo sentimos, solo se permiten mascotas en las habitaciones familiares";
    }
  
    // Se registra la reserva de la habitación
    habitacion.disponible--;
    reservas.push({
      tipo: tipo,
      nombre: nombre,
      pais: pais,
      personas: personas,
      periodo: periodo,
      mascota: mascota
    });
  
    return "Reserva realizada exitosamente.";
  }
  
  // Función para obtener estadísticas de reservas
  function obtenerEstadisticas() {
    let ocupadas = reservas.reduce((total, reserva) => total + reserva.personas, 0);
    let mascotas = reservas.filter(reserva => reserva.mascota).length;
    return {
      totalReservas: reservas.length,
      totalOcupadas: ocupadas,
      totalMascotas: mascotas
    };
  }
  
  // Ejemplo de uso
  console.log(reservar_habitacion('individual', false, 2, 'Juan', 'Argentina', '2024-02-15', false));
  console.log(reservar_habitacion('familiar', false, 5, 'María', 'España', '2024-02-17', true));
  console.log(reservar_habitacion('doble', true, 3, 'Pedro', 'México', '2024-02-20', false));
  
  console.log(obtenerEstadisticas());