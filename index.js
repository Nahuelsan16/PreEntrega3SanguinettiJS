
let Presupuesto = 0
const PrecioPorMetro = 300
function sumar(MetrosCuadrados, PrecioPorMetro) {
   let Presupuesto = MetrosCuadrados + PrecioPorMetro
   return Presupuesto
}
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
if (respuesta === 'si') {
   var MetrosCuadrados = parseFloat(prompt('cuantos m² desea pintar?'));
   sumar(MetrosCuadrados, PrecioPorMetro);
}
else {
   alert('disfrute nuestra web ;)');
}


alert('gracias')
