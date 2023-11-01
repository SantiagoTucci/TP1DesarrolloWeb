var usuarioData = {
    nombre: "nombre_de_usuario",
    contraseña: "contrasena",
  };
  
  localStorage.setItem("usuarioData", JSON.stringify(usuarioData));

var usuarioDataGuardada = localStorage.getItem("usuarioData");
var usuarioData = JSON.parse(usuarioDataGuardada);

document.getElementById("nombreUsuario").value = usuarioData.nombre;
document.getElementById("contraseñaUsuario").value = usuarioData.contraseña;

document.getElementsByClassName("botonGuardar").addEventListener("click", function() {

  var nombreUsuario = document.getElementById("nombreUsuario").value;
  var contraseñaUsuario = document.getElementById("contraseñaUsuario").value;

  userData.username = newUsername;
  userData.password = newPassword;


  localStorage.setItem("usuarioData", JSON.stringify(usuarioData));
});