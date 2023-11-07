/*ETIQUETAS*/
const formRegistro = document.querySelector("form");
const nombreUsuarioRegistro = formRegistro.querySelector("input[type='text']");
const contraseñaRegistro = formRegistro.querySelector("input[type='password']");
const emailRegistro = formRegistro.querySelector("input[type='email']");
const fechaNacimientoRegistro = formRegistro.querySelector("input[type='date']");

/*GUARDAR EN LOCAL STORAGE*/
function guardarRegistroEnLocalStorage() {
    var nombreUsuario = nombreUsuarioRegistro.value;
    var contraseña = contraseñaRegistro.value;
    var email = emailRegistro.value;
    var fechaNacimiento = fechaNacimientoRegistro.value;

    // Verifica si se ha proporcionaron valores
    if (nombreUsuario && contraseña && email && fechaNacimiento) {
        /*AGREGAR EL OBJETO(usuario) A UN ARREGLO(usuarios)*/
        var usuariosLista = JSON.parse(localStorage.getItem("usuariosLista")) || [];
        // Crea un objeto para almacenar los datos
        var usuario = {
            nombreUsuario : nombreUsuario,
            contraseña : invertirMitades(contraseña),
            email : email,
            fechaNacimiento : fechaNacimiento,
            albumesFav: [],
            cancionesFav:[],
            
        };
        // Agregar el objeto de datos al arreglo de usuarios
        usuariosLista.push(usuario);
        // Guardar el arreglo usuarios en el localStorage
        localStorage.setItem("usuariosLista", JSON.stringify(usuariosLista));
        window.location.href = '..\\index.html'; // Redirige al usuario a la página de inicio de sesión
    } else {
        alert("Por favor, complete todos los campos del formulario.");
    }
};

function invertirMitades(contraseña) {
    var mitad = Math.floor(contraseña.length / 2);
    return contraseña.slice(mitad) + contraseña.slice(0, mitad);
}

//guardarEnLocalStorage al evento submit del formulario
formRegistro.addEventListener("submit", function(event) {
    event.preventDefault();
    guardarRegistroEnLocalStorage();
});
