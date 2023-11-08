//ETIQUETAS
const albums = [
  {
    id: "album-01",
    imageUrl: "..\Musica\Fotos\Álbumes\Abbey Road.jpg",
    title: "Abbey Road",
    artist: "The Beatles",
    href: "..\VistaMusicaSonando\thebeatles.html",
  },
  {
    id: "album-02",
    imageUrl: "..\Musica\Fotos\Álbumes\Canción Animal.jpg",
    title: "Canción Animal",
    artist: "Soda Stereo",
    href: "..\VistaMusicaSonando\thebeatles.html",
  },
  {
    id: "album-03",
    imageUrl: "..\Musica\Fotos\Álbumes\Artaud.jpg",
    title: "Artaud",
    artist: "Pescado Rabioso",
    href: "..\VistaMusicaSonando\thebeatles.html",
  },
  {
    id: "album-04",
    imageUrl: "..\Musica\Fotos\Álbumes\Locura.jpg",
    title: "Locura",
    artist: "Virus",
    href: "..\VistaMusicaSonando\thebeatles.html",
  },
  {
    id: "album-05",
    imageUrl: "..\Musica\Fotos\Álbumes\Fuerza Natural.jpg",
    title: "Fuerza Natural",
    artist: "Gustavo Cerati",
    href: "..\VistaMusicaSonando\thebeatles.html",
  },
  {
    id: "album-06",
    imageUrl: "..\Musica\Fotos\Álbumes\Nevermind.jpg",
    title: "Nevermind",
    artist: "Nirvana",
    href: "..\VistaMusicaSonando\thebeatles.html",
  },
  {
    id: "album-07",
    imageUrl: "..\Musica\Fotos\Álbumes\Raro.jpg",
    title: "Raro",
    artist: "El Cuarteto de Nos",
    href: "..\VistaMusicaSonando\thebeatles.html",
  },
  {
    id: "album-08",
    imageUrl: "..\Musica\Fotos\Álbumes\Never Gonna Give You Up.jpg",
    title: "Whenever You Need Somebody",
    artist: "Rick Astley",
    href: "..\Musica\Video\Rick Roll (Different link + no ads) [xvFZjo5PgG0].mp4",
  },
  {
    id: "album-09",
    imageUrl: "..\Musica\Fotos\Álbumes\Peperina.webp",
    title: "Peperina",
    artist: "Serú Girán",
    href: "..\VistaMusicaSonando\thebeatles.html",
  },
  {
    id: "album-10",
    imageUrl: "..\Musica\Fotos\Álbumes\Giros.jpg",
    title: "Giros",
    artist: "Fito Páez",
    href: "..\VistaMusicaSonando\thebeatles.html",
  },
];

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
}


//------------------------LOS ALBUMES EN HTML---------------------------------------------------------

const albumsGuardados = JSON.parse(localStorage.getItem('misAlbums')) || []

const contenedorAlbums = document.querySelector('.main-flex-albums');

albumsGuardados.forEach(album => {
  const albumCard = document.createElement('div');
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































/*function insertarAlbum(albums, albumId) {
  const album = albums.find((album) => album.id === albumId);

  if (album === undefined) {
    return null;
  }

  // Inserta la información del álbum en el DOM
  const albumContainer = document.querySelector(`.album-container[data-id="${albumId}"]`);
  albumContainer.querySelector(`img.main-card-album-image`).src = album.imageUrl;
  albumContainer.querySelector(`p.main-card-album-text`).textContent = album.title;
  albumContainer.querySelector(`p.main-card-album-subtext`).textContent = album.artist;

  return album;
}
*/
/*document.querySelectorAll('.star-icon').forEach(function(estrella) {
  var albumId = estrella.parentElement.getAttribute('data-id');

  if (albumesFavoritos.includes(albumId)) {
      insertarAlbum(albums, albumId);
  } else {
    albumesFavoritos.remove();
  }
});*/


  
