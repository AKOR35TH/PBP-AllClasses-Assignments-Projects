//-- Aprendendo data validation e error handling em JavaScript
const express = require('express');
const { body, validationResult } = require('express-validator');
const joi = require('joi');

const app = express();
const port = 3000;

app.use(express.json());

// --- EXPRESS-VALIDATOR SETUP ---
const validationInput = [
    body('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
    body('email').isEmail().withMessage('Invalid email format'),
];

// --- JOI SETUP ---
const validateinputjoi = (req, res, next) => {
    const schema = joi.object({
        username: joi.string().min(5).required().messages({
            'string.min': 'Username must be at least 5 characters long',
        }),
        email: joi.string().email().required(),
    });    
    
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

// --- ROUTES ---

// Rota usando express-validator
app.post('/user', validationInput, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Corrigido: era errors.array()[0].msg e faltava fechar parênteses
        return res.status(400).json({ errors: errors.array()[0].msg });
    }

    res.status(200).json({ message: 'User data is valid via express-validator!' });
});

// Rota usando Joi
app.post('/userjoi', validateinputjoi, (req, res) => {
    res.json({ message: 'User data is valid using Joi!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});