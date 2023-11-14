window.onload = function() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  document.querySelector('.nav-link').textContent = usuario.nombreUsuario;
  
  document.getElementById('cerrarSesion').addEventListener('click', function() {
    //autenticación como 'false' en el localStorage
    localStorage.setItem('estadoCuenta', 'Se cerro sesion');
    // Redirigir a la página de inicio de sesión
    window.location.href = 'index.html';
  });

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
      albumContainer.onclick = () => mostrarCanciones(album.Id);
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

  var albums = {
    'album-01': [
        {nombre:"Something",artista:"The Beatles",album:"Abbey Road",Id:"cancion01-album-01",img:"..\\Musica\\Fotos\\Álbumes\\Abbey Road.jpg"
            ,duracion:"3:14",reproducciones:"200"},
            {nombre:"The end",artista:"The Beatles",album:"Abbey Road",Id:"cancion02-album-01",img:"..\\Musica\\Fotos\\Álbumes\\Abbey Road.jpg"
            ,duracion:"3:14",reproducciones:"200"},
            {nombre:"Sun king",artista:"The Beatles",album:"Abbey Road",Id:"cancion03-album-01",img:"..\\Musica\\Fotos\\Álbumes\\Abbey Road.jpg"
            ,duracion:"3:14",reproducciones:"200"},
            {nombre:"Because",artista:"The Beatles",album:"Abbey Road",Id:"cancion04-album-01",img:"..\\Musica\\Fotos\\Álbumes\\Abbey Road.jpg"
            ,duracion:"3:14",reproducciones:"200"},
        
    ],
    'album-02': [
        {nombre:"Cancion Animal",artista:"Soda Stereo",album:"Cancion Animal",Id:"cancion01-album-02",img:"..\\Musica\\Fotos\\Álbumes\\Canción Animal.jpg"
        ,duracion:"3:14",reproducciones:"200"},
        {nombre:"Un Millon De Años Luz",artista:"Soda Stereo",album:"Cancion Animal",Id:"cancion02-album-02",img:"..\\Musica\\Fotos\\Álbumes\\Canción Animal.jpg"
        ,duracion:"3:14",reproducciones:"200"},
        {nombre:"Musica Ligera",artista:"Soda Stereo",album:"Cancion Animal",Id:"cancion03-album-02",img:"..\\Musica\\Fotos\\Álbumes\\Canción Animal.jpg"
        ,duracion:"3:14",reproducciones:"200"},
        {nombre:"Cae el sol",artista:"Soda Stereo",album:"Cancion Animal",Id:"cancion04-album-02",img:"..\\Musica\\Fotos\\Álbumes\\Canción Animal.jpg"
        ,duracion:"3:14",reproducciones:"200"},
    ],
    'album-03': [
        {nombre:"Artud",artista:"Pescado Rabioso",album:"Artaud",Id:"cancion01-album-03",img:"..\\Musica\\Fotos\\Álbumes\\Artaud.jpg"
        ,duracion:"3:14",reproducciones:"200"},
        {nombre:"Bajan",artista:"Pescado Rabioso",album:"Artaud",Id:"cancion02-album-03",img:"..\\Musica\\Fotos\\Álbumes\\Artaud.jpg"
        ,duracion:"3:14",reproducciones:"200"},
        {nombre:"La sed verdadera",artista:"Pescado Rabioso",album:"Artaud",Id:"cancion03-album-03",img:"..\\Musica\\Fotos\\Álbumes\\Artaud.jpg"
        ,duracion:"3:14",reproducciones:"200"},
        {nombre:"Cantata de puentes amarillos",artista:"Pescado Rabioso",album:"Artaud",Id:"cancion04-album-03",img:"..\\Musica\\Fotos\\Álbumes\\Artaud.jpg"
        ,duracion:"3:14",reproducciones:"300"},
    ],
    'album-04': [
      {nombre:"Locura",artista:"Virus",album:"Locura",Id:"cancion01-album-04",img:"..\\Musica\\Fotos\\Álbumes\\Locura"
      ,duracion:"3:14",reproducciones:"2070"},
      {nombre:"Tomo lo que encuentro",artista:"Virus",album:"Locura",Id:"cancion02-album-04",img:"..\\Musica\\Fotos\\Álbumes\\Locura"
      ,duracion:"3:14",reproducciones:"2008"},
      {nombre:"Destino circular",artista:"Virus",album:"Locura",Id:"cancion03-album-04",img:"..\\Musica\\Fotos\\Álbumes\\Locura"
      ,duracion:"3:14",reproducciones:"2020"},
      {nombre:"Luna de miel en la mano",artista:"Virus",album:"Locura",Id:"cancion04-album-04",img:"..\\Musica\\Fotos\\Álbumes\\Locura"
      ,duracion:"3:14",reproducciones:"2010"},
  ],
    'album-05': [{nombre:"Fuerza Natural",artista:"Gustavo Cerati",album:"Fuerza Natural",Id:"cancion01-album-05",img:"..\\Musica\\Fotos\\Álbumes\\Fuerza Natural.jpg"
    ,duracion:"3:14",reproducciones:"200"},
    {nombre:"Magia",artista:"Gustavo Cerati",album:"Fuerza Natural",Id:"cancion02-album-05",img:"..\\Musica\\Fotos\\Álbumes\\Fuerza Natural.jpg"
    ,duracion:"3:14",reproducciones:"200"},
    {nombre:"Amor sin rodeos",artista:"Gustavo Cerati",album:"Fuerza Natural",Id:"cancion03-album-05",img:"..\\Musica\\Fotos\\Álbumes\\Fuerza Natural.jpg"
    ,duracion:"3:14",reproducciones:"200"},
    {nombre:"Deja vu",artista:"Gustavo Cerati",album:"Fuerza Natural",Id:"cancion04-album-05",img:"..\\Musica\\Fotos\\Álbumes\\Fuerza Natural.jpg"
    ,duracion:"3:14",reproducciones:"200"}
  ],
  'album-06': [{nombre:"Nevermind",artista:"Nirvana ",album:"Cancion Animal",Id:"cancion01-album-06",img:"..\\Musica\\Fotos\\Álbumes\\Nevermind.jpg"
  ,duracion:"3:14",reproducciones:"200"},
  {nombre:"Polly",artista:"Nirvana",album:"Nevermind",Id:"cancion02-album-06",img:"..\\Musica\\Fotos\\Álbumes\\Nevermind.jpg"
  ,duracion:"3:14",reproducciones:"200"},
  {nombre:"Come as you ar",artista:"Nirvana",album:"Nevermind",Id:"cancion03-album-06",img:"..\\Musica\\Fotos\\Álbumes\\Nevermind.jpg"
  ,duracion:"3:14",reproducciones:"200"},
  {nombre:"something in the way",artista:"Nirvana",album:"Nevermind",Id:"cancion04-album-06",img:"..\\Musica\\Fotos\\Álbumes\\Nevermind.jpg"
  ,duracion:"3:14",reproducciones:"200"}
],
'album-07': [
  {nombre:"Raro",artista:"Cuarteto de Nos",album:"Raro",Id:"cancion01-album-07",img:"..\\Musica\\Fotos\\Álbumes\\Raro.jpg"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Me hace bien, me hace mal",artista:"Cuarteto de Noss",album:"Raro",Id:"cancion02-album-07",img:"..\\Musica\\Fotos\\Álbumes\\Raro.jpg"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Nada es gratis en la vida",artista:"Cuarteto de Nos",album:"Raro",Id:"cancion03-album-07",img:"..\\Musica\\Fotos\\Álbumes\\Raro.jpg"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Asi soy yo ",artista:"Cuarteto de Nos",album:"Raro",Id:"cancion04-album-07",img:"..\\Musica\\Fotos\\Álbumes\\Raro.jpg"
,duracion:"3:14",reproducciones:"200"}
],
'album-08': [{nombre:"Whenever You Need Somebody",artista:"Rick Astley",album:"Whenever You Need Somebody",Id:"cancion01-album-08",img:"..\\Musica\\Fotos\\Álbumes\\Never Gonna Give You Up.jpg"
,duracion:"3:14",reproducciones:"200"},
{nombre:"togheder forever",artista:"Rick Astley",album:"Whenever You Need Somebody",Id:"cancion02-album-08",img:"..\\Musica\\Fotos\\Álbumes\\Never Gonna Give You Up.jpg"
,duracion:"3:14",reproducciones:"200"},
{nombre:"The love has gone",artista:"Rick Astley",album:"Whenever You Need Somebody",Id:"cancion03-album-08",img:"..\\Musica\\Fotos\\Álbumes\\Never Gonna Give You Up.jpg"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Whenay foll in love",artista:"Rick Astley",album:"Whenever You Need Somebody",Id:"cancion04-album-08",img:"..\\Musica\\Fotos\\Álbumes\\Never Gonna Give You Up.jpg"
,duracion:"3:14",reproducciones:"200"}
],
'album-09': [{nombre:"Peperina",artista:"Serú Girán",album:"Peperina",Id:"cancion01-album-09",img:"..\\Musica\\Fotos\\Álbumes\\Peperina.webp"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Lo que dice la lluvia",artista:"Serú Girán",album:"Peperina",Id:"cancion02-album-09",img:"..\\Musica\\Fotos\\Álbumes\\Peperina.webp"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Esperando nacer",artista:"Serú Girán",album:"Peperina",Id:"cancion03-album-09",img:"..\\Musica\\Fotos\\Álbumes\\Peperina.webp"
,duracion:"3:14",reproducciones:"200"},
{nombre:"En la vereda del sol",artista:"Serú Girán",album:"Peperina",Id:"cancion04-album-09",img:"..\\Musica\\Fotos\\Álbumes\\Peperina.webp"
,duracion:"3:14",reproducciones:"200"}
],
'album-10': [{nombre:"Giros",artista:"Fito Paez",album:"Giros",Id:"cancion01-album-10",img:"..\\Musica\\Fotos\\Álbumes\\Giros.jpg"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Taquicardia",artista:"Fito Paez",album:"Giros",Id:"cancion02-album-10",img:"..\\Musica\\Fotos\\Álbumes\\Giros.jpg"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Yo vengo a ofrecer mi corazon",artista:"Fito Paez",album:"Giros",Id:"cancion03-album-10",img:"..\\Musica\\Fotos\\Álbumes\\Giros.jpg"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Alguna vez voy a ser libre",artista:"Fito Paez",album:"Giros",Id:"cancion04-album-10",img:"..\\Musica\\Fotos\\Álbumes\\Giros.jpg"
,duracion:"3:14",reproducciones:"200"}
],
'album-11': [{nombre:"Lagrimas De Ayer",artista:"Los Mansaneros santiaguenos",album:"Lagrimas De Ayer",Id:"cancion01-album-11",img:"..\\Musica\\Fotos\\Álbumes\\Eterno Amor.jpg"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Giros",artista:"Fito Paez",album:"Giros",Id:"cancion02-album-11",img:"..\\Musica\\Fotos\\Álbumes\\Giros.jpg"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Scorpion",artista:"drake",album:"Scorpion",Id:"cancion03-album-11",img:"..\\VistaMisAlbums\\img\\drakePortada.jpg"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Locura",artista:"Virus",album:"Locura",Id:"cancion04-album-11",img:"..\\Musica\\Fotos\\Álbumes\\Locura"
,duracion:"3:14",reproducciones:"200"}
],
};


function mostrarCanciones(album) {
    // Obtén el array de canciones correspondiente al álbum
    var canciones = albums[album];
    // Verifica si el álbum existe
    if (canciones) {
        // Codifica las canciones para pasarlas como parámetro en la URL
        var cancionesParam = encodeURIComponent(JSON.stringify(canciones));
         // Redirige a thebeatles.html en VistaMusicaSonando
         window.location.href = '\\VistaMusicaSonando\\thebeatles.html?album=' + encodeURIComponent(album) + '&canciones=' + cancionesParam;
    } else {
        alert('Álbum no encontrado');
    }
}

};

document.addEventListener('DOMContentLoaded', function () {
    // Obtiene la información de la canción seleccionada
    var cancionSeleccionada = obtenerCancionSeleccionada();

    // Verifica si hay una canción seleccionada
    if (cancionSeleccionada) {
        // Actualiza la interfaz de la barra de música con la información de la canción
        actualizarBarraDeMusica(cancionSeleccionada);
    }
});

function obtenerCancionSeleccionada() {
    // Obtiene la información de la canción desde localStorage
    var cancionString = localStorage.getItem('cancionSeleccionada');

    // Parsea la cadena JSON almacenada y devuelve la canción
    return cancionString ? JSON.parse(cancionString) : null;
}

function actualizarBarraDeMusica(cancion) {
    // Actualiza la interfaz de la barra de música con la información de la canción
    document.querySelector('.album-image').src = cancion.img;
    document.querySelector('.album-name').innerText = cancion.nombre;
    document.querySelector('.artist-name').innerText = cancion.artista;}