let catId = localStorage.getItem("catID");
let categorias = PRODUCTS_URL + catId +".json";

let min = undefined;
let max = undefined;

//Agregamos a la funcion los parametros para filtrar//
function mostrarListado (listadoCat) {
    document.getElementById("listadoCategorias").innerHTML = "";
    for (const cat of listadoCat.products) { 
        if (cat.cost >= min && cat.cost <= max || min == undefined && max == undefined) 
        {
            let li = 
            `<div class= "flex_container">
            <div class= "listado">
            <li class="name">` + cat.name +`  ` + cat.currency +`  `+ cat.cost + `</li>
            <li class= "soldCount">` + cat.soldCount + ` vendidos </li>
            <li class= "description">` + cat.description + `</li>
            </div>
            <img src="`+ cat.image +`" class = "image">
            </div>`;
                
             document.getElementById("listadoCategorias").innerHTML += li;   
        }
      } 
    }


document.addEventListener("DOMContentLoaded", function() {
    getJSONData(categorias).then(result => {
        if (result.status == "ok") {
            arrayProductos = result.data;
            mostrarListado(arrayProductos);
        } else {
            alert("Error al cargar los datos: " + result.data);
        }
    })

    //Obtenemos valores de los input converitdos en valores numeros y llamamos a la funcion mostrarListado//
    document.getElementById("filtrar").addEventListener("click", function(){
        max = parseInt(document.getElementById("maximo").value);
        min = parseInt(document.getElementById("minimo").value);
        
        mostrarListado(arrayProductos);
    })

    //Limpiamos ambos campos imput, dejamos indefinidos los campos min y max para que se muestra la lista completa//
    document.getElementById("limpiar").addEventListener("click", function(){
        document.getElementById("maximo").value = "";
        document.getElementById("minimo").value = "";
        min = undefined;
        max = undefined;
        mostrarListado(arrayProductos);
    })

    document.getElementById("ascendente").addEventListener("click", function(){
        arrayProductos.sort(function (a, b){
            return (a.cost - b.cost);
        });

        mostrarListado(arrayListado)
    })
});


