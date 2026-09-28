import React from 'react';

const Footer = () => {
  return (
    <>
      <style>{`
        .hj-footer {
          background-color: #20140e;
          color: #d6cac0;
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
          padding-top: 64px;
          border-top: 4px solid #a0522d;
        }
        .hj-footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .hj-footer-grid {
          display: grid;
          grid-template-columns: 2fr 1.2fr 1.2fr 1.6fr;
          gap: 40px;
          padding-bottom: 56px;
        }
        .hj-footer-brand-title {
          color: #f7f2ec;
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin: 0 0 16px 0;
        }
        .hj-footer-desc {
          color: #b5a498;
          font-size: 0.95rem;
          line-height: 1.7;
          margin: 0;
          max-width: 320px;
        }
        .hj-footer-col-title {
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin: 0 0 20px 0;
          position: relative;
          display: inline-block;
        }
        .hj-footer-col-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 28px;
          height: 2px;
          background-color: #a0522d;
        }
        .hj-footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .hj-footer-list a {
          color: #b5a498;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }
        .hj-footer-list a:hover {
          color: #df9b77;
          transform: translateX(3px);
        }
        .hj-footer-contact-item {
          color: #b5a498;
          font-size: 0.9rem;
          line-height: 1.6;
        }
        .hj-footer-contact-label {
          color: #e5dbd2;
          font-weight: 600;
          display: block;
        }
        .hj-footer-bottom {
          border-top: 1px solid #36251b;
          padding: 24px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 0.85rem;
          color: #8c796e;
        }
        .hj-footer-tagline {
          color: #b5a498;
          font-style: italic;
        }
        @media (max-width: 960px) {
          .hj-footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
        }
        @media (max-width: 580px) {
          .hj-footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .hj-footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      <footer className="hj-footer">
        <div className="hj-footer-container">
          <div className="hj-footer-grid">
            {/* Columna 1: Identidad */}
            <div>
              <h2 className="hj-footer-brand-title">HERMANOS JOTA</h2>
              <p className="hj-footer-desc">
                Mueblería de autor comprometida con el diseño responsable, la calidad noble y la tradición artesanal.
              </p>
            </div>

            {/* Columna 2: Navegación */}
            <div>
              <h3 className="hj-footer-col-title">Navegación</h3>
              <ul className="hj-footer-list">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#catalogo">Catálogo Completo</a></li>
                <li><a href="#destacado">Producto Destacado</a></li>
                <li><a href="#showroom-contacto">Showroom & Contacto</a></li>
              </ul>
            </div>

            {/* Columna 3: Categorías */}
            <div>
              <h3 className="hj-footer-col-title">Categorías</h3>
              <ul className="hj-footer-list">
                <li><a href="#living-sillones">Living & Sillones</a></li>
                <li><a href="#comedor-mesas">Comedor & Mesas</a></li>
                <li><a href="#dormitorio">Dormitorio</a></li>
                <li><a href="#espacios-trabajo">Espacios de Trabajo</a></li>
              </ul>
            </div>

            {/* Columna 4: Atención */}
            <div>
              <h3 className="hj-footer-col-title">Atención</h3>
              <ul className="hj-footer-list">
                <li className="hj-footer-contact-item">
                  <span className="hj-footer-contact-label">Dirección:</span>
                  Av. San Juan 2847, CABA
                </li>
                <li className="hj-footer-contact-item">
                  <span className="hj-footer-contact-label">Email:</span>
                  <a href="mailto:info@hermanosjota.com">info@hermanosjota.com</a>
                </li>
                <li className="hj-footer-contact-item">
                  <span className="hj-footer-contact-label">Teléfono:</span>
                  <a href="tel:+541145678900">+54 11 4567-8900</a>
                </li>
                <li className="hj-footer-contact-item">
                  <span className="hj-footer-contact-label">Horarios:</span>
                  Lun a Vie: 10:00 a 19:00 | Sab: 10:00 a 14:00
                </li>
              </ul>
            </div>
          </div>

          {/* Franja Inferior de Copyright */}
          <div className="hj-footer-bottom">
            <span>© 2026 Mueblería Hermanos Jota. Todos los derechos reservados.</span>
            <span className="hj-footer-tagline">Diseño y Ebanistería Responsable.</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;