//NOMBRE DE USUARIO
const usuario = JSON.parse(localStorage.getItem("usuario"));
document.querySelector('.nav-link').textContent = usuario.nombreUsuario;
    
//CERRAR SESION
document.getElementById('cerrarSesion').addEventListener('click', function() {
    //autenticación como 'false' en el localStorage
    localStorage.setItem('estadoCuenta', 'Se cerro sesion');
    // Redirigir a la página de inicio de sesión
    window.location.href = 'index.html';
  }); 
 
  
  var albumes = JSON.parse(localStorage.getItem( "misAlbums"));
  const cancionesFav = JSON.parse(localStorage.getItem(usuario.nombreUsuario + "cancionesFav"));
  var arraydecanciones = albumes;
  


function encontrarArtista(array, cancionFav){
    for (let index = 0; index < array.length; index++) {
        if (array[index].Id === cancionFav) {
            return array[index].artista;
        }
    }
    return null; // Manejar el caso en el que no se encuentra el artista
}
function encontrarImagenCancion(array, cancionFav) {
    for (let index = 0; index < array.length; index++) {
        if (array[index].Id == cancionFav) {
            return array[index].img;
        }
    }
    return null; // Manejar el caso en el que no se encuentra la canción
}
function encontrarNombreCancion(array, cancionFav) {
    for (let index = 0; index < array.length; index++) {
        if (array[index].Id == cancionFav) {
            return array[index].nombre;
        }
    }
    return null; // Manejar el caso en el que no se encuentra la canción
}

function encontrarAlbum(array, cancionFav) {
    for (let index = 0; index < array.length; index++) {
        if (array[index].Id == cancionFav) {
            return array[index].album;
        }
    }
    return null; // Manejar el caso en el que no se encuentra la canción
}

function encontrarId(array, cancionFav) {
    for (let index = 0; index < array.length; index++) {
        if (array[index].Id == cancionFav) {
            return array[index].Id;
        }
    }
    return null; // Manejar el caso en el que no se encuentra la canción
}







canciones = transformaIdenArrayDeCanciones();
function agregarAFavoritos(){
    if (cancionesFav) {
        // crea la cancion si se marco como favorita
        const contenedorcanciones = document.querySelector(".contenedorcancionesfav") 
        
        cancionesFav.forEach(cancionFav => {
            const nombreCancion = encontrarNombreCancion(canciones, cancionFav);
            const nombreArtista = encontrarArtista(canciones, cancionFav);
            const nombreAlbum = encontrarAlbum(canciones, cancionFav);
            const imagenCancion = encontrarImagenCancion(canciones, cancionFav);
            const idCancion = encontrarId(canciones, cancionFav);
            if (nombreCancion) {
                const contenedorcanciones = document.querySelector(".contenedorcancionesfav");
                const etiquetaCancionDOM = `
                    <div class="cancion1">
                        <div class="espacio">
                            <img src="..\\VistaMisFavoritos\\006-tocar.png" alt="" class="imagen-boton">
                        </div>
                        <div class="nombre-cancion">
                            <div class="album-container" >
                                <img src="${imagenCancion}" class="imagen-cancion" alt="">
                                <img src="..\\VistaMisFavoritos\\estrella.png" alt="Estrella" class="star-icon" id="${idCancion}" />
                            </div>
                            <div class="textos">
                                <link class="nombre"><a href="">${nombreCancion}</a></link>
                                <p class="artist-name">${nombreArtista}</p>
                            </div>
                        </div>
                        <div class="album"><p>${nombreAlbum}</p></div>
                        <div class="duracion"> <p> 4:06 </p></div>
                        <div class="reproduccion">6000</div>
                    </div>
                `;
                contenedorcanciones.innerHTML += etiquetaCancionDOM;
            }
        });
    
       
    
}
  
};

function transformaIdenArrayDeCanciones(){
let cancionesFavoritas = [];
cancionesFav.forEach(cancionFav  => {
  albumes.forEach(album => {
    album.canciones.forEach(cancion => {
      if (cancion.Id === cancionFav) {
        cancionesFavoritas.push(cancion);
      }
    });
  });
}); return cancionesFavoritas}


agregarAFavoritos();



    function eliminarCancion(idCancion) {
    // Elimina la canción del localStorage
    const nuevasCancionesFav = cancionesFav.filter(cancion => cancion !== idCancion);
    localStorage.setItem(`${usuario.nombreUsuario}cancionesFav`, JSON.stringify(nuevasCancionesFav));

    // Elimina la canción de la vista
    const cancionParaEliminar = document.getElementById(idCancion);
    if (cancionParaEliminar) {
        cancionParaEliminar.parentElement.parentElement.parentElement.remove();

        
    }

    // Si no hay más canciones favoritas, muestra el mensaje
    if (nuevasCancionesFav.length === 0) {
        const sinoHayCanciones = document.querySelector("#siNoTengoCanciones");
        sinoHayCanciones.innerHTML = `<div class="sinotengo"><p id="siNoTengoCanciones">AUN NO TIENES CANCIONES FAVORITAS :( </p></div>`;
    }
}


document.querySelector(".contenedorcancionesfav").addEventListener("click", function(event) {
    if (event.target.classList.contains("star-icon")) {
        const idCancion = event.target.id;
        eliminarCancion(idCancion);
    }
});
    
    
   // Si el array de canciones no tiene canciones aparece el msj
if (cancionesFav.length==0) {
    const sinoHayCanciones=document.querySelector("#siNoTengoCanciones")

    sinoHayCanciones.innerHTML=`<div class="sinotengo"><p id="siNoTengoCanciones">AUN NO TIENES CANCIONES FAVORITAS :( </p></div>`

} 