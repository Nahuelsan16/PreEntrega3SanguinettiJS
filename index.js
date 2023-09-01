alert('Bienvenido a pinturas Nahuel!');

let respuesta = parseInt(prompt("¡Ingresa un n° del 1 al 10 para ganar un descuento!"));
if (respuesta === 7) {
   alert("Felicidades! Ganó un %25 de descuento en su compra! Codigo 25")
} else {
   alert("Pruebe suerte de nuevo mañana ;)")
}

// // ------------------------------------------------------------------
// // let respuesta = prompt('desea un presupuesto de pintura ya?')
// // if (respuesta === 'si') {}
// // else {
// //    alert('disfrute nuestra web ;)');
// // }

// // // ------------------------------------
// // function PresupuestoPorMetro(MetrosCuadrados, PrecioPorMetro) {
// //    const Presupuesto = MetrosCuadrados * PrecioPorMetro
// //    return Presupuesto
// //  }
// // //   ----------------------------------------
// // const PrecioPorMetro = 350
// // const MetrosCuadrados = parseFloat(prompt('ingrese cantidad en m² que desea pintar'))

// // const resultado = PresupuestoPorMetro(MetrosCuadrados, PrecioPorMetro)
// // alert(resultado)


// //----------------------------------------------------------


// class Producto {
//    constructor(tipo, precio, litros) {
//       this.tipo = tipo
//       this.precio = precio
//       this.litros = litros
//    }
//    sumaIva() {
//       this.precio = this.precio * 1.21;
//    }
// }
// // ---Productos--
// const prod1 = new Producto('Pintura al Agua', 700, '4L')
// const prod2 = new Producto('Pintura al Agua', 1000, '10L')
// const prod3 = new Producto('Pintura al Agua', 2000, '20L')
// const prod4 = new Producto('Membrana Liquida', 1500, '10L')
// const prod5 = new Producto('Membrana Liquida', 3200, '20L')

// console.log(prod1);
// console.log(prod2);
// console.log(prod3);
// console.log(prod4);
// console.log(prod5);
// prod1.sumaIva();
// prod2.sumaIva();
// prod3.sumaIva();
// prod4.sumaIva();
// prod5.sumaIva();


// // --------------------------------------------------------------
// const wishList = []
// let productosQueBusco = 4

// for (let i = 0; i < productosQueBusco; i++) {
//    const entrada = prompt("Ingrese cada pintrua que este buscando")
//    wishList.push(entrada.toUpperCase())
   
// }

// console.log(wishList)
// alert(wishList.join("\n"))

// ----------------------------------------------------------------------

function aplicarDescuento(montoInicial, porcentajeDescuento) {
   const montoADescontar = montoInicial / 100 * porcentajeDescuento
   const montoFinal = montoInicial - montoADescontar
   return montoFinal
}
function pedirDatos(){
   
}

let codigoDescuento = parseInt(prompt('Tiene el pin de descuento?')) 
if ( r === 25) {
   const montoInicial = parseFloat(prompt('ingrese el monto inicial'));
   const porcentajeDescuento = 25;
   const descuentoAplicado = aplicarDescuento(montoInicial, porcentajeDescuento)
   alert("el total es $" + descuentoAplicado)
} else (codigo != 25); {
   alert("la respuesta " + r + " no es el pin valido, lo sentimos" )
}

alert('gracias, disfuten nuestra web')
