//ETIQUETAS
 var albumes = document.querySelectorAll('.main-card-album');

//CERRAR SESION
document.getElementById('cerrarSesionAlbum').addEventListener('click', function() {
    //autenticación como 'false' en el localStorage
    localStorage.setItem('estadoCuenta', 'Se cerro sesion');
    // Redirigir a la página de inicio de sesión
    window.location.href = 'index.html';
  });

  //NOMBRE DE USUARIO
window.onload = function(){
  var usuario = JSON.parse(localStorage.getItem("usuario"));
    document.querySelector('.nav-link').textContent = usuario.nombreUsuario;


  //CANCION ACTUAL
  document.querySelector('.audio-player').addEventListener('play', function() {
    var cancionActual = this.querySelector('source').getAttribute('src');
    localStorage.setItem("cancionActual", cancionActual);
});

  //RETIRAR Y SELECCIONAR ALBUM FAVORITO
    var usuario = JSON.parse(localStorage.getItem("usuario"));
    document.querySelector('.nav-link').textContent = usuario.nombreUsuario;

    var albumesFavoritos = JSON.parse(localStorage.getItem(usuario.nombreUsuario + "albumesFavoritos")) || [];

    document.querySelectorAll('.star-icon').forEach(function(estrella) {
        var albumId = estrella.parentElement.getAttribute('data-id');

        if (albumesFavoritos.includes(albumId)) {
            estrella.style.filter = 'invert(71%) sepia(99%) saturate(1350%) hue-rotate(358deg) brightness(103%) contrast(105%)'; // Amarillo
        }

        estrella.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir la acción predeterminada del evento
            event.stopPropagation(); // Detiene la propagación del evento

            if (albumesFavoritos.includes(albumId)) {
                // Retirar el álbum de los favoritos
                albumesFavoritos = albumesFavoritos.filter(function(favorito) {
                    return favorito !== albumId;
                });
                estrella.style.filter = '';
            } else {
                // Agregar el álbum a los favoritos
                albumesFavoritos.push(albumId);
                estrella.style.filter = 'invert(71%) sepia(99%) saturate(1350%) hue-rotate(358deg) brightness(103%) contrast(105%)'; // Amarillo
                actualizarVistaMisAlbumes(albumsSeleccionados);
            }

            localStorage.setItem(usuario.nombreUsuario + "albumesFavoritos", JSON.stringify(albumesFavoritos));
       
        });
    });


    function actualizarVistaMisAlbumes(albumesFavoritos) {
      // Obtén el contenedor donde mostrarás los álbumes seleccionados en la vista Mis Álbumes
      var vistaMisAlbumesContainer = document.getElementById('main-flex-albums');
      // Limpia el contenido existente en el contenedor
      vistaMisAlbumesContainer.innerHTML = '';
      // Verifica si hay álbumes seleccionados
      if (albumesFavoritos.length > 0) {
          // Itera sobre la lista de álbumes seleccionados y crea elementos para cada álbum
          albumesFavoritos.forEach(function(albumId) {
              // Recupera información del álbum a partir de su ID (puedes tener una estructura de datos)
              var album = obtenerInformacionDelAlbumPorId(albumId); // Implementa esta función según tu estructura de datos
              // Crea elementos de álbum para mostrar en la vista Mis Álbumes
              var albumElemento = document.createElement('div');
              albumElemento.className = 'album-seleccionado';
              albumElemento.innerHTML = `
                  <img src="${album.imagen}" alt="${album.nombre}" class="album-imagen">
                  <p class="album-nombre">${album.nombre}</p>
                  <p class="album-artista">${album.artista}</p>
              `;
              // Agrega el elemento del álbum al contenedor de Mis Álbumes
              vistaMisAlbumesContainer.appendChild(albumElemento);
          });
      } else {
          // Si no hay álbumes seleccionados, muestra un mensaje indicando que no hay álbumes
          vistaMisAlbumesContainer.innerHTML = '<p>No hay álbumes seleccionados.</p>';
      }
  }
  
//------------------------LIMPIAR LOS ALBUMES EN HTML---------------------------------------------------------
  function obtenerIdsAlbumesEnMisAlbumes() {
    // Obtiene los IDs de los álbumes desde el localStorage
   var idsAlbumesEnMisAlbumes = JSON.parse(localStorage.getItem('misAlbumes')) || [];
   return idsAlbumesEnMisAlbumes;
  }

  var idsAlbumesEnMisAlbumes = obtenerIdsAlbumesEnMisAlbumes();
  var contenedorAlbumes = document.querySelector('.main-flex-albums');

  // Obtén todos los elementos de álbumes en main-flex-albums
  var albumes = contenedorAlbumes.querySelectorAll('.main-card-album');

    albumes.forEach(function(album) {
     var albumId = album.querySelector('.album-container').getAttribute('data-id');

      // Verifica si el álbum no está en la lista de IDs de álbumes en misAlbumes
      if (!idsAlbumesEnMisAlbumes.includes(albumId)) {
         // Si no está en misAlbumes, elimina el álbum del DOM
         album.remove();
     } else {
        var albumElemento = document.createElement('<div>');
        albumElemento.className = 'album-seleccionado';
        albumElemento.innerHTML = 
        ` <img src="${album.imagen}" alt="${album.nombre}" class="album-imagen">
          <p class="album-nombre">${album.nombre}</p>
          <p class="album-artista">${album.artista}</p>
        `;
      // Agrega el elemento del álbum al contenedor de Mis Álbumes
      contenedorAlbumes.appendChild(albumElemento);
     }
  });

};

  
