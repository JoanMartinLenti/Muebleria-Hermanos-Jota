import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar cartCount={0} />
      <main style={{ padding: '40px 20px', minHeight: '60vh', textAlign: 'center' }}>
        <h2>Contenido Principal / Catálogo</h2>
        <p>Próximamente aquí se conectará la API del backend.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
