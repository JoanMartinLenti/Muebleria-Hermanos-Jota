import { categorias, productos } from './productos.js';
import { mostrarCartas } from './cartas.js';

const botonesFiltro = document.querySelectorAll('.filter-chip');
const campoBusqueda = document.getElementById('busqueda-productos');
let categoriaSeleccionada = 'Todos';
let textoBusqueda = '';

function coincideConBusqueda(producto) {
    const contenido = [
        producto.nombre,
        producto.descripcion,
        categorias[producto.nombre]
    ].join(' ').toLocaleLowerCase();

    return contenido.includes(textoBusqueda);
}

function actualizarCartas() {
    const productosFiltrados = productos.filter((producto) => {
        const coincideConCategoria = categoriaSeleccionada === 'Todos'
            || categorias[producto.nombre] === categoriaSeleccionada;

        return coincideConCategoria && coincideConBusqueda(producto);
    });

    mostrarCartas(productosFiltrados);
}

function seleccionarCategoria(categoria) {
    categoriaSeleccionada = categoria;
    botonesFiltro.forEach((boton) => {
        boton.classList.toggle('active', boton.dataset.categoria === categoria);
    });
    actualizarCartas();
}

botonesFiltro.forEach((boton) => {
    boton.addEventListener('click', () => seleccionarCategoria(boton.dataset.categoria));
});

campoBusqueda?.addEventListener('input', (evento) => {
    textoBusqueda = evento.target.value.trim().toLocaleLowerCase();
    actualizarCartas();
});

actualizarCartas();