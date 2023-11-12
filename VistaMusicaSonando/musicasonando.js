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




  // Obtén las canciones de la URL
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var albumParam = urlParams.get('album');
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
          {nombre:"Un Millon De Años Luz",artista:"Soda Stereo",album:"Cancion Animal",Id:"cancion02-album-02",img:"..\\Musica\\Fotos\\Álbumes\\Canción Animal.jpg"
          ,duracion:"3:14",reproducciones:"200"},
          {nombre:"Musica Ligera",artista:"Soda Stereo",album:"Cancion Animal",Id:"cancion03-album-02",img:"..\\Musica\\Fotos\\Álbumes\\Canción Animal.jpg"
          ,duracion:"3:14",reproducciones:"200"},
          {nombre:"Cae el sol",artista:"Soda Stereo",album:"Cancion Animal",Id:"cancion04-album-02",img:"..\\Musica\\Fotos\\Álbumes\\Canción Animal.jpg"
          ,duracion:"3:14",reproducciones:"200"},
      ],
      'album3': [
          {nombre:"Artud",artista:"Pescado Rabioso",album:"Artaud",Id:"cancion01-album-03",img:"..\\Musica\\Fotos\\Álbumes\\Artaud.jpg"
          ,duracion:"3:14",reproducciones:"200"},
          {nombre:"Bajan",artista:"Pescado Rabioso",album:"Artaud",Id:"cancion02-album-03",img:"..\\Musica\\Fotos\\Álbumes\\Artaud.jpg"
          ,duracion:"3:14",reproducciones:"200"},
          {nombre:"La sed verdadera",artista:"Pescado Rabioso",album:"Artaud",Id:"cancion03-album-03",img:"..\\Musica\\Fotos\\Álbumes\\Artaud.jpg"
          ,duracion:"3:14",reproducciones:"200"},
          {nombre:"Cantata de puentes amarillos",artista:"Pescado Rabioso",album:"Artaud",Id:"cancion04-album-03",img:"..\\Musica\\Fotos\\Álbumes\\Artaud.jpg"
          ,duracion:"3:14",reproducciones:"300"},
      ],
      'album4': [
        {nombre:"Locura",artista:"Virus",album:"Locura",Id:"cancion01-album-04",img:"..\\Musica\\Fotos\\Álbumes\\Locura"
        ,duracion:"3:14",reproducciones:"2070"},
        {nombre:"Tomo lo que encuentro",artista:"Virus",album:"Locura",Id:"cancion02-album-04",img:"..\\Musica\\Fotos\\Álbumes\\Locura"
        ,duracion:"3:14",reproducciones:"2008"},
        {nombre:"Destino circular",artista:"Virus",album:"Locura",Id:"cancion03-album-04",img:"..\\Musica\\Fotos\\Álbumes\\Locura"
        ,duracion:"3:14",reproducciones:"2020"},
        {nombre:"Luna de miel en la mano",artista:"Virus",album:"Locura",Id:"cancion04-album-04",img:"..\\Musica\\Fotos\\Álbumes\\Locura"
        ,duracion:"3:14",reproducciones:"2010"},
    ],
      'album5': [{nombre:"Fuerza Natural",artista:"Gustavo Cerati",album:"Fuerza Natural",Id:"cancion01-album-05",img:"..\\Musica\\Fotos\\Álbumes\\Fuerza Natural.jpg"
      ,duracion:"3:14",reproducciones:"200"},
      {nombre:"Magia",artista:"Gustavo Cerati",album:"Fuerza Natural",Id:"cancion02-album-05",img:"..\\Musica\\Fotos\\Álbumes\\Fuerza Natural.jpg"
      ,duracion:"3:14",reproducciones:"200"},
      {nombre:"Amor sin rodeos",artista:"Gustavo Cerati",album:"Fuerza Natural",Id:"cancion03-album-05",img:"..\\Musica\\Fotos\\Álbumes\\Fuerza Natural.jpg"
      ,duracion:"3:14",reproducciones:"200"},
      {nombre:"Deja vu",artista:"Gustavo Cerati",album:"Fuerza Natural",Id:"cancion04-album-05",img:"..\\Musica\\Fotos\\Álbumes\\Fuerza Natural.jpg"
      ,duracion:"3:14",reproducciones:"200"}
    ],
    'album6': [{nombre:"Nevermind",artista:"Nirvana ",album:"Nevermind",Id:"cancion01-album-06",img:"..\\Musica\\Fotos\\Álbumes\\Nevermind.jpg"
    ,duracion:"3:14",reproducciones:"200"},
    {nombre:"Polly",artista:"Nirvana",album:"Nevermind",Id:"cancion02-album-06",img:"..\\Musica\\Fotos\\Álbumes\\Nevermind.jpg"
    ,duracion:"3:14",reproducciones:"200"},
    {nombre:"Come as you ar",artista:"Nirvana",album:"Nevermind",Id:"cancion03-album-06",img:"..\\Musica\\Fotos\\Álbumes\\Nevermind.jpg"
    ,duracion:"3:14",reproducciones:"200"},
    {nombre:"something in the way",artista:"Nirvana",album:"Nevermind",Id:"cancion04-album-06",img:"..\\Musica\\Fotos\\Álbumes\\Nevermind.jpg"
    ,duracion:"3:14",reproducciones:"200"}
  ],
  'album7': [
    {nombre:"Raro",artista:"Cuarteto de Nos",album:"Raro",Id:"cancion01-album-07",img:"..\\Musica\\Fotos\\Álbumes\\Raro.jpg"
  ,duracion:"3:14",reproducciones:"200"},
  {nombre:"Me hace bien, me hace mal",artista:"Cuarteto de Noss",album:"Raro",Id:"cancion02-album-07",img:"..\\Musica\\Fotos\\Álbumes\\Raro.jpg"
  ,duracion:"3:14",reproducciones:"200"},
  {nombre:"Nada es gratis en la vida",artista:"Cuarteto de Nos",album:"Raro",Id:"cancion03-album-07",img:"..\\Musica\\Fotos\\Álbumes\\Raro.jpg"
  ,duracion:"3:14",reproducciones:"200"},
  {nombre:"Asi soy yo ",artista:"Cuarteto de Nos",album:"Raro",Id:"cancion04-album-07",img:"..\\Musica\\Fotos\\Álbumes\\Raro.jpg"
  ,duracion:"3:14",reproducciones:"200"}
  ],
  'album8': [{nombre:"Whenever You Need Somebody",artista:"Rick Astley",album:"Whenever You Need Somebody",Id:"cancion01-album-08",img:"..\\Musica\\Fotos\\Álbumes\\Never Gonna Give You Up.jpg"
  ,duracion:"3:14",reproducciones:"200"},
  {nombre:"togheder forever",artista:"Rick Astley",album:"Whenever You Need Somebody",Id:"cancion02-album-08",img:"..\\Musica\\Fotos\\Álbumes\\Never Gonna Give You Up.jpg"
  ,duracion:"3:14",reproducciones:"200"},
  {nombre:"The love has gone",artista:"Rick Astley",album:"Whenever You Need Somebody",Id:"cancion03-album-08",img:"..\\Musica\\Fotos\\Álbumes\\Never Gonna Give You Up.jpg"
  ,duracion:"3:14",reproducciones:"200"},
  {nombre:"Whenay foll in love",artista:"Rick Astley",album:"Whenever You Need Somebody",Id:"cancion04-album-08",img:"..\\Musica\\Fotos\\Álbumes\\Never Gonna Give You Up.jpg"
  ,duracion:"3:14",reproducciones:"200"}
  ],
  'album9': [{nombre:"Peperina",artista:"Serú Girán",album:"Peperina",Id:"cancion01-album-09",img:"..\\Musica\\Fotos\\Álbumes\\Peperina.webp"
  ,duracion:"3:14",reproducciones:"200"},
  {nombre:"Lo que dice la lluvia",artista:"Serú Girán",album:"Peperina",Id:"cancion02-album-09",img:"..\\Musica\\Fotos\\Álbumes\\Peperina.webp"
  ,duracion:"3:14",reproducciones:"200"},
  {nombre:"Esperando nacer",artista:"Serú Girán",album:"Peperina",Id:"cancion03-album-09",img:"..\\Musica\\Fotos\\Álbumes\\Peperina.webp"
  ,duracion:"3:14",reproducciones:"200"},
  {nombre:"En la vereda del sol",artista:"Serú Girán",album:"Peperina",Id:"cancion04-album-09",img:"..\\Musica\\Fotos\\Álbumes\\Peperina.webp"
  ,duracion:"3:14",reproducciones:"200"}
  ],
  'album10': [{nombre:"Giros",artista:"Fito Paez",album:"Giros",Id:"cancion01-album-10",img:"..\\Musica\\Fotos\\Álbumes\\Giros.jpg"
  ,duracion:"3:14",reproducciones:"200"},
  {nombre:"Taquicardia",artista:"Fito Paez",album:"Giros",Id:"cancion02-album-10",img:"..\\Musica\\Fotos\\Álbumes\\Giros.jpg"
  ,duracion:"3:14",reproducciones:"200"},
  {nombre:"Yo vengo a ofrecer mi corazon",artista:"Fito Paez",album:"Giros",Id:"cancion03-album-10",img:"..\\Musica\\Fotos\\Álbumes\\Giros.jpg"
  ,duracion:"3:14",reproducciones:"200"},
  {nombre:"Alguna vez voy a ser libre",artista:"Fito Paez",album:"Giros",Id:"cancion04-album-10",img:"..\\Musica\\Fotos\\Álbumes\\Giros.jpg"
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
  



  // Verifica si el álbum existe
   if (albumParam && albums.hasOwnProperty(albumParam)) {
      var canciones = albums[albumParam];
      // Muestra las canciones en el contenedor
      canciones.forEach(function (cancion, index) {
          agregarCancion(cancion, index + 1);
      });
  } else {
      alert('Álbum no encontrado');
  }
  

 function agregarCancion(cancion) {
      const contenedorcanciones = document.querySelector(".contenedorcancionesfav");
      
      etiquetaCancionDOM= `
      <div class="cancion1">  
          <div class="espacio">
              <img src="..\\VistaMisFavoritos\\006-tocar.png" alt="" class="imagen-boton" id="${cancion.Id}">
          </div>
          <div class="nombre-cancion">
              <div class="album-container" id="${cancion.Id}">
                  <img src="${cancion.img}" class="imagen-cancion" alt="">
                  <img src="..\\Musica\\Fotos\\Estrella.avif" alt="Estrella" class="star-icon" id="${cancion.Id}" />
              </div>
              <div class="textos">
                  <link class="nombre"> <a href="">${cancion.nombre}</a></link>
                  <p class="artist-name">${cancion.artista}</p>
              </div>
          </div>
          <div class="album">
              <p>${cancion.album}</p>
          </div>
          <div class="duracion">
              <p>${cancion.duracion}</p>
          </div>
          <div class="reproduccion">${cancion.reproducciones}</div>
      `;
  
      // Agrega el contenedor de la canción al contenedor de canciones
  
      contenedorcanciones.innerHTML += etiquetaCancionDOM;
      agregarImagen(canciones); 
    } 

   

    function agregarImagen(canciones) {
        const contenedorDelPrincipio = document.querySelector(".principio");
            var albumInfo = canciones[0]; // Suponiendo que tomas la información del primer elemento del array de canciones
            // Crea la estructura HTML de la imagen y el título
            var etiquetaImagenPrincipio = `
                <img src="${albumInfo.img}" class="imagen" alt="">
                <div class="titulo">
                    <h1 class="main-title">${albumInfo.album}</h1>
                </div>
            `;
    
            // Agrega la estructura al contenedor
            contenedorDelPrincipio.innerHTML = etiquetaImagenPrincipio;
        } 
    
    
    
    
    
    
    
    
    
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


