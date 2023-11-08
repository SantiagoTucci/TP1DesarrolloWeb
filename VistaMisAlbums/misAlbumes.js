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

var albumesFavoritos = JSON.parse(localStorage.getItem(usuario.nombreUsuario + "albumesFavoritos")) || [];
var arrayAlbums = albums;
function mostrarAlbumesFavoritos(arrayAlbums, albumesFavoritos) {
  // Obtiene los elementos DOM de los álbumes
  const albumContainers = document.querySelectorAll(".album-container");

  // Recorre los elementos DOM de los álbumes
  for (const albumContainer of albumContainers) {
    // Obtiene el ID del álbum
    const albumId = albumContainer.getAttribute("data-id");

    // Si el álbum está en la lista de favoritos, lo muestra
    if (albumesFavoritos.includes(albumId)) {
      albumContainer.style.display = "block";
    } else {
      albumContainer.style.display = "none";
    }
  }
}

};


//------------------------LOS ALBUMES EN HTML---------------------------------------------------------




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


  
