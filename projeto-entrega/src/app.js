const express = require('express');
const app = express();
const postsRoutes = require('./routes/posts-routes')


app.use(express.json());
app.use("/", postsRoutes);

module.exports = app;