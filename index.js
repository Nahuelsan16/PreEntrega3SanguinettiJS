alert('Bienvenido a pinturas Nahuel!');

let entrada = prompt("¡Ingresa un n° del 1 al 10 para ganar un descuento!");
switch (entrada) {
   case "7":
      alert("Felicidades! Ganó un %25 de descuento en nuestras pinturas!");
      break;
   default:
      alert("Lo sentimos, pruebe suerte de nuevo mañana ;)")
      break;
}

let respuesta = prompt('desea un presupuesto de pintura ya?')
if (respuesta === 'si') {}
else {
   alert('disfrute nuestra web ;)');
}

// ------------------------------------
function PresupuestoPorMetro(MetrosCuadrados, PrecioPorMetro) {
   const Presupuesto = MetrosCuadrados * PrecioPorMetro
   return Presupuesto
 }
//   ----------------------------------------
const PrecioPorMetro = 350
const MetrosCuadrados = parseFloat(prompt('ingrese cantidad en m² que desea pintar'))

const resultado = PresupuestoPorMetro(MetrosCuadrados, PrecioPorMetro)
alert(resultado)

alert('gracias')
