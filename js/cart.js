let userCart = "https://japceibal.github.io/emercado-api/user_cart/25801.json";
let subtotalCostos = document.getElementById("costosSubtotal");
let costoDeEnvio = document.getElementById("costoEnvio");
let totalEnDolares = document.getElementById("totalFinal");
let subtotalArt = document.getElementById("subtotalArticulo");

let premium = document.getElementById("flexRadioDefault1");
let express = document.getElementById("flexRadioDefault2");
let standard = document.getElementById("flexRadioDefault3");

document.addEventListener("DOMContentLoaded", function () {
    getJSONData(userCart).then(result => {
        if (result.status == "ok") {
            userCartArray = result.data;
            mostrarCarrito(userCartArray);
            mostrarCostoTotal();
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
    <p class="col" id="subtotalArticulo"></p>
    </div>
      `
    document.getElementById("productosAgregados").innerHTML += carrito;
    document.getElementById("subtotalArticulo").innerHTML += `USD ` + infoCart.unitCost; /* Esto es para que al cargar la pagina aparezca el precio */
    document.getElementById("costosSubtotal").innerHTML = infoCart.unitCost;
    /* Funcion para actualizar el subtotal cuando se cambia el value del input */
    let cantidad = document.getElementById("inputCantidad");
    let precio = infoCart.unitCost;

    cantidad.addEventListener("input", updateSubtotal);
    function updateSubtotal(inputCantidad) {
        subtotalArticulo.textContent = inputCantidad.target.value * precio;
        costosSubtotal.textContent = inputCantidad.target.value * precio;
    }
  }}



premium.addEventListener("click", function (){
    let subtotalCost = document.getElementById("costosSubtotal");
    let costoEnvio = subtotalCost.textContent * 15 / 100;
    costoDeEnvio.innerHTML = `USD ` + costoEnvio;
})

express.addEventListener("click", function(){
    let subtotalCost = document.getElementById("costosSubtotal");
    costoEnvio = subtotalCost.textContent * 7 / 100;
    costoDeEnvio.innerHTML = `USD `+ costoEnvio;
})

standard.addEventListener("click", function(){
    let subtotalCost = document.getElementById("costosSubtotal");
    costoEnvio = subtotalCost.textContent * 5 / 100;
    costoDeEnvio.innerHTML = `USD ` + costoEnvio;
})


function mostrarCostoTotal () {
    let costoTotal =costoDeEnvio.textContent + subtotalCostos.textContent

    totalEnDolares.innerHTML = `USD `+ costoTotal;
}