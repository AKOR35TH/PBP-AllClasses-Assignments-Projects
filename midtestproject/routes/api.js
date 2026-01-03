// routes/api.js
const express = require('express');
const router = express.Router();
const { readData } = require('../utils/jsonStore.js'); // CORRIGIDO: Adicionado .js

// Middleware específico para esta rota, se necessário
router.use((req, res, next) => {
    console.log('API Request:', req.path);
    next();
});

// GET api/products
router.get('/products', async (req, res) => {
    try {
        const products = await readData('products.json');
        res.json(products); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Falha ao carregar produtos.' });
    }
});

// GET api/product/1
router.get('/product/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const products = await readData('products.json');
        const product = products.find(p => p.id === id);

        if (product) {
            res.json(product); // RETORNA JSON
        } else {
            res.status(404).json({ error: `Produto com ID ${id} não encontrado.` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Falha ao carregar o produto.' });
    }
});

module.exports = router;