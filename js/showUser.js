document.addEventListener("DOMContentLoaded", function() {
    let li = `
    <li> Usuario: ` + localStorage.getItem("usuario") + `</li>`

    document.getElementById("nombreUsuario").innerHTML = li;
})

