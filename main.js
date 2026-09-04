document.addEventListener("DOMContentLoaded", () => {
    // 1. Identificamos los contenedores en el HTML
    const contenedorDestacados = document.getElementById("contenedor-destacados");
    const contenedorProductos = document.getElementById("contenedor-productos");

    // 2. Función general para pintar las tarjetas en pantalla
    function renderizarProductos(lista, contenedor) {
        if (!contenedor) return; // Si no estamos en esa página, no hace nada
        
        contenedor.innerHTML = ""; // Vaciamos el contenedor por las dudas

        lista.forEach(producto => {
            const article = document.createElement("article");
            article.className = "product-card";

            article.innerHTML = `
                <div class="product-image-box">
                    <span class="badge ${producto.claseEtiqueta} product-badge-pos">${producto.etiqueta}</span>
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                </div>
                <div class="product-info">
                    <span class="product-category">${producto.categoria}</span>
                    <h3 class="product-title">${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <span class="product-price">$ ${producto.precio.toLocaleString('es-AR')}</span>
                    <div class="product-card-footer">
                        <a href="producto.html" class="btn btn-secondary btn-sm btn-full">Ver Detalles</a>
                    </div>
                </div>
            `;

            contenedor.appendChild(article);
        });
    }

    // 3. Lógica para el index.html (solo los destacados)
    if (contenedorDestacados) {
        const destacados = productos.filter(p => p.destacado);
        renderizarProductos(destacados, contenedorDestacados);
    }

    // 4. Lógica para el productos.html (todos los productos)
    if (contenedorProductos) {
        renderizarProductos(productos, contenedorProductos);
    }
    // 5. Lógica para el buscador (Bonus funcional)
    const inputBuscador = document.getElementById("buscador-productos");
    if (inputBuscador && contenedorProductos) {
        inputBuscador.addEventListener("input", (e) => {
            const textoBusqueda = e.target.value.toLowerCase();
            const productosFiltrados = productos.filter(producto => 
                producto.nombre.toLowerCase().includes(textoBusqueda) ||
                producto.descripcion.toLowerCase().includes(textoBusqueda)
            );
            renderizarProductos(productosFiltrados, contenedorProductos);
        });
    }
});
