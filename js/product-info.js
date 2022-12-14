/*Funcioes para traer los json*/
document.addEventListener("DOMContentLoaded", function () {
    let prodId = localStorage.getItem("prodId");
    let infoProduct = PRODUCT_INFO_URL + prodId + ".json"

    getJSONData(infoProduct).then(result => {
        if (result.status == "ok") {
            infoProduct = result.data;
            mostrarInfoProduct(infoProduct);
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


/* Muestra la informacion, imagenes y productos relacionados */
function mostrarInfoProduct(infoProduct) {
    let div = `
    
    <div class="contenedorInfoProd container">
    <div class="text-center p-4">
      <h2 id="nombreProducto">${infoProduct.name}</h2>
    </div>
    <hr>

    <div id="informacionProductos">

      <div class="row" mb-3>
        <div class="imagenesProductInfo col-4 rounded mx-auto d-block">
          <div id="carouselExampleFade" class="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="${infoProduct.images[0]}" class="d-block w-100" alt="...">
              </div>

              <div class="carousel-item">
                <img src="${infoProduct.images[1]}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${infoProduct.images[2]}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${infoProduct.images[3]}" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div class="infoCorta row">
            <div class="col-4 text-center">
                <h3>Precio</h3>
                <li id="precioProducto">${infoProduct.cost}</li>
            </div>
            <div class="col-4 text-center">
                <h3>Cateogria</h3>
                <li id="categoriaProducto">${infoProduct.category}</li>
            </div>
            <div class="col-4 text-center">
                <h3>Cantidad de Vendidos</h3>
                <li id="cantidadProductos">${infoProduct.soldCount}</li>
            </div>
        </div>
        <div class="descripcion row text-center">
          <h3>Descripcion</h3>
          <li id="descripcionProducto">${infoProduct.description}</li>
        </div>
      </div>
    </div>
    `
    document.getElementById("productInfo").innerHTML += div;

    /* Productos Relacionados */
    for (const relProd of infoProduct.relatedProducts) {
        let card = ` 
        <div class="col-6" onclick=redirProd(${relProd.id})>
        <div class="card">
        <img src="${relProd.image}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${relProd.name}</h5>
          </div>
        </div>
        `

        document.getElementById("productosRel").innerHTML += card;
    }

}

function redirProd(idProd) {
    localStorage.setItem("prodId", idProd);
    window.location = "product-info.html";
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
        } else if (coments.score === 4) {
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
        } else if (coments.score === 1) {
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
}


