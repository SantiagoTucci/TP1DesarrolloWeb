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




const cancionesFav = JSON.parse(localStorage.getItem(usuario.nombreUsuario + "cancionesFav"));
let canciones = transformarElArrayEnObjeto(cancionesFav);

function encontrarArtista(array){
    let element;
for (let index = 0; index < array.length; index++) {
     element = array[index].artista;
    
} return element

}

function encontrarNombreCancion(array){
    let element;
    
for (let index = 0; index < array.length; index++) {
    console.log(array[index].id)
    if(array[index].id == array[index]){
     element = array[index].nombre;
    }
} return element
    
}


function agregarAFavoritos(){
    if (canciones) {

        // crea la cancion si se marco como favorita
        const contenedorcanciones = document.querySelector(".contenedorcancionesfav") 
        
        cancionesFav.forEach(element => {
            const etiquetaCancionDOM=
            `<div class="cancion1">

            <div class="espacio">
                <img src="..\\VistaMisFavoritos\\006-tocar.png" alt="" class="imagen-boton">
                </div>

            <div class="nombre-cancion">
                <div class="album-container" >
                    <img src="..\\Musica\\Fotos\\Álbumes\\Abbey Road.jpg" class="imagen-cancion" alt="">
                    <img src="" alt="Estrella" class="star-icon"  />
                </div>

                <div class="textos">
                    <link class="nombre"> <a href="">${element} </a></link>
                    <p class="artist-name">${encontrarArtista(canciones)}</p>
                </div>
            </div>

           <div class="album"><p>Abbey Road</p></div>
           <div class="duracion"> <p> 4:06 </p></div>
          <div class="reproduccion">6000</div>
        </div>`
            
          
     

           contenedorcanciones.innerHTML+=etiquetaCancionDOM
          
    })
    
       
    
}
  
};
  
agregarAFavoritos();



        // Si el array de canciones no tiene canciones aparece el msj
        if (cancionesFav.length==0) {
            const sinoHayCanciones=document.querySelector("#siNoTengoCanciones")
    
            sinoHayCanciones.innerHTML=`<div class="sinotengo"><p id="siNoTengoCanciones">AUN NO TIENES CANCIONES FAVORITAS :( </p></div>`
        
    }