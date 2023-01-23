document.addEventListener('DOMContentLoaded', carritoHTML);


function carritoHTML(){
    const carritoJson = JSON.parse(localStorage.getItem("carrito"));

    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
    <div class="col d-flex justify-content-center">
    <div class="row g-3">
      <div class="col">
    <div>
    <h1 style="margin: 30px;">Resumen de tu compra</h1>
    </div>
    </div>
    </div>
    </div>
    <div class="col d-flex justify-content-center">
    <div class="row g-3">
      <div class="col">
        <div class="card">
          <div class="card-body">
          <div class="col d-flex justify-content-center">
            <table class="table">
                <thead scope="col">
                    <tr scope="col">
                        <th scope="row"><h5>Nombre</h5></th>
                        <th style="padding-left: 200px;"scope="row"><h5>Precio</h5></th>
                    </tr>
                </thead>
                <tbody  id="childElement"></tbody>    
            </table>
            </div>
            <div class="btnConfirmar">
                <button class="btn btn-primary" id="confirmar">Confirmar compra</button>
               <button class= "btn btn-danger"  id="cancelar" >Cancelar compra</button>
             </div>
        </div>
       </div> 
      </div> 
    </div>
    </div>
    `
    document.body.appendChild(contenedor);
    var parentDiv = document.getElementById("childElement").parentNode;
    carritoJson.forEach(producto => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${producto.nombre}<td>
        <td>${producto.precio}<td>
        `;
        var sp2 = document.getElementById("childElement");
        parentDiv.insertBefore(row, sp2);
    });

    let boton = document.getElementById("confirmar");
    boton.addEventListener("click", function(){
        Swal.fire({
            title: 'Confirma que desea realizar la compra?',
            text: "Una vez confirmado no podra deshacer esta acción",
            icon: 'info',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, confirmo la compra!',
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Muchas gracias por tu compra!',
                'Tu compra ha sido realizada, en breve recibiras tu factura por email',
                'success'
              )
            }
          })
    });


    let botonCancelar = document.getElementById("cancelar");

    botonCancelar.addEventListener("click", function(){
        Swal.fire({
            title: 'Esta seguro de cancelar la compra?',
            text: "Se vaciara tu carrito y te redirigiremos a nuestro portal",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, cancelar compra'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Compra cancelada!',
                'Te redirigimos a nuestro portal para que encuentres lo que buscas  ',
                'success'
              )

              setTimeout(()=> {
                localStorage.clear()
                location.href = 'index.html';
            }, 2000)
            }
          })
    })
        

}


