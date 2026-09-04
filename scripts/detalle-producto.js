// Importación de productos y categorías desde productos.js
import { productos, categorias } from './productos.js';

// Obtención del producto solicitado desde la URL
const nombreSolicitado = new URLSearchParams(window.location.search).get('producto');
const producto = productos.find((item) => item.nombre === nombreSolicitado) || productos[0];
const especificaciones = producto.especificaciones;
const imagenProducto = `imagenes/${producto.nombre}.png`;

// Función para actualizar el texto de un elemento por su ID
function actualizarTexto(id, texto) {
    const elemento = document.getElementById(id);
    if (elemento && texto) elemento.textContent = texto;
}

// Función para actualizar la imagen de un elemento por su ID
function actualizarImagen(id, textoAlternativo) {
    const imagen = document.getElementById(id);
    if (!imagen) return;
    imagen.src = imagenProducto;
    imagen.alt = textoAlternativo;
}

// Función para actualizar la lista de especificaciones del producto
function actualizarEspecificaciones() {
    const lista = document.querySelector('.detail-spec-list');
    if (!lista) return;

    const nombres = {
        medidas: 'Dimensiones',
        materiales: 'Materiales',
        acabado: 'Acabado',
        regulacion: 'Regulación',
        certificacion: 'Certificación',
        almacenamiento: 'Almacenamiento',
        cables: 'Cables',
        apilables: 'Apilables',
        incluye: 'Incluye',
        capacidad: 'Capacidad',
        extension: 'Extensión',
        estructura: 'Estructura',
        tapizado: 'Tapizado',
        relleno: 'Relleno',
        sostenibilidad: 'Sostenibilidad',
        caracteristicas: 'Características',
        peso: 'Peso',
        cargaMaxima: 'Carga máxima',
        modulares: 'Modulares',
        rotacion: 'Rotación',
        garantia: 'Garantía',
        confort: 'Confort'
    };

    lista.replaceChildren(...Object.entries(especificaciones).map(([clave, valor]) => {
        const item = document.createElement('div');
        item.className = 'detail-spec-item';
        item.innerHTML = `<span class="detail-spec-label">${nombres[clave] || clave}:</span>
            <span class="detail-spec-value">${valor}</span>`;
        return item;
    }));
}

// Función para actualizar todos los detalles del producto en la página
function actualizarDetalle() {
    document.title = `${producto.nombre} | Hermanos Jota`;
    const enlaceCategoria = document.getElementById('categoria');
    if (enlaceCategoria) {
        const categoria = categorias[producto.nombre];
        enlaceCategoria.href = `productos.html?categoria=${encodeURIComponent(categoria)}`;
        enlaceCategoria.textContent = categoria;
    }

    actualizarTexto('producto-breadcrumb', producto.nombre);
    actualizarTexto('producto-nombre', producto.nombre);
    actualizarTexto('producto-categoria', `Colección ${categorias[producto.nombre]} 2026`);
    actualizarTexto('producto-precio', producto.precio || 'Consultar precio');
    actualizarTexto('producto-descripcion', producto.descripcion);

    actualizarImagen('producto-imagen', `Vista principal ${producto.nombre}`);
    actualizarEspecificaciones();

    document.querySelectorAll('.thumbnail-item img').forEach((imagen, indice) => {
        imagen.src = imagenProducto;
        imagen.alt = `Miniatura ${indice + 1} ${producto.nombre}`;
    });
}

// Inicialización de la página con los detalles del producto
actualizarDetalle();
