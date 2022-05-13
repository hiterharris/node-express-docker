const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.json('API up and running');
});

module.exports = server;