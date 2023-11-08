 //NOMBRE DE USUARIO
var usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosLista"));
var user = JSON.parse(localStorage.getItem("usuario"));
document.querySelector('.nav-link').textContent = user.nombreUsuario;

//CERRAR SESION
document.getElementById('cerrarSesion').addEventListener('click', function() {
//autenticación como 'false' en el localStorage
localStorage.setItem('estadoCuenta', 'Se cerro sesion');
// Redirigir a la página de inicio de sesión
window.location.href = 'index.html';
}); 



//MARCAR CANCIONES COMO FAVORITAS |
/* var cancionesFavoritas = JSON.parse(localStorage.getItem(user.nombreUsuario + "cancionesFav")) || [];
  
document.querySelectorAll('.star-icon').forEach(function(estrella) {
      const cancionId = estrella.parentElement.getAttribute('id');

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
                
            }

            localStorage.setItem(user.nombreUsuario + "cancionesFav", JSON.stringify(cancionesFavoritas));
      });
  }); */


  document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia a la imagen de estrella
    let estrella = document.querySelector('.star-icon');
  
    // Agregar un evento de clic a la imagen de estrella
    estrella.addEventListener('click', function(event) {
      event.preventDefault(); // Prevenir la acción predeterminada del evento
  
      // Obtener los datos de la canción1
      let cancion1 = document.querySelector('.cancion1');
      let nombre = cancion1.querySelector('.nombre').textContent;
      let artista = cancion1.querySelector('.artist-name').textContent;
      let album = cancion1.querySelector('.album p').textContent;
      let duracion = cancion1.querySelector('.duracion p').textContent;
      let reproducciones = cancion1.querySelector('.reproduccion').textContent;
  
      // Crear un objeto con los datos
      let datosCancion1 = {
        nombre: nombre,
        artista: artista,
        album: album,
        duracion: duracion,
        reproducciones: reproducciones
      };
  
      // Convertir a formato JSON y guardar en localStorage
      localStorage.setItem(user, JSON.stringify(datosCancion1));
    });
  }); 

