const botonGuardar = document.getElementById("botonGuardar");
const dialogConfirmation = document.getElementById("dialog-confirmation");
const buttonClose = document.querySelector('.btn-close');
const buttonHome = document.querySelector('.btn-home')

botonGuardar.addEventListener('click', (event) => {
    dialogConfirmation.showModal();
})

buttonClose.addEventListener('click', (event) => {
    dialogConfirmation.close();
})

buttonHome.addEventListener('click', (event) =>{
    window.location.href = '..\\VistaPrincipal\\Pagina Principal.html';
})