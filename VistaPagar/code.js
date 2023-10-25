const form = document.getElementById("form");

const numero = document.getElementById("campoTarjeta");
const vencimiento = document.getElementById("campoVencimiento");
const cvc = document.getElementById("campoContrasenia");
const nombre = document.getElementById("campoNombreApellido");

const btnAtras = document.getElementById("btnAtras");
const btnPagar = document.getElementById("btnPagar");

form.addEventListener("submit", e=>{
    e.preventDefault()
    if(nombre.value.length < 6) {
        alert("Nombre muy corto")
    }
});