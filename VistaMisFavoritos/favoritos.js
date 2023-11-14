//NOMBRE DE USUARIO
const usuario = JSON.parse(localStorage.getItem("usuario"));
document.querySelector('.nav-link').textContent = usuario.nombreUsuario;

//CERRAR SESION
document.getElementById('cerrarSesion').addEventListener('click', function () {
    //autenticación como 'false' en el localStorage
    localStorage.setItem('estadoCuenta', 'Se cerro sesion');
    // Redirigir a la página de inicio de sesión
    window.location.href = 'index.html';
});


var albumes = JSON.parse(localStorage.getItem("misAlbums"));
const cancionesFav = JSON.parse(localStorage.getItem(usuario.nombreUsuario + "cancionesFav"));
var arraydecanciones = albumes;



function encontrarArtista(array, cancionFav) {
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
function agregarAFavoritos() {
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

function transformaIdenArrayDeCanciones() {
    let cancionesFavoritas = [];
    
    // Verificar si cancionesFav es null o no está definido
    if (cancionesFav !== null && cancionesFav !== undefined) {
        cancionesFav.forEach(cancionFav => {
            albumes.forEach(album => {
                album.canciones.forEach(cancion => {
                    if (cancion.Id === cancionFav) {
                        cancionesFavoritas.push(cancion);
                    }
                });
            });
        });
    } 
    
    return cancionesFavoritas;
    
}


agregarAFavoritos();
actualizarVisibilidadSinCanciones();

function actualizarVisibilidadSinCanciones() {
    const sinotengoElement = document.getElementById("sinotengo");
    const cancionesFav = JSON.parse(localStorage.getItem(`${usuario.nombreUsuario}cancionesFav`)) || [];

    if (cancionesFav.length > 0) {
        sinotengoElement.style.display = "none"; // Oculta el elemento si hay canciones favoritas
    } else {
        sinotengoElement.style.display = "block"; // Muestra el elemento si no hay canciones favoritas
    }
}

function eliminarCancion(idCancion) {
    // Obtiene las canciones favoritas actuales de localStorage
    let cancionesFav = JSON.parse(localStorage.getItem(`${usuario.nombreUsuario}cancionesFav`)) || [];

    // Filtra las canciones para eliminar la que coincide con el idCancion
    const nuevasCancionesFav = cancionesFav.filter(cancion => cancion !== idCancion);

    // Guarda las canciones actualizadas en localStorage
    localStorage.setItem(`${usuario.nombreUsuario}cancionesFav`, JSON.stringify(nuevasCancionesFav));

    // Elimina la canción de la vista
    const cancionParaEliminar = document.getElementById(idCancion);
    if (cancionParaEliminar) {
        cancionParaEliminar.parentElement.parentElement.parentElement.remove();
    } 

}

document.querySelector(".contenedorcancionesfav").addEventListener("click", function (event) {
    if (event.target.classList.contains("star-icon")) {
        const idCancion = event.target.id;
        eliminarCancion(idCancion);
        actualizarVisibilidadSinCanciones();
    }
});


// Si el array de canciones no tiene canciones aparece el msj
/*if (cancionesFav && cancionesFav.length === 0) {
    const sinoHayCanciones = document.querySelector("#siNoTengoCanciones");
    if (sinoHayCanciones) {
        sinoHayCanciones.innerHTML = `<div class="sinotengo"><p id="siNoTengoCanciones">AUN NO TIENES CANCIONES FAVORITAS :( </p></div>`;
    } else {
        sinoHayCanciones.innerHTML = `<div class="sinotengo"><p id="siNoTengoCanciones">AUN NO TIENES CANCIONES FAVORITAS :( </p></div>`;
    }
}*/


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

