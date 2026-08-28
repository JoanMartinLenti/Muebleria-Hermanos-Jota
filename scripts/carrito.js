// Importación de productos desde productos.js
import { productos } from './productos.js';

// Claves y duración para el almacenamiento del carrito en localStorage
const CLAVE_CARRITO = 'hermanos-jota-carrito';
const CLAVE_EXPIRACION = 'hermanos-jota-carrito-expira';
const DURACION_CARRITO = 20_000;
let temporizadorVaciado;

// Función para obtener el carrito desde localStorage, devolviendo un arreglo vacío si no existe o si hay un error
function obtenerCarrito() {
    try {
        return JSON.parse(localStorage.getItem(CLAVE_CARRITO)) || [];
    } catch {
        return [];
    }
}

// Función para actualizar los contadores de productos en el carrito en la interfaz
function actualizarContadores() {
    const cantidadTotal = obtenerCarrito()
        .reduce((total, item) => total + item.cantidad, 0);

    document.querySelectorAll('.cart-count').forEach((contador) => {
        contador.textContent = cantidadTotal > 99 ? '99+' : cantidadTotal;
        contador.parentElement.setAttribute('aria-label', `Carrito de compras: ${cantidadTotal} productos`);
    });
}

// Función para vaciar el carrito y eliminar la expiración del mismo
function vaciarCarrito() {
    localStorage.removeItem(CLAVE_CARRITO);
    localStorage.removeItem(CLAVE_EXPIRACION);
    actualizarContadores();
}

// Función para programar el vaciado del carrito cuando expire el tiempo
function programarVaciado() {
    const expiracion = Number(localStorage.getItem(CLAVE_EXPIRACION));
    const tiempoRestante = expiracion - Date.now();

    window.clearTimeout(temporizadorVaciado);

    if (tiempoRestante <= 0) {
        vaciarCarrito();
        return;
    }

    temporizadorVaciado = window.setTimeout(vaciarCarrito, tiempoRestante);
}

// Función para agregar un producto al carrito, actualizando la cantidad si ya existe
function agregarAlCarrito(nombre, cantidad) {
    const producto = productos.find((item) => item.nombre === nombre);
    if (!producto) return;

    const carrito = obtenerCarrito();
    const productoExistente = carrito.find((item) => item.nombre === nombre);
    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        carrito.push({ nombre: producto.nombre, precio: producto.precio, cantidad });
    }

    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
    localStorage.setItem(CLAVE_EXPIRACION, Date.now() + DURACION_CARRITO);
    actualizarContadores();
    programarVaciado();
}

// Selección del botón de agregar al carrito y asignación del evento de clic
const botonAgregar = document.getElementById('agregar-carrito');
if (botonAgregar) {
    botonAgregar.addEventListener('click', () => {
        const nombre = new URLSearchParams(window.location.search).get('producto') || 'Sillón Copacabana';
        const entradaCantidad = document.getElementById('cantidad');
        const cantidad = Math.max(1, Number(entradaCantidad?.value) || 1);
        agregarAlCarrito(nombre, cantidad);
        window.alert(`${cantidad} ${cantidad === 1 ? 'unidad' : 'unidades'} de ${nombre} añadida${cantidad === 1 ? '' : 's'} al carrito.`);
        botonAgregar.textContent = 'Añadido al carrito';
        window.setTimeout(() => {
            botonAgregar.textContent = 'Añadir al Carrito';
        }, 1500);
    });
}

// Inicialización de los contadores y programación del vaciado del carrito al cargar la página
actualizarContadores();
programarVaciado();

// Exportación de funciones para su uso en otros módulos
export { agregarAlCarrito, obtenerCarrito, vaciarCarrito };
