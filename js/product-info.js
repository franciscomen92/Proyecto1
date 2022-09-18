/*Funcioes para traer los json*/
document.addEventListener("DOMContentLoaded", function () {
    let prodId = localStorage.getItem("prodId");
    let infoProduct = PRODUCT_INFO_URL + prodId + ".json"

    getJSONData(infoProduct).then(result => {
        if (result.status == "ok") {
            arrayInfoProduct = result.data;
            mostrarInfoProduct(arrayInfoProduct);
        } else {
            alert("Error al cargar los datos: " + result.data);
        }
    })
    getJSONData(PRODUCT_INFO_COMMENTS_URL + prodId + ".json").then(result => {
        if (result.status == "ok") {
            comentariosProducto = result.data;
            mostrarComentarios(comentariosProducto);
        } else {
            alert("Error al cargar los datos: " + result.data);
        }
    })
})

function mostrarInfoProduct(infoProduct) {
    let div = `
    <div class="contenedorInfoProd">
    <div class="text-center p-4">
      <h2 id="nombreProducto">${infoProduct.name}</h2>
    </div>
    <hr>
    <h3>Precio</h3>
    <li id="precioProducto">${infoProduct.cost}</li>
    <h3>Descripcion</h3>
    <li id="descripcionProducto">${infoProduct.description}</li>
    <h3>Cateogria</h3>
    <li id="categoriaProducto">${infoProduct.category}</li>
    <h3>Cantidad de Vendidos</h3>
    <li id="cantidadProductos">${infoProduct.soldCount}</li>
    </div>`
    document.getElementById("productInfo").innerHTML += div;
 /* Para las imagenes hice otro for of porque son varias imagenes y podria variar segun el producto */
    for (const imagen of infoProduct.images) {
        let li = `<img src="${imagen}" class=class="rounded float-start" id="imagenes">`
        document.getElementById("productImage").innerHTML += li;
    }
}

/* Funcion que muestra los comentarios y su puntaje en estrellitas */
function mostrarComentarios(comentarios) {
    for (const coments of comentarios) {
        let div = "";
        if (coments.score === 5) {
            div = `<h3 id="username">${coments.user} <span id="dateTime">${coments.dateTime}</span></h3>
            <p id="comentario">${coments.description}</p>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>`
        } else if(coments.score === 4){
            div = `<h3 id="username">${coments.user} <span id="dateTime">${coments.dateTime}</span></h3>
            <p id="comentario">${coments.description}</p>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>` 
        } else if (coments.score === 3) {
            div = `<h3 id="username">${coments.user} <span id="dateTime">${coments.dateTime}</span></h3>
            <p id="comentario">${coments.description}</p>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>`
        } else if (coments.score === 2) {
            div = `<h3 id="username">${coments.user} <span id="dateTime">${coments.dateTime}</span></h3>
            <p id="comentario">${coments.description}</p>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>`
        } else if (coments.score === 1){
            div = `<h3 id="username">${coments.user} <span id="dateTime">${coments.dateTime}</span></h3>
            <p id="comentario">${coments.description}</p>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>`
        }
    document.getElementById("comentarios").innerHTML += div;      
    }

    /*Intento de For para no hacer la chorrera de arriba que no me termino de funcionar*/
   /*  let estrellas = "";
    for (let index = 0; index < (comentarios.score); index++) {
        estrellas = `<span class="fa fa-star checked"></span>`;  
    }
    for(let index = 0; index < (5 - (comentarios.score)); index ++) {
        estrellas = `<span class="fa fa-star"></span>`; 
    }
    document.getElementById("comentarios").innerHTML += estrellas;  */
}

