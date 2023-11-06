var usuario = JSON.parse(localStorage.getItem("usuario"));
    document.querySelector('.nav-link').textContent = usuario.nombreUsuario;

