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
            alert(`Hiciste clic en el álbum con ID ${albumId}`);
        });
    });
});