import { productos, categorias } from './productos.js';

const contenedorProductos = document.querySelector('.products-grid');
const botonesFiltro = document.querySelectorAll('.filter-chip');
const categoriasValidas = ['Todos', ...new Set(Object.values(categorias))];

function crearTarjetaProducto(producto) {
    const tarjeta = document.createElement('article');
    tarjeta.className = 'product-card';
    tarjeta.innerHTML = `
        <div class="product-image-box">
            <img src="imagenes/${producto.nombre}.png" alt="${producto.nombre}">
        </div>
        <div class="product-info">
            <span class="product-category">${categorias[producto.nombre]}</span>
            <h2 class="product-title">${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <div class="product-card-footer">
                <a href="producto.html?producto=${encodeURIComponent(producto.nombre)}" class="btn btn-secondary btn-sm btn-full">Ver Producto</a>
            </div>
        </div>`;
    return tarjeta;
}

function renderizarProductos(filtro = 'Todos') {
    const productosFiltrados = filtro === 'Todos'
        ? productos
        : productos.filter((producto) => categorias[producto.nombre] === filtro);

    contenedorProductos.replaceChildren(
        ...productosFiltrados.map((producto) => crearTarjetaProducto(producto))
    );
}

function filtrarProductos(categoria) {
    renderizarProductos(categoria);
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
}

botonesFiltro.forEach((boton) => {
    boton.addEventListener('click', () => filtrarProductos(boton.dataset.categoria));
});

const categoriaSolicitada = new URLSearchParams(window.location.search).get('categoria');
const categoriaInicial = categoriasValidas.includes(categoriaSolicitada) ? categoriaSolicitada : 'Todos';
filtrarProductos(categoriaInicial);