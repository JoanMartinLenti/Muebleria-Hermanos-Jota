const express = require('express');
const router = express.Router();
const productos = require('../data/productos');

// Endpoint GET /api/productos (Devuelve todo el listado)
router.get('/', (req, res) => {
    res.json(productos);
});

// Endpoint GET /api/productos/:id (Filtra por ID y maneja el error 404)
router.get('/:id', (req, res) => {
    const idBuscado = parseInt(req.params.id);
    const productoEncontrado = productos.find(prod => prod.id === idBuscado);

    if (productoEncontrado) {
        res.json(productoEncontrado);
    } else {
        res.status(404).json({ error: "Producto no encontrado" });
    }
});

module.exports = router;