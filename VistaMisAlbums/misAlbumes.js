//CERRAR SESION
document.getElementById('cerrarSesionAlbum').addEventListener('click', function() {
  //autenticación como 'false' en el localStorage
  localStorage.setItem('estadoCuenta', 'Se cerro sesion');
  // Redirigir a la página de inicio de sesión
  window.location.href = 'index.html';
});

window.onload = function(){
const usuario = JSON.parse(localStorage.getItem("usuario"));
document.querySelector('.nav-link').textContent = usuario.nombreUsuario;

//CANCION ACTUAL
document.querySelector('.audio-player').addEventListener('play', function() {
  const cancionActual = this.querySelector('source').getAttribute('src');
  localStorage.setItem("cancionActual", cancionActual);
});

const albumsGuardados = JSON.parse(localStorage.getItem('misAlbums')) || [];
const contenedorAlbums = document.querySelector('.main-flex-albums');
const albumesFavoritos = JSON.parse(localStorage.getItem(usuario.nombreUsuario + "AlbumesFavoritos")) || [];

const albumsSeleccionados = albumsGuardados.filter(album => albumesFavoritos.includes(album.Id));

albumsSeleccionados.forEach(album => {
  const albumCard = document.createElement('a');
  albumCard.className = 'main-card-album';
  albumCard.href = '..\\VistaMusicaSonando\\thebeatles.html';

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

};
