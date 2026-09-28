const express = require('express');
const cors = require('cors');
const productosRouter = require('./routes/productosRouter');

const app = express();
const PORT = 3000;

// Configuración básica
app.use(cors());
app.use(express.json());

// Conectar las rutas de la API
app.use('/api/productos', productosRouter);

// Levantar el servidor
app.listen(PORT, () => {
    console.log(`¡Servidor corriendo a la perfección en http://localhost:${PORT}!`);
});
