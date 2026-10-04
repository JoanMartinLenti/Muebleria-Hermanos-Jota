import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ productos, estado, error, onReintentar, onAgregar, onVerDetalle }) {
  if (estado === 'cargando') {
    return (
      <div className="product-grid" aria-label="Cargando catálogo" aria-busy="true">
        {Array.from({ length: 6 }, (_, indice) => (
          <div className="product-skeleton" key={indice}>
            <div className="skeleton-image" />
            <div className="skeleton-line skeleton-line-short" />
            <div className="skeleton-line" />
            <div className="skeleton-line skeleton-line-medium" />
          </div>
        ))}
      </div>
    );
  }

  if (estado === 'error') {
    return (
      <div className="catalog-message catalog-error" role="alert">
        <span className="catalog-message-icon" aria-hidden="true">!</span>
        <h3>No pudimos cargar el catálogo</h3>
        <p>{error || 'Verificá que el servidor esté funcionando e intentá nuevamente.'}</p>
        <button className="retry-button" onClick={onReintentar} type="button">
          Reintentar
        </button>
      </div>
    );
  }

  if (productos.length === 0) {
    return (
      <div className="catalog-message">
        <h3>No encontramos piezas con esa búsqueda</h3>
        <p>Probá con otro nombre o elegí una categoría diferente.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          producto={producto}
          onAgregar={onAgregar}
          onVerDetalle={onVerDetalle}
        />
      ))}
    </div>
  );
}

export default ProductList;