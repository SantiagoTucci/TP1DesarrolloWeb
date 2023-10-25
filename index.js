var usuariosList = [];

function iniciarSesion() {
    var uNombre = document.getElementById('#nombreUsuario').value,
        uContrasenia = document.getElementById('#contrasenia').value;

    agregarUsuario(uNombre, uContrasenia);
}

function agregarUsuario (uNombre, uContrasenia) {
    var usuario = {
        nombre: uNombre,
        contrasenia: uContrasenia 
    };
    console.log("usuario");
    usuariosList.push("usuario");
};

document.getElementById('btnIniciarSesion').addEventListener('click', iniciarSesion);

