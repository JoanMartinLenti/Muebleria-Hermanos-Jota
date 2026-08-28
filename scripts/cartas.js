import { categorias } from './productos.js';

const contenedorProductos = document.querySelector('.products-grid');

function crearCartaProducto(producto) {
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

function mostrarCartas(productosFiltrados) {
    contenedorProductos.replaceChildren(
        ...productosFiltrados.map((producto) => crearCartaProducto(producto))
    );
}

export { mostrarCartas };