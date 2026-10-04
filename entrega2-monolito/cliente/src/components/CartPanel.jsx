import React, { useEffect } from 'react';

const formatoPrecio = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
});

function CartPanel({ abierto, carrito, total, onCerrar, onCambiarCantidad, onQuitar }) {
  useEffect(() => {
    if (!abierto) return;
    const manejarTecla = (evento) => {
      if (evento.key === 'Escape') onCerrar();
    };
    document.addEventListener('keydown', manejarTecla);
    return () => document.removeEventListener('keydown', manejarTecla);
  }, [abierto, onCerrar]);

  if (!abierto) return null;

  return (
    <>
      <div className="cart-overlay" onClick={onCerrar} />
      <aside className="cart-panel" role="dialog" aria-modal="true" aria-label="Carrito de compras">
        <div className="cart-header">
          <h2>Tu carrito</h2>
          <button type="button" className="cart-close" onClick={onCerrar} aria-label="Cerrar carrito">
            ×
          </button>
        </div>

        {carrito.length === 0 ? (
          <p className="cart-empty">Tu carrito está vacío.</p>
        ) : (
          <>
            <ul className="cart-items">
              {carrito.map((item) => (
                <li className="cart-item" key={item.id}>
                  <div className="cart-item-info">
                    <strong>{item.nombre || 'Pieza de autor'}</strong>
                    <span>{formatoPrecio.format(Number(item.precio) || 0)}</span>
                  </div>
                  <div className="cart-item-controls">
                    <button type="button" onClick={() => onCambiarCantidad(item.id, -1)} aria-label="Restar una unidad">−</button>
                    <span>{item.cantidad}</span>
                    <button type="button" onClick={() => onCambiarCantidad(item.id, 1)} aria-label="Sumar una unidad">+</button>
                    <button type="button" className="cart-remove" onClick={() => onQuitar(item.id)}>Quitar</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-footer">
              <span>Total</span>
              <strong>{formatoPrecio.format(total)}</strong>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export default CartPanel;