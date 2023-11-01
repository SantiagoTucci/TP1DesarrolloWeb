
/*ETIQUETAS*/
const formG = document.getElementById("form");
const nombreUsuarioG = document.getElementById("nombreUsuario");
const contraseñaG = document.getElementById("contraseña");

const btnIniciarSesion = document.getElementById("btnIniciarSesion");

/*GUARDAR EN LOCAL STORAGE*/
function guardarSesionEnLocalStorage() {
    var nombreUsuario = nombreUsuarioG.value;
    var contraseña = contraseñaG.value;

    // Verificar si se han proporcionado valores
    if (nombreUsuario && contraseña) {
        /*AGREGAR EL OBJETO(tarjeta) A UN ARREGLO(usuarios)*/
      var usuariosLista = JSON.parse(localStorage.getItem("usuariosLista")) || [];
      // Crear un objeto para almacenar los datos
      var usuario = {
        nombreUsuario : nombreUsuario,
        contraseña : contraseña
      };
       // Agregar el objeto de datos al arreglo de usuarios
       usuariosLista.push(usuario);
    // Convertir el objeto a una cadena JSON y guardarlo en el localStorage
    localStorage.setItem("usuario", JSON.stringify(usuario));
    // Guardar el arreglo usuarios en el localStorage
    localStorage.setItem("usuariosLista", JSON.stringify(usuariosLista));
        alert("Datos guardados correctamente en el localStorage.");
    } else {
         alert("Por favor, complete todos los campos del formulario.");
    }
};

//guardarEnLocalStorage al evento click del botón
btnIniciarSesion.addEventListener("click", guardarSesionEnLocalStorage);

