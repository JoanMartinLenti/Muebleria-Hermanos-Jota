//Incorporacion de productos y categorias desde productos.js
import { categorias, productos } from './productos.js';
import { mostrarCartas } from './cartas.js';

// Selección de elementos del DOM
const botonesFiltro = document.querySelectorAll('.filter-chip');
const campoBusqueda = document.getElementById('busqueda-productos');

// Categoría y texto de busqueda iniciales
const categoriasDisponibles = new Set([...botonesFiltro].map((boton) => boton.dataset.categoria));
const categoriaSolicitada = new URLSearchParams(window.location.search).get('categoria');
let categoriaSeleccionada = categoriasDisponibles.has(categoriaSolicitada)
    ? categoriaSolicitada
    : 'Todos';
let textoBusqueda = '';

//Funcion para verificar si un producto coincide con la busqueda actual
function coincideConBusqueda(producto) {
    const contenido = [
        producto.nombre,
        producto.descripcion,
        categorias[producto.nombre]
    ].join(' ').toLocaleLowerCase();

    return contenido.includes(textoBusqueda);
}

//Funcion para actualizar las cartas de productos mostradas en la pagina
function actualizarCartas() {
    const productosFiltrados = productos.filter((producto) => {
        const coincideConCategoria = categoriaSeleccionada === 'Todos'
            || categorias[producto.nombre] === categoriaSeleccionada;

        return coincideConCategoria && coincideConBusqueda(producto);
    });

    mostrarCartas(productosFiltrados);
}

//Funcion para seleccionar una categoria y actualizar las cartas de productos
function seleccionarCategoria(categoria) {
    categoriaSeleccionada = categoria;
    const url = new URL(window.location.href);
    if (categoria === 'Todos') {
        url.searchParams.delete('categoria');
    } else {
        url.searchParams.set('categoria', categoria);
    }
    window.history.replaceState({}, '', url);

    botonesFiltro.forEach((boton) => {
        boton.classList.toggle('active', boton.dataset.categoria === categoria);
    });
    actualizarCartas();
}

//Asignacion de eventos a los botones de filtro y al campo de busqueda
botonesFiltro.forEach((boton) => {
    boton.addEventListener('click', () => seleccionarCategoria(boton.dataset.categoria));
});

campoBusqueda?.addEventListener('input', (evento) => {
    textoBusqueda = evento.target.value.trim().toLocaleLowerCase();
    actualizarCartas();
});

// Inicializacion de la pagina con la categoria indicada en la URL
seleccionarCategoria(categoriaSeleccionada);