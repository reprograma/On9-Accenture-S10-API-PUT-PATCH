const express = require('express');
const app = express();
const postagens = require('./routes/posts-routes');

app.use(express.json());

app.use('/', postagens);

module.exports = app;