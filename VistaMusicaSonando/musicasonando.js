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

//MARCAR CANCIONES COMO FAVORITAS 
var cancionesFavoritas = JSON.parse(localStorage.getItem(usuario.nombreUsuario + "cancionesFavoritas")) || [];
  document.querySelectorAll('.star-icon').forEach(function(estrella) {
      var cancionId = estrella.parentElement.getAttribute('id');

      if (cancionesFavoritas.includes(cancionId)) {
          estrella.style.filter = 'invert(71%) sepia(99%) saturate(1350%) hue-rotate(358deg) brightness(103%) contrast(105%)'; // Amarillo
      }

      estrella.addEventListener('click', function(event) {
          event.preventDefault(); // Prevenir la acción predeterminada del evento
          event.stopPropagation(); // Detiene la propagación del evento

          if (cancionesFavoritas.includes(cancionId)) {
              // Retirar La Cancion de los favoritos
              cancionesFavoritas = cancionesFavoritas.filter(function(favorito) {
                  return favorito !== cancionId;
              });
              estrella.style.filter = '';
          } else {
              // Agregar La Cancion a los favoritos
              cancionesFavoritas.push(cancionId);
              estrella.style.filter = 'invert(71%) sepia(99%) saturate(1350%) hue-rotate(358deg) brightness(103%) contrast(105%)'; // Amarillo
                console.log(usuario)
            }

          localStorage.setItem(usuario.nombreUsuario + "cancionesFavoritas", JSON.stringify(cancionesFavoritas));
      });
  });

