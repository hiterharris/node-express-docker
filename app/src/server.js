require('dotenv').config();

const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.json(`API up and running on PORT: ${process.env.PORT}`);
});

module.exports = server;