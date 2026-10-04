import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import CartPanel from './components/CartPanel';
import ContactForm from './components/ContactForm';
import ProductDetail from './components/ProductDetail';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api/productos';

function App() {
  const [productos, setProductos] = useState([]);
  const [estado, setEstado] = useState('cargando');
  const [error, setError] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todos');
  const [intento, setIntento] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function cargarProductos() {
      setEstado('cargando');
      setError('');

      try {
        const respuesta = await fetch(API_URL, { signal: controller.signal });
        if (!respuesta.ok) {
          throw new Error(`El servidor respondió con el estado ${respuesta.status}.`);
        }

        const datos = await respuesta.json();
        if (!Array.isArray(datos)) {
          throw new Error('La respuesta de la API no tiene el formato esperado.');
        }

        setProductos(datos);
        setEstado('exito');
      } catch (fetchError) {
        if (fetchError.name === 'AbortError') return;
        setError(fetchError.message || 'No se pudo conectar con el servidor.');
        setEstado('error');
      }
    }

    cargarProductos();
    return () => controller.abort();
  }, [intento]);

  const categorias = useMemo(
    () => ['Todos', ...new Set(productos.map((producto) => producto.categoria).filter(Boolean))],
    [productos]
  );

  const productosFiltrados = useMemo(() => {
    const termino = busqueda.trim().toLocaleLowerCase('es');
    return productos.filter((producto) => {
      const coincideCategoria = categoria === 'Todos' || producto.categoria === categoria;
      const textoProducto = `${producto.nombre || ''} ${producto.descripcion || ''} ${producto.categoria || ''}`;
      return coincideCategoria && textoProducto.toLocaleLowerCase('es').includes(termino);
    });
  }, [busqueda, categoria, productos]);

  const reintentar = useCallback(() => setIntento((valor) => valor + 1), []);

  const agregarAlCarrito = useCallback((producto) => {
    setCarrito((prev) => {
      const existente = prev.find((item) => item.id === producto.id);
      if (existente) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  }, []);

  const cantidadTotal = useMemo(
    () => carrito.reduce((total, item) => total + item.cantidad, 0),
    [carrito]
  );

  const totalPrecio = useMemo(
    () => carrito.reduce((total, item) => total + (Number(item.precio) || 0) * item.cantidad, 0),
    [carrito]
  );

  const cambiarCantidad = useCallback((id, delta) => {
    setCarrito((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, cantidad: item.cantidad + delta } : item))
        .filter((item) => item.cantidad > 0)
    );
  }, []);

  const quitarDelCarrito = useCallback((id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const abrirCarrito = useCallback(() => setCarritoAbierto(true), []);
  const cerrarCarrito = useCallback(() => setCarritoAbierto(false), []);

  const verDetalle = useCallback((producto) => {
    setProductoSeleccionado(producto);
    window.scrollTo({ top: 0 });
  }, []);

  const volverAlCatalogo = useCallback(() => setProductoSeleccionado(null), []);

  return (
    <div className="App">
      <Navbar cartCount={cantidadTotal} onCartClick={abrirCarrito} />
      <CartPanel
        abierto={carritoAbierto}
        carrito={carrito}
        total={totalPrecio}
        onCerrar={cerrarCarrito}
        onCambiarCantidad={cambiarCantidad}
        onQuitar={quitarDelCarrito}
      />
      <main className="catalog-page" id="catalogo">
        {productoSeleccionado ? (
          <ProductDetail
            producto={productoSeleccionado}
            onVolver={volverAlCatalogo}
            onAgregar={agregarAlCarrito}
          />
        ) : (
          <>
            <section className="catalog-intro" aria-labelledby="catalog-title">
              <p className="catalog-eyebrow">Muebles de autor · Hechos para durar</p>
              <h1 id="catalog-title">Una casa con historia</h1>
              <p className="catalog-description">
                Diseños honestos, materiales nobles y piezas creadas para acompañarte todos los días.
              </p>
            </section>

            <section className="catalog-content" aria-label="Catálogo de productos">
              <div className="catalog-toolbar">
                <div className="catalog-heading">
                  <p className="catalog-eyebrow">Nuestra colección</p>
                  <h2>Elegí tu próxima pieza</h2>
                </div>
                <label className="catalog-search">
                  <span className="sr-only">Buscar productos</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m16 16 4 4" />
                  </svg>
                  <input
                    type="search"
                    value={busqueda}
                    onChange={(evento) => setBusqueda(evento.target.value)}
                    placeholder="Buscar muebles..."
                  />
                </label>
              </div>

              {estado === 'exito' && (
                <>
                  <div className="category-filters" aria-label="Filtrar por categoría">
                    {categorias.map((opcion) => (
                      <button
                        className={`category-filter${categoria === opcion ? ' is-active' : ''}`}
                        key={opcion}
                        onClick={() => setCategoria(opcion)}
                        type="button"
                        aria-pressed={categoria === opcion}
                      >
                        {opcion}
                      </button>
                    ))}
                  </div>
                  <p className="catalog-count" aria-live="polite">
                    {productosFiltrados.length} {productosFiltrados.length === 1 ? 'pieza' : 'piezas'}
                  </p>
                </>
              )}

              <ProductList
                productos={productosFiltrados}
                estado={estado}
                error={error}
                onReintentar={reintentar}
                onAgregar={agregarAlCarrito}
                onVerDetalle={verDetalle}
              />
            </section>
          </>
        )}
      </main>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;