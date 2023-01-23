
// Defino variables y armo .json
let cantidad = 0;
let total = 0;
let carrito = [];


document.addEventListener('DOMContentLoaded', obtenerProductos);

/// utilizo fetch para obtener objetos del json y los muestro en el html
function obtenerProductos(){
    const datos = 'data.json';

    fetch(datos)
    .then(respuesta => respuesta.json())
    .then(resultado => mostrarHTML(resultado))
}


function mostrarHTML(productos){
    const listado = document.querySelector('.listadoProductos');
    let html ='';

    productos.forEach(producto => {
        const { id ,nombre,precio} = producto;
        
        html +=`
        <div class="col d-flex justify-content-center">
        <div class="row">
          <div class="col">
            <div class="card" style="margin: 15px";>
              <div class="card-body">
                <div class="producto">
                <h5 class="card-title">${nombre}</h5>
                <p>Precio: ${precio}</p>
                <div class="btnAgregar">
                <button class="btn btn-primary" id="agregarProductos" data-id="${id}" data-nombre="${nombre}" data-precio="${precio}" data-title="Product one" onclick="agregar()">Agregar</button>
                <button class= "btn btn-danger" data-id="${id}" data-nombre="${nombre}" data-precio="${precio}" id="eliminarProducto1" onclick="eliminar()">Eliminar</button>
                </div>
              </div>
            </div>
            </div>
          </div>
          </div>
          `
        
    });

    listado.innerHTML = html;
}

//Parseo cada elemento en localstorage

if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

if (localStorage.getItem("cantidad")) {
    cantidad = parseInt(localStorage.getItem("cantidad"));
}

if (localStorage.getItem("total")) {
    total = parseInt(localStorage.getItem("total"));
}


actualizarCarrito();


// Funcion eliminar
function eliminar() {
    let carritoJson = [];
    carritoJson = JSON.parse(localStorage.getItem("carrito"));
    let precio = Number(event.target.dataset.precio);
    if(cantidad > 0){
    let id = Number(event.target.dataset.id);
    cantidad--;
    total -= precio;
    //let product = {"id": event.target.dataset.id,"nombre": event.target.dataset.nombre,"precio": event.target.dataset.precio };
    
    let unProducto = {};
    let productoEncontrado = {}
    let i =0;
    let index =0;
    while(cantidad >= i){
        unProducto = carritoJson[i];
        if(unProducto.id == event.target.dataset.id){
            productoEncontrado = unProducto
            index = i;
        }
        i++;
    }
    carritoJson.splice(index,1);
    console.log(carritoJson);
    localStorage.setItem("carrito", JSON.stringify(carritoJson));
    actualizarCarrito();
}
}

/// Funcion agregar
function agregar() {
   
    let precioProducto = Number(event.target.dataset.precio);
    cantidad++;
    total += precioProducto;
    let product = {"id": event.target.dataset.id,"nombre": event.target.dataset.nombre,"precio": event.target.dataset.precio };
    carrito.push(product);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();

    const carritoJson = localStorage.getItem("carrito");

console.log(JSON.parse(carritoJson));
}

function actualizarCarrito() {
    localStorage.setItem("cantidad", cantidad);
    localStorage.setItem("total", total);
    document.getElementById("cantidad").textContent = cantidad;
    document.getElementById("total").textContent = total;
}

const btnNuevo =  document.getElementById("miCarrito")

console.log(btnNuevo)
btnNuevo.addEventListener("click", ()=>{
    location.href = 'indexCarrito.html';
})


