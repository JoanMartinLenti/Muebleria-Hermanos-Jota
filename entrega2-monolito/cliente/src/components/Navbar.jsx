import React from 'react';
const BrandLogo = ({ size = 42 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 375 375"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block', flexShrink: 0 }}
    aria-hidden="true"
  >
    <path
      fill="#a0522d"
      fillRule="nonzero"
      d="M 81.761719 56.289062 C 97.613281 56.09375 111.03125 59.242188 123.601562 69.511719 C 132.210938 76.542969 137.816406 85.394531 141.054688 95.859375 C 150.960938 127.890625 129.519531 153.992188 112.828125 178.769531 C 106.621094 187.980469 100.703125 198.835938 96.023438 208.941406 C 85.546875 231.570312 81.878906 257.195312 81.992188 281.957031 C 82.007812 285.515625 81.640625 290.785156 81.976562 294.140625 C 82.894531 293.539062 82.773438 288.183594 82.882812 286.847656 C 84.347656 269.105469 86.5 251.609375 91.707031 234.539062 C 102.332031 199.6875 124.945312 163.789062 161.832031 153.042969 C 186.789062 145.769531 214.273438 154.238281 228.175781 176.800781 C 231.535156 182.257812 233.347656 187.464844 235.03125 193.574219 C 234.582031 186.453125 234.902344 177.292969 234.914062 170.054688 L 234.886719 126.816406 C 237.597656 126.859375 240.40625 126.828125 243.121094 126.789062 C 260 126.542969 277.015625 127.085938 293.882812 126.714844 C 294.328125 148.71875 294.058594 172 294.117188 194.042969 C 294.160156 208.101562 294.660156 222.539062 293.007812 236.527344 C 287.84375 280.289062 250.972656 318.035156 205.859375 318.628906 C 204.527344 318.648438 197.40625 318.945312 196.6875 318.808594 C 197 318.140625 201.027344 317.664062 202.019531 317.523438 C 212.242188 316.105469 222.292969 308.0625 227.832031 299.671875 C 237.324219 285.042969 234.597656 265.511719 234.800781 248.8125 C 234.957031 235.902344 234.589844 222.902344 234.800781 209.957031 C 230.992188 209.753906 225.9375 209.890625 222.042969 209.886719 L 198.445312 209.878906 C 179.558594 209.875 159.800781 209.609375 140.988281 209.984375 C 140.765625 213.203125 140.945312 218.308594 140.945312 221.664062 L 140.839844 242.613281 L 140.757812 318.621094 C 121.578125 318.289062 100.597656 318.449219 81.375 318.660156 C 81.273438 314.933594 81.308594 311.191406 81.304688 307.464844 C 81.292969 290.152344 81.328125 272.851562 81.375 255.535156 L 81.253906 195.191406 L 81.25 98.660156 C 81.253906 85.453125 81.164062 72.242188 81.132812 59.035156 C 81.128906 57.832031 81.027344 57.078125 81.761719 56.289062 Z"
    />
    <path
      fill="#a0522d"
      fillRule="nonzero"
      d="M 191.210938 247.757812 C 208.808594 246.558594 224.074219 259.789062 225.382812 277.378906 C 226.691406 294.96875 213.550781 310.316406 195.96875 311.730469 C 178.234375 313.15625 162.730469 299.878906 161.410156 282.136719 C 160.089844 264.394531 173.464844 248.972656 191.210938 247.757812 Z"
    />
    <path
      fill="#a0522d"
      fillRule="nonzero"
      d="M 260.191406 56.328125 C 276.953125 54.339844 292.132812 66.371094 294.027344 83.140625 C 295.921875 99.914062 283.808594 115.027344 267.023438 116.828125 C 250.371094 118.617188 235.402344 106.617188 233.523438 89.976562 C 231.644531 73.335938 243.558594 58.300781 260.191406 56.328125 Z"
    />
  </svg>
);

const Navbar = ({ cartCount = 0, logoSrc }) => {
  return (
    <>
      <style>{`
        .hj-navbar {
          background-color: #faf7f2;
          border-bottom: 1px solid #e7ded4;
          position: sticky;
          top: 0;
          z-index: 1000;
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
          color: #2c1a12;
        }
        .hj-nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .hj-brand-link {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          color: inherit;
        }
        .hj-brand-title {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #2d1810;
          text-transform: uppercase;
          margin: 0;
        }
        .hj-nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .hj-nav-item a {
          text-decoration: none;
          color: #5c473c;
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          transition: color 0.2s ease;
        }
        .hj-nav-item a:hover {
          color: #a0522d;
        }
        .hj-cart-button {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: #2d1810;
          padding: 8px 16px;
          border-radius: 999px;
          background-color: #f0e7dc;
          transition: all 0.2s ease;
        }
        .hj-cart-button:hover {
          background-color: #e5d8cb;
          color: #a0522d;
        }
        .hj-cart-badge {
          background-color: #a0522d;
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 700;
          min-width: 20px;
          height: 20px;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 6px;
        }
        @media (max-width: 768px) {
          .hj-nav-links {
            gap: 16px;
          }
          .hj-brand-title {
            font-size: 1rem;
          }
        }
      `}</style>

      <header className="hj-navbar">
        <div className="hj-nav-container">
          {/* Logo y Nombre de Marca */}
          <a href="/" className="hj-brand-link" aria-label="Hermanos Jota - Inicio">
            {logoSrc ? (
              <img
                src={logoSrc}
                alt="Logotipo Hermanos Jota"
                style={{ width: '42px', height: '42px', objectFit: 'contain' }}
              />
            ) : (
              <BrandLogo size={42} />
            )}
            <h1 className="hj-brand-title">HERMANOS JOTA</h1>
          </a>

          {/* Enlaces de Navegación */}
          <nav aria-label="Navegación principal">
            <ul className="hj-nav-links">
              <li className="hj-nav-item"><a href="#inicio">Inicio</a></li>
              <li className="hj-nav-item"><a href="#catalogo">Catálogo</a></li>
              <li className="hj-nav-item"><a href="#destacado">Destacado</a></li>
              <li className="hj-nav-item"><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>

          {/* Carrito con Contador Dinámico */}
          <a href="#carrito" className="hj-cart-button" aria-label={`Carrito de compras con ${cartCount} productos`}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Carrito</span>
            <span className="hj-cart-badge">{cartCount}</span>
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;