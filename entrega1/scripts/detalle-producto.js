const parametros = new URLSearchParams(window.location.search);
const nombreSolicitado = parametros.get('producto');
const producto = productos.find((item) => item.nombre === nombreSolicitado)
    || productos.find((item) => item.destacado === true)
    || productos[0];

function formatearPrecio(precio) {
    return typeof precio === 'number'
        ? `$ ${precio.toLocaleString('es-AR')}`
        : precio || 'Consultar precio';
}

const etiquetasEspecificaciones = {
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

function crearEspecificaciones() {
    const lista = document.createElement('div');
    lista.className = 'detail-spec-list';

    Object.entries(producto.especificaciones || {}).forEach(([clave, valor]) => {
        const fila = document.createElement('div');
        fila.className = 'detail-spec-item';
        fila.innerHTML = `
            <span class="detail-spec-label">${etiquetasEspecificaciones[clave] || clave}:</span>
            <span class="detail-spec-value">${valor}</span>`;
        lista.appendChild(fila);
    });

    return lista;
}

function crearContenidoDetalle() {
    const seccion = document.querySelector('.product-detail-layout');
    if (!seccion) return;

    seccion.replaceChildren();
    seccion.innerHTML = `
        <div class="product-detail-gallery">
            <div class="main-product-image">
                <img id="producto-imagen" src="${producto.imagen}" alt="${producto.nombre}">
            </div>
            <div class="thumbnail-row">
                ${[1, 2, 3].map((numero) => `
                    <div class="thumbnail-item${numero === 1 ? ' active' : ''}">
                        <img src="${producto.imagen}" alt="Miniatura ${numero} ${producto.nombre}">
                    </div>`).join('')}
            </div>
        </div>
        <div class="product-detail-info">
            <div>
                <span id="producto-etiqueta" class="badge ${producto.claseEtiqueta || ''}">${producto.etiqueta || ''}</span>
                <h1 id="producto-nombre" style="margin-top: 0.75rem;">${producto.nombre}</h1>
                <span id="producto-categoria" class="product-category">Colección ${producto.categoria} 2026</span>
            </div>
            <div id="producto-precio" class="detail-price">${formatearPrecio(producto.precio)}</div>
            <p id="producto-descripcion">${producto.descripcion}</p>
            <div style="display: flex; gap: 1rem; align-items: center; margin-top: 0.5rem;">
                <div class="form-group" style="width: 100px; margin-bottom: 0;">
                    <label class="form-label" for="cantidad">Cant:</label>
                    <input type="number" id="cantidad" class="form-input text-center" value="1" min="1" max="10">
                </div>
                <button id="agregar-carrito" type="button" class="btn btn-primary" style="flex: 1; height: 50px;">Añadir al Carrito</button>
            </div>
        </div>`;

    seccion.querySelector('.product-detail-info').appendChild(crearEspecificaciones());
}

function crearCartaRelacionado(item) {
    const tarjeta = document.createElement('article');
    tarjeta.className = 'product-card';
    tarjeta.innerHTML = `
        <div class="product-image-box">
            <img src="${item.imagen}" alt="${item.nombre}">
        </div>
        <div class="product-info">
            <span class="product-category">${item.categoria}</span>
            <h3 class="product-title">${item.nombre}</h3>
            <p>${item.descripcion}</p>
            <span class="product-price">${formatearPrecio(item.precio)}</span>
            <div class="product-card-footer">
                <a href="producto.html?producto=${encodeURIComponent(item.nombre)}" class="btn btn-secondary btn-sm btn-full">Ver Detalles</a>
            </div>
        </div>`;
    return tarjeta;
}

function actualizarRelacionados() {
    const contenedor = document.querySelector('.products-section .products-grid');
    if (!contenedor) return;

    const relacionados = productos
        .filter((item) => item.categoria === producto.categoria && item.id !== producto.id)
        .slice(0, 3);

    contenedor.replaceChildren(...relacionados.map(crearCartaRelacionado));
}

document.title = `${producto.nombre} | Hermanos Jota`;
const enlaceCategoria = document.getElementById('categoria');
if (enlaceCategoria) {
    enlaceCategoria.href = `productos.html?categoria=${encodeURIComponent(producto.categoria)}`;
    enlaceCategoria.textContent = producto.categoria;
}
const breadcrumb = document.getElementById('producto-breadcrumb');
if (breadcrumb) breadcrumb.textContent = producto.nombre;
crearContenidoDetalle();
actualizarRelacionados();
