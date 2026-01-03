// server.js
const express = require('express');
const webRoutes = require('./routes/web.js'); // CORRIGIDO: Adicionado .js
const apiRoutes = require('./routes/api.js'); // CORRIGIDO: Adicionado .js
const app = express();
const PORT = 3000;

// Middleware para processar JSON (necessário para rotas POST/PUT/DELETE)
app.use(express.json()); 

// 1. ROTAS DO WEBSITE PÚBLICO
app.use('/', webRoutes);

// 2. ROTAS REST API
app.use('/api', apiRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor Express a correr em http://localhost:${PORT}`);
    console.log(`Website: http://localhost:${PORT}/products`);
    console.log(`API:     http://localhost:${PORT}/api/products`);
});