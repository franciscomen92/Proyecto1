document.addEventListener("DOMContentLoaded", function() {
    let li = `
    <li> 
    <div class="dropdown">
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> ${localStorage.getItem("usuario")}</a>
  
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
      <li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
      <li><a class="dropdown-item" href="index.html">Cerrar sesión</a></li>
    </ul>
  </div>
  </li>`

    document.getElementById("nombreUsuario").innerHTML = li;
})


