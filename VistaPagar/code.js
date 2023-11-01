/*ETIQUETAS*/
const form = document.getElementById("form");

const numeroG = document.getElementById("campoTarjeta");
const vencimientoG = document.getElementById("campoVencimiento");
const cvcG = document.getElementById("campoContrasenia");
const nombreG = document.getElementById("campoNombreApellido");

const checkBoxG = document.getElementById("checkBox")
const btnPagar = document.getElementById("btnPagar");

/*GUARDAR EN LOCAL STORAGE*/
function guardarEnLocalStorage() {
    var numero = numeroG.value;
    var vencimiento = vencimientoG.value;
    var cvc = cvcG.value;
    var nombre = nombreG.value;
    var checkBox = checkBoxG.checked;
    
    // Verificar si se han proporcionado valores
    if (numero && vencimiento && cvc && nombre && checkBox) {
        /*AGREGAR EL OBJETO(tarjeta) A UN ARREGLO(usuarios)*/
      var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      // Crear un objeto para almacenar los datos
      var tarjetaUsuario = {
        numero : numero,
        vencimiento : vencimiento,
        cvc : cvc,
        nombre : nombre
      };
       // Agregar el objeto de datos al arreglo de usuarios
       usuarios.push(tarjetaUsuario);
    // Convertir el objeto a una cadena JSON y guardarlo en el localStorage
    localStorage.setItem("tarjetaUsuario", JSON.stringify(tarjetaUsuario));
    // Guardar el arreglo usuarios en el localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuario));
        alert("Datos guardados correctamente en el localStorage.");
    } else {
         alert("Por favor, complete todos los campos del formulario.");
    }
}

//guardarEnLocalStorage al evento click del botón
btnPagar.addEventListener("click", guardarEnLocalStorage);



