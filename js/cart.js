let userCart = "https://japceibal.github.io/emercado-api/user_cart/25801.json"




document.addEventListener("DOMContentLoaded", function () {
    getJSONData(userCart).then(result => {
        if (result.status == "ok") {
            userCartArray = result.data;
            mostrarCarrito(userCartArray)
        } else {
            alert("Error al cargar los datos: " + result.data);
        }
    })
});




function mostrarCarrito(userCartArray) {
for (const infoCart of userCartArray.articles) {
    let carrito = `
    <div class="row">
    <p class="col"><img src="${infoCart.image}" class="imagenCarrito"></p>
    <p class="col">${infoCart.name}</p>
    <p class="col">${infoCart.currency}${infoCart.unitCost}</p>
    <p class="col" ><input type="number" min="1" value="1" id="inputCantidad"></p>
    <p class="col" id="subtotal"></input></p>
    </div>
      `
    document.getElementById("productosAgregados").innerHTML += carrito;

    let subtotal = document.getElementById("inputCantidad").value * infoCart.unitCost;
    
    document.getElementById("subtotal").innerHTML = subtotal;
}
}
