document.addEventListener("DOMContentLoaded", () => {
    
    const formulario = document.getElementById("miFormulario");
    const mensajeExito = document.getElementById("mensaje-exito");

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        let formularioOk = true;

        const nombre = document.getElementById("nombre");
        const correo = document.getElementById("correo");
        const idCliente = document.getElementById("IdCliente");
        const fecha = document.getElementById("fecha");
        const prioridad = document.getElementById("prioridad");
        const mensaje = document.getElementById("mensaje");

        // --- TRAER LOS CAMPOS DE TEXTO DE ERROR ---
        const errNombre = document.getElementById("error-nombre");
        const errCorreo = document.getElementById("error-correo");
        const errId = document.getElementById("error-id");
        const errFecha = document.getElementById("error-fecha");
        const errPrioridad = document.getElementById("error-prioridad");
        const errMensaje = document.getElementById("error-mensaje");

        const inputs = [nombre, correo, idCliente, fecha, prioridad, mensaje];
        const errores = [errNombre, errCorreo, errId, errFecha, errPrioridad, errMensaje];
        
        for(let i=0; i<inputs.length; i++) {
            inputs[i].classList.remove("input-error");
            errores[i].textContent = "";
        }

        if (nombre.value.trim() === "") {
            nombre.classList.add("input-error");
            errNombre.textContent = "El nombre es obligatorio.";
            formularioOk = false;
        } else if (nombre.value.length < 3) {
            nombre.classList.add("input-error");
            errNombre.textContent = "El nombre debe tener mínimo 3 letras.";
            formularioOk = false;
        }

        if (correo.value.trim() === "") {
            correo.classList.add("input-error");
            errCorreo.textContent = "El correo es obligatorio.";
            formularioOk = false;
        } else if (!correo.value.includes("@") || !correo.value.includes(".")) {
            correo.classList.add("input-error");
            errCorreo.textContent = "El formato de correo no es válido (ej: usuario@web.com).";
            formularioOk = false;
        }

        const valorId = parseInt(idCliente.value);
        if (idCliente.value === "") {
            idCliente.classList.add("input-error");
            errId.textContent = "El número de cliente es obligatorio.";
            formularioOk = false;
        } else if (valorId < 100 || valorId > 999) {
            idCliente.classList.add("input-error");
            errId.textContent = "El ID debe ser un número entre 100 y 999.";
            formularioOk = false;
        }

        if (fecha.value === "") {
            fecha.classList.add("input-error");
            errFecha.textContent = "Debes seleccionar una fecha.";
            formularioOk = false;
        }

        if (prioridad.value === "") {
            prioridad.classList.add("input-error");
            errPrioridad.textContent = "Debes elegir el nivel de prioridad.";
            formularioOk = false;
        }

        if (mensaje.value.trim() === "") {
            mensaje.classList.add("input-error");
            errMensaje.textContent = "Por favor, explica tu problema técnico.";
            formularioOk = false;
        }


        if (formularioOk === true) {
            mensajeExito.textContent = "¡Formulario enviado correctamente al equipo de soporte!";
            mensajeExito.className = "exito";
 
            formulario.reset();
        } else {
            mensajeExito.className = "oculto";
        }

    });
});
