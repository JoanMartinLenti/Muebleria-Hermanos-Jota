const express = require('express');
const cors = require('cors');
const productosRouter = require('./routes/productosRouter');

const app = express();
const PORT = 3000;

// Configuración básica
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] Método: ${req.method} - URL: ${req.url}`);
    next();
});
// Conectar las rutas de la API
app.use('/api/productos', productosRouter);

// Levantar el servidor
app.listen(PORT, () => {
    console.log(`¡Servidor corriendo a la perfección en http://localhost:${PORT}!`);
});



app.use((err, req, res, next) => {
    console.error('Error capturado:', err.stack);

    const statusCode = err.statusCode || 500;
    
    res.status(statusCode).json({
        success: false,
        error: {
            message: err.message || 'Error interno del servidor',
            status: statusCode
        }
    });
});

app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        error: 'Ruta no encontrada (404)'
    });
});
