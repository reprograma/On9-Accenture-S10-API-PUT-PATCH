const express = require('express');
const routers = express.Router();
const blogRepController = require('../controllers/blogRepControllers')

routers.get('/all', blogRepController.getAll)
routers.post('/blog', blogRepController.criarPost)
routers.put('/post/:id', blogRepController.atualPut)
routers.patch('/post/:id', blogRepController.elementoPatch)
routers.delete('/post/:id', blogRepController.deletePost)

module.exports = routers