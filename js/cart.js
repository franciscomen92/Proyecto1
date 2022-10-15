let userCart = "https://japceibal.github.io/emercado-api/user_cart/25801.json"




document.addEventListener("DOMContentLoaded", function () {
    getJSONData(userCart).then(result => {
        if (result.status == "ok") {
            userCartArray = result.data;
            mostrarCarrito(userCartArray);
        } else {
            alert("Error al cargar los datos: " + result.data);
        }
    })
});



/* Funcion que muestra el carrito */
function mostrarCarrito(userCartArray) {
for (const infoCart of userCartArray.articles) {
    let carrito = `
    <div class="row">
    <p class="col"><img src="${infoCart.image}" class="imagenCarrito"></p>
    <p class="col">${infoCart.name}</p>
    <p class="col">${infoCart.currency}${infoCart.unitCost}</p>
    <p class="col" ><input type="number" min="1" value="1" id="inputCantidad"></input></p>
    <p class="col" id="subtotal"></p>
    </div>
      `
    document.getElementById("productosAgregados").innerHTML += carrito;
    document.getElementById("subtotal").innerHTML += infoCart.unitCost; /* Esto es para que al cargar la pagina aparezca el precio */

   /*  Funcion para actualizar el subtotal cuando se cambia el value del input */
    let cantidad = document.getElementById("inputCantidad");
    let precio = infoCart.unitCost;
    let subtotal = document.getElementById("subtotal");


    cantidad.addEventListener("input", updateSubtotal);
    function updateSubtotal(e) {
        subtotal.textContent = e.target.value * precio;
    }

   /*  let subtotal = document.getElementById("inputCantidad").value * infoCart.unitCost;
    
    document.getElementById("subtotal").innerHTML = subtotal; */
}
}
