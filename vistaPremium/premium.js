var usuario = JSON.parse(localStorage.getItem("usuario"));
    document.querySelector('.nav-link').textContent = usuario.nombreUsuario;

        //Manejar la redirección cuando se hace clic en un botón de plan
        document.getElementById("planMensual").addEventListener("click", function() {
            redirigirAPagar(1); // 1 representa el plan Mensual
        });

        document.getElementById("planAnual").addEventListener("click", function() {
            redirigirAPagar(2); // 2 representa el plan Anual
        });

        document.getElementById("planInfinito").addEventListener("click", function() {
            redirigirAPagar(3); // 3 representa el plan Infinito
        });

        //Función para redirigir a la página de pago con el plan seleccionado como parámetro
        function redirigirAPagar(planSeleccionado) {
            window.location.href = `Pagar.html?plan=${planSeleccionado}`;
        }

        const btnAvanzar = document.getElementById("btnAvanzar");

        btnAvanzar.addEventListener("click", function(){
        cambiarNombrePlan()
        });