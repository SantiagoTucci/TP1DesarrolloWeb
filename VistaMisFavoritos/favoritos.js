//NOMBRE DE USUARIO
const usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosLista"));
const usuario = JSON.parse(localStorage.getItem("usuario"));
document.querySelector('.nav-link').textContent = usuario.nombreUsuario;
    
//CERRAR SESION
document.getElementById('cerrarSesion').addEventListener('click', function() {
    //autenticación como 'false' en el localStorage
    localStorage.setItem('estadoCuenta', 'Se cerro sesion');
    // Redirigir a la página de inicio de sesión
    window.location.href = 'index.html';
  }); 
 

  var albumes = JSON.parse(localStorage.getItem( "ALBUMES"));
  var arraydecanciones = albumes.canciones;


function buscarEnArrayDeAlbums (cancionId){
    let nuevaCancion;
for (let index = 0; index < arraydecanciones.length; index++) {
      if(arraydecanciones[index].Id == cancionId){
            nuevaCancion = arraydecanciones[index];  
      };        
} return nuevaCancion;
};

function transformarElArrayEnObjeto(array){
    let nuevasCanciones = [];
    for (let index = 0; index < array.length; index++) {
       nuevasCanciones[index] = buscarEnArrayDeAlbums(array[index]);
      
    } return nuevasCanciones;
}




const listaCancionesFav = JSON.parse(localStorage.getItem(usuario.nombreUsuario + "cancionesFav"));
let canciones = transformarElArrayEnObjeto(listaCancionesFav);

function agregarAFavoritos(){
    if (canciones) {

        // agrega a la vista favoritos tadas las canciones que contenga el array de canciones que este dentro del objeto Album cuyo nombre coincida 
        const contenedorcanciones = document.querySelector(".cancion1") 
        const espacio=document.querySelector(".espacio") 
        const nombreCancion=document.querySelector(".nombre-cancion") 
        const album=document.querySelector(".album") 
        const duracion=document.querySelector(".duracion")
        const reproduccion=document.querySelector(".reproduccion") 
        
        
        listaCancionesFav.forEach(element => {
            const etiquetaCancionDOM=`<div class="album-container" id=>
            <img src="..\\Musica\\Fotos\\Álbumes\\Abbey Road.jpg" class="imagen-cancion" alt="">
            <img class="star-icon" src="..\\Musica\\Fotos\\Estrella.avif" id="" alt="">
            <div class="textos">
            <link> <a href=""> ${element}</a></link>
            <p class="artist-name">${canciones.artista}</p>
            </div>
           </div>`
           const etiquetaIconoDOM=`<div class="espacio"> <img class="imagen-boton" src="..\\VistaMisFavoritos\\006-tocar.png" alt="">
           </div>`
           const etiquetaTiempo=`<div class="duracion"> <p> 4:23 </p></div>`
           const etiquetareproduccion=`<div class="reproducciones">9854</div>`

           nombreCancion.innerHTML+=etiquetaCancionDOM
           espacio.innerHTML+=etiquetaIconoDOM
            duracion.innerHTML+=etiquetaTiempo
            reproduccion.innerHTML+=etiquetareproduccion
    })
    
       
    
}
  
};
  
agregarAFavoritos();



        
        if (listaCancionesFav.length==0) {
            const sinoHayCanciones=document.querySelector("#siNoTengoCanciones")
    
            sinoHayCanciones.innerHTML=`<div class="sinotengo"><p id="siNoTengoCanciones">AUN NO TIENES CANCIONES FAVORITAS :( </p></div>`
        
    }