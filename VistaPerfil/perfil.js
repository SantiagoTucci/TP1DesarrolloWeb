document.addEventListener("DOMContentLoaded", function() {
  const formPerfil = document.getElementById("formPerfil");
  const nombreUsuarioInput = document.getElementById("nombreUsuario");
  const contraseñaInput = document.getElementById("contraseña");
  const repetirContraseña = document.getElementById("repetirContraseña");
  const emailInput = document.getElementById("email");
  const fechaNacimientoInput = document.getElementById("fechaNacimiento");

  // Cargar la información del usuario desde el localStorage
  const usuariosLista = JSON.parse(localStorage.getItem("usuariosLista")) || [];
  const usuarioActual = usuariosLista[0];

  //var usuario = JSON.parse(localStorage.getItem("usuario"));
  //document.getElementById("usuarioLink").textContent = usuario.nombreUsuario;

  nombreUsuarioInput.value = usuarioActual.nombreUsuario;
  contraseñaInput.value = usuarioActual.contraseña;
  repetirContraseña.value = usuarioActual.contraseña;
  emailInput.value = usuarioActual.email;
  fechaNacimientoInput.value = usuarioActual.fechaNacimiento;

  formPerfil.addEventListener("submit", function(event) {
      event.preventDefault();
      
      // Actualizar la información del usuario con los valores de los campos de entrada
      usuarioActual.nombreUsuario = nombreUsuarioInput.value;
      usuarioActual.contraseña = invertirMitades(contraseñaInput.value);
      usuarioActual.email = emailInput.value;
      usuarioActual.fechaNacimiento = fechaNacimientoInput.value;

      // Guardar la información actualizada en el localStorage
      localStorage.setItem("usuariosLista", JSON.stringify(usuariosLista));

      alert("Cambios guardados correctamente.");
  });

  function invertirMitades(contraseña) {
      var mitad = Math.floor(contraseña.length / 2);
      return contraseña.slice(mitad) + contraseña.slice(0, mitad);
  }

  // Nombre de usuario en el nav
  document.getElementById("nombreLink").textContent = usuarioActual.nombreUsuario;
});