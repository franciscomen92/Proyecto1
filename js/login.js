let usuario = document.getElementById("user");
let contrasenia = document.getElementById("password");
let boton = document.getElementById("button");



boton.addEventListener("click", e=> {
    if(usuario.value == "" || contrasenia.value == "") {
        alert("Debes completar los campos requeridos...")
    } else {
        window.location.href = "/index.html"
    }

    localStorage.setItem("usuario", usuario.value)
})
