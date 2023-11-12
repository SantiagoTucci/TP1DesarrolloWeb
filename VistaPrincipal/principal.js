window.onload = function() {
    var usuario = JSON.parse(localStorage.getItem("usuario"));
    document.querySelector('.nav-link').textContent = usuario.nombreUsuario;

    var albumesFavoritos = JSON.parse(localStorage.getItem(usuario.nombreUsuario + "AlbumesFavoritos")) || [];

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
            }

            localStorage.setItem(usuario.nombreUsuario + "AlbumesFavoritos", JSON.stringify(albumesFavoritos));
        });
    });

    document.querySelector('.audio-player').addEventListener('play', function() {
        var cancionActual = this.querySelector('source').getAttribute('src');
        localStorage.setItem("cancionActual", cancionActual);
    });

    document.querySelector('.nav-link[href="..\index.html"]').addEventListener('click', function() {
        localStorage.removeItem("usuario");
        window.location.replace("..\index.html");
    });
    
}

var albumsLocal = JSON.parse(localStorage.getItem("misAlbums"));

document.addEventListener('DOMContentLoaded', function() {
    const imagenesAlbum = document.querySelectorAll('.main-card-album-image');
    imagenesAlbum.forEach(imagen => {
        imagen.addEventListener('click', function() {
            const albumId = this.getAttribute('data-id');
            return albumId
        });
    });
});

var albums = {
    'album1': [
        {nombre:"Something",artista:"The Beatles",album:"Abbey Road",Id:"cancion01-album-01",img:"..\\Musica\\Fotos\\Álbumes\\Abbey Road.jpg"
            ,duracion:"3:14",reproducciones:"200"},
            {nombre:"The end",artista:"The Beatles",album:"Abbey Road",Id:"cancion02-album-01",img:"..\\Musica\\Fotos\\Álbumes\\Abbey Road.jpg"
            ,duracion:"3:14",reproducciones:"200"},
            {nombre:"Sun king",artista:"The Beatles",album:"Abbey Road",Id:"cancion03-album-01",img:"..\\Musica\\Fotos\\Álbumes\\Abbey Road.jpg"
            ,duracion:"3:14",reproducciones:"200"},
            {nombre:"Because",artista:"The Beatles",album:"Abbey Road",Id:"cancion04-album-01",img:"..\\Musica\\Fotos\\Álbumes\\Abbey Road.jpg"
            ,duracion:"3:14",reproducciones:"200"},
        
    ],
    'album2': [
        {nombre:"Cancion Animal",artista:"Soda Stereo",album:"Cancion Animal",Id:"cancion01-album-02",img:"..\\Musica\\Fotos\\Álbumes\\Canción Animal.jpg"
        ,duracion:"3:14",reproducciones:"200"},
        {nombre:"Cancion Animal",artista:"Soda Stereo",album:"Cancion Animal",Id:"cancion02-album-02",img:"..\\Musica\\Fotos\\Álbumes\\Canción Animal.jpg"
        ,duracion:"3:14",reproducciones:"200"},
        {nombre:"Cancion Animal",artista:"Soda Stereo",album:"Cancion Animal",Id:"cancion03-album-02",img:"..\\Musica\\Fotos\\Álbumes\\Canción Animal.jpg"
        ,duracion:"3:14",reproducciones:"200"},
        {nombre:"Cancion Animal",artista:"Soda Stereo",album:"Cancion Animal",Id:"cancion04-album-02",img:"..\\Musica\\Fotos\\Álbumes\\Canción Animal.jpg"
        ,duracion:"3:14",reproducciones:"200"},
    ],
    'album3': [
        {nombre:"Artud",artista:"Pescado Rabioso",album:"Cancion Animal",Id:"cancion01-album-03",img:"..\\Musica\\Fotos\\Álbumes\\Artaud.jpg"
        ,duracion:"3:14",reproducciones:"200"},
        {nombre:"Cancion Animal",artista:"Pescado Rabioso",album:"Cancion Animal",Id:"cancion02-album-03",img:"..\\Musica\\Fotos\\Álbumes\\Artaud.jpg"
        ,duracion:"3:14",reproducciones:"200"},
        {nombre:"Cancion Animal",artista:"Pescado Rabioso",album:"Cancion Animal",Id:"cancion03-album-03",img:"..\\Musica\\Fotos\\Álbumes\\Artaud.jpg"
        ,duracion:"3:14",reproducciones:"200"},
        {nombre:"Cancion Animal",artista:"Pescado Rabioso",album:"Cancion Animal",Id:"cancion04-album-03",img:"..\\Musica\\Fotos\\Álbumes\\Artaud.jpg"
        ,duracion:"3:14",reproducciones:"200"},
    ],
    'album5': [{nombre:"Cancion Animal",artista:"Gustavo Cerati",album:"Cancion Animal",Id:"cancion01-album-05",img:"..\\Musica\\Fotos\\Álbumes\\Fuerza Natural.jpg"
    ,duracion:"3:14",reproducciones:"200"},
    {nombre:"Cancion Animal",artista:"Gustavo Cerati",album:"Cancion Animal",Id:"cancion02-album-05",img:"..\\Musica\\Fotos\\Álbumes\\Fuerza Natural.jpg"
    ,duracion:"3:14",reproducciones:"200"},
    {nombre:"Cancion Animal",artista:"Gustavo Cerati",album:"Cancion Animal",Id:"cancion03-album-05",img:"..\\Musica\\Fotos\\Álbumes\\Fuerza Natural.jpg"
    ,duracion:"3:14",reproducciones:"200"},
    {nombre:"Cancion Animal",artista:"Gustavo Cerati",album:"Cancion Animal",Id:"cancion04-album-05",img:"..\\Musica\\Fotos\\Álbumes\\Fuerza Natural.jpg"
    ,duracion:"3:14",reproducciones:"200"}
  ],
  'album6': [{nombre:"Cancion Animal",artista:"Nirvana ",album:"Cancion Animal",Id:"cancion01-album-06",img:"..\\Musica\\Fotos\\Álbumes\\Nevermind.jpg"
  ,duracion:"3:14",reproducciones:"200"},
  {nombre:"Cancion Animal",artista:"Nirvana",album:"Cancion Animal",Id:"cancion02-album-06",img:"..\\Musica\\Fotos\\Álbumes\\Nevermind.jpg"
  ,duracion:"3:14",reproducciones:"200"},
  {nombre:"Cancion Animal",artista:"Nirvana",album:"Cancion Animal",Id:"cancion03-album-06",img:"..\\Musica\\Fotos\\Álbumes\\Nevermind.jpg"
  ,duracion:"3:14",reproducciones:"200"},
  {nombre:"Cancion Animal",artista:"Nirvana",album:"Cancion Animal",Id:"cancion04-album-06",img:"..\\Musica\\Fotos\\Álbumes\\Nevermind.jpg"
  ,duracion:"3:14",reproducciones:"200"}
],
'album7': [
  {nombre:"Cancion Animal",artista:"Cuarteto de Nos",album:"Cancion Animal",Id:"cancion01-album-07",img:"..\\Musica\\Fotos\\Álbumes\\Raro.jpg"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Cancion Animal",artista:"Cuarteto de Noss",album:"Cancion Animal",Id:"cancion02-album-07",img:"..\\Musica\\Fotos\\Álbumes\\Raro.jpg"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Cancion Animal",artista:"Cuarteto de Nos",album:"Cancion Animal",Id:"cancion03-album-07",img:"..\\Musica\\Fotos\\Álbumes\\Raro.jpg"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Cancion Animal",artista:"Cuarteto de Nos",album:"Cancion Animal",Id:"cancion04-album-07",img:"..\\Musica\\Fotos\\Álbumes\\Raro.jpg"
,duracion:"3:14",reproducciones:"200"}
],
'album8': [{nombre:"Whenever You Need Somebody",artista:"Rick Astley",album:"Cancion Animal",Id:"cancion01-album-08",img:"..\\Musica\\Fotos\\Álbumes\\Never Gonna Give You Up.jpg"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Cancion Animal",artista:"Rick Astley",album:"Cancion Animal",Id:"cancion02-album-08",img:"..\\Musica\\Fotos\\Álbumes\\Never Gonna Give You Up.jpg"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Cancion Animal",artista:"Rick Astley",album:"Cancion Animal",Id:"cancion03-album-08",img:"..\\Musica\\Fotos\\Álbumes\\Never Gonna Give You Up.jpg"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Cancion Animal",artista:"Rick Astley",album:"Cancion Animal",Id:"cancion04-album-08",img:"..\\Musica\\Fotos\\Álbumes\\Never Gonna Give You Up.jpg"
,duracion:"3:14",reproducciones:"200"}
],
'album9': [{nombre:"Cancion Animal",artista:"Serú Girán",Id:"cancion01-album-09",img:"..\\Musica\\Fotos\\Álbumes\\Peperina.webp"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Cancion Animal",artista:"Serú Girán",Id:"cancion02-album-09",img:"..\\Musica\\Fotos\\Álbumes\\Peperina.webp"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Cancion Animal",artista:"Serú Girán",Id:"cancion03-album-09",img:"..\\Musica\\Fotos\\Álbumes\\Peperina.webp"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Cancion Animal",artista:"Serú Girán",Id:"cancion04-album-09",img:"..\\Musica\\Fotos\\Álbumes\\Peperina.webp"
,duracion:"3:14",reproducciones:"200"}
],
'album10': [{nombre:"Cancion Animal",artista:"Fito Paez",album:"Cancion Animal",Id:"cancion01-album-10",img:"..\\Musica\\Fotos\\Álbumes\\Giros.jpg"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Cancion Animal",artista:"Fito Paez",album:"Cancion Animal",Id:"cancion02-album-10",img:"..\\Musica\\Fotos\\Álbumes\\Giros.jpg"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Cancion Animal",artista:"Fito Paez",album:"Cancion Animal",Id:"cancion03-album-10",img:"..\\Musica\\Fotos\\Álbumes\\Giros.jpg"
,duracion:"3:14",reproducciones:"200"},
{nombre:"Cancion Animal",artista:"Fito Paez",album:"Cancion Animal",Id:"cancion04-album-10",img:"..\\Musica\\Fotos\\Álbumes\\Giros.jpg"
,duracion:"3:14",reproducciones:"200"}
],
'album11': [{nombre:"Lagrimas De Ayer",artista:"Los Mansaneros santiaguenos",album:"Lagrimas De Ayer",Id:"cancion01-album-11",img:"..\\Musica\\Fotos\\Álbumes\\Eterno Amor.jpg"
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

        console.log('Redirigiendo a:', 'VistaMusicaSonando/thebeatles.html?album=' + encodeURIComponent(album) + '&canciones=' + cancionesParam);
         // Redirige a thebeatles.html en VistaMusicaSonando
         window.location.href = '\\VistaMusicaSonando\\thebeatles.html?album=' + encodeURIComponent(album) + '&canciones=' + cancionesParam;
    } else {
        alert('Álbum no encontrado');
    }
}



