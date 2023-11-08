 //NOMBRE DE USUARIO
var usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosLista"));
var user = JSON.parse(localStorage.getItem("usuario"));
document.querySelector('.nav-link').textContent = user.nombreUsuario;

//CERRAR SESION
document.getElementById('cerrarSesion').addEventListener('click', function() {
//autenticación como 'false' en el localStorage
localStorage.setItem('estadoCuenta', 'Se cerro sesion');
// Redirigir a la página de inicio de sesión
window.location.href = 'index.html';
}); 

//MARCAR CANCIONES COMO FAVORITAS 

var cancionesFavoritas = JSON.parse(localStorage.getItem(user.nombreUsuario + "cancionesFav")) || [];
  
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

            localStorage.setItem(user.nombreUsuario + "cancionesFav", JSON.stringify(cancionesFavoritas));
      });
  }); 

var cancionesuser = JSON.parse(localStorage.getItem(user.nombreUsuario + "cancionesFav"));
console.log(cancionesuser)
  const estrella = document.querySelectorAll(".star-icon")
  

// al hacer click en una estrella agrega la cancion a el array de cancionesFav en el usuario

/*Array.from(estrella).forEach(function (estrella) {
    estrella.addEventListener("click", function (event) {
        event.preventDefault(); // Prevenir la acción predeterminada del evento
        event.stopPropagation(); // Detiene la propagación del evento
            estrella.style.filter = 'invert(71%) sepia(99%) saturate(1350%) hue-rotate(358deg) brightness(103%) contrast(105%)';

            for (const user of usuariosRegistrados) {
                const Cancion = this.id
                let cancionesFav = user.cancionesFav
                const contieneCancion = cancionesFav.some((cancionbuscada) => cancionbuscada === Cancion)
                if (contieneCancion) {
                    const indiceCancion = cancionesFav.indexOf(Cancion)
                    cancionesFav.splice(indiceCancion, 1)
                    estrella.style.filter = 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(100deg) brightness(115%) contrast(106%)';
                } else {
                    cancionesFav.push(Cancion);
                }
            
        }

        localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));


    })

})

for (const user of usuariosRegistrados) {
    const cancionesFav = user.cancionesFav
    estrella.forEach(element => {
        
        if (cancionesFav.includes(element.id)) {
          console.log(element.id);
          estrella.style.filter = 'invert(71%) sepia(99%) saturate(1350%) hue-rotate(358deg) brightness(103%) contrast(105%)'; 
          
      }

    });

}*/