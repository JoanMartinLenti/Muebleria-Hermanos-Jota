//regex
// Acepta solo letras (con tildes, ñ y espacios) de cualquier idioma
const soloLetras = /^[\p{L}\s]+$/u;

// Acepta correos de cualquier proveedor terminados en .com o .com.ar (ignora mayúsculas)
const verificarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

// Acepta 10 dígitos obligatorios con el prefijo '+54' opcional (ej: +541123456789 o 1123456789)
const verificarNumero = /^(\+54)?\d{10}$/;

const botonEnviar = document.querySelector('#enviarFormulario');
const formulario = document.querySelector('#formularioContacto');

function mostrarModalExito() {
    let modal = document.querySelector('.modal-exito');

    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'modal-exito';
        modal.setAttribute('role', 'alert');
        modal.setAttribute('aria-live', 'assertive');
        modal.innerHTML = `
            <div class="modal-exito-contenido">
                <div class="modal-exito-icono">✓</div>
                <h3>Formulario enviado correctamentee!</h3>
                <p>Gracias por contactarte con Hermanos Jota. En breve te responderemos.</p>
                <button type="button" class="btn btn-primary" id="cerrarModal">Aceptar</button>
            </div>
        `;

        document.body.appendChild(modal);

        const botonCerrar = document.querySelector('#cerrarModal');
        botonCerrar.addEventListener('click', () => {
            modal.classList.remove('show');
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('show');
            }
        });
    }

    modal.classList.add('show');
}

// Se usa 'click' para el botón y se pasa 'event' para evitar recargas
botonEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    const formularioValido = comprobar();

    if (formularioValido) {
        formulario.reset();
        mostrarModalExito();
    }
});

function comprobar() {
    const nombre = document.querySelector("#nombre").value.trim();
    const email = document.querySelector("#email").value.trim();
    const numero = document.querySelector("#telefono").value.trim();
    const tipoConsulta = document.querySelector("#motivo").value;
    const mensaje = document.querySelector("#mensaje").value.trim();
    let formularioValido = true;

    // 1. Validación Nombre
    const errorNombre = document.querySelector("#error-nombre");
    if (!soloLetras.test(nombre)) {
        errorNombre.textContent = "Ingreso un dato incorrecto en su nombre";
        formularioValido = false;
    } else if (nombre.length < 2) {
        errorNombre.textContent = "Ingreso pocas letras para un nombre";
        formularioValido = false;
    } else {
        errorNombre.textContent = ""; // Se limpia si es correcto
    }

    // 2. Validación Email
    const errorEmail = document.querySelector("#error-email");
    if (!verificarEmail.test(email)) {
        errorEmail.textContent = "Ingreso un dato incorrecto en su email";
        formularioValido = false;
    } else {
        errorEmail.textContent = "";
    }

    // 3. Validación Teléfono
    const errorTelefono = document.querySelector("#error-telefono");
    if (numero == "" && !verificarNumero.test(numero)) {
        errorTelefono.textContent = "Formato esperado: +54 seguido de 10 dígitos";
        formularioValido = false;
    } else {
        errorTelefono.textContent = "";
    }

    // 4. Validación Motivo
    const errorMotivo = document.querySelector("#error-motivo");
    if (tipoConsulta === "") {
        errorMotivo.textContent = "No seleccionó un motivo válido";
        formularioValido = false;
    } else {
        errorMotivo.textContent = "";
    }

    // 5. Validación Mensaje
    const errorDeMensaje = document.querySelector("#error-de-mensaje");
    if (mensaje.length < 20) {
        errorDeMensaje.textContent = "El mensaje es muy corto (mínimo 20 caracteres)";
        formularioValido = false;
    } else {
        errorDeMensaje.textContent = ""; // Se limpia si es correcto
    }

    return formularioValido;
}