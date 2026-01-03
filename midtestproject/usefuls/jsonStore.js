// utils/jsonStore.js
const fs = require('fs').promises; // Usar Promises para operações assíncronas
const path = require('path');

const basePath = path.join(__dirname, '..', 'data');

/**
 * Lê o conteúdo de um ficheiro JSON
 * @param {string} fileName O nome do ficheiro (ex: 'products.json')
 * @returns {Promise<Array>} O array de dados
 */
async function readData(fileName) {
    const filePath = path.join(basePath, fileName);
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        // Se o ficheiro não existir, retorna um array vazio
        if (error.code === 'ENOENT') {
            return []; 
        }
        throw error;
    }
}

/**
 * Escreve um array para um ficheiro JSON
 * @param {string} fileName O nome do ficheiro (ex: 'products.json')
 * @param {Array} data O array de dados a escrever
 * @returns {Promise<void>}
 */
async function writeData(fileName, data) {
    const filePath = path.join(basePath, fileName);
    const jsonString = JSON.stringify(data, null, 2); // 'null, 2' para formatação (pretty print)
    await fs.writeFile(filePath, jsonString, 'utf-8');
}

module.exports = {
    readData,
    writeData
};