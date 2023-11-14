/*ETIQUETAS*/
const formPerfil = document.getElementById("formPerfil");
const nombreUsuarioInput = document.getElementById("nombreUsuario");
const contraseñaInput = document.getElementById("contraseña");
const repetirContraseña = document.getElementById("repetirContraseña");
const emailInput = document.getElementById("email");
const fechaNacimientoInput = document.getElementById("fechaNacimiento");

// Cargar la información del usuario desde el localStorage
const usuariosLista = JSON.parse(localStorage.getItem("usuariosLista")) || [];
var usuarioIniciado = JSON.parse(localStorage.getItem("usuario")) || [];
const usuarioIndex = usuariosLista.findIndex(user => user.nombreUsuario === usuarioIniciado.nombreUsuario);
var usuarioIniciado = usuariosLista[usuarioIndex];

nombreUsuarioInput.value = usuarioIniciado.nombreUsuario;
contraseñaInput.value = usuarioIniciado.contraseña;
repetirContraseña.value = usuarioIniciado.contraseña;
emailInput.value = usuarioIniciado.email;
fechaNacimientoInput.value = usuarioIniciado.fechaNacimiento;

// Oculta el enlace Premium si el usuario es premium
if (usuarioIniciado.premium) {
    document.querySelector('.link-premium').style.display = 'none';
}

formPerfil.addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener la lista de usuarios del localStorage
    const usuariosLista = JSON.parse(localStorage.getItem("usuariosLista")) || [];

    // Verificar si el nombre de usuario ha cambiado
    if (nombreUsuarioInput.value !== usuarioIniciado.nombreUsuario) {
        // Buscar al usuario actual en la lista de usuarios por el nombre de usuario original
        const usuarioIndex = usuariosLista.findIndex(user => user.nombreUsuario === usuarioIniciado.nombreUsuario);

        if (usuarioIndex !== -1) {
            // Actualizar el nombre de usuario en la lista de usuarios
            usuariosLista[usuarioIndex].nombreUsuario = nombreUsuarioInput.value;
        } else {
            alert("El usuario no fue encontrado en la lista de usuarios.");
            return;
        }
    }

    // Actualizar el resto de la información del usuario
    usuarioIniciado.nombreUsuario = nombreUsuarioInput.value;
    usuarioIniciado.contraseña = invertirMitades(contraseñaInput.value);
    usuarioIniciado.email = emailInput.value;
    usuarioIniciado.fechaNacimiento = fechaNacimientoInput.value;

    // Guardar la lista actualizada en el localStorage
    localStorage.setItem("usuariosLista", JSON.stringify(usuariosLista));
    localStorage.setItem("usuario", JSON.stringify(usuarioIniciado));

});

document.getElementById("eliminarUsuario").addEventListener('click', function() {
    
        // Elimina al usuario actual de la lista de usuarios
        const usuarioIndex = usuariosLista.findIndex(user => user.nombreUsuario === usuarioIniciado.nombreUsuario);
        if (usuarioIndex !== -1) {
            usuariosLista.splice(usuarioIndex, 1);
        }
        // Actualiza el localStorage eliminando al usuario
        localStorage.setItem("usuariosLista", JSON.stringify(usuariosLista));

        // Redirige al usuario a la página de inicio de sesión
        window.location.href = 'index.html';
   

});

function invertirMitades(contraseña) {
    var mitad = Math.floor(contraseña.length / 2);
    return contraseña.slice(mitad) + contraseña.slice(0, mitad);
}

// Nombre de usuario en el nav
var usuario = JSON.parse(localStorage.getItem("usuario"));
document.getElementById("nombreLink").textContent = usuario.nombreUsuario;

//CERRAR SESION
document.getElementById('cerrarSesion').addEventListener('click', function() {
    //autenticación como 'false' en el localStorage
    localStorage.setItem('estadoCuenta', 'Se cerro sesion');
    // Redirigir a la página de inicio de sesión
    window.location.href = 'index.html';
});
