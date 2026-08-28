// Importación de categorías desde productos.js
import { categorias } from './productos.js';

// Selección del contenedor donde se mostrarán las cartas de productos
const contenedorProductos = document.querySelector('.products-grid');

// Función para crear una carta de producto a partir de un objeto producto
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

// Función para mostrar un conjunto de cartas de productos en el contenedor
function mostrarCartas(productosFiltrados) {
    contenedorProductos.replaceChildren(
        ...productosFiltrados.map((producto) => crearCartaProducto(producto))
    );
}

// Exportación de la función mostrarCartas para su uso en otros módulos
export { mostrarCartas };