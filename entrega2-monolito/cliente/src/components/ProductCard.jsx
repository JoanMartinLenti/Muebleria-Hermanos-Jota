import React, { useState } from 'react';

const formatoPrecio = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
});

function ProductCard({ producto, onAgregar, onVerDetalle }){
  const [imagenDisponible, setImagenDisponible] = useState(Boolean(producto.imagen));
  const imagen = producto.imagen
    ? /^https?:\/\//i.test(producto.imagen)
      ? producto.imagen
      : `${process.env.PUBLIC_URL}/${producto.imagen.replace(/^\/+/, '')}`
    : '';

  return (
    <article className="product-card">
      <div className="product-card-image">
        {producto.etiqueta && <span className="product-badge">{producto.etiqueta}</span>}
        {imagenDisponible && imagen ? (
          <img
            src={imagen}
            alt={producto.nombre || 'Mueble de la colección Hermanos Jota'}
            loading="lazy"
            onError={() => setImagenDisponible(false)}
          />
        ) : (
          <div className="product-image-placeholder" aria-hidden="true">
            <svg viewBox="0 0 120 90" fill="none">
              <path d="M19 47V34a9 9 0 0 1 9-9h64a9 9 0 0 1 9 9v13" />
              <path d="M15 48h90v25H15zM23 73v9m74-9v9M15 55h90" />
            </svg>
            <span>Hermanos Jota</span>
          </div>
        )}
      </div>

      <div className="product-card-info">
        <span className="product-category">{producto.categoria || 'Colección'}</span>
        <h3>{producto.nombre || 'Pieza de autor'}</h3>
        <p className="product-description">
           {producto.descripcion && producto.descripcion.length > 0
             ? producto.descripcion
             : 'Sin descripción disponible'}
        </p>
                <button
          type="button"
          className="product-detail-link"
          onClick={() => onVerDetalle(producto)}
        >
          Ver detalle
        </button>
        <div className="product-card-bottom">
          <span className="product-price">
            {Number.isFinite(Number(producto.precio))
              ? formatoPrecio.format(Number(producto.precio))
              : 'Consultar precio'}
          </span>
          <button
            type="button"
            className="product-add-button"
            onClick={() => onAgregar(producto)}
          >
            Agregar al carrito
          </button>        </div>
      </div>
    </article>
  );
}

export default ProductCard;