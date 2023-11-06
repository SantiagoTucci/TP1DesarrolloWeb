/*ETIQUETAS*/
const form = document.getElementById("form");

const numeroG = document.getElementById("campoTarjeta");
const vencimientoG = document.getElementById("campoVencimiento");
const cvcG = document.getElementById("campoContrasenia");
const nombreG = document.getElementById("campoNombreApellido");
const checkBoxG = document.getElementById("checkBox")

const btnPagar = document.getElementById("btnPagar");

//NOMBRE DE USUARIO
window.onload = function(){
  var usuario = JSON.parse(localStorage.getItem("usuario"));
    document.querySelector('.nav-link').textContent = usuario.nombreUsuario;
}

//CERRAR SESION
document.getElementById('cerrarSesion').addEventListener('click', function() {
  //autenticación como 'false' en el localStorage
  localStorage.setItem('estadoCuenta', 'Se cerro sesion');
  // Redirigir a la página de inicio de sesión
  window.location.href = 'index.html';
});

// Información del parámetro 'plan' desde la URL------------------------------------
const urlParamsTitulo = new URLSearchParams(window.location.search);
const planSeleccionado = urlParams.get('plan');

// Elementos en HTML que muestran la información
const tituloElemento = document.getElementById('nombrePlan');
const imagenElemento = document.getElementById('imgPlan');
const precioElemento = document.getElementById('precioPlan');
const descripcionElemento = document.getElementById('textoPlan');

// Lógica para mostrar la información según el plan seleccionado
if (planSeleccionado == 'planMensual') {
  tituloElemento.textContent = 'Elegiste el plan Mensual';
  imagenElemento.src = 'img/30-dias.png';
  precioElemento.textContent = '$100';
  descripcionElemento.textContent = 'Nuestro plan Premium de un mes ofrece a los usuarios una experiencia premium sin compromisos a largo plazo. Con acceso ilimitado durante 30 días, los suscriptores pueden disfrutar de todas las características exclusivas de nuestro servicio.';
} else if (planSeleccionado == 'planAnual') {
  tituloElemento.textContent = 'Elegiste el plan Anual';
  imagenElemento.src = 'img/aniversario.png';
  precioElemento.textContent = '$1000';
  descripcionElemento.textContent = 'Nuestro plan Premium anual es la opción ideal para aquellos que buscan una experiencia premium a largo plazo. Al suscribirte por un año completo, disfrutarás de acceso ilimitado y sin interrupciones a todas nuestras características exclusivas.';
} else if(planSeleccionado == 'planInfinito'){
  tituloElemento.textContent = 'Elegiste el plan Infinito';
  imagenElemento.src = 'img/infinidad.png';
  precioElemento.textContent = '$2000';
  descripcionElemento.textContent = 'Nuestro plan Premium de duración infinita es la elección definitiva para los amantes de nuestro servicio. Con esta suscripción, los usuarios disfrutan de acceso ilimitado y perpetuo a todas nuestras características premium.';
} else {
  tituloElemento.textContent = 'Plan no válido';
  imagenElemento.src = 'img/disco-de-vinilo.png';
  descripcionElemento.textContent = 'No se ha seleccionado un plan válido.';
}

//-----------------------------------------------------------------------------------

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


/*const titulo=document.querySelector("#titulo")
const URLAbuscar=new URL(window.location.href)
const nombrePlan=URLAbuscar.searchParams.get("plan")
titulo.textContent+=nombrePlan*/


function cambiarNombrePlan(){
  const titulo = document.getElementById('titulo');
  const precio = document.getElementById('precio');
  const img = document.getElementById('imagenPlan');
  const URLAbuscar=window.location.href;
  const array = URLAbuscar.split('?')
  let plan = array[array.length -1];

  if(plan == "plan=1"){
      titulo.innerHTML = "Elegiste el plan Mensual";
      precio.innerHTML = "100$";
      

  }else if(plan == "plan=2"){
      titulo.innerHTML = "Elegiste el plan Anual";
      precio.innerHTML = "1000$";
      img.innerHTML = '<img src="..\\vistaPremium\\media\\aniversario.png">';
      
  }else if(plan == "plan=3"){
      titulo.innerHTML = "Elegiste el plan Infinito";
      precio.innerHTML = "2000$";
      img.innerHTML = '';
      
  }

  
  
}
