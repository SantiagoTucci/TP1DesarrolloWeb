/*ETIQUETAS*/
const formInicio = document.getElementById("form");
const nombreUsuarioInicio = document.getElementById("nombreUsuario");
const contraseñaInicio = document.getElementById("contraseña");

const btnIniciarSesion = document.getElementById("btnIniciarSesion");

/*INICIAR SESION*/
function iniciarSesion() {
    var nombreUsuario = nombreUsuarioInicio.value;
    var contraseña = contraseñaInicio.value;

    // Verifica si se proporcionaron valores
    if (nombreUsuario && contraseña) {
        var usuariosLista = JSON.parse(localStorage.getItem("usuariosLista")) || [];
        var usuario = usuariosLista.find(usuario => usuario.nombreUsuario === nombreUsuario && usuario.contraseña === invertirMitades(contraseña));
        if (usuario) {
            localStorage.setItem("usuario", JSON.stringify(usuario));
            localStorage.setItem('estadoCuenta', 'Se inicio sesión');
            window.location.href = '..\\VistaPrincipal\\Pagina Principal.html';
        } else {
            alert("El usuario y/o contraseña es incorrecto");
        }
    } else {
        alert("Por favor, complete todos los campos del formulario.");
    }
};

function invertirMitades(contraseña) {
    var mitad = Math.floor(contraseña.length / 2);
    return contraseña.slice(mitad) + contraseña.slice(0, mitad);
}

//iniciarSesion al evento click del botón
btnIniciarSesion.addEventListener("click", iniciarSesion);
