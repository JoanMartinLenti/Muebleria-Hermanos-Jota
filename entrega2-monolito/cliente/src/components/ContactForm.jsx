import React, { useState } from 'react';

const estadoInicial = {
  nombre: '',
  email: '',
  telefono: '',
  motivo: '',
  mensaje: '',
};

function ContactForm() {
  const [form, setForm] = useState(estadoInicial);
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (evento) => {
    const { name, value } = evento.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrores((prev) => ({ ...prev, [name]: '' }));
    setEnviado(false);
  };

  const validar = () => {
    const nuevos = {};
    if (form.nombre.trim().length < 2) {
      nuevos.nombre = 'Ingresá tu nombre.';
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nuevos.email = 'Email inválido.';
    }
    if (form.telefono.trim() && !/^[+\d\s()-]{8,}$/.test(form.telefono)) {
      nuevos.telefono = 'Teléfono inválido.';
    }
    if (!form.motivo) {
      nuevos.motivo = 'Elegí una opción.';
    }
    if (form.mensaje.trim().length < 10) {
      nuevos.mensaje = 'Mínimo 10 caracteres.';
    }
    return nuevos;
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    const nuevos = validar();
    setErrores(nuevos);
    if (Object.keys(nuevos).length > 0) return;

    console.log('Formulario enviado:', form);
    setEnviado(true);
    setForm(estadoInicial);
  };

  return (
    <section className="contact-section" id="contacto" aria-labelledby="contact-title">
      <header className="contact-heading">
        <p className="catalog-eyebrow">Estamos a tu disposición</p>
        <h2 id="contact-title">Visitanos o escribinos</h2>
        <p className="contact-intro">
          Te invitamos a conocer nuestros materiales nobles, probar las piezas en persona
          o solicitar un diseño a medida.
        </p>
      </header>

      <div className="contact-layout">
        <div className="contact-card">
          <h3>Envianos un mensaje</h3>

          <form onSubmit={handleSubmit} noValidate>
            <div className="contact-field">
              <div className="contact-row-tag">
                <label htmlFor="nombre">Nombre completo *</label>
                {errores.nombre && <span className="contact-error" role="alert">{errores.nombre}</span>}
              </div>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Ej. Clara Méndez"
              />
            </div>

            <div className="contact-field">
              <div className="contact-row-tag">
                <label htmlFor="email">Correo electrónico *</label>
                {errores.email && <span className="contact-error" role="alert">{errores.email}</span>}
              </div>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="nombre@correo.com"
              />
            </div>

            <div className="contact-field">
              <div className="contact-row-tag">
                <label htmlFor="telefono">Teléfono / WhatsApp</label>
                {errores.telefono && <span className="contact-error" role="alert">{errores.telefono}</span>}
              </div>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                value={form.telefono}
                onChange={handleChange}
                placeholder="+54 11 0000-0000"
              />
            </div>

            <div className="contact-field">
              <div className="contact-row-tag">
                <label htmlFor="motivo">Tipo de consulta *</label>
                {errores.motivo && <span className="contact-error" role="alert">{errores.motivo}</span>}
              </div>
              <select id="motivo" name="motivo" value={form.motivo} onChange={handleChange}>
                <option value="" disabled>Seleccioná una opción</option>
                <option value="producto">Consulta sobre un modelo específico</option>
                <option value="a-medida">Proyecto a medida / Interiorismo</option>
                <option value="visita">Agendar visita al showroom</option>
                <option value="envios">Envíos y plazos de entrega</option>
                <option value="otro">Otras consultas</option>
              </select>
            </div>

            <div className="contact-field">
              <div className="contact-row-tag">
                <label htmlFor="mensaje">Tu mensaje *</label>
                {errores.mensaje && <span className="contact-error" role="alert">{errores.mensaje}</span>}
              </div>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Contanos en detalle sobre tu espacio, medidas o consultas..."
              />
            </div>

            <button type="submit" className="contact-submit">Enviar mensaje</button>

            {enviado && (
              <p className="contact-success" role="status">
                ¡Gracias! Recibimos tu mensaje y te respondemos pronto.
              </p>
            )}
          </form>
        </div>

        <div className="contact-card contact-card-soft">
          <h3>Información del showroom</h3>

          <div className="contact-info-item">
            <span className="contact-icon-box" aria-hidden="true">📍</span>
            <div>
              <h4>Showroom principal</h4>
              <p>Av. San Juan 2847, Barrio de San Cristóbal, CABA, Argentina.</p>
            </div>
          </div>

          <div className="contact-info-item">
            <span className="contact-icon-box" aria-hidden="true">🕒</span>
            <div>
              <h4>Horarios de atención</h4>
              <p>Lunes a viernes: 10:00 a 19:00 hs.<br />Sábados: 10:00 a 14:00 hs.</p>
            </div>
          </div>

          <div className="contact-info-item">
            <span className="contact-icon-box" aria-hidden="true">✉️</span>
            <div>
              <h4>Correo electrónico</h4>
              <p>info@hermanosjota.com<br />ventas@hermanosjota.com.ar</p>
            </div>
          </div>

          <div className="contact-info-item">
            <span className="contact-icon-box" aria-hidden="true">📞</span>
            <div>
              <h4>WhatsApp</h4>
              <p>+54 11 4567-8900</p>
            </div>
          </div>

          <a
            className="contact-social"
            href="https://instagram.com/hermanosjota_ba"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;