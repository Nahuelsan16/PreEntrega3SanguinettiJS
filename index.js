
let presupuesto = 0
let precioxmetro = 300
function sumar(metroscuadrados, precioxmetro) {
   let presupuesto = metroscuadrados + precioxmetro
   return presupuesto
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
   var metroscuadrados = parseFloat(prompt('cuantos m² desea pintar?'))
}
else {
   alert('disfrute nuestra web ;)');
}


alert('gracias')
