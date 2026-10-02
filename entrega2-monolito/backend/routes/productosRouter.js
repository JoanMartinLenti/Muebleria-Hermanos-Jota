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

router.delete('/:id', (req, res, next) => {
    try {
        const idProducto = req.params.id;

        console.log(`Producto con ID ${idProducto} marcado para eliminación`);

        res.status(200).json({
            success: true,
            mensaje: `Producto con ID ${idProducto} eliminado correctamente`
        });
    } catch (error) {
        next(error);
    }
});

router.post('/', (req, res, next) => {
    try {
        const nuevoProducto = req.body; 

        console.log('Producto recibido para guardar:', nuevoProducto);

        res.status(201).json({
            success: true,
            mensaje: 'Producto creado correctamente',
            data: nuevoProducto
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;