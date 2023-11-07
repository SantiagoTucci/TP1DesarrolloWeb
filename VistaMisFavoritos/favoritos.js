//NOMBRE DE USUARIO
var usuario = JSON.parse(localStorage.getItem("usuario"));
    document.querySelector('.nav-link').textContent = usuario.nombreUsuario;
    
//CERRAR SESION
document.getElementById('cerrarSesion').addEventListener('click', function() {
    //autenticación como 'false' en el localStorage
    localStorage.setItem('estadoCuenta', 'Se cerro sesion');
    // Redirigir a la página de inicio de sesión
    window.location.href = 'index.html';
  }); 
 
    
 /* document.addEventListener('DOMContentLoaded', function() {
    var listaFavoritos = document.getElementById('lista-favoritos');
    var cancionesFavoritas = JSON.parse(localStorage.getItem(usuario.nombreUsuario + "cancionesFavoritas")) || [];

    cancionesFavoritas.forEach(function(cancionId) {
        var li = document.createElement('li');
        li.textContent = cancionId;
        listaFavoritos.appendChild(li);
    });
});*/

var cancionesFavoritas = JSON.parse(localStorage.getItem("dcancionesFavoritas"));
var albumes = JSON.parse(localStorage.getItem("ALBUMES"));

console.log(cancionesFavoritas)
albumes.forEach(function(cancionId){
   //console.log(cancionId);
}
)
console.log(cancionesFavoritas)
for (let index = 0; index < 4; index++) {
    const cancion = albumes[0].canciones[index]
    //console.log(cancion)

};