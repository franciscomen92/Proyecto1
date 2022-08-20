const AUTOS101_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json"

function mostrarListado (listaDeAutos) {
    for (const auto of listaDeAutos.products) {
        let li = "";
        li = 
        `<div class= "flex_container">
        <div class= "listado">
        <li class="name">` + auto.name +` -  $` + auto.cost + `</li>
        <li class= "soldCount">` + auto.soldCount + ` vendidos </li>
        <li class= "description">` + auto.description + `</li>
        </div>
        <img src="`+ auto.image +`" class = "image">
        </div>`;
            
         document.getElementById("listadoDeAutos").innerHTML += li;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    getJSONData(AUTOS101_URL).then(result => {
        if (result.status == "ok") {
            mostrarListado(result.data);
        } else {
            alert("Error al cargar los datos: " + result.data);
        }
    })
})


