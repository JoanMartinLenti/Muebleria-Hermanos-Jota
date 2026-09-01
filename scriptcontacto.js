//regex
// Acepta solo letras (con tildes, ñ y espacios) de cualquier idioma
const soloLetras = /^[\p{L}\s]+$/u;

// Acepta correos de gmail, outlook o hotmail terminados en .com o .com.ar (ignora mayúsculas)
const verificarEmail = /^[^\s@]+@(gmail|outlook|hotmail)(\.com|\.com\.ar)$/i;

// Acepta 10 dígitos obligatorios con el prefijo '+54' opcional (ej: +541123456789 o 1123456789)
const verificarNumero = /^(\+54)?\d{10}$/;

const botonEnviar = document.querySelector('#enviarFormulario');

// Se usa 'click' para el botón y se pasa 'event' para evitar recargas
botonEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    comprobar();
});

function comprobar() {
    const nombre = document.querySelector("#nombre").value.trim();
    const email = document.querySelector("#email").value.trim();
    const numero = document.querySelector("#telefono").value.trim();
    const tipoConsulta = document.querySelector("#motivo").value;
    const mensaje = document.querySelector("#mensaje").value.trim();

    // 1. Validación Nombre
    const errorNombre = document.querySelector("#error-nombre");
    if (!soloLetras.test(nombre)) {
        errorNombre.textContent = "Ingreso un dato incorrecto en su nombre";
    } else if (nombre.length < 3) {
        errorNombre.textContent = "Ingreso pocas letras para un nombre";
    } else {
        errorNombre.textContent = ""; // Se limpia si es correcto
    }

    // 2. Validación Email
    const errorEmail = document.querySelector("#error-email");
    if (!verificarEmail.test(email)) {
        errorEmail.textContent = "Ingreso un dato incorrecto en su email";
    } else {
        errorEmail.textContent = "";
    }

    // 3. Validación Teléfono
    const errorTelefono = document.querySelector("#error-telefono");
    if (!verificarNumero.test(numero)) {
        errorTelefono.textContent = "Formato esperado: +54 seguido de 10 dígitos";
    } else {
        errorTelefono.textContent = "";
    }

    // 4. Validación Motivo
    const errorMotivo = document.querySelector("#error-motivo");
    if (tipoConsulta === "") {
        errorMotivo.textContent = "No seleccionó un motivo válido";
    } else {
        errorMotivo.textContent = "";
    }

    // 5. Validación Mensaje
    const errorDeMensaje = document.querySelector("#error-de-mensaje");
    if (mensaje.length < 20) {
        errorDeMensaje.textContent = "El mensaje es muy corto (mínimo 20 caracteres)";
    } else {
        errorDeMensaje.textContent = ""; // Se limpia si es correcto
    }
}