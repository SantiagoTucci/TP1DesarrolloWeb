 //NOMBRE DE USUARIO
var usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosLista"));
var usuario = JSON.parse(localStorage.getItem("usuario"));
document.querySelector('.nav-link').textContent = usuario.nombreUsuario;

//CERRAR SESION
document.getElementById('cerrarSesion').addEventListener('click', function() {
//autenticación como 'false' en el localStorage
localStorage.setItem('estadoCuenta', 'Se cerro sesion');
// Redirigir a la página de inicio de sesión
window.location.href = 'index.html';
}); 



//MARCAR CANCIONES COMO FAVORITAS |
 var cancionesFavoritas = JSON.parse(localStorage.getItem(usuario.nombreUsuario + "cancionesFav")) || [];
  
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

            localStorage.setItem(usuario.nombreUsuario + "cancionesFav", JSON.stringify(cancionesFavoritas));
      });
  }); 



  
  window.onload = function(){
  //MOVIMIENTO DE CANCIONES
  const albumsGuardados = JSON.parse(localStorage.getItem('misAlbums')) || [];
  
  const contenedorMusicaSonando = document.querySelector('.contenedorcancionesfav');
  //FILTRAR POR ALBUMS
  const albumesFavoritos = JSON.parse(localStorage.getItem(usuario.nombreUsuario + "AlbumesFavoritos")) || [];

  const albumsSeleccionados = albumsGuardados.filter(album => albumesFavoritos.includes(album.Id));
//FILTRAR POR ALBUM ESPECIFICO
const criterioAlbum = "Abbey Road"; // Puedes cambiar esto al valor que desees filtrar

const cancionesFiltradas = albumsSeleccionados.flatMap(album => {
    return album.canciones.filter(cancion => {
        return cancion.album === criterioAlbum;
    });
});

  albumsSeleccionados.forEach(album => {
          album.canciones.forEach(cancion => {
              const cancionDiv = document.createElement('div');
              cancionDiv.className = 'cancion1';
      
              const espacioDiv = document.createElement('div');
              espacioDiv.className = 'espacio';
              const imagenBoton = document.createElement('img');
              imagenBoton.src = '..\\VistaMisFavoritos\\006-tocar.png';
              imagenBoton.alt = '';
              imagenBoton.className = 'imagen-boton';
              espacioDiv.appendChild(imagenBoton);
      
              const nombreCancionDiv = document.createElement('div');
              nombreCancionDiv.className = 'nombre-cancion';
      
              const albumContainerDiv = document.createElement('div');
              albumContainerDiv.className = 'album-container';
              albumContainerDiv.id = cancion.Id;
              const imagenCancion = document.createElement('img');
              imagenCancion.src = cancion.img;
              imagenCancion.alt = '';
              imagenCancion.className = 'imagen-cancion';
              albumContainerDiv.appendChild(imagenCancion);
      
              const estrella = document.createElement('img');
              estrella.src = '..\\Musica\\Fotos\\Estrella.avif';
              estrella.alt = 'Estrella';
              estrella.className = 'star-icon';
              estrella.id = cancion.Id;
              albumContainerDiv.appendChild(estrella);
      
              const textosDiv = document.createElement('div');
              textosDiv.className = 'textos';
              const nombreLink = document.createElement('a');
              nombreLink.href = '';
              nombreLink.textContent = cancion.nombre;
              textosDiv.appendChild(nombreLink);
              const artistaP = document.createElement('p');
              artistaP.className = 'artist-name';
              artistaP.textContent = cancion.artista;
              textosDiv.appendChild(artistaP);
      
              nombreCancionDiv.appendChild(albumContainerDiv);
              nombreCancionDiv.appendChild(textosDiv);
      
              const albumDiv = document.createElement('div');
              albumDiv.className = 'album';
              albumDiv.textContent = cancion.album;
      
              const duracionDiv = document.createElement('div');
              duracionDiv.className = 'duracion';
              duracionDiv.textContent = cancion.duracion;
      
              const reproduccionDiv = document.createElement('div');
              reproduccionDiv.className = 'reproduccion';
              reproduccionDiv.textContent = cancion.reproducciones;
      
              cancionDiv.appendChild(espacioDiv);
              cancionDiv.appendChild(nombreCancionDiv);
              cancionDiv.appendChild(albumDiv);
              cancionDiv.appendChild(duracionDiv);
              cancionDiv.appendChild(reproduccionDiv);
      
              contenedorMusicaSonando.appendChild(cancionDiv);
          });
      }); 
    } 
  
    
  
  

