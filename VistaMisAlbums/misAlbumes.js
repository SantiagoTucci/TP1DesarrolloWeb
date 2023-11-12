window.onload = function() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  document.querySelector('.nav-link').textContent = usuario.nombreUsuario;

  //CANCION ACTUAL
  document.querySelector('.audio-player').addEventListener('play', function() {
      const cancionActual = this.querySelector('source').getAttribute('src');
      localStorage.setItem("cancionActual", cancionActual);
  });

  const albumsGuardados = JSON.parse(localStorage.getItem('misAlbums')) || [];
  const contenedorAlbums = document.querySelector('.main-flex-albums');
  let albumesFavoritos = JSON.parse(localStorage.getItem(usuario.nombreUsuario + "AlbumesFavoritos")) || [];

  const albumsSeleccionados = albumsGuardados.filter(album => albumesFavoritos.includes(album.Id));

  albumsSeleccionados.forEach(album => {
      const albumCard = document.createElement('a');
      albumCard.className = 'main-card-album';

      const albumContainer = document.createElement('div');
      albumContainer.className = 'album-container';
      albumContainer.dataset.id = album.Id;

      const albumImagen = document.createElement('img');
      albumImagen.src = album.img;
      albumImagen.alt = album.nombre;
      albumImagen.className = 'main-card-album-image';

      const estrella = document.createElement('img');
      estrella.src = '../Musica/Fotos/Estrella.avif';
      estrella.alt = 'Estrella';
      estrella.className = 'star-icon';
      estrella.dataset.id = album.Id;

      albumContainer.appendChild(albumImagen);
      albumContainer.appendChild(estrella);

      const textoAlbum = document.createElement('p');
      textoAlbum.className = 'main-card-album-text';
      textoAlbum.textContent = album.nombre;

      const subtextoAlbum = document.createElement('p');
      subtextoAlbum.className = 'main-card-album-subtext';
      subtextoAlbum.textContent = album.artista;

      albumCard.appendChild(albumContainer);
      albumCard.appendChild(textoAlbum);
      albumCard.appendChild(subtextoAlbum);

      contenedorAlbums.appendChild(albumCard);
  });

  document.querySelectorAll('.star-icon').forEach(function(estrella) {
      const albumId = estrella.parentElement.getAttribute('data-id');
      // Resto del código para aplicar el estilo de la estrella amarilla para los álbumes seleccionados...
      estrella.addEventListener('click', function(event) {
          event.preventDefault();
          event.stopPropagation();
          // Verificar si el álbum ya está en la lista de favoritos
          const index = albumesFavoritos.indexOf(albumId);
          if (index !== -1) {
              // Si el álbum está en la lista, eliminarlo
              albumesFavoritos.splice(index, 1);
              estrella.style.filter = 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(100deg) brightness(115%) contrast(106%)'; // Blanco
          } else {
              // Si el álbum no está en la lista, agregarlo
              albumesFavoritos.push(albumId);
              estrella.style.filter = 'invert(71%) sepia(99%) saturate(1350%) hue-rotate(358deg) brightness(103%) contrast(105%)'; // Amarillo
          }
          // Actualizar el localStorage con la nueva lista de favoritos
          localStorage.setItem(usuario.nombreUsuario + "AlbumesFavoritos", JSON.stringify(albumesFavoritos));
      });
  });

};
