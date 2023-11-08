// Información del parámetro 'plan' desde la URL------------------------------------
// Elementos en HTML que muestran la información
const tituloElemento = document.getElementById('nombrePlan');
const imagenElemento = document.getElementById('imgPlan');
const precioElemento = document.getElementById('precioPlan');
const descripcionElemento = document.getElementById('textoPlan');

function cambiarNombrePlan() {
 /*
  const urlParams = new URLSearchParams(window.location.search);
  const planSeleccionado = urlParams.get('plan');*/
  const URLAbuscar=window.location.href;
  const array = URLAbuscar.split('?')
  let plan = array[array.length -1];

// Lógica para mostrar la información según el plan seleccionado
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