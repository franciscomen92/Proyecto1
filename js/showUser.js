document.addEventListener("DOMContentLoaded", function() { 
  corroborarLogin();
  let li = `
    <li> 
      <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> ${localStorage.getItem("usuario")}</a>
  
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
        <li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
        <li><a class="dropdown-item" href="login.html" id="cerrar">Cerrar sesión</a></li>
      </ul>
      </div>
    </li>`

    document.getElementById("nombreUsuario").innerHTML = li;

    document.getElementById("cerrar").addEventListener("click", function(){
        localStorage.removeItem("usuario");
    })   
})

function corroborarLogin () {
  if(localStorage.getItem("usuario") == null) {
    alert("Debes estar logueado para continuar en el sitio")
    window.location.href = "login.html"
  }
}
