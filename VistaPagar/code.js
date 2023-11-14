/*ETIQUETAS*/
const form = document.getElementById("form");

const numeroG = document.getElementById("campoTarjeta");
const vencimientoG = document.getElementById("campoVencimiento");
const cvcG = document.getElementById("campoContrasenia");
const nombreG = document.getElementById("campoNombreApellido");
const checkBoxG = document.getElementById("checkBox")

const btnPagar = document.getElementById("btnPagar");

//NOMBRE DE USUARIO
var usuario = JSON.parse(localStorage.getItem("usuario"));
document.querySelector('.nav-link').textContent = usuario.nombreUsuario;

//CERRAR SESION
document.getElementById('cerrarSesion').addEventListener('click', function() {
  //autenticación como 'false' en el localStorage
  localStorage.setItem('estadoCuenta', 'Se cerro sesion');
  // Redirigir a la página de inicio de sesión
  window.location.href = 'index.html';
});

// Información del parámetro 'plan' desde la URL------------------------------------
// Elementos en HTML que muestran la información
const tituloElemento = document.getElementById('nombrePlan');
const imagenElemento = document.getElementById('imgPlan');
const precioElemento = document.getElementById('precioPlan');
const descripcionElemento = document.getElementById('textoPlan');

function cambiarNombrePlan() {
  const URLAbuscar=window.location.href;
  const array = URLAbuscar.split('?')
  let plan = array[array.length -1];

  if (plan == "plan=1") {
    tituloElemento.innerHTML = 'Elegiste el plan Mensual';
    imagenElemento.src = 'img/30-dias.png';
    precioElemento.innerHTML = '$100';
    descripcionElemento.innerHTML = 'Nuestro plan Premium de un mes ofrece a los usuarios una experiencia premium sin compromisos a largo plazo. Con acceso ilimitado durante 30 días, los suscriptores pueden disfrutar de todas las características exclusivas de nuestro servicio.';
  } else if (plan == 'plan=2') {
    tituloElemento.innerHTML= 'Elegiste el plan Anual';
    imagenElemento.src = 'img/aniversario.png';
    precioElemento.innerHTML = '$1000';
    descripcionElemento.innerHTML = 'Nuestro plan Premium anual es la opción ideal para aquellos que buscan una experiencia premium a largo plazo. Al suscribirte por un año completo, disfrutarás de acceso ilimitado y sin interrupciones a todas nuestras características exclusivas.';
  } else if(plan == 'plan=3'){
    tituloElemento.textContent = 'Elegiste el plan Infinito';
    imagenElemento.src = 'img/infinidad.png';
    precioElemento.textContent = '$2000';
    descripcionElemento.textContent = 'Nuestro plan Premium de duración infinita es la elección definitiva para los amantes de nuestro servicio. Con esta suscripción, los usuarios disfrutan de acceso ilimitado y perpetuo a todas nuestras características premium.';
  } else {
    tituloElemento.textContent = 'Plan no válido';
    imagenElemento.src = 'img/disco-de-vinilo.png';
    descripcionElemento.textContent = 'No se ha seleccionado un plan válido.';
  }
};

cambiarNombrePlan();

//-----------------------------------------------------------------------------------

/*GUARDAR EN LOCAL STORAGE*/
function guardarEnLocalStorage() {
    var numero = numeroG.value;
    var vencimiento = vencimientoG.value;
    var cvc = cvcG.value;
    var nombre = nombreG.value;
    var checkBox = checkBoxG.checked;

    if (numero && vencimiento && cvc && nombre && checkBox) {
        var tarjetaUsuario = {
            numero : numero,
            vencimiento : vencimiento,
            cvc : cvc,
            nombre : nombre
        };

        // Obtén la lista de usuarios del localStorage
        var usuariosLista = JSON.parse(localStorage.getItem("usuariosLista")) || [];
        // Encuentra el índice del usuario actual en la lista de usuarios
        var usuarioIndex = usuariosLista.findIndex(user => user.nombreUsuario === usuario.nombreUsuario);
        // Cambia el valor de 'premium' a true
        usuariosLista[usuarioIndex].premium = true;
        // Guarda la lista de usuarios actualizada en el localStorage
        localStorage.setItem("usuariosLista", JSON.stringify(usuariosLista));
        // Guarda la tarjeta del usuario en el localStorage
        localStorage.setItem("tarjetaUsuario", JSON.stringify(tarjetaUsuario));
        alert("Datos guardados correctamente en el localStorage.");
    } else {
        alert("Por favor, complete todos los campos del formulario.");
    }
    window.location.href = '..\\VistaPrincipal\\Pagina Principal.html';
};

//guardarEnLocalStorage al evento click del botón
btnPagar.addEventListener("click", guardarEnLocalStorage);
