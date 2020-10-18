const express = require('express');
const blog = require('./routes/blog-routes');
const app = express();

app.use(express.json());

app.use('/', blog);

module.exports = app;
