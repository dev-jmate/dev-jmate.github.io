let totalPrecio = 0;
// Instancio el objeto invitado
class Invitado {
    constructor(nombre, esVegano) {
      this.nombre = nombre;
      this.esVegano = esVegano;
    }
}

// Declaro array de invitados
const invitados = [];

function iniciar(){
    seleccion = parseInt(prompt(`Por favor seleccione el tipo de asado para su evento:
1: Asado Premium ($ 1500 por invitado (incluye bebidas, asador y picada), menu vegano no se cobra aparte)
2: Asado Standard ($1000 por invitado(incluye solo bebidas y picada), menu vegano tiene un costo de + $500 c/u )
3: Asado basic ($800 por invitado (no incluye picada),menu vegano tiene un costo de + $500 c/u)
`));

cantidadInvitados()
calcularTotales()
}

function cantidadInvitados(){
    let cantidadInvitados = parseInt(prompt(`Por favor seleccione la cantidad de invitados para el evento`));

for (let i = 1; i <= cantidadInvitados ; i++){
    const nombre = prompt(`Eliga por favor el nombre del invitado N° ${i}
    `);
     const esVegano = prompt(`Indique si el invitado ${nombre} es vegano: 
    1: Si
    2: No 
}`);
    if (esVegano == 1){
        invitados.push(new Invitado(nombre, true));
    } else {
        invitados.push(new Invitado(nombre, false));
    }

}
}

function calcularTotales(){
const invitadosVeganos = invitados.filter((el) => el.esVegano == true) 

invitados.forEach((nombre) =>{
    console.log(nombre)

})

invitadosVeganos.forEach(nombre => {
    console.log(nombre)
})

console.log(invitados.length)
console.log(invitadosVeganos.length)

switch(seleccion){
    case 1:
        totalPrecio = invitados.length * 1500;
        console.log(totalPrecio)
        break;
    case 2:
        let totalVeganos = invitadosVeganos.lenght * 500;
        console.log(totalVeganos)
        totalPrecio = (invitados.length * 1000) + totalVeganos;
        console.log(totalPrecio)
        break;
    case 3: 
        let totalVeganos2 = invitadosVeganos.lenght * 500;
        totalPrecio = (totalVeganos2 + (invitados.length * 8000));
        console.log(totalPrecio)
        break;
}
console.log(seleccion)
console.log(totalPrecio)
}


iniciar()
/* PRE ENTREGA N° 1

/// Bienvenido a CarSec, el estacionamiento que te cuida tu vehiculo si tenes que irte de vacaciones
/// Nuestras tarifas (LOS DIAS DOMINGOS SE COBRA TARIFA DOBLE SI LA ESTADIA ES MAS DE 7 DÍAS): 
// 1 MOTO = $ 300 
// 2 AUTO = $600
// 3 CAMIONETA = $ 900

// Con nuestros medios de pago podes tener beneficios 

//// Tarjeta de credito (15% descuento)
///Mercado Pago (Te bonificamos un domingo en caso de que lo dejes mas de 7 días)
/// Efectivo





const ESTADIA_MOTO = 300;
const ESTADIA_AUTO = 600;
const ESTADIA_CAMIONETA = 900;
const DESCUENTO_TC = 15;
let totalAbonar;
let descuentoAplicado;
let cantidadDias;
let medioDePago;
let tipoVehiculo;
let diasDomingos = 0;




iniciarApp();



function iniciarApp(){
solicitarTipoVehiculo();
validarDatos(tipoVehiculo);
cantidadDeDias();
metodoDePago();
totalAPagar(tipoVehiculo);
resultadoOperacion();


}

//// Inicio de mi programa
function solicitarTipoVehiculo(){

let nombre = prompt(`Bienvenido/a CarSec, por favor decinos tu nombre`);
    let tipoServicio = parseInt(prompt(`Bienvenido ${nombre}!! Elija con un numero el tipo de vehiculo que quiera guardar:
1: Moto
2: Auto
3: Camioneta
`));

tipoVehiculo = tipoServicio;

return tipoVehiculo;

}

/// Valido que los datos ingresados sean correctos con ciclo while
function validarDatos(tipoServicio){
    while(!(tipoServicio == 1 || tipoServicio == 2 || tipoServicio == 3)){
   
        let nuevoIntento = parseInt(prompt(`Opcion incorrecta, por favor elija el tipo de vehiculo poniendo el n° que corresponda:
        1: Moto
        2: Auto
        3: Camioneta
        `));
        
        tipoServicio = nuevoIntento;
        
    }
}

/// Guardo en esta función el calculo de dias de tarifa doble para usar en otra función, por cada 7 días se suma un domingo
function cantidadDomingos(cantidadDias){
   let cantDomingos = 0;
    for(let i = 0; i <= cantidadDias; i++){
                if (i % 7 == 0 && i != 0){
                    
                    cantDomingos++;

                    }
}

    if (medioDePago == 2){
        diasDomingos = cantDomingos - 1;
    } else {
        diasDomingos = cantDomingos;

    }
    return diasDomingos;

}


/// Se solicita medio de pago
function metodoDePago(){
    let medioDePagoSeleccionado = parseInt(prompt(`Por favor ingrese con que medio de pago va a abonar:
    1: Tarjeta de Credito (15% de descuento)
    2: Mercado Pago (Te bonificamos un domingo de tarifa doble)
    3: Efectivo 
    `));
    
    medioDePago = medioDePagoSeleccionado;
    return medioDePago;
    
}
/// Se procesa medio de pago para calcular si percibe descuento y se usa en otra función
function procesarMedioDePago(medioDePago){
    let resultadoDescuento = (totalAbonar * DESCUENTO_TC) / 100;
     if (medioDePago == 1){
        totalAbonar = totalAbonar - resultadoDescuento;
    } 
    descuentoAplicado = resultadoDescuento;
    return descuentoAplicado;
}

/// Se solicita cantidad de días del servicio
function cantidadDeDias(){
    let cantidadDiasSeleccionado = parseInt(prompt(`Por favor seleccione la cantidad de días que quiere guardar su vehiculo
    `));
    cantidadDias = cantidadDiasSeleccionado;
    return cantidadDias;

}

/// Se procesa el total a abonar según tipo de vehiculo + descuentos + tarifas dobles
function totalAPagar(tipoServicio){
    let diasDomingos = cantidadDomingos(cantidadDias);
    let metodoPagoElegido = medioDePago;
    let totalTarifaPorFeriado;
switch(tipoServicio){
      case 1:
         totalTarifaPorFeriado = ESTADIA_MOTO * diasDomingos;
         totalAbonar = (ESTADIA_MOTO * cantidadDias) + totalTarifaPorFeriado;
         procesarMedioDePago(metodoPagoElegido);
          return totalAbonar;
          break;
      case 2:
         totalTarifaPorFeriado = ESTADIA_AUTO * diasDomingos;
         totalAbonar = (ESTADIA_AUTO * cantidadDias) + totalTarifaPorFeriado;
         procesarMedioDePago(metodoPagoElegido);
          return totalAbonar;
          break;
      case 3:
        totalTarifaPorFeriado = ESTADIA_CAMIONETA * diasDomingos;
         totalAbonar = (ESTADIA_CAMIONETA * cantidadDias) + totalTarifaPorFeriado;
         procesarMedioDePago(metodoPagoElegido);
          return totalAbonar;
          break;
 
 
        }
        
        


 return totalAbonar;
}


//Se realiza salida de datos mostrando resultado de operación
function resultadoOperacion(){

    if (medioDePago === 1){
        alert(`Va a abonar un total de $ ${totalAbonar} por  ${cantidadDias} días (incluye ${diasDomingos} domingos de tarifa doble)  Al seleccionar como medio de pago una tarjeta de credito se aplico un descuento de $ ${descuentoAplicado}
    `);

    } else if (medioDePago === 2){
        if (tipoVehiculo === 1){
            alert(`Va a abonar un total de $ ${totalAbonar} por  ${cantidadDias} días (incluye ${diasDomingos} domingos de tarifa doble). Al seleccionar como medio de pago Mercado Pago se te bonifico un domingo de tarifa doble por un total de $ ${ESTADIA_MOTO}
            `);
        } else if (tipoVehiculo === 2){
            alert(`Va a abonar un total de $ ${totalAbonar} por  ${cantidadDias} días (incluye ${diasDomingos} domingos de tarifa doble). Al seleccionar como medio de pago Mercado Pago se te bonifico un domingo de tarifa doble por un total de $ ${ESTADIA_AUTO}
            `);
        } else if (tipoVehiculo === 3) {
            alert(`Va a abonar un total de $ ${totalAbonar} por  ${cantidadDias} días (incluye ${diasDomingos} domingos de tarifa doble). Al seleccionar como medio de pago Mercado Pago se te bonifico un domingo de tarifa doble por un total de $ ${ESTADIA_CAMIONETA}
            `);
        }
       
    } else {
        alert(`Va a abonar un total de $ ${totalAbonar} por ${cantidadDias} días (incluye ${diasDomingos} domingos de tarifa doble) 
        `);
    }

}










*/

