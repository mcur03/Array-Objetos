let clientes = [
    {
        nombre: "Camila",
        documento: "100000",
        pin: "1000",
        saldo: 100000
    },
    {
        nombre: "Sebastian",
        documento: "111111",
        pin: "1111",
        saldo: 100000
    },
    {
        nombre: "Gisela",
        documento: "222222",
        pin: "2222",
        saldo: 100000
    },
    {
        nombre: "Camilo",
        documento: "333333",
        pin: "3333",
        saldo: 100000
    },
]
  
  let clienteActual = null;

    function mostrarMenu() {
  alert("Menu de opciones:\n 1. Realizar retiro de efectivo \n 2. Realizar depósito \n 3. Realizar transferencia \n 4. Consultar saldo \n 5. Salir"  )
}

  function autenticarCliente(id, pin) {
  const personaEncontrada = clientes.find(cliete => cliete.documento === id && cliete.pin === pin);

  // Si personaEncontrada no es undefined, significa que la persona existe en el array
  if (personaEncontrada) {
    console.log("La persona existe en el array.");
    // Puedes devolver la persona encontrada si lo necesitas
    return personaEncontrada;
  } else {
    console.log("Documento o PIN incorrectos");
    return console.log("no hay datos que mostrar"); 
  }
  }
  
   function realizarRetiro(id, pin, monto) {
  const persona = clientes.find(persona => persona.documento === id && persona.pin === pin);

  if (persona) {
    if (persona.saldo >= monto) {
      persona.saldo -= monto;
      alert(`Retiro exitoso. Queda un saldo de $${persona.saldo}.`);
    } else {
      alert("Saldo insuficiente para realizar el retiro.");
    }
  } else {
    alert("Documento o PIN incorrectos. No se pudo realizar el retiro.");
  }
  }
   
     function realizarDeposito(id, pin, montoConsignar) {
        const persona = clientes.find(persona => persona.documento === id && persona.pin === pin);

        if(persona){
            persona.saldo += montoConsignar;
            alert("Consiganacion exitosa, ahora el saldo es de: " + persona.saldo)
        }else{
            alert("Documento o PIN incorrectos. No se pudo realizar consignacion.");
        }
  }
  
  function realizarTransferencia(documentoOrigen, pinOrigen, documentoDestino, montoTransferencia) {
    const personaOrigen = clientes.find(persona => persona.documento === documentoOrigen && persona.pin === pinOrigen);

    const personaDestino = clientes.find(persona => persona.documento === documentoDestino);
  
    if (personaOrigen && personaDestino) {

      alert(personaOrigen);
      alert(personaDestino);
      if (personaOrigen.saldo >= montoTransferencia) {

        personaOrigen.saldo -= montoTransferencia;
        personaDestino.saldo += montoTransferencia;
        alert(`Transferencia exitosa. Nuevo saldo de ${personaOrigen.nombre}: $${personaOrigen.saldo}, nuevo saldo de ${personaDestino.nombre}: $${personaDestino.saldo}.`);
      } else {
        alert("Saldo insuficiente para realizar la transferencia.");
      }
    } else {
      alert("Documento o PIN incorrectos. No se pudo realizar la transferencia.");
    }
  }
 
  function consultarSaldo(id, pin) {
    const personaSaldo = clientes.find(persona => persona.documento === id && persona.pin === pin);
    if(personaSaldo){
        alert("Hola! " + personaSaldo.nombre + " su saldo actual es de: " + personaSaldo.saldo)
    }else{
        alert("Documento o PIN incorrectos, no se puede realizar la consulta.")
    }
  }

  function main() {
    let opcion
  do {
    mostrarMenu();
    opcion = parseInt(prompt("Ingrese el número de la opción deseada:"));

    switch (opcion) {
      case 1:
        realizarRetiro(prompt("Ingrese el documento"), prompt("Ingrese el pin"), prompt("Ingrese un monto a retirar"));
        break;
      case 2:
        realizarDeposito(prompt("Ingrese el documento"), prompt("Ingrese el pin"), parseInt(prompt("Ingrese monto a depositar")));
        break;
      case 3:
        realizarTransferencia(prompt("Ingrese el documento de la persona que envia el dinero"), prompt("Ingrese el pin de la persona que envia el dinero"), prompt("Ingrese el documento de la persona que recibe el dinero"), parseInt(prompt("Ingrese el monto a enviar")));
        break;
      case 4:
        consultarSaldo(prompt("Ingrese el documento"), prompt("Ingrese el pin"));
        break;
      case 5:
        alert("Gracias por utilizar nuestro servicio. ¡Hasta luego!");
        break;
      default:
        alert("Opción inválida. Por favor, ingrese un número válido del menú.");
        break;
    }
  } while (opcion !== 5);
}

    main();
    //autenticarCliente(prompt("Ingrese el documento"), prompt("Ingrese el pin"));
    
    