/*ETIQUETAS*/
const form = document.getElementById("form");

const numeroG = document.getElementById("campoTarjeta");
const vencimientoG = document.getElementById("campoVencimiento");
const cvcG = document.getElementById("campoContrasenia");
const nombreG = document.getElementById("campoNombreApellido");

const checkBoxG = document.getElementById("checkBox")
const btnPagar = document.getElementById("btnPagar");

/*MENSAJE SOBRESALIENTE*/
form.addEventListener("submit", function(e){
    e.preventDefault()
    if(numeroG.value.length > 20) {
        alert("Numero de tarjeta invalido")
    }
    if(nombreG.value.length < 6) {
        alert("El nombre no es valido")
    }
    if(cvcG.value.length < 3) {
        alert("Contraseña no valida")
    }
    if(!checkBoxG.checked){
        alert("Por favor, marca el checkbox antes de enviar el formulario.");
    }
});

/*GUARDAR EN LOCAL STORAGE*/
function guardarEnLocalStorage() {
    var numero = numeroG.value;
    var vencimiento = vencimientoG.value;
    var cvc = cvcG.value;
    var nombre = nombreG.value;
    
    // Verificar si se han proporcionado valores
    if (numero && vencimiento && cvc && nombre) {
        /*AGREGAR EL OBJETO(tarjeta) A UN ARREGLO(usuarios)*/
      var usuario = JSON.parse(localStorage.getItem("usuarios")) || [];
      // Crear un objeto para almacenar los datos
      var tarjetaUsuario = {
        numero : numero,
        vencimiento : vencimiento,
        cvc : cvc,
        nombre : nombre
      };
       // Agregar el objeto de datos al arreglo de usuarios
       usuario.push(tarjetaUsuario);
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



