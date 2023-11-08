//document.addEventListener("DOMContentLoaded", function() {
    const formPerfil = document.getElementById("formPerfil");
    const nombreUsuarioInput = document.getElementById("nombreUsuario");
    const contraseñaInput = document.getElementById("contraseña");
    const repetirContraseña = document.getElementById("repetirContraseña");
    const emailInput = document.getElementById("email");
    const fechaNacimientoInput = document.getElementById("fechaNacimiento");
  
    // Cargar la información del usuario desde el localStorage
    const usuarioIniciado = JSON.parse(localStorage.getItem("usuario")) || [];
    //const usuarioActual = usuariosLista[0];
    
    //var usuario = JSON.parse(localStorage.getItem("usuario"));
    //document.getElementById("usuarioLink").textContent = usuario.nombreUsuario;
  
    nombreUsuarioInput.value = usuarioIniciado.nombreUsuario;
    contraseñaInput.value = usuarioIniciado.contraseña;
    repetirContraseña.value = usuarioIniciado.contraseña;
    emailInput.value = usuarioIniciado.email;
    fechaNacimientoInput.value = usuarioIniciado.fechaNacimiento;
  
    formPerfil.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Actualizar la información del usuario con los valores de los campos de entrada
        usuarioIniciado.nombreUsuario = nombreUsuarioInput.value;
        usuarioIniciado.contraseña = invertirMitades(contraseñaInput.value);
        usuarioIniciado.email = emailInput.value;
        usuarioIniciado.fechaNacimiento = fechaNacimientoInput.value;
  
        // Guardar la información actualizada en el localStorage
        localStorage.setItem("usuario", JSON.stringify(usuarioIniciado));
  
        alert("Cambios guardados correctamente.");
    });
  
    function invertirMitades(contraseña) {
        var mitad = Math.floor(contraseña.length / 2);
        return contraseña.slice(mitad) + contraseña.slice(0, mitad);
    }
  
    // Nombre de usuario en el nav
    var usuario = JSON.parse(localStorage.getItem("usuario"));
    document.getElementById("nombreLink").textContent = usuario.nombreUsuario;
    document.getElementById("nombreUsuario").value = usuario.nombreUsuario;
    document.getElementById("contraseña").value = usuario.contraseña;
    document.getElementById("repetirContraseña").value = usuario.contraseña;
    document.getElementById("email").value = usuario.email;
    document.getElementById("fechaNacimiento").value = usuario.fechaNacimiento;

    //CERRAR SESION
    document.getElementById('cerrarSesion').addEventListener('click', function() {
        //autenticación como 'false' en el localStorage
        localStorage.setItem('estadoCuenta', 'Se cerro sesion');
        // Redirigir a la página de inicio de sesión
        window.location.href = 'index.html';
    });
  //});

  