// routes/web.js
const express = require('express');
const router = express.Router();
const { readData } = require('../utils/jsonStore.js'); // CORRIGIDO: Adicionado .js

// Rota inicial
router.get('/', (req, res) => {
    res.send('<h1>Bem-vindo à Loja Simples!</h1><p>Visite /products ou /product/1</p>');
});

// GET /products (Lista simples)
router.get('/products', async (req, res) => {
    try {
        const products = await readData('products.json');
        const listItems = products.map(p => `<li>ID: ${p.id} - ${p.name} (${p.price}€)</li>`).join('');
        res.send(`<h2>Lista de Produtos</h2><ul>${listItems}</ul>`); // RETORNA HTML
    } catch (error) {
        console.error(error);
        res.status(500).send('<h1>Erro ao carregar lista.</h1>');
    }
});

// GET /product/1 (Detalhe do produto)
router.get('/product/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const products = await readData('products.json');
        const product = products.find(p => p.id === id);

        if (product) {
            res.send(`
                <h1>Detalhe do Produto - ${product.name}</h1>
                <p>ID: ${product.id}</p>
                <p>Preço: ${product.price}€</p>
                <a href="/products">Voltar à lista</a>
            `); // RETORNA HTML
        } else {
            res.status(404).send(`<h1>Produto com ID ${id} não encontrado.</h1><a href="/products">Ver lista.</a>`);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('<h1>Erro ao carregar o detalhe do produto.</h1>');
    }
});

module.exports = router;